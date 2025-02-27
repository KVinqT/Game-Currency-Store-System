//interface for all payment methods
export interface IPurchase {
  purchaseCurrency(): void;
  rejectPurchaseCurrency(): void;
}
