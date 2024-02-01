import {Component, OnInit} from '@angular/core';
import {ProductStatus, Produit} from "../../models/produit";
import {ActivatedRoute} from "@angular/router";
import {ProduitService} from "../../services/produit.service";
import {Categorie} from "../../models/categorie";
import {Stock} from "../../models/stock";
import {CategorieService} from "../../services/categorie.service";
import {StockService} from "../../services/stock.service";
import {Boutique} from "../../models/boutique";
import {BoutiqueServiceService} from "../../services/boutique-service.service";

@Component({
  selector: 'app-detail-produit',
  templateUrl: './detail-produit.component.html',
  styleUrls: ['./detail-produit.component.css']
})
export class DetailProduitComponent implements OnInit{

  id!:number;

  P:Produit=new Produit();
  categories: Categorie[] = [];
  stocks:Stock[]=[];
  boutiques:Boutique[]=[];

  successMessage: string = '';
  //productStatusOptions!:ProductStatus;
  productStatusOptions=[
    {value: ProductStatus.ATTENTE_CONFIRMATION, label: 'ATTENTE_CONFIRMATION'},
    {value: ProductStatus.ATTENTE_LIVRAISON, label: 'ATTENTE_LIVRAISON'},
    {value: ProductStatus.DEMANDE_REMBOURSSEMENT, label: 'DEMANDE_REMBOURSSEMENT'},
    {value: ProductStatus.ENVOYE, label: 'ENVOYE'},
    {value: ProductStatus.DEMANDE_REMPLACEMENT, label: 'DEMANDE_REMPLACEMENT'},
    {value: ProductStatus.REMBOURSE, label: 'REMBOURSE'},
    {value: ProductStatus.RETOURNE, label: 'RETOURNE'}


  ]
  constructor(private actR:ActivatedRoute, private ps: ProduitService,private cs:CategorieService,private  ss:StockService,private bs:BoutiqueServiceService){}

  ngOnInit(): void {
    this.id=this.actR.snapshot.params['id1'];

    this.ps.getProductById(this.id).subscribe(data => this.P = data);

    this.cs.afficherCategories().subscribe((data:Categorie[]) => {
      this.categories = data;
    });
    this.bs.getBoutiques().subscribe((data:Boutique[]) => {
      this.boutiques = data;
    });
    this.ss.getAllS().subscribe((data:Stock[]) => {
      this.stocks = data;
    });
  }

  updateProduct(){
    alert('test');
  }
  public modifierP() {
    if (confirm('Are you sure you want to update ')) {
      this.ps.modifierProduit(this.P).subscribe(() => {
        console.log('Product updated successfully!');
        //this.getP();
      });
    }
  }
}
