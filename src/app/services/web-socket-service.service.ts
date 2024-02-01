import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {webSocket} from "rxjs/webSocket";

@Injectable({
  providedIn: 'root'
})
export class WebSocketServiceService {

  constructor() { }
  private subject = webSocket('ws://localhost:8075/notification/message');

  sendMessage(message: string): void {
    this.subject.next({ messageContent: message });
  }

  getMessage(): Observable<any> {
    return this.subject.asObservable();
  }
}
