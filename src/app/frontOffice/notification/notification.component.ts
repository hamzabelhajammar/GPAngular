import { Component, OnInit } from '@angular/core';
import { AngularFireMessaging } from '@angular/fire/compat/messaging';

@Component({
  selector: 'app-notification',
  template: `
    <button (click)="requestNotificationPermission()">Request Notification Permission</button>
  `,
})
export class NotificationComponent implements OnInit {

  constructor(private afMessaging: AngularFireMessaging) {}
  requestNotificationPermission() {
    if ('Notification' in window) {
      Notification.requestPermission().then(permission => {
        if (permission === 'granted') {
          console.log('Notification permission granted');
        } else if (permission === 'denied') {
          console.log('Notification permission denied');
        }
      });
    }
  }
  ngOnInit() {
    this.afMessaging.requestToken.subscribe(
      (token) => {
        console.log('FCM Token:', token);
        // Send this token to your server for storing and sending notifications
      },
      (error) => {
        console.error('Unable to get permission to notify.', error);
      }
    );
  }
}
