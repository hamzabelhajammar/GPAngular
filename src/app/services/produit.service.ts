import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Produit} from "../models/produit";
import {Categorie} from "../models/categorie";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ProduitService {

  private URL = 'http://localhost:8075/Produit'
  private URLC='http://localhost:8075/categorie'

  constructor(private http: HttpClient) {

  }
  afficherProduits(){
    return this.http.get<any>(`${this.URL}/afficherProduits`);
  }

  ajouterProduit2(P:Produit){
    return this.http.post<Produit>(`${this.URL}/ajouterP`, P);
  }

  addProduitWithCategorie(produit: Produit, categorie: Categorie): Observable<Produit> {
    produit.categorie = categorie;
    return this.http.post<Produit>(`${this.URL}/ajouterProduit`, produit);
  }
  modifierProduit(P:Produit){
    return this.http.put<Produit>(`${this.URL}/modifierProduit/`,P);

  }
  supprimerProduit(id:number){
    return this.http.delete<Produit>(`${this.URL}/supprimerProduit/${id}`);
  }


  afficherCatgories(){
    return this.http.get<Categorie[]>('http://localhost:8075/categorie/afficher-Categorie');
  }
  getProductById(id: number){
    //return this.http.get(this.URL+`/${id}`);
    return this.http.get<Produit>(`${this.URL}/afficherProduit/${id}`);

  }
  searchProducts(query: string): Observable<Produit[]> {
    const url = `${this.URL}/search?q=${query}`;
    return this.http.get<Produit[]>(url);
  }


  public ajouterProduit(request: any, file: File) {
    const formData: FormData = new FormData();
    let JsonConvert=  JSON.stringify(request) ;
    formData.append('request', JsonConvert);
    formData.append('file', file);
    const httpHeaders = new HttpHeaders();
    httpHeaders.set('Content-Type', 'multipart/form-data');
    return this.http.post<any>(`http://localhost:8075/Produit/ajouterProduit`, formData, { headers: httpHeaders });
  }

  // getCategories(): Observable<Categorie[]> {
  //   const url = `${this.URLC}/afficher-Categorie`;
  //   return this.http.get<Categorie[]>(url);
  // }
  getSimilarProducts(product: Produit) {

    return this.http.get<Produit[]>("http://localhost:8075/Produit");
  }

}
