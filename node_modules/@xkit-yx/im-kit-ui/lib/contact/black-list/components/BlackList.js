"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BlackList = void 0;
var react_1 = __importDefault(require("react"));
var BlackItem_1 = require("./BlackItem");
var common_1 = require("../../../common");
var antd_1 = require("antd");
var BlackList = function (_a) {
    var list = _a.list, _b = _a.loading, loading = _b === void 0 ? false : _b, onItemClick = _a.onItemClick, afterSendMsgClick = _a.afterSendMsgClick, renderBlackListEmpty = _a.renderBlackListEmpty, renderBlackListHeader = _a.renderBlackListHeader, _c = _a.prefix, prefix = _c === void 0 ? 'contact' : _c, _d = _a.commonPrefix, commonPrefix = _d === void 0 ? 'common' : _d;
    var _prefix = "".concat(prefix, "-black");
    var t = (0, common_1.useTranslation)().t;
    return (react_1.default.createElement("div", { className: "".concat(_prefix, "-wrapper") },
        react_1.default.createElement("div", { className: "".concat(_prefix, "-title") }, renderBlackListHeader ? (renderBlackListHeader()) : (react_1.default.createElement(react_1.default.Fragment, null,
            t('blackListTitle'),
            react_1.default.createElement("span", { className: "".concat(_prefix, "-title-remark") }, t('blackListDesc'))))),
        react_1.default.createElement("div", { className: "".concat(_prefix, "-content") }, loading ? (react_1.default.createElement(antd_1.Spin, null)) : !list.length ? (renderBlackListEmpty ? (renderBlackListEmpty()) : (react_1.default.createElement(antd_1.Empty, { style: { marginTop: 10 } }))) : (list.map(function (item) { return (react_1.default.createElement(BlackItem_1.BlackItem, { account: item, key: item, prefix: prefix, commonPrefix: commonPrefix, onItemClick: onItemClick, afterSendMsgClick: afterSendMsgClick })); })))));
};
exports.BlackList = BlackList;
