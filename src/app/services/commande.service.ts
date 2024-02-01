import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Commande} from "../models/Commande";
import {Observable} from "rxjs";
import {Livraison} from "../models/Livraison";

@Injectable({
  providedIn: 'root'
})
export class CommandeService {

  constructor(private http: HttpClient) { }
  private URL='http://localhost:8075/commande-lignecommande';
  private URL1 = 'http://localhost:8075/commande-lignecommande/all-orders';

  private URL2='http://localhost:8075/checkoutt';



  add(commande: Commande) {
    return this.http.post<Commande>(`${this.URL}/add-order`, commande);
  }
  getAllcommande(): Observable<Commande[]> {
    return this.http.get<Commande[]>(this.URL1);
  }
  deleteCommande(id: number): Observable<any> {
    return this.http.delete(`${this.URL}/delete-order/${id}`, { responseType: 'text' });
  }
  addAssignLivraison(livraison: Livraison, region: string): Observable<Livraison> {
    const url = `http://localhost:8075/commande-lignecommande/add-assign-liv/${region}`;
    return this.http.put<Livraison>(url, livraison);
  }
}
