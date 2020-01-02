import { ActionReducerMap } from '@ngrx/store';
// Import everything from the banana state directory
import * as counterStore from './counter';
import * as forecastStore from './fetch-data'

// We are bringing everything we know about the banana up to the 
// application level. If we were creating the "fruit salad" application, 
// we would also bring the state information for other fruits into 
// this app level state. Each fruit would be considered a "slice" of 
// the application level state.

export interface AppState {
  counter: counterStore.State,
  forecast: forecastStore.State
}

export const initialState: AppState = {
  counter: counterStore.initialState,
  forecast: forecastStore.initialState
}

export const reducers: ActionReducerMap<AppState> = {
  counter: counterStore.counterReducer,
  forecast: forecastStore.forcastReducer
}

export const effects: Array<any> = [
  forecastStore.FetchDataEffects
];

// Selector to get banana slice of state
export const getCounter = (s: AppState) => s.counter;
export const getForecast = (s: AppState) => s.forecast.forcast;
export const getForecastLoading = (s: AppState) => s.forecast.loading;
export const getForecastError = (s: AppState) => s.forecast.error;


