import { Component } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-paiement',
  templateUrl: './paiement.component.html',
  styleUrls: ['./paiement.component.css']
})
export class PaiementComponent {
  amountToPay: number = 100;
  constructor(private http: HttpClient ) {}
  chargeCreditCard() {
    let form = document.getElementsByTagName("form")[0];
    (<any>window).Stripe.card.createToken({
      number: form['cardNumber'].value,
      exp_month: form['expMonth'].value,
      exp_year: form['expYear'].value,
      cvc: form['cvc'].value
    }, (status: number, response: any) => {
      if (status === 200) {
        let token = response.id;
        this.chargeCard(token);
      } else {
        console.log(response.error.message);
      }
    });
  }
  chargeCard(token: string) {

    const headers = ({'token': token, 'amount': this.amountToPay.toString()});
    // @ts-ignore
    this.http.post('http://localhost:8075/payment/charge', {}, { headers })
      .subscribe((resp: any) => {
        console.log(resp);
      })
  }

}
