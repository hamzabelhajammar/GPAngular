import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Tender} from "../models/Tender";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class TenderService {

  private baseUrl = 'http://localhost:8075/tender';

  constructor(private http: HttpClient) { }

  // Create a new tender
  addTender(tender: Tender): Observable<Tender> {
    console.log(tender)
    return this.http.post<Tender>("http://localhost:8075/tender/add", tender);
  }

  // Get all tenders
  getAllTenders(): Observable<Tender[]> {
    return this.http.get<Tender[]>(`${this.baseUrl}/all`);
  }


  // Get a single tender by ID
  getTenderById(id: number): Observable<Tender> {
    return this.http.get<Tender>(`${this.baseUrl}/${id}`);
  }


  // Update an existing tender
  updateTender(id: number, tender: Tender): Observable<Tender> {
    return this.http.put<Tender>(`${this.baseUrl}/update/${id}`, tender);
  }


  // Delete a tender
  deleteTender(id: number): Observable<any> {
    const url = `${this.baseUrl}/delete/${id}`;
    return this.http.delete<void>(url);
  }
}
