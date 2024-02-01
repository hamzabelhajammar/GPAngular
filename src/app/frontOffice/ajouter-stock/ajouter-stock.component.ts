import {Component, OnInit} from '@angular/core';
import {Stock} from "../../models/stock";
import {StockService} from "../../services/stock.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-ajouter-stock',
  templateUrl: './ajouter-stock.component.html',
  styleUrls: ['./ajouter-stock.component.css']
})
export class AjouterStockComponent implements OnInit {
  S: Stock = new Stock();
  successMessage: string = '';

  constructor(private ss: StockService, private R: Router) {
  }

  ngOnInit() {

  }

  ajouterStock() {

    //this.S.type = F.controls['type'].value;

    this.ss.ajouterStock(this.S).subscribe(
      response => {
        console.log(response);
        this.successMessage = 'Le compte a été créé avec succès !';
        // Si la requête a réussi, vous pouvez effectuer des actions supplémentaires ici, telles que rediriger l'utilisateur vers une autre page
      },
      error => {

        console.error(error);
        // Si la requête a échoué, vous pouvez afficher un message d'erreur à l'utilisateur ici
      }
    );

  }
}
