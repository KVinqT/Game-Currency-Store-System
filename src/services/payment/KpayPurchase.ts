import { IPurchase } from "./IPurchase";

export class KpayPurchase implements IPurchase {
  purchaseCurrency(): void {
    console.log("Kpay purchase payment");
  }

  rejectPurchaseCurrency(): void {
    console.log("Reject Kpay purchase payment");
  }
}
