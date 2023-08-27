import { CurrencyType } from "./Weapon";

export interface FairItem {
    id: number;
    vendorId: number;
    name: string;
    price: number;
    currencyTypeId: number;
    description: string;
    weight: number;

    currencyType: CurrencyType;
  }