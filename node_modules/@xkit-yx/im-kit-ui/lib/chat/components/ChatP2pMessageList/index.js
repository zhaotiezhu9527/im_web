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
var react_1 = __importStar(require("react"));
var ChatMessageItem_1 = __importDefault(require("../ChatMessageItem"));
var antd_1 = require("antd");
var icons_1 = require("@ant-design/icons");
var common_1 = require("../../../common");
var im_store_1 = require("@xkit-yx/im-store");
var mobx_react_1 = require("mobx-react");
var ChatP2pMessageList = (0, mobx_react_1.observer)((0, react_1.forwardRef)(function (_a, ref) {
    var _b = _a.prefix, prefix = _b === void 0 ? 'chat' : _b, _c = _a.commonPrefix, commonPrefix = _c === void 0 ? 'common' : _c, msgs = _a.msgs, replyMsgsMap = _a.replyMsgsMap, member = _a.member, _d = _a.receiveMsgBtnVisible, receiveMsgBtnVisible = _d === void 0 ? false : _d, _e = _a.msgReceiptTime, msgReceiptTime = _e === void 0 ? 0 : _e, msgOperMenu = _a.msgOperMenu, onReceiveMsgBtnClick = _a.onReceiveMsgBtnClick, loadingMore = _a.loadingMore, noMore = _a.noMore, myAccount = _a.myAccount, onResend = _a.onResend, onMessageAction = _a.onMessageAction, onReeditClick = _a.onReeditClick, onScroll = _a.onScroll, renderP2pCustomMessage = _a.renderP2pCustomMessage, renderMessageAvatar = _a.renderMessageAvatar, renderMessageName = _a.renderMessageName, renderMessageOuterContent = _a.renderMessageOuterContent, renderMessageInnerContent = _a.renderMessageInnerContent;
    var _prefix = "".concat(prefix, "-message-list");
    var t = (0, common_1.useTranslation)().t;
    var _f = (0, common_1.useStateContext)(), store = _f.store, localOptions = _f.localOptions;
    var renderMsgs = im_store_1.storeUtils.getFilterMsgs(msgs);
    return (react_1.default.createElement("div", { className: _prefix, ref: ref, onScroll: onScroll },
        react_1.default.createElement("div", { className: "".concat(_prefix, "-tip") }, noMore ? t('noMoreText') : loadingMore ? react_1.default.createElement(antd_1.Spin, null) : null),
        react_1.default.createElement("div", { className: "".concat(_prefix, "-content") }, renderMsgs.map(function (msg) {
            var _a;
            var msgItem = (_a = renderP2pCustomMessage === null || renderP2pCustomMessage === void 0 ? void 0 : renderP2pCustomMessage({
                msg: msg,
                replyMsg: replyMsgsMap[msg.idClient],
                member: member,
                onResend: onResend,
                onReeditClick: onReeditClick,
                onMessageAction: onMessageAction,
            })) !== null && _a !== void 0 ? _a : (react_1.default.createElement(ChatMessageItem_1.default, { key: msg.idClient, prefix: prefix, commonPrefix: commonPrefix, msg: msg, msgOperMenu: msgOperMenu, replyMsg: replyMsgsMap[msg.idClient], normalStatusRenderer: localOptions.p2pMsgReceiptVisible ? (react_1.default.createElement(common_1.ReadPercent, { unread: msg.time <= msgReceiptTime ? 0 : 1, read: msg.time <= msgReceiptTime ? 1 : 0, prefix: commonPrefix })) : null, myAccount: myAccount, onResend: onResend, onMessageAction: onMessageAction, onReeditClick: onReeditClick, renderMessageAvatar: renderMessageAvatar, renderMessageName: renderMessageName, renderMessageInnerContent: renderMessageInnerContent, renderMessageOuterContent: renderMessageOuterContent }));
            return (react_1.default.createElement("div", { id: msg.idClient, key: msg.idClient }, msgItem));
        })),
        receiveMsgBtnVisible ? (react_1.default.createElement("div", { className: "".concat(_prefix, "-tobottom"), onClick: onReceiveMsgBtnClick },
            react_1.default.createElement("span", null, t('receiveText')),
            react_1.default.createElement(icons_1.ArrowDownOutlined, null))) : null,
        store.uiStore.getRelation(member.account) === 'stranger' ? (react_1.default.createElement(antd_1.Alert, { className: "".concat(_prefix, "-stranger-noti"), banner: true, closable: true, message: "".concat(store.uiStore.getAppellation({
                account: member.account,
            }), " ").concat(t('strangerNotiText')) })) : null));
}));
exports.default = ChatP2pMessageList;
