import { CurrencyType } from "./Weapon";

export interface Potion {
    id: number;
    name: string;
    description: string;
    price: number;
    originalPrice?: number;
    currencyTypeId: number;
    weight: number;

    currencyType: CurrencyType
  }
  
  