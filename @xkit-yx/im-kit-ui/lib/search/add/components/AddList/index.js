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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var AddItem_1 = __importDefault(require("../AddItem"));
var AddList = function (_a) {
    var list = _a.list, prefix = _a.prefix;
    var _prefix = "".concat(prefix, "-add-list");
    return (react_1.default.createElement("div", { className: _prefix }, list.map(function (item) {
        return react_1.default.createElement(AddItem_1.default, __assign({}, item, { prefix: prefix, key: item.scene }));
    })));
};
exports.default = AddList;
