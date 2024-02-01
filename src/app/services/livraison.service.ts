import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Livraison} from "../models/Livraison";
import {Observable} from "rxjs";
import {User} from "../models/User";

@Injectable({
  providedIn: 'root'
})
export class LivraisonService {

  constructor(private http: HttpClient) { }
  private URL='http://localhost:8075/livraison';
  private URL1 = 'http://localhost:8075/livraison/retrieve-all-Liv';

  add(livraison: Livraison) {
    return this.http.post<Livraison>(`${this.URL}/add-Livraison`, livraison);
  }
  update(livraison: Livraison) {
    return this.http.put<Livraison>(`${this.URL}/update-Livraison`, livraison);
  }
  getAllliv(): Observable<Livraison[]> {
    return this.http.get<Livraison[]>(this.URL1);
  }
  deleteLiv(id: number): Observable<any> {
    return this.http.delete(`${this.URL}/remove-livraison/${id}`, { responseType: 'text' });
  }

  affecterLivreur(idL:number, idU:number) {
    return this.http.put<Livraison>(`http://localhost:8075/livraison/assignLivreurToLivr/${idL}/${idU}`,{ responseType: 'text' });
  }
  searchLivNotAffected(region: string): Observable<Livraison[]> {
    return this.http.get<Livraison[]>(`${this.URL}/retrieve-Liv-notaffected/${region}`);
  }
  getLivById(id:number):Observable<Livraison>{
    return this.http.get<Livraison>(`${this.URL}/retrieve-Liv/${id}`);
  }

  AssignLivreur(region: string, id:number): Observable<User> {
    const url = `http://localhost:8075/livraison/add-assign-liv/${region}/${id}`;
    return this.http.put<User>(url, { responseType: 'text' });
  }
}
