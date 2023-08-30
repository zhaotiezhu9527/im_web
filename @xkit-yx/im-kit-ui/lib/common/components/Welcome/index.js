"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Welcome = void 0;
var react_1 = __importDefault(require("react"));
var useTranslation_1 = require("../../hooks/useTranslation");
var Welcome = function (_a) {
    var _b = _a.prefix, prefix = _b === void 0 ? 'common' : _b;
    var _prefix = "".concat(prefix, "-welcome");
    var t = (0, useTranslation_1.useTranslation)().t;
    return (react_1.default.createElement("div", { className: "".concat(_prefix, "-wrap") },
        react_1.default.createElement("img", { src: "https://yx-web-nosdn.netease.im/common/630b48dc545af0633aaaa53bbd65cbb0/\u6B22\u8FCE\u4F7F\u7528\u4E91\u4FE1.png" }),
        t('welcomeText')));
};
exports.Welcome = Welcome;
