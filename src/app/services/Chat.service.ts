import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
// @ts-ignore
import { Chat } from './chat.model';
@Injectable({
  providedIn: 'root'
})
export class ChatService {

  readonly API_URL = 'http://localhost:8075/chat';


  constructor(private httpClient: HttpClient) { }
  sendMessage (chat: Chat): Observable<Chat> {
    const url = `${this.API_URL}/sendMessage`;
    return this.httpClient.post<Chat>(url, chat);
  }
  getAllMSG (chatBoxId:number,idCon : number): Observable<Chat> {
    const url = `${this.API_URL}/getAllMSG/${chatBoxId}/${idCon}`;
    return this.httpClient.get<Chat>(url);
  }

}
