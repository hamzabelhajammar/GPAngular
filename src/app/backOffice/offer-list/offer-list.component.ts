import {Component, OnInit} from '@angular/core';
import {Offer} from "../../models/Offer";
import {OfferService} from "../../services/offer.service";
import {ContractService} from "../../services/contract.service";
import {OfferStatus} from "../../models/OfferStatus";

@Component({
  selector: 'app-offer-list',
  templateUrl: './offer-list.component.html',
  styleUrls: ['./offer-list.component.css']
})
export class OfferListComponent implements OnInit{
  offers: Offer[] = [];
  selectedOffer?: Offer;
  error: any;

  constructor(private offerService: OfferService , private contractService: ContractService) { }


  ngOnInit(): void {
    this.getOffers();
  }

  getOffers(): void {
    this.offerService.getAllOffers()
      .subscribe(offers => this.offers = offers);
  }

  onSelect(offer: Offer): void {
    this.selectedOffer = offer;
  }

  acceptOffer(offer: Offer) {
    offer.status = OfferStatus.ACCEPTED;
    this.offerService.updateOfferStatus(offer.id, OfferStatus.ACCEPTED).subscribe(() => {
      console.log("Offer accepted successfully");
    },  error => {
      this.error = error;
      console.log(error.error.errorMessage);
    });
  }

  declineOffer(offer: Offer) {
    offer.status = OfferStatus.REJECTED;
    this.offerService.updateOfferStatus(offer.id, OfferStatus.REJECTED).subscribe(() => {
      console.log("Offer rejected successfully");
    }, error => {
      this.error = error;
      console.log(error.error.errorMessage);
    });
  }

  deleteOffer(offer: Offer) {
    this.offerService.deleteOffer(offer.id).subscribe(() => {
      console.log("Offer deleted successfully");
      this.offers = this.offers.filter(o => o.id !== offer.id);
    }, error => {
      this.error = error;
      console.log(error.error.errorMessage);
    });
  }

  chooseBest(): void {
    // Call backend API to choose the best offer and create a new contract entity
    this.offerService.getBestOffer().subscribe(() => {
      // The best offer has been chosen and a new contract entity has been created
      // Now refresh the list of offers and contracts
      this.getOffers();
      this.contractService.getContracts();
    }, error => {
      this.error = error;
      console.log(error.error.errorMessage);
    });
  }


}
