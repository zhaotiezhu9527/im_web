"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var ChatHeader = function (_a) {
    var avatar = _a.avatar, title = _a.title, _b = _a.subTitle, subTitle = _b === void 0 ? '' : _b, _c = _a.prefix, prefix = _c === void 0 ? 'chat' : _c;
    var _prefix = "".concat(prefix, "-header");
    return (react_1.default.createElement("div", { className: "".concat(_prefix, "-wrap") },
        react_1.default.createElement("div", { className: "".concat(_prefix, "-avatar") }, avatar),
        react_1.default.createElement("div", { className: "".concat(_prefix, "-title") }, title),
        subTitle ? (react_1.default.createElement("div", { className: "".concat(_prefix, "-sub-title") }, subTitle)) : null));
};
exports.default = ChatHeader;
