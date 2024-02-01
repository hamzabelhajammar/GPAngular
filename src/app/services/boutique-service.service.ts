import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Boutique} from "../models/boutique";

@Injectable({
  providedIn: 'root'
})
export class BoutiqueServiceService {

  private apiUrl = 'http://localhost:8075/boutique/showall-boutiques'; // endpoint de votre projet Spring pour récupérer toutes les boutiques
  private addUrl = 'http://localhost:8075/boutique/add-boutique';
  private delUrl = 'http://localhost:8075/boutique';


  constructor(private http: HttpClient) { }
  getBoutiques(): Observable<Boutique[]> {
    return this.http.get<Boutique[]>(this.apiUrl);
  }
  addBoutique(boutique: Boutique): Observable<Boutique> {
    return this.http.post<Boutique>(this.addUrl, boutique);
  }

  deleteBoutique(id: number): Observable<any> {
    console.log("idddd",id)
    return this.http.delete(`${this.delUrl}/delete-boutique/${id}`);
  }

  searchBoutiques(address: string): Observable<Boutique[]> {
    return this.http.get<Boutique[]>(`${this.delUrl}/search-by-address/${address}`);
  }

  sortBoutiques(): Observable<Boutique[]> {
    return this.http.get<Boutique[]>(`${this.delUrl}/sort`);
  }




}
