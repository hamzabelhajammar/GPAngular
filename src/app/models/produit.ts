import {Categorie} from "./categorie";
import {Boutique} from "./boutique";
import {Stock} from "./stock";

export enum ProductStatus{
  ATTENTE_CONFIRMATION,
  ATTENTE_LIVRAISON,
  ENVOYE,
  DEMANDE_REMBOURSSEMENT,
  DEMANDE_REMPLACEMENT,
  RETOURNE,
  REMBOURSE
}
export class  Produit{
  id!:number;
  name!:string;
  image!:string;
  description!:string;
  price!:number ;
  color!:string;
  status!:ProductStatus;
  vendorMail!:String;
  categorie:Categorie= new Categorie();
  stock:Stock=new Stock();
  boutique:Boutique=new Boutique();

}
