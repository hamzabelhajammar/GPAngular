import { Component } from '@angular/core';
import {Commande} from "../../models/Commande";
import {CommandeService} from "../../services/commande.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-add-commande',
  templateUrl: './add-commande.component.html',
  styleUrls: ['./add-commande.component.css']
})
export class AddCommandeComponent {
  commande: Commande=new Commande();
  region: string[] = ['tunis', 'nabeul', 'zaghwen'];
  constructor(private commandeService: CommandeService, private R: Router) {
  }

  add() {
    this.commandeService.add(this.commande).subscribe(
      response => {
        console.log(response);
        this.R.navigate(['/commande/aff']); // Redirection vers la page d'affichage des commandes
      },
      error => {
        console.error(error);

      }
    );
  }

}
