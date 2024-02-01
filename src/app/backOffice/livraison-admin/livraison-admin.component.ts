import { Component } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-livraison-admin',
  templateUrl: './livraison-admin.component.html',
  styleUrls: ['./livraison-admin.component.css']
})
export class LivraisonAdminComponent {
  constructor(private router: Router) {
  }
  redirectToAdd() {
    console.log("ok");
    this.router.navigate(['livraison/add']);
  }
  redirectToAff() {
    console.log("ok");
    this.router.navigate(['livraison/aff']);
  }
  redirectToAssignLiv() {
    console.log("ok");
    this.router.navigate(['livraison/assignLiv']);
  }
  redirectToAssign() {
    console.log("ok");
    this.router.navigate(['livraison/assign']);
  }

}
