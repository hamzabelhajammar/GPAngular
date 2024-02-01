import { Component } from '@angular/core';
import {Livraison} from "../../models/Livraison";
import {LivraisonService} from "../../services/livraison.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-add-livraison-admin',
  templateUrl: './add-livraison-admin.component.html',
  styleUrls: ['./add-livraison-admin.component.css']
})
export class AddLivraisonAdminComponent {
  livraison: Livraison = new Livraison() ;
  region: string[] = ['tunis', 'nabeul', 'zaghwen'];
  //etat: string[] = ['En_attente', 'Affecte_livreur', 'Livrer'];
  constructor(private livraisonService: LivraisonService, private R: Router) {
  }

  add() {
    this.livraisonService.add(this.livraison).subscribe(
      response => {
        console.log(response);
      },
      error => {
        console.error(error);

      }
    );
  }

}
