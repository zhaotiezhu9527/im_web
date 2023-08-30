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
var ChatTeamMessageList = (0, react_1.forwardRef)(function (_a, ref) {
    var _b = _a.prefix, prefix = _b === void 0 ? 'chat' : _b, _c = _a.commonPrefix, commonPrefix = _c === void 0 ? 'common' : _c, msgs = _a.msgs, msgOperMenu = _a.msgOperMenu, replyMsgsMap = _a.replyMsgsMap, members = _a.members, _d = _a.receiveMsgBtnVisible, receiveMsgBtnVisible = _d === void 0 ? false : _d, _e = _a.strangerNotiVisible, strangerNotiVisible = _e === void 0 ? false : _e, _f = _a.strangerNotiText, strangerNotiText = _f === void 0 ? '' : _f, onReceiveMsgBtnClick = _a.onReceiveMsgBtnClick, loadingMore = _a.loadingMore, noMore = _a.noMore, myAccount = _a.myAccount, onResend = _a.onResend, onMessageAction = _a.onMessageAction, onMessageAvatarAction = _a.onMessageAvatarAction, onReeditClick = _a.onReeditClick, onScroll = _a.onScroll, renderTeamCustomMessage = _a.renderTeamCustomMessage, renderMessageAvatar = _a.renderMessageAvatar, renderMessageName = _a.renderMessageName, renderMessageInnerContent = _a.renderMessageInnerContent, renderMessageOuterContent = _a.renderMessageOuterContent;
    var _prefix = "".concat(prefix, "-message-list");
    var t = (0, common_1.useTranslation)().t;
    var localOptions = (0, common_1.useStateContext)().localOptions;
    var renderMsgs = im_store_1.storeUtils.getFilterMsgs(msgs);
    return (react_1.default.createElement("div", { className: _prefix, ref: ref, onScroll: onScroll },
        react_1.default.createElement("div", { className: "".concat(_prefix, "-tip") }, noMore ? t('noMoreText') : loadingMore ? react_1.default.createElement(antd_1.Spin, null) : null),
        react_1.default.createElement("div", { className: "".concat(_prefix, "-content") }, renderMsgs.map(function (msg) {
            var _a, _b, _c, _d, _e;
            var msgItem = (_a = renderTeamCustomMessage === null || renderTeamCustomMessage === void 0 ? void 0 : renderTeamCustomMessage({
                msg: msg,
                replyMsg: replyMsgsMap[msg.idClient],
                members: members,
                onResend: onResend,
                onReeditClick: onReeditClick,
                onMessageAction: onMessageAction,
            })) !== null && _a !== void 0 ? _a : (react_1.default.createElement(ChatMessageItem_1.default, { key: msg.idClient, prefix: prefix, commonPrefix: commonPrefix, msg: msg, msgOperMenu: msgOperMenu, replyMsg: replyMsgsMap[msg.idClient], normalStatusRenderer: localOptions.teamMsgReceiptVisible ? (react_1.default.createElement(common_1.ReadPercent, { unread: (_c = (_b = msg.attach) === null || _b === void 0 ? void 0 : _b.yxUnread) !== null && _c !== void 0 ? _c : members.length - 1, read: (_e = (_d = msg.attach) === null || _d === void 0 ? void 0 : _d.yxRead) !== null && _e !== void 0 ? _e : 0, hoverable: true, prefix: commonPrefix })) : null, myAccount: myAccount, onResend: onResend, onMessageAction: onMessageAction, onMessageAvatarAction: onMessageAvatarAction, onReeditClick: onReeditClick, renderMessageAvatar: renderMessageAvatar, renderMessageName: renderMessageName, renderMessageInnerContent: renderMessageInnerContent, renderMessageOuterContent: renderMessageOuterContent }));
            return (react_1.default.createElement("div", { id: msg.idClient, key: msg.idClient }, msgItem));
        })),
        receiveMsgBtnVisible ? (react_1.default.createElement("div", { className: "".concat(_prefix, "-tobottom"), onClick: onReceiveMsgBtnClick },
            react_1.default.createElement("span", null, t('receiveText')),
            react_1.default.createElement(icons_1.ArrowDownOutlined, null))) : null,
        strangerNotiVisible ? (react_1.default.createElement(antd_1.Alert, { className: "".concat(_prefix, "-stranger-noti"), banner: true, closable: true, message: strangerNotiText })) : null));
});
exports.default = ChatTeamMessageList;
