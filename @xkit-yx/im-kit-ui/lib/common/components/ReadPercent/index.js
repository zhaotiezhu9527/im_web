"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReadPercent = void 0;
var react_1 = __importDefault(require("react"));
var useTranslation_1 = require("../../hooks/useTranslation");
var antd_1 = require("antd");
var CommonIcon_1 = __importDefault(require("../CommonIcon"));
var ReadPercent = function (_a) {
    var unread = _a.unread, read = _a.read, _b = _a.radius, radius = _b === void 0 ? 8 : _b, _c = _a.hoverable, hoverable = _c === void 0 ? false : _c, _d = _a.prefix, prefix = _d === void 0 ? 'common' : _d;
    var _prefix = "".concat(prefix, "-percent");
    var t = (0, useTranslation_1.useTranslation)().t;
    var percent = (read / (unread + read)) * 100 || 0;
    var renderDetail = function () {
        return (react_1.default.createElement("span", null, percent >= 100
            ? t('allReadText')
            : "".concat(t('unreadText'), " ").concat(unread, " ").concat(t('personUnit'), " | ").concat(t('readText'), " ").concat(read, " ").concat(t('personUnit'))));
    };
    var renderSvg = function () {
        return percent >= 100 ? (react_1.default.createElement(CommonIcon_1.default, { style: { fontSize: radius * 2 }, type: "icon-yidu", className: "".concat(_prefix, "-wrap-icon") })) : (react_1.default.createElement("svg", { className: "".concat(_prefix, "-wrap-svg"), height: radius * 2, width: radius * 2, viewBox: "0 0 ".concat(radius * 2, " ").concat(radius * 2) },
            react_1.default.createElement("circle", { className: "".concat(_prefix, "-wrap-svg-bg"), r: radius - 1, cx: radius, cy: radius, strokeWidth: "1.5" }),
            react_1.default.createElement("circle", { className: "".concat(_prefix, "-wrap-svg-content"), r: radius / 2, cx: radius, cy: radius, fill: "transparent", strokeWidth: radius, strokeDasharray: "calc(".concat(percent, " * ").concat(radius, " * 3.14 / 100) calc(").concat(radius, " * 3.14)"), transform: "rotate(-90 ".concat(radius, " ").concat(radius, ")") })));
    };
    return (react_1.default.createElement("div", { className: "".concat(_prefix, "-wrap") }, hoverable ? (react_1.default.createElement(antd_1.Popover, { placement: "top", content: renderDetail() }, renderSvg())) : (renderSvg())));
};
exports.ReadPercent = ReadPercent;
