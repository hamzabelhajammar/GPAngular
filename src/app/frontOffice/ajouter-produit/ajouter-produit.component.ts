import {Component, OnInit} from '@angular/core';
import {ProductStatus, Produit} from "../../models/produit";
import {Categorie} from "../../models/categorie";
import {ProduitService} from "../../services/produit.service";
import {Router} from "@angular/router";
import {CategorieService} from "../../services/categorie.service";
import {Stock} from "../../models/stock";
import {StockService} from "../../services/stock.service";
import {NgForm} from "@angular/forms";
import {ProduitInt} from "../../models/ProduitInt";
import {Boutique} from "../../models/boutique";
import {BoutiqueServiceService} from "../../services/boutique-service.service";


@Component({
  selector: 'app-ajouter-produit',
  templateUrl: './ajouter-produit.component.html',
  styleUrls: ['./ajouter-produit.component.css']
})
export class AjouterProduitComponent implements OnInit{
  P:Produit=new Produit();
  //P!:any;


  categories: Categorie[] = [];
  stocks:Stock[]=[];
  boutiques:Boutique[]=[];
  request!: string;
  file!: File;
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
  constructor(private ps:ProduitService, private R:Router,private cs:CategorieService,private  ss:StockService,private bs:BoutiqueServiceService) {
  }
  ngOnInit() {
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
  // onSubmit() {
  //   console.log(this.P);
  //   // Enregistrer le produit dans votre backend ou autre traitement
  // }
  getCategories(): void {
    this.ps.afficherCatgories()
      .subscribe(categories => this.categories = categories);
  }
  ajouterProduit(){


    this.ps.ajouterProduit2(this.P).subscribe(
      response => {
        console.log(response);
        this.successMessage = 'Le produit a été créé avec succès !';
        // Si la requête a réussi, vous pouvez effectuer des actions supplémentaires ici, telles que rediriger l'utilisateur vers une autre page
      },
      error => {

        console.error(error);
        // Si la requête a échoué, vous pouvez afficher un message d'erreur à l'utilisateur ici
      }
    );



 }

  onRegister(form: NgForm) {

    const formData = new FormData();

    formData.append('request', this.request);
    formData.append('file', this.file);
    const formValue=form.value;
   // console.log(form.value);

    let p: ProduitInt = {

      name: formValue.name,

      description: formValue.description,
      price: formValue.price,
      color: formValue.color,
      status: formValue.productStatus,
      vendorMail: formValue. vendorMail,
      categorie: formValue.categorie,
      stock: formValue.stock,
      boutique :formValue.boutique

    };
    console.log(p.name);
    console.log("b  "+p.boutique);
    console.log("c  "+p.categorie);
console.log(p.stock);
    console.log("alo"+p);
    this.ps.ajouterProduit(p,this.file)
      .subscribe((response: any) => {
        console.log(response);
      });
  }

  onFileSelected(event: any) {
    this.file = event.target.files[0];
  }
}
