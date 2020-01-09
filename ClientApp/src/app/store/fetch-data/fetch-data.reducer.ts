import { Forecast_Data_SUCCEEDED, Forecast_Data_FAILED, Forecast_Data_STARTED, Forecast_Data_ADD, Forecast_Data_DELETE } from './fetch-data.action'
import * as programActions from './fetch-data.action';
import { insertobjectInArray, updateObjectInArray, removeObjectFromArray } from '../../components/shared/utility/utility.service';

import { initialState } from './fetch-data.state';
import { ReflectiveInjector } from '@angular/core';
export function forcastReducer(state: any = initialState, action: any): any {
  switch (action.type) {
    case Forecast_Data_SUCCEEDED:
      return {
        ...state,
        loading: true,
        error: '',
        forcast: action.payload

        // Return the current state
      };
    case Forecast_Data_FAILED:
      return {
        ...state,
        error: action.payload,
        forcast: [],
        loading: false
        // Return the current state
      };
    case Forecast_Data_STARTED: {
      return {
        ...state,
        forcast: [],
        loading: [],
        error: ''
        // Return the current state
      };
    }
    case Forecast_Data_ADD: {
      let newForcastState = [...state.forcast];
      return {
        ...state,
        forcast: insertobjectInArray(newForcastState, action.payload, newForcastState.length),
        //forcast: [...state.forcast, action.payload],
        loading: [],
        error: ''
        // Return the current state
      };
    }
    case Forecast_Data_DELETE: {
      const newForcastState = [...state.forcast];
      const index = newForcastState.findIndex(item => item.id == action.payload.id);
      //const newForecastState = state.forcast.filter(val => val.summary !== action.payload.summary);
      return {
        ...state,
        forcast: removeObjectFromArray(newForcastState, index),
        loading: [],
        error: ''
      };
    }
    default:
      return {
        ...state,
        // Return the current state
      };
  }
}


