import { Fetch_Data_SUCCEEDED, Fetch_Data_FAILED, Fetch_Data_STARTED, FetchData_Action } from './fetch-data.action'
import * as programActions from './fetch-data.action'
import { initialState } from './fetch-data.state';
export function forcastReducer(state: any = initialState, action: any): any {
  switch (action.type) {
    case Fetch_Data_SUCCEEDED:
      return {
        ...state,
        loading: true,
        error: '',
        forcast: action.payload

        // Return the current state
      };
    case Fetch_Data_FAILED:
      return {
        ...state,
        error: action.payload,
        forcast: [],
        loading: false
        // Return the current state
      };
    case Fetch_Data_STARTED: {
      return {
        ...state,
        forcast: [],
        loading: [],
        error: ''
        // Return the current state
      };
    }

    default:
      return {
        ...state,
        // Return the current state
      };
  }
}
