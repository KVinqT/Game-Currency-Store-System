import { UCCurrency } from "../../types/CurrencyTypes";
import { ICurrencyStore } from "./ICurrencyStore";

export class UCCurrencyStore implements ICurrencyStore {
  private store: Array<UCCurrency> = [
    {
      id: 1,
      unknownCurrency: 100,
      myanmarKyats: 5000,
      discount: "0%",
      category: "regular",
    },
    {
      id: 2,
      unknownCurrency: 300,
      myanmarKyats: 14000,
      discount: "0%",
      category: "popular",
    },
    {
      id: 3,
      unknownCurrency: 500,
      myanmarKyats: 23000,
      discount: "5%",
      category: "popular",
    },
    {
      id: 4,
      unknownCurrency: 600,
      myanmarKyats: 28000,
      discount: "0%",
      category: "regular",
    },
  ];
  listCurrency() {
    return this.store;
  }
}
