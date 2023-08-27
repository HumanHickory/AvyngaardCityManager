import { ArtType } from "./ArtType";
import { CurrencyType } from "./Weapon";

export interface CityArt {
    id: number;
    name: string;
    artist: string;
    artTypeId: number;
    cityId: number;
    weight: number;
    price: number;
    currencyTypeId: number;

    currencyType: CurrencyType;
    artType: ArtType;
}