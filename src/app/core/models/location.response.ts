export interface LocationResponse {
  attributes: string;
  query: [];
  features: Array<Feature>
}

export interface Feature {
  place_name: string;
  center: [number, number];
  id: string;
}