import { Component } from '@angular/core';
import { Router } from '@angular/router';
import {UserService} from "../../services/user.service";
import {getMessaging, getToken} from "firebase/messaging";
import {firebaseConfig} from "../../../environments/firebaseEnv";



interface User {
  roles: string[];
  jti: string;
  sub: string;
  iat: number;
  exp: number;
}

interface AuthenticationResponse {
  token: string;
}

@Component({
  selector: 'app-authentication-user',
  templateUrl: './authentication-user.component.html',
  styleUrls: ['./authentication-user.component.css']
})
export class AuthenticationUserComponent {
  email!: string;
  password!: string;
  role!: string;

  constructor(
    private userService: UserService,
    private router: Router) {}
  requestPermission() {
    const messaging = getMessaging();
    const token = getToken(messaging,
      { vapidKey: firebaseConfig.firebaseConfig.vapidKey}).then(
      (currentToken) => {

          return currentToken ;
      }).catch((err) => {
      console.log('An error occurred while retrieving token. ', err);
      return null
    });
    return token;
  }
  async saveToken (email:string){
    const token = await this.requestPermission();

    const result = await this.userService.saveToken(token as string,email).toPromise();
  }
  onSubmit() {

    const request = { email: this.email, password: this.password };
    this.userService.authenticate(request).subscribe(
      (response: AuthenticationResponse) => {
        const user: User = JSON.parse(atob(response.token.split('.')[1])); // décoder le token JWT pour obtenir les données utilisateur
        console.log(user);
        this.saveToken(user.jti);



        console.log(response.token);
        // Enregistrer le token JWT dans le localStorage
        localStorage.setItem('token', response.token);

        // Rediriger l'utilisateur en fonction de son rôle
        localStorage.setItem('tokenEmail', user.jti);
        console.log(user);
        const role = user.roles[0];
        console.log(role);

        if (role === 'CHEF') {
          this.router.navigate(['user/vendor']);
        } else if (role === 'ADMIN') {
          this.router.navigate(['admin']);
        } else if (role === 'EMPLOYEE') {
          this.router.navigate(['user/provider']);
        }
        else {
          console.error('Unknown role:', role);
        }
      },
      error => {
        alert("Please check your account, password, or email.")
        console.error(error);
      }
    );
  }


  redirectToForgot() {
    console.log("ok");
    this.router.navigate(['user/forgot-password']);
  }
}
