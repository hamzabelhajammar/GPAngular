import {Categorie} from "./categorie";
import {Stock} from "./stock";
import {Boutique} from "./boutique";

export enum ProductStatus{
  ATTENTE_CONFIRMATION,
  ATTENTE_LIVRAISON,
  ENVOYE,
  DEMANDE_REMBOURSSEMENT,
  DEMANDE_REMPLACEMENT,
  RETOURNE,
  REMBOURSE
}
export interface  ProduitInt{
  name:string;
  description:string;
  price:number ;
  color:string;
  status:ProductStatus;
  vendorMail:String;
  categorie: Categorie;
  stock: Stock;
  boutique: Boutique;

}
