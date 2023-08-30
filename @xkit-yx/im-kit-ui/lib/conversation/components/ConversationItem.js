"use strict";
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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ConversationItem = void 0;
var react_1 = __importStar(require("react"));
var moment_1 = __importDefault(require("moment"));
var antd_1 = require("antd");
var icons_1 = require("@ant-design/icons");
var common_1 = require("../../common");
var ConversationItem = function (_a) {
    var isTop = _a.isTop, isMute = _a.isMute, sessionName = _a.sessionName, menuRenderer = _a.menuRenderer, avatarRenderer = _a.avatarRenderer, time = _a.time, lastMsg = _a.lastMsg, _b = _a.beMentioned, beMentioned = _b === void 0 ? false : _b, _c = _a.isSelected, isSelected = _c === void 0 ? false : _c, onItemClick = _a.onItemClick, sessionMsgRenderer = _a.sessionMsgRenderer, sessionNameRenderer = _a.sessionNameRenderer, renderSessionMsgIsRead = _a.renderSessionMsgIsRead, _e = _a.prefix, prefix = _e === void 0 ? 'conversation' : _e, _f = _a.commonPrefix, commonPrefix = _f === void 0 ? 'common' : _f;
    var date = (0, react_1.useMemo)(function () {
        var _d = (0, moment_1.default)(time);
        var isCurrentDay = _d.isSame((0, moment_1.default)(), 'day');
        var isCurrentYear = _d.isSame((0, moment_1.default)(), 'year');
        return _d.format(isCurrentDay ? 'HH:mm' : isCurrentYear ? 'MM-DD' : 'YYYY-MM');
    }, [time]);
    var t = (0, common_1.useTranslation)().t;
    var msg = (0, react_1.useMemo)(function () {
        var _a = lastMsg || {}, _b = _a.type, type = _b === void 0 ? '' : _b, _c = _a.body, body = _c === void 0 ? '' : _c, status = _a.status;
        if (!type) {
            return '';
        }
        if (status === 'sending') {
            return '';
        }
        if (status === 'sendFailed' || status === 'refused') {
            return react_1.default.createElement(icons_1.ExclamationCircleFilled, { style: { color: 'red' } });
        }
        return lastMsg ? (0, common_1.getMsgContentTipByType)(lastMsg, t) : '';
    }, [lastMsg, t]);
    return (react_1.default.createElement(antd_1.Dropdown, { overlay: menuRenderer, trigger: ['contextMenu'] },
        react_1.default.createElement("div", { className: "".concat(prefix, "-item ").concat(isSelected ? "".concat(prefix, "-item-select") : '', " ").concat(isTop ? "".concat(prefix, "-item-top") : ''), onClick: onItemClick },
            avatarRenderer,
            react_1.default.createElement("div", { className: "".concat(prefix, "-item-content") },
                react_1.default.createElement("div", { className: "".concat(prefix, "-item-content-name") }, sessionNameRenderer !== null && sessionNameRenderer !== void 0 ? sessionNameRenderer : sessionName),
                react_1.default.createElement("div", { className: "".concat(prefix, "-item-content-msg") },
                    beMentioned && (react_1.default.createElement("span", { className: "".concat(prefix, "-item-content-mention") }, t('beMentioned'))), renderSessionMsgIsRead === null || renderSessionMsgIsRead === void 0 ? void 0 :
                    renderSessionMsgIsRead(),
                    react_1.default.createElement("div", { className: "".concat(prefix, "-item-content-msg-body") }, sessionMsgRenderer !== null && sessionMsgRenderer !== void 0 ? sessionMsgRenderer : msg))),
            react_1.default.createElement("div", { className: "".concat(prefix, "-item-state") },
                react_1.default.createElement("div", { className: "".concat(prefix, "-item-state-date") }, date),
                react_1.default.createElement("div", { className: "".concat(prefix, "-item-state-mute") }, isMute ? react_1.default.createElement(common_1.CommonIcon, { type: "icon-xiaoximiandarao" }) : null)))));
};
exports.ConversationItem = ConversationItem;
