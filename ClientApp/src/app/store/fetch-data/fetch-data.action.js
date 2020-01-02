"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Fetch_Data_GET = '[Fetch Data Component] Get Data List';
exports.Fetch_Data_SUCCEEDED = '[Fetch Data Component] Get Data  Succeeded';
exports.Fetch_Data_FAILED = '[Fetch Data Component] Get Data Failed';
exports.Fetch_Data_STARTED = '[Fetch Data Component] Get Data Started';
var GetData = /** @class */ (function () {
    function GetData() {
        this.type = exports.Fetch_Data_GET;
    }
    return GetData;
}());
exports.GetData = GetData;
var GetData_Started = /** @class */ (function () {
    function GetData_Started() {
        this.type = exports.Fetch_Data_STARTED;
    }
    return GetData_Started;
}());
exports.GetData_Started = GetData_Started;
var GetData_Succeeded = /** @class */ (function () {
    function GetData_Succeeded(payload) {
        this.payload = payload;
        this.type = exports.Fetch_Data_SUCCEEDED;
        // Log message is here just so we can see when our actions
        // get dispatched in the console.
        console.log('ACTION ' + exports.Fetch_Data_SUCCEEDED);
    }
    return GetData_Succeeded;
}());
exports.GetData_Succeeded = GetData_Succeeded;
var GetData_Failed = /** @class */ (function () {
    function GetData_Failed(payload) {
        this.payload = payload;
        this.type = exports.Fetch_Data_FAILED;
        console.log(payload);
    }
    return GetData_Failed;
}());
exports.GetData_Failed = GetData_Failed;
//# sourceMappingURL=fetch-data.action.js.map