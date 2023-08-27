import { FairItem } from "./FairItem";

export interface Vendor {
    id: number;
    name: string;
    host: string;
    items: FairItem[];
    description: string;
  }