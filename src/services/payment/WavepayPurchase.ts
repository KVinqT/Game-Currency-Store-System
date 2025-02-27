import { IPurchase } from "./IPurchase";

class WavepayPurchase implements IPurchase {
  purchaseCurrency(): void {
    console.log("Wavepay purchase payment");
  }

  rejectPurchaseCurrency(): void {
    console.log("Reject wavepay purchase payment");
  }
}
