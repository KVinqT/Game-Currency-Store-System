export interface BaseCurrency {
  id: number;
  myanmarKyats: number;
  discount: string;
  category: string;
}

export interface DiamondCurrency extends BaseCurrency {
  diamonds: number;
}

export interface UCCurrency extends BaseCurrency {
  unknownCurrency: number;
}
