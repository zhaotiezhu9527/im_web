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
exports.GroupList = void 0;
var react_1 = __importDefault(require("react"));
var GroupItem_1 = require("./GroupItem");
var common_1 = require("../../../common");
var antd_1 = require("antd");
var GroupList = function (_a) {
    var list = _a.list, _b = _a.loading, loading = _b === void 0 ? false : _b, onItemClick = _a.onItemClick, renderGroupListHeader = _a.renderGroupListHeader, renderGroupListEmpty = _a.renderGroupListEmpty, _c = _a.prefix, prefix = _c === void 0 ? 'contact' : _c;
    var _prefix = "".concat(prefix, "-group");
    var t = (0, common_1.useTranslation)().t;
    return (react_1.default.createElement("div", { className: "".concat(_prefix, "-wrapper") },
        react_1.default.createElement("div", { className: "".concat(_prefix, "-title") }, renderGroupListHeader ? renderGroupListHeader() : t('teamListTitle')),
        react_1.default.createElement("div", { className: "".concat(_prefix, "-content") }, loading ? (react_1.default.createElement(antd_1.Spin, null)) : !list.length ? (renderGroupListEmpty ? (renderGroupListEmpty()) : (react_1.default.createElement(antd_1.Empty, { style: { marginTop: 10 } }))) : (list.map(function (item) { return (react_1.default.createElement(GroupItem_1.GroupItem, __assign({ key: item.teamId, prefix: prefix, onItemClick: onItemClick }, item))); })))));
};
exports.GroupList = GroupList;
