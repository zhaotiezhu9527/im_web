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
import React, { useMemo } from 'react';
import { Divider, message, Spin } from 'antd';
import { FriendSelectItem } from './FriendSelectItem';
import { groupByPy } from '../../../utils';
import { useTranslation } from '../../hooks/useTranslation';
export var FriendSelectUI = function (_a) {
    var list = _a.list, selectedAccounts = _a.selectedAccounts, onSelect = _a.onSelect, _b = _a.loading, loading = _b === void 0 ? false : _b, max = _a.max, _c = _a.prefix, prefix = _c === void 0 ? 'common' : _c;
    var _prefix = "".concat(prefix, "-friend-select");
    var t = useTranslation().t;
    var dataSource = useMemo(function () {
        return groupByPy(list, {
            firstKey: 'alias',
            secondKey: 'nick',
            thirdKey: 'account',
        }, false);
    }, [list]);
    var handleSelect = function (account, selected) {
        var _selectedAccounts = [];
        if (selected && !selectedAccounts.includes(account)) {
            if (max && selectedAccounts.length >= max) {
                message.error("".concat(t('maxSelectedText')).concat(max).concat(t('friendsText')));
                return;
            }
            _selectedAccounts = selectedAccounts.concat(account);
        }
        else if (!selected && selectedAccounts.includes(account)) {
            _selectedAccounts = selectedAccounts.filter(function (item) { return item !== account; });
        }
        var _selectedList = list.filter(function (item) {
            return _selectedAccounts.includes(item.account);
        });
        onSelect(_selectedList);
    };
    var selectedList = useMemo(function () {
        return list.filter(function (item) { return selectedAccounts.includes(item.account); });
    }, [list, selectedAccounts]);
    var strangerList = useMemo(function () {
        return selectedAccounts.filter(function (item) {
            return list.every(function (j) { return j.account !== item; });
        });
    }, [list, selectedAccounts]);
    return (React.createElement("div", { className: "".concat(_prefix, "-wrapper") }, loading ? (React.createElement(Spin, null)) : (React.createElement(React.Fragment, null,
        React.createElement("div", { className: "".concat(_prefix, "-left") }, dataSource.map(function (_a) {
            var key = _a.key, data = _a.data;
            return (React.createElement("div", { key: key },
                React.createElement("div", { className: "".concat(_prefix, "-subtitle-item") }, key),
                data.map(function (item) { return (React.createElement(FriendSelectItem, __assign({ key: "".concat(key, "_").concat(item.account), isSelected: selectedAccounts.includes(item.account), onSelect: handleSelect, canSelect: true, prefix: prefix }, item))); })));
        })),
        React.createElement(Divider, { className: "".concat(_prefix, "-divider"), type: "vertical" }),
        React.createElement("div", { className: "".concat(_prefix, "-right") },
            React.createElement("div", { className: "".concat(_prefix, "-selected-title") },
                t('selectedText'),
                "\uFF1A",
                selectedList.length,
                " ",
                t('friendsText'),
                strangerList.length ? (React.createElement(React.Fragment, null,
                    "\uFF0C",
                    strangerList.length,
                    " ",
                    t('strangerText'))) : null),
            React.createElement("div", { className: "".concat(_prefix, "-selected-content") }, selectedList.map(function (item) { return (React.createElement(FriendSelectItem, __assign({ key: "select_".concat(item.account), canSelect: false, prefix: prefix }, item))); })))))));
};
