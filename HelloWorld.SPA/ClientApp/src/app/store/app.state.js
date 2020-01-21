"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Import everything from the banana state directory
var counterStore = require("./counter");
var forecastStore = require("./fetch-data");
var progressSpinnerStore = require("./progress-spinner");
exports.initialState = {
    counter: counterStore.initialState,
    forecast: forecastStore.initialState,
    loading: progressSpinnerStore.initialState
};
exports.reducers = {
    counter: counterStore.counterReducer,
    forecast: forecastStore.forcastReducer,
    loading: progressSpinnerStore.progressSpinerReducer
};
exports.effects = [
    forecastStore.FetchDataEffects,
    progressSpinnerStore.LoadingIndicatorEffects
];
// Selector to get banana slice of state
exports.getCounter = function (s) { return s.counter; };
exports.getForecast = function (s) { return s.forecast.forcast; };
exports.getForecastLoading = function (s) { return s.forecast.loading; };
exports.getForecastError = function (s) { return s.forecast.error; };
exports.getLoading = function (s) { return s.loading; };
exports.getLoadingSpinnerActive = function (s) { return s.loading.active; };
//export const isLoadingSpinnerActive = createSelector(
//  getLoading,
//  getLoadingSpinnerActive
//);
//# sourceMappingURL=app.state.js.map