export class Categorie{
  id!:number;
  type!:String;
  subCategories!: Categorie[];
  produits: any;
}
