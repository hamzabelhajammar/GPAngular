import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Offer} from "../models/Offer";
import {Observable, switchMap} from "rxjs";
import {OfferStatus} from "../models/OfferStatus";

@Injectable({
  providedIn: 'root'
})
export class OfferService {

  private baseUrl = 'http://localhost:8075/offer';

  constructor(private http: HttpClient) { }

  // Create a new offer
  addOffer(offer: Offer): Observable<Offer> {
    offer.status = 'PENDING' as OfferStatus;
    return this.http.post<Offer>(`${this.baseUrl}/add`, offer);
  }

  // Get all offers
  getAllOffers(): Observable<Offer[]> {
    return this.http.get<Offer[]>(`${this.baseUrl}/all`);
  }


  // Get a single offer by ID
  getOfferById(id: number): Observable<Offer> {
    return this.http.get<Offer>(`${this.baseUrl}/${id}`);
  }


  updateOfferStatus(id: number, status: OfferStatus): Observable<Offer> {
    return this.getOfferById(id).pipe(
      switchMap((offer: Offer) => {
        offer.status = status;
        return this.http.put<Offer>(`${this.baseUrl}/update/${id}`, offer);
      })
    );
  }

  deleteOffer(id: number): Observable<any> {
    return this.http.delete<any>(`${this.baseUrl}/delete/${id}`);
  }

  getBestOffer(): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}/best`);
  }
}
