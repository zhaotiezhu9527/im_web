"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var antd_1 = require("antd");
var icons_1 = require("@ant-design/icons");
var classnames_1 = __importDefault(require("classnames"));
var common_1 = require("../../../common");
var ChatP2pSetting = function (_a) {
    var onCreateGroupClick = _a.onCreateGroupClick, account = _a.account, _b = _a.alias, alias = _b === void 0 ? '' : _b, _c = _a.nick, nick = _c === void 0 ? '' : _c, _d = _a.prefix, prefix = _d === void 0 ? 'chat' : _d, _e = _a.commonPrefix, commonPrefix = _e === void 0 ? 'common' : _e;
    var _prefix = "".concat(prefix, "-person-setting");
    var t = (0, common_1.useTranslation)().t;
    return (react_1.default.createElement("div", { className: (0, classnames_1.default)("".concat(_prefix, "-wrap")), onClick: function (e) {
            e.stopPropagation();
        } },
        react_1.default.createElement("div", { className: (0, classnames_1.default)("".concat(_prefix, "-item")) },
            react_1.default.createElement(common_1.ComplexAvatarContainer, { account: account, canClick: false, prefix: commonPrefix }),
            react_1.default.createElement("span", { className: "".concat(_prefix, "-item-label") }, alias || nick || account)),
        react_1.default.createElement("div", { className: (0, classnames_1.default)("".concat(_prefix, "-item")) },
            react_1.default.createElement(antd_1.Button, { type: "dashed", shape: "circle", className: "".concat(_prefix, "-add-btn"), onClick: onCreateGroupClick, icon: react_1.default.createElement(icons_1.PlusOutlined, { className: "".concat(_prefix, "-add-icon") }) }),
            react_1.default.createElement("span", { className: "".concat(_prefix, "-item-label") }, t('addChatMemberText')))));
};
exports.default = ChatP2pSetting;
