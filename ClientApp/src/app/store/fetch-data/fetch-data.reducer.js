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
Object.defineProperty(exports, "__esModule", { value: true });
var fetch_data_action_1 = require("./fetch-data.action");
var fetch_data_state_1 = require("./fetch-data.state");
function forcastReducer(state, action) {
    if (state === void 0) { state = fetch_data_state_1.initialState; }
    switch (action.type) {
        case fetch_data_action_1.Fetch_Data_SUCCEEDED:
            return __assign(__assign({}, state), { loading: true, error: '', forcast: action.payload });
        case fetch_data_action_1.Fetch_Data_FAILED:
            return __assign(__assign({}, state), { error: action.payload, forcast: [], loading: false });
        case fetch_data_action_1.Fetch_Data_STARTED: {
            return __assign(__assign({}, state), { forcast: [], loading: [], error: '' });
        }
        default:
            return __assign({}, state);
    }
}
exports.forcastReducer = forcastReducer;
//# sourceMappingURL=fetch-data.reducer.js.map