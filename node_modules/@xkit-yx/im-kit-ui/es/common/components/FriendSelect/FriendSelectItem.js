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
import React from 'react';
import { Checkbox } from 'antd';
import { CrudeAvatar } from '../CrudeAvatar';
export var FriendSelectItem = function (_a) {
    var _b = _a.isSelected, isSelected = _b === void 0 ? false : _b, onSelect = _a.onSelect, _c = _a.canSelect, canSelect = _c === void 0 ? true : _c, _d = _a.prefix, prefix = _d === void 0 ? 'common' : _d, props = __rest(_a, ["isSelected", "onSelect", "canSelect", "prefix"]);
    var _prefix = "".concat(prefix, "-friend-select-item");
    return (React.createElement("div", { className: _prefix },
        canSelect ? (React.createElement(Checkbox, { checked: isSelected, onChange: function (e) {
                onSelect === null || onSelect === void 0 ? void 0 : onSelect(props.account, e.target.checked);
            }, className: "".concat(_prefix, "-checkbox") })) : null,
        React.createElement(CrudeAvatar, __assign({ size: 32 }, props)),
        React.createElement("span", { className: "".concat(_prefix, "-label") }, props.alias || props.nick || props.account || '')));
};
