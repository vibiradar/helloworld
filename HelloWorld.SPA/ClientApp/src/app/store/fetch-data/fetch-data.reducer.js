"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var fetch_data_action_1 = require("./fetch-data.action");
var programActions = require("./fetch-data.action");
var utility_service_1 = require("../../components/shared/utility/utility.service");
var fetch_data_state_1 = require("./fetch-data.state");
function forcastReducer(state, action) {
    if (state === void 0) { state = fetch_data_state_1.initialState; }
    switch (action.type) {
        case fetch_data_action_1.Forecast_Data_GET_ALL_SUCCEEDED:
            return __assign(__assign({}, state), { loading: true, error: '', forcast: action.payload });
        case fetch_data_action_1.Forecast_Data_GET_ALL_FAILED:
            return __assign(__assign({}, state), { error: action.payload, forcast: [], loading: false });
        case fetch_data_action_1.Forecast_Data_GET_ALL_STARTED: {
            return __assign(__assign({}, state), { forcast: [], loading: [], error: '' });
        }
        case programActions.Forecast_Data_ADD_SUCCEEDED: {
            var newForcastState = __spreadArrays(state.forcast);
            return __assign(__assign({}, state), { forcast: utility_service_1.insertobjectInArray(newForcastState, action.payload, newForcastState.length), 
                //forcast: [...state.forcast, action.payload],
                loading: [], error: '' });
        }
        //case Forecast_Data_DELETE: {
        //  const newForcastState = [...state.forcast];
        //  const index = newForcastState.findIndex(item => item.id == action.payload.id);
        //  //const newForecastState = state.forcast.filter(val => val.summary !== action.payload.summary);
        //  return {
        //    ...state,
        //    forcast: removeObjectFromArray(newForcastState, index),
        //    loading: [],
        //    error: ''
        //  };
        //}
        default:
            return __assign({}, state);
    }
}
exports.forcastReducer = forcastReducer;
//# sourceMappingURL=fetch-data.reducer.js.map