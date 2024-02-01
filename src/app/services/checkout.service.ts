import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class CheckoutService {

  constructor(private http: HttpClient) { }

  checkout(commandeId: number) {
    const url = `http://localhost:8075/checkoutt?id=${commandeId}`;
    return this.http.get(url);
  }
}
