import {OfferStatus} from "./OfferStatus";

export class Offer {
  id!: number;
  price!: number;
  quantity!: number;
  deliveryTime!: number;
  status: OfferStatus = OfferStatus.PENDING;
}

