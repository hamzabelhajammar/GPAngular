import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {CommandeService} from "../../services/commande.service";
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-checkout-paiement',
  templateUrl: './checkout-paiement.component.html',
  styleUrls: ['./checkout-paiement.component.css']
})
export class CheckoutPaiementComponent implements OnInit{
  amountToPay!: number;
  stripePublicKey: string =  'pk_test_51Menp8DmJ1Rn0Ly0JhI9knjxNXeH0FlWfLUXVdUgCG3AnaOaJrsCX3yY0pcnywL86vIg3UIZpteEjB1YKrsdmHcX00GEeojM0h';
  currency: string = 'usd';
  amount!: number;
  card:any;
  constructor(
    private route: ActivatedRoute,
    private commandeService: CommandeService,
    private http: HttpClient // Injection du service HttpClient
  ) { }

  ngOnInit(): void {

    this.route.queryParams.subscribe(params => {
      const commandeId = params['id'];
      const url = `http://localhost:8075/checkoutt?id=${commandeId}`;

      this.http.get(url).subscribe((data: any) => {
        this.amountToPay = data.amount;
      });
    });
  }
  chargeCreditCard() {
    /*  let form = document.querySelector("#paymentForm") as HTMLFormElement;
     if (form) {
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
     } else {
       console.log("Form not found");
     }
 */
    let form = document.querySelector("#paymentForm") as HTMLFormElement;

    // let form = document.getElementsByTagName("form")[0];
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
  /* chargeCard(token: string) {
     // @ts-ignore
     const headers = new HttpHeaders({'token': token, 'amount': 100});
     // @ts-ignore
     this.http.post('http://localhost:8075/charge', {}, {headers: headers})
       .subscribe(resp => {
         console.log(resp);
       })

   }*/
  /*chargeCard(token: string) {
    const headers = new HttpHeaders({
      'token': token,
      'amount': String(this.amountToPay)
    });

    this.http.post('http://localhost:8075/charge', {}, { headers })
      .subscribe(resp => {
        console.log(resp);
      });
  }*/

  chargeCard(token: string) {

    const headers = ({'token': token, 'amount': this.amountToPay.toString()});
    // @ts-ignore
    this.http.post('http://localhost:8075/charge', {}, { headers })
      .subscribe((resp: any) => {
        console.log(resp);
      })
  }

}
