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
import React from 'react';
import AddItem from '../AddItem';
var AddList = function (_a) {
    var list = _a.list, prefix = _a.prefix;
    var _prefix = "".concat(prefix, "-add-list");
    return (React.createElement("div", { className: _prefix }, list.map(function (item) {
        return React.createElement(AddItem, __assign({}, item, { prefix: prefix, key: item.scene }));
    })));
};
export default AddList;
