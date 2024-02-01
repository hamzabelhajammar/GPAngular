import { Component } from '@angular/core';
import {Offer} from "../../models/Offer";
import {OfferStatus} from "../../models/OfferStatus";
import {OfferService} from "../../services/offer.service";
import {Router} from "@angular/router";
import {UserService} from "../../services/user.service";
import {User} from "../../models/User";

@Component({
  selector: 'app-add-offer',
  templateUrl: './add-offer.component.html',
  styleUrls: ['./add-offer.component.css']
})
export class AddOfferComponent {
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
}
