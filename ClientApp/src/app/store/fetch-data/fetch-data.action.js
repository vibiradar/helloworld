"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Forecast_Data_GET = '[Forecast Data Component] Get Data List';
exports.Forecast_Data_SUCCEEDED = '[Forecast Data Component] Get Data  Succeeded';
exports.Forecast_Data_FAILED = '[Forecast Data Component] Get Data Failed';
exports.Forecast_Data_STARTED = '[Forecast Data Component] Get Data Started';
exports.Forecast_Data_ADD = '[Forecast Data Component] Add Forecast Data';
exports.Forecast_Data_DELETE = '[Forecast Data Component] Delete Forecast Data';
var GetData = /** @class */ (function () {
    function GetData() {
        this.type = exports.Forecast_Data_GET;
    }
    return GetData;
}());
exports.GetData = GetData;
var GetData_Started = /** @class */ (function () {
    function GetData_Started() {
        this.type = exports.Forecast_Data_STARTED;
    }
    return GetData_Started;
}());
exports.GetData_Started = GetData_Started;
var GetData_Succeeded = /** @class */ (function () {
    function GetData_Succeeded(payload) {
        this.payload = payload;
        this.type = exports.Forecast_Data_SUCCEEDED;
        // Log message is here just so we can see when our actions
        // get dispatched in the console.
        console.log('ACTION ' + exports.Forecast_Data_SUCCEEDED);
    }
    return GetData_Succeeded;
}());
exports.GetData_Succeeded = GetData_Succeeded;
var AddForecastData = /** @class */ (function () {
    function AddForecastData(payload) {
        this.payload = payload;
        this.type = exports.Forecast_Data_ADD;
        // Log message is here just so we can see when our actions
        // get dispatched in the console.
        console.log('ACTION ' + exports.Forecast_Data_ADD);
    }
    return AddForecastData;
}());
exports.AddForecastData = AddForecastData;
var DeleteForecastData = /** @class */ (function () {
    function DeleteForecastData(payload) {
        this.payload = payload;
        this.type = exports.Forecast_Data_DELETE;
        // Log message is here just so we can see when our actions
        // get dispatched in the console.
        console.log('ACTION ' + exports.Forecast_Data_DELETE);
    }
    return DeleteForecastData;
}());
exports.DeleteForecastData = DeleteForecastData;
var GetData_Failed = /** @class */ (function () {
    function GetData_Failed(payload) {
        this.payload = payload;
        this.type = exports.Forecast_Data_FAILED;
        console.log(payload);
    }
    return GetData_Failed;
}());
exports.GetData_Failed = GetData_Failed;
//# sourceMappingURL=fetch-data.action.js.map