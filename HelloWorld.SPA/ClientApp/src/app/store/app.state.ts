import { ActionReducerMap, createSelector } from '@ngrx/store';
// Import everything from the banana state directory
import * as counterStore from './counter';
import * as forecastStore from './fetch-data';
import * as progressSpinnerStore from './progress-spinner'

// We are bringing everything we know about the banana up to the 
// application level. If we were creating the "fruit salad" application, 
// we would also bring the state information for other fruits into 
// this app level state. Each fruit would be considered a "slice" of 
// the application level state.

export interface AppState {
  counter: counterStore.State,
  forecast: forecastStore.State,
  loading: progressSpinnerStore.State
}

export const initialState: AppState = {
  counter: counterStore.initialState,
  forecast: forecastStore.initialState,
  loading: progressSpinnerStore.initialState
}

export const reducers: ActionReducerMap<AppState> = {
  counter: counterStore.counterReducer,
  forecast: forecastStore.forcastReducer,
  loading: progressSpinnerStore.progressSpinerReducer
}

export const effects: Array<any> = [
  forecastStore.FetchDataEffects,
  progressSpinnerStore.LoadingIndicatorEffects
];

// Selector to get banana slice of state
export const getCounter = (s: AppState) => s.counter;
export const getForecast = (s: AppState) => s.forecast.forcast;
export const getForecastLoading = (s: AppState) => s.forecast.loading;
export const getForecastError = (s: AppState) => s.forecast.error;
export const getLoading = (s: AppState) => s.loading;
export const getLoadingSpinnerActive = (s: AppState) => s.loading.active;

//export const isLoadingSpinnerActive = createSelector(
//  getLoading,
//  getLoadingSpinnerActive
//);
