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
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FriendSelectUI = void 0;
var react_1 = __importStar(require("react"));
var antd_1 = require("antd");
var FriendSelectItem_1 = require("./FriendSelectItem");
var utils_1 = require("../../../utils");
var useTranslation_1 = require("../../hooks/useTranslation");
var FriendSelectUI = function (_a) {
    var list = _a.list, selectedAccounts = _a.selectedAccounts, onSelect = _a.onSelect, _b = _a.loading, loading = _b === void 0 ? false : _b, max = _a.max, _c = _a.prefix, prefix = _c === void 0 ? 'common' : _c;
    var _prefix = "".concat(prefix, "-friend-select");
    var t = (0, useTranslation_1.useTranslation)().t;
    var dataSource = (0, react_1.useMemo)(function () {
        return (0, utils_1.groupByPy)(list, {
            firstKey: 'alias',
            secondKey: 'nick',
            thirdKey: 'account',
        }, false);
    }, [list]);
    var handleSelect = function (account, selected) {
        var _selectedAccounts = [];
        if (selected && !selectedAccounts.includes(account)) {
            if (max && selectedAccounts.length >= max) {
                antd_1.message.error("".concat(t('maxSelectedText')).concat(max).concat(t('friendsText')));
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
    var selectedList = (0, react_1.useMemo)(function () {
        return list.filter(function (item) { return selectedAccounts.includes(item.account); });
    }, [list, selectedAccounts]);
    var strangerList = (0, react_1.useMemo)(function () {
        return selectedAccounts.filter(function (item) {
            return list.every(function (j) { return j.account !== item; });
        });
    }, [list, selectedAccounts]);
    return (react_1.default.createElement("div", { className: "".concat(_prefix, "-wrapper") }, loading ? (react_1.default.createElement(antd_1.Spin, null)) : (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement("div", { className: "".concat(_prefix, "-left") }, dataSource.map(function (_a) {
            var key = _a.key, data = _a.data;
            return (react_1.default.createElement("div", { key: key },
                react_1.default.createElement("div", { className: "".concat(_prefix, "-subtitle-item") }, key),
                data.map(function (item) { return (react_1.default.createElement(FriendSelectItem_1.FriendSelectItem, __assign({ key: "".concat(key, "_").concat(item.account), isSelected: selectedAccounts.includes(item.account), onSelect: handleSelect, canSelect: true, prefix: prefix }, item))); })));
        })),
        react_1.default.createElement(antd_1.Divider, { className: "".concat(_prefix, "-divider"), type: "vertical" }),
        react_1.default.createElement("div", { className: "".concat(_prefix, "-right") },
            react_1.default.createElement("div", { className: "".concat(_prefix, "-selected-title") },
                t('selectedText'),
                "\uFF1A",
                selectedList.length,
                " ",
                t('friendsText'),
                strangerList.length ? (react_1.default.createElement(react_1.default.Fragment, null,
                    "\uFF0C",
                    strangerList.length,
                    " ",
                    t('strangerText'))) : null),
            react_1.default.createElement("div", { className: "".concat(_prefix, "-selected-content") }, selectedList.map(function (item) { return (react_1.default.createElement(FriendSelectItem_1.FriendSelectItem, __assign({ key: "select_".concat(item.account), canSelect: false, prefix: prefix }, item))); })))))));
};
exports.FriendSelectUI = FriendSelectUI;
