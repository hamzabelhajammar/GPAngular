import {Component, OnInit} from '@angular/core';
import {UserService} from "../../services/user.service";
import {NgForm} from "@angular/forms";
import {Router} from "@angular/router";

@Component({
  selector: 'app-register-vendor-admin',
  templateUrl: './register-vendor-admin.component.html',
  styleUrls: ['./register-vendor-admin.component.css']
})
export class RegisterVendorAdminComponent implements OnInit{
  ngOnInit(): void {
  }
  registerRequest: any = {};
  successMessage: string = '';
  roles: string[] = ['ADMIN', 'EMPLOYEE', 'CHEF'];
  defaultRole:string='EMPLOYEE';
  isLoading: boolean = false;
  constructor(private userService: UserService,private router: Router) { }

  register(F:NgForm){
    this.registerRequest.firstname=F.controls['firstname'].value;
    this.registerRequest.lastname=F.controls['lastname'].value;
    this.registerRequest.password=F.controls['password'].value;
    this.registerRequest.email=F.controls['email'].value;
    this.registerRequest.role = this.defaultRole;
    this.isLoading = true;
    this.userService.register(this.registerRequest).subscribe(
      response => {
        this.isLoading = false;
        this.successMessage = 'Le compte a été créé avec succès !';
        alert('The registration of the user was successful.');
        this.router.navigate(['admin/pag']);
        console.log(this.successMessage);
      },
      error => {
        this.isLoading = false;
        console.error(error);
      }
    );
  }

}
