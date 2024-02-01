import { Component } from '@angular/core';
import {UserService} from "../../services/user.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-send-code-user',
  templateUrl: './send-code-user.component.html',
  styleUrls: ['./send-code-user.component.css']
})
export class SendCodeUserComponent {
  email!: string;
  code!: number;
  message!: string;
  countdown: number = 60;
  codeSent: boolean = false;
  codeFalse: boolean = false ;
  timerId: any;

  constructor(private userService: UserService,private router: Router) {}

  sendCode() {
    this.userService.sendCode(this.email)
      .subscribe(
        (response) => {
          if (response==true){
            console.log(response);
            this.message = 'Code sent successfully';
            this.codeSent = true;
            clearInterval(this.timerId);
            this.startCountdown();
          }
          else {
            console.log(response);
            this.message = 'Failed to send code';
            this.codeSent = false;
          }

        },
        (error) => {
          console.error(error);
          this.message = 'Failed to send code';
        }
      );

  }
  onVerify() {
    this.userService.verifyCode(this.email, this.code)
      .subscribe(
        (response) => {
          console.log(response);
          if (response==true){
            this.message = 'Your account has been successfully verified.';
            this.router.navigate(['user/authenticate']);
            this.codeFalse=false;
          }
          else {
            this.codeFalse=true;
          }


        },
        (error) => {
          console.error(error);
          this.message = 'Unfortunately, we cannot verify your account at this time.';
        }
      );
  }
  startCountdown() {
    this.countdown=60;
    this.timerId = setInterval(() => {
      if (this.countdown > 0) {
        this.countdown--;
      }
    }, 1000);
  }

}
