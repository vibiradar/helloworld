export interface IForecast {
  id: number;
  date: Date;
  temperatureC: number;
  temperatureF: number;
  summary: string;
}
export interface ICountry {
  countryId: number;
  itemName: string;
  itemProp: string
}
