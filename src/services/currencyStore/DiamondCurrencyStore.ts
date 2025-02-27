import { ICurrencyStore } from "./ICurrencyStore";
import { DiamondCurrency } from "../../types/CurrencyTypes";

export class DiamondCurrencyStore implements ICurrencyStore {
  private store: Array<DiamondCurrency> = [
    {
      id: 1,
      diamonds: 100,
      myanmarKyats: 5000,
      discount: "0%",
      category: "regular",
    },
    {
      id: 2,
      diamonds: 300,
      myanmarKyats: 14000,
      discount: "0%",
      category: "popular",
    },
    {
      id: 3,
      diamonds: 500,
      myanmarKyats: 23000,
      discount: "5%",
      category: "popular",
    },
    {
      id: 4,
      diamonds: 600,
      myanmarKyats: 28000,
      discount: "0%",
      category: "regular",
    },
  ];
  listCurrency() {
    return this.store;
  }
}
