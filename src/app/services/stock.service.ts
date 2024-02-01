import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Stock} from "../models/stock";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class StockService {
  private URL = 'http://localhost:8075/stock'
  constructor(private http: HttpClient) { }
  ajouterStock(S:Stock){
    return this.http.post<Stock>(`${this.URL}/ajouter-stock`, S);
  }
  getAllS(): Observable<Stock[]> {
    return this.http.get<Stock[]>(`${this.URL}/afficher-stock`);
  }
  deleteS(id: number): Observable<any> {
    return this.http.delete(`${this.URL}/supprimer-stock/${id}`, { responseType: 'text' });
  }
}
