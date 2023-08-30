"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BlackItem = void 0;
var react_1 = __importDefault(require("react"));
var common_1 = require("../../../common");
var mobx_react_1 = require("mobx-react");
exports.BlackItem = (0, mobx_react_1.observer)(function (_a) {
    var account = _a.account, onItemClick = _a.onItemClick, afterSendMsgClick = _a.afterSendMsgClick, _b = _a.prefix, prefix = _b === void 0 ? 'contact' : _b, _c = _a.commonPrefix, commonPrefix = _c === void 0 ? 'common' : _c;
    var _prefix = "".concat(prefix, "-black-item");
    var store = (0, common_1.useStateContext)().store;
    return (react_1.default.createElement("div", { className: _prefix, onClick: function (e) {
            e.stopPropagation();
            onItemClick === null || onItemClick === void 0 ? void 0 : onItemClick(account);
        } },
        react_1.default.createElement(common_1.ComplexAvatarContainer, { account: account, prefix: commonPrefix, afterSendMsgClick: afterSendMsgClick }),
        react_1.default.createElement("span", { className: "".concat(_prefix, "-label") }, store.uiStore.getAppellation({ account: account }))));
});
