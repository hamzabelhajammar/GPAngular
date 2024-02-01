import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Categorie} from "../models/categorie";

@Injectable({
  providedIn: 'root'
})
export class CategorieService {

  private URL = 'http://localhost:8075/categorie'
  constructor(private http: HttpClient) { }

  ajouterCategorie(C:Categorie){
    return this.http.post<Categorie>(`${this.URL}/ajouter-Categorie`, C);
  }
  afficherCategories(){
    return this.http.get<Categorie[]>(`${this.URL}/afficher-Categorie`);
  }

  addCategoryWithSubCategories(C:Categorie) {
    const headers = new HttpHeaders().set('Content-Type', 'application/json');
    return this.http.post<Categorie>(`${this.URL}`, C, { headers });
  }
}
