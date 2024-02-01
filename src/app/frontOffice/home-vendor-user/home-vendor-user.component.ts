import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {HttpClient} from "@angular/common/http";
import {UserService} from "../../services/user.service";
import {User} from "../../models/User";

@Component({
  selector: 'app-home-vendor-user',
  templateUrl: './home-vendor-user.component.html',
  styleUrls: ['./home-vendor-user.component.css']
})
export class HomeVendorUserComponent implements  OnInit{
  constructor(private userService: UserService,private router: Router) {
  }
  userConnecter : User = new User;

  ngOnInit(): void {
    this.setUserConnecter();
  }
  async setUserConnecter(){
    var emailUserConn = localStorage.getItem("tokenEmail");
    if (emailUserConn){
      const userConnecter =  await this.userService.getUserByEmail(emailUserConn).toPromise();
      this.userConnecter = userConnecter as User;
    }
  }

  redirectToAddProduct() {
    console.log("ok");
    this.router.navigate(['produit/add']);
  }
  redirectToAddStock() {
    console.log("ok");
    this.router.navigate(['stock/add']);
  }
  redirectToAddCategorie() {
    console.log("ok");
    this.router.navigate(['categorie/add']);
  }
  redirectToManageShop() {
    console.log("ok");
    this.router.navigate(['boutique/show']);
  }


}
