import { CurrencyType } from "./Weapon";

export interface Poison {
    id: number;
    name: string;
    description: string;
    weight: number;
    price: number;
    currencyTypeId: number;

    currencyType: CurrencyType;

}