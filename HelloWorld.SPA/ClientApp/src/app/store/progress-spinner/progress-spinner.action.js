"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SHOW_SPINNER = "[UI] Show loading spinner";
exports.HIDE_SPINNER = "[UI] Hide loading spinner";
var ShowSpinner = /** @class */ (function () {
    function ShowSpinner(payload) {
        this.payload = payload;
        this.type = exports.SHOW_SPINNER;
    }
    return ShowSpinner;
}());
exports.ShowSpinner = ShowSpinner;
var HideSpinner = /** @class */ (function () {
    function HideSpinner(payload) {
        this.payload = payload;
        this.type = exports.HIDE_SPINNER;
    }
    return HideSpinner;
}());
exports.HideSpinner = HideSpinner;
//# sourceMappingURL=progress-spinner.action.js.map