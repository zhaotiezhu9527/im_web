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
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FriendSelectItem = void 0;
var react_1 = __importDefault(require("react"));
var antd_1 = require("antd");
var CrudeAvatar_1 = require("../CrudeAvatar");
var FriendSelectItem = function (_a) {
    var _b = _a.isSelected, isSelected = _b === void 0 ? false : _b, onSelect = _a.onSelect, _c = _a.canSelect, canSelect = _c === void 0 ? true : _c, _d = _a.prefix, prefix = _d === void 0 ? 'common' : _d, props = __rest(_a, ["isSelected", "onSelect", "canSelect", "prefix"]);
    var _prefix = "".concat(prefix, "-friend-select-item");
    return (react_1.default.createElement("div", { className: _prefix },
        canSelect ? (react_1.default.createElement(antd_1.Checkbox, { checked: isSelected, onChange: function (e) {
                onSelect === null || onSelect === void 0 ? void 0 : onSelect(props.account, e.target.checked);
            }, className: "".concat(_prefix, "-checkbox") })) : null,
        react_1.default.createElement(CrudeAvatar_1.CrudeAvatar, __assign({ size: 32 }, props)),
        react_1.default.createElement("span", { className: "".concat(_prefix, "-label") }, props.alias || props.nick || props.account || '')));
};
exports.FriendSelectItem = FriendSelectItem;
