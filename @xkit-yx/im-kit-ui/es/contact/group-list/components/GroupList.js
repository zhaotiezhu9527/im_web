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
import { GroupItem } from './GroupItem';
import { useTranslation } from '../../../common';
import { Spin, Empty } from 'antd';
export var GroupList = function (_a) {
    var list = _a.list, _b = _a.loading, loading = _b === void 0 ? false : _b, onItemClick = _a.onItemClick, renderGroupListHeader = _a.renderGroupListHeader, renderGroupListEmpty = _a.renderGroupListEmpty, _c = _a.prefix, prefix = _c === void 0 ? 'contact' : _c;
    var _prefix = "".concat(prefix, "-group");
    var t = useTranslation().t;
    return (React.createElement("div", { className: "".concat(_prefix, "-wrapper") },
        React.createElement("div", { className: "".concat(_prefix, "-title") }, renderGroupListHeader ? renderGroupListHeader() : t('teamListTitle')),
        React.createElement("div", { className: "".concat(_prefix, "-content") }, loading ? (React.createElement(Spin, null)) : !list.length ? (renderGroupListEmpty ? (renderGroupListEmpty()) : (React.createElement(Empty, { style: { marginTop: 10 } }))) : (list.map(function (item) { return (React.createElement(GroupItem, __assign({ key: item.teamId, prefix: prefix, onItemClick: onItemClick }, item))); })))));
};
