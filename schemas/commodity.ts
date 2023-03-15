export interface SimplifiedCommodity {
  id: string;
  name: string;
}

export interface Variety {
  id: string;
  name: string;
}

export interface Commodity extends SimplifiedCommodity {
  varieties: Variety[];
}
