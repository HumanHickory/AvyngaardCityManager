import { CurrencyType } from "./Weapon";

export interface Clothing {
    id: number;
    name: string;
    rating: number;
    originalPrice?: number;
    price: number;
    currencyTypeId: number;
    currencyType: CurrencyType
    description: string;
    cityId?: number;
    weight: number;
  }