import { Component } from '@angular/core';
import {Livraison} from "../../models/Livraison";
import {User} from "../../models/User";
import {LivraisonService} from "../../services/livraison.service";

@Component({
  selector: 'app-assign-livreur-admin',
  templateUrl: './assign-livreur-admin.component.html',
  styleUrls: ['./assign-livreur-admin.component.css']
})
export class AssignLivreurAdminComponent {
  livraison: Livraison = new Livraison();
  region: string = '';
  id!:number;
  user!: User;

  constructor(private livraisonService: LivraisonService) { }

  assignerLivreur(): void {
    this.livraisonService.AssignLivreur(this.region, this.id)
      .subscribe((user) => {
        console.log(user); // Vous pouvez gérer la réponse comme vous le souhaitez ici
      }, error => {
        console.log(error); // Vous pouvez gérer les erreurs ici
      });
  }

}
