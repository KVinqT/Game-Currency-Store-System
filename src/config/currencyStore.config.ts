import { UCCurrencyStore } from "./../services/currencyStore/UCCurrencyStore";
import { DiamondCurrencyStore } from "../services/currencyStore/DiamondCurrencyStore";
import { ICurrencyStore } from "../services/currencyStore/ICurrencyStore";

const mlStorage = new DiamondCurrencyStore();
const pubgStorage = new UCCurrencyStore();

export { mlStorage, pubgStorage };
