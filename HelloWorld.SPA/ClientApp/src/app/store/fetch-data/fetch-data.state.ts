import { IForecast } from "../../components/shared/models/IForcast";

export interface State {
  loading: boolean,
  forcast: IForecast[],
  error: string,
}

export const initialState: State = {
  loading: false,
  error: '',
  forcast: []
};
