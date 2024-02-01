import { Component } from '@angular/core';
import {Livraison} from "../../models/Livraison";
import {CommandeService} from "../../services/commande.service";

@Component({
  selector: 'app-assign-livraison-admin',
  templateUrl: './assign-livraison-admin.component.html',
  styleUrls: ['./assign-livraison-admin.component.css']
})
export class AssignLivraisonAdminComponent {
  livraison: Livraison = new Livraison();
  region: string = '';

  constructor(private commandeService: CommandeService) { }

  assignerLivraison(): void {
    this.commandeService.addAssignLivraison(this.livraison, this.region)
      .subscribe((liv: Livraison) => {
        console.log(liv); // Vous pouvez gérer la réponse comme vous le souhaitez ici
      }, error => {
        console.log(error); // Vous pouvez gérer les erreurs ici
      });
  }

}
