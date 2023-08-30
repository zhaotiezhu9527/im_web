"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ContactItem = void 0;
var react_1 = __importDefault(require("react"));
var antd_1 = require("antd");
var ContactItem = function (_a) {
    var icon = _a.icon, label = _a.label, contactType = _a.contactType, _b = _a.isSelectd, isSelectd = _b === void 0 ? false : _b, backgroundColor = _a.backgroundColor, onItemClick = _a.onItemClick, _c = _a.prefix, prefix = _c === void 0 ? 'contact' : _c, _d = _a.unread, unread = _d === void 0 ? 0 : _d;
    var _prefix = "".concat(prefix, "-list-item");
    return (react_1.default.createElement("div", { className: "".concat(_prefix, " ").concat(isSelectd ? "".concat(_prefix, "-select") : ''), onClick: function (e) {
            e.stopPropagation();
            onItemClick(contactType);
        } },
        react_1.default.createElement(antd_1.Badge, { count: unread },
            react_1.default.createElement(antd_1.Avatar, { size: 36, icon: icon, style: { backgroundColor: backgroundColor, color: '#fff' } })),
        react_1.default.createElement("span", { className: "".concat(_prefix, "-label") }, label)));
};
exports.ContactItem = ContactItem;
