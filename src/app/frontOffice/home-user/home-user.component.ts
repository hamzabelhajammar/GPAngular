import {Component, OnInit} from '@angular/core';
import {UserService} from "../../services/user.service";
import * as QRCode from 'qrcode';
import {ProductStatus, Produit} from "../../models/produit";
import {Categorie} from "../../models/categorie";
import {Stock} from "../../models/stock";
import {Boutique} from "../../models/boutique";
import {ProduitService} from "../../services/produit.service";
import {Router} from "@angular/router";
import {map, Observable} from "rxjs";

@Component({
  selector: 'app-home-user',
  templateUrl: './home-user.component.html',
  styleUrls: ['./home-user.component.css']
})
export class HomeUserComponent implements OnInit{
  p!:any;
  produits!:Produit[];
  isUpdate:boolean=false;
  pr:Produit=new Produit();
  date: Date = new Date();
  texte!: string;
  selectedColor!: string;
  textes = [
    { date: new Date('2023-09-17'), texte: 'le jour international de la pauvrete' },
    { date: new Date('2023-03-8'), texte: 'le jour international de la femme ' },
    { date: new Date('2023-06-15'), texte: 'la journée mondiale contre la faim' },
    // ...
  ];
  query!: string;

  P:Produit=new Produit();
  categories: Categorie[] = [];
  stocks:Stock[]=[];
  boutiques:Boutique[]=[];
  searchTerm: string = '';

  successMessage: string = '';
  productStatusOptions=[
    {value: ProductStatus.ATTENTE_CONFIRMATION, label: 'ATTENTE_CONFIRMATION'},
    {value: ProductStatus.ATTENTE_LIVRAISON, label: 'ATTENTE_LIVRAISON'},
    {value: ProductStatus.DEMANDE_REMBOURSSEMENT, label: 'DEMANDE_REMBOURSSEMENT'},
    {value: ProductStatus.ENVOYE, label: 'ENVOYE'},
    {value: ProductStatus.DEMANDE_REMPLACEMENT, label: 'DEMANDE_REMPLACEMENT'},
    {value: ProductStatus.REMBOURSE, label: 'REMBOURSE'},
    {value: ProductStatus.RETOURNE, label: 'RETOURNE'}


  ]


  sortField = 'price'; // Champ de tri par défaut
  sortOrder = 'asc'; // Ordre de tri par défaut

  constructor(private ps:ProduitService, private R: Router ) {
  }
  showModal =false;
  ngOnInit():void {
    //this.date = new Date();

// Check if date property is defined before calling its methods


    this.ps.afficherProduits().subscribe(p => this.p = p);

    this.closePopupForUpdate();

    if (this.date && typeof this.date.getDate() === 'function') {
      // Utilisez la méthode getTime() sur la date
    } else {
      console.error('La propriété date est invalide');
    }

  }

  search() {
    this.ps.searchProducts(this.query)
      .subscribe((produits: Produit[]) => {
        this.p = produits;
      });
  }

  afficherTexte() {
    const dateSelectionnee = new Date(this.date);
    dateSelectionnee.setHours(0, 0, 0, 0); // Réinitialiser les heures, minutes, secondes et millisecondes

    const texteTrouve = this.textes.find(t => t.date.getDate() === dateSelectionnee.getDate());

    if (texteTrouve) {
      this.texte = texteTrouve.texte;
    } else {
      this.texte = 'Aucun texte trouvé pour la date sélectionnée';
    }

  }
  openPopupForUpdate(prodtoupdate:any) {
    this.p=prodtoupdate
    this.showModal = true;
    this.isUpdate=true

  }
  closePopupForUpdate() {
    this.showModal = false;
  }
  openPopupForCreate() {
    this.isUpdate=false
    this.showModal = true;
  }
  closePopupForCreate() {
    this.showModal = false;
  }
  showDetails(id:number){
    this.R.navigate(['user/DetailP', id]);
  }
  getP(): void{
    this.ps.afficherProduits().subscribe(X => this.p=X);
    location.reload();
  }
  public deleteP(id: number) {
    console.log(id);
    if (confirm('Are you sure you want to delete ')) {

      this.ps.supprimerProduit(id).subscribe(() => {
        console.log('Product deleted successfully!');
        this.getP();
      });
    }
  }
  // public modifierP(id: number) {
  //   console.log(id);
  //   if (confirm('Are you sure you want to delete ')) {
  //     this.ps.modifierProduit(id,this.pr).subscribe(() => {
  //       console.log('Product updated successfully!');
  //       this.getP();
  //     });
  //   }
  // }

  onSubmit() {
    console.log("entered in submit")
    this.ps.ajouterProduit2(this.pr)
      .subscribe(X => {
        console.log('produit ajoutée avec succès: ');
        // réinitialiser le formulaire après l'ajout de la boutique

        this.pr = new Produit();
        this.getP()
      }, error => {
        console.error('Erreur lors de l\'ajout  : ', error);
      });

    this.showModal = false;


  }
  getSimilarProducts(product: Produit): Observable<Produit[]> {
    // let similarProducts: Produit[] = [];

    // Récupérer tous les produits ayant la même catégorie
    return this.ps.getSimilarProducts(product)
      .pipe(
        map((result: any[]) => {
          // Filtre les produits en retirant celui en entrée et ceux qui ont déjà été ajoutés
          return result.filter(p => p.name !== product.name);
        })
      );



  }
  sortProducts(order: string) {
    this.sortOrder = order;
    if (order === 'asc') {
      this.sortOrder = 'asc';
    } else {
      this.sortOrder = 'desc';
    }
  }


}
