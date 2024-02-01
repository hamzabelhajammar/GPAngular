import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {BadWord} from "../models/bad-word";

@Injectable({
  providedIn: 'root'
})
export class BadwordsServiceService {
  private addUrl = 'http://localhost:8075/badwords/add-badword';

  constructor(private http: HttpClient) { }

  addBadWords(badWord: BadWord): Observable<BadWord> {
    return this.http.post<BadWord>(this.addUrl, badWord);
  }

}
