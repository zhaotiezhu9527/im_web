"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var antd_1 = require("antd");
var icons_1 = require("@ant-design/icons");
var useTranslation_1 = require("../../hooks/useTranslation");
var SearchInput = function (_a) {
    var placeholder = _a.placeholder, value = _a.value, _b = _a.disabled, disabled = _b === void 0 ? false : _b, onChange = _a.onChange, onClick = _a.onClick, _c = _a.prefix, prefix = _c === void 0 ? 'common' : _c;
    var _prefix = "".concat(prefix, "-searchinput");
    var t = (0, useTranslation_1.useTranslation)().t;
    placeholder = placeholder || t('searchInputPlaceholder');
    return (react_1.default.createElement("div", { className: "".concat(_prefix, "-wrap"), onClick: function (e) { return onClick === null || onClick === void 0 ? void 0 : onClick(e); } },
        react_1.default.createElement(antd_1.Input, { prefix: react_1.default.createElement(icons_1.SearchOutlined, { className: "".concat(_prefix, "-icon") }), placeholder: placeholder, value: value, onChange: function (e) { return onChange === null || onChange === void 0 ? void 0 : onChange(e.target.value); }, disabled: disabled })));
};
exports.default = SearchInput;
