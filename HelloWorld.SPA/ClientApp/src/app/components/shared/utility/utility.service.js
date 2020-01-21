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
function removeObjectFromArray(array, index) {
    return __spreadArrays(array.slice(0, index), array.slice(index + 1));
}
exports.removeObjectFromArray = removeObjectFromArray;
function insertobjectInArray(array, item, index) {
    var newArray = array.slice();
    newArray.splice(index, 0, item);
    return newArray;
}
exports.insertobjectInArray = insertobjectInArray;
function updateObjectInArray(array, updateItem, updateItemIndex) {
    return array.map(function (item, index) {
        if (index !== updateItemIndex) {
            // This isn't the item we care about - keep it as-is
            return item;
        }
        // Otherwise, this is the one we want - return an updated value
        return __assign(__assign({}, item), updateItem);
    });
}
exports.updateObjectInArray = updateObjectInArray;
//# sourceMappingURL=utility.service.js.map