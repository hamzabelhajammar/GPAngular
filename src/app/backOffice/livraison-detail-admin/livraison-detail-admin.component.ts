import {Component, OnInit} from '@angular/core';
import {Livraison} from "../../models/Livraison";
import {ActivatedRoute} from "@angular/router";
import {LivraisonService} from "../../services/livraison.service";
import jsPDF from "jspdf";

@Component({
  selector: 'app-livraison-detail-admin',
  templateUrl: './livraison-detail-admin.component.html',
  styleUrls: ['./livraison-detail-admin.component.css']
})
export class LivraisonDetailAdminComponent implements OnInit{
  livraison: Livraison | undefined;
  constructor(private route:ActivatedRoute, private livraisonService: LivraisonService) {
  }
  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.livraisonService.getLivById(+id).subscribe((livraison) => {
        this.livraison = livraison;
      });
    }
  }
  downloadPDF(): void {
    const doc = new jsPDF();
    const livraison = this.livraison;

    if (livraison) {
      const livraisonDetails =
        `Livraison number: ${livraison.id}
       date_arrive: ${livraison.date_arrive}
       date_sortie: ${livraison.date_sortie}
       Etat: ${livraison.etat}
       Validation: ${livraison.validation}
       Region: ${livraison.region}`;
      doc.text(livraisonDetails, 10, 10);
      doc.save(`livraison_${livraison.id}.pdf`);

    }
  }
}
