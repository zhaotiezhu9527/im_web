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
exports.ChatMessageItem = void 0;
var react_1 = __importStar(require("react"));
var antd_1 = require("antd");
var icons_1 = require("@ant-design/icons");
var classnames_1 = __importDefault(require("classnames"));
var moment_1 = __importDefault(require("moment"));
var common_1 = require("../../../common");
var icons_2 = require("@ant-design/icons");
var mobx_react_1 = require("mobx-react");
var utils_1 = require("../../../utils");
exports.ChatMessageItem = (0, mobx_react_1.observer)(function (_a) {
    var _b, _c;
    var _d, _e, _f, _g;
    var msg = _a.msg, replyMsg = _a.replyMsg, myAccount = _a.myAccount, normalStatusRenderer = _a.normalStatusRenderer, msgOperMenu = _a.msgOperMenu, onResend = _a.onResend, onMessageAction = _a.onMessageAction, onMessageAvatarAction = _a.onMessageAvatarAction, onReeditClick = _a.onReeditClick, renderMessageAvatar = _a.renderMessageAvatar, renderMessageName = _a.renderMessageName, renderMessageOuterContent = _a.renderMessageOuterContent, renderMessageInnerContent = _a.renderMessageInnerContent, _h = _a.prefix, prefix = _h === void 0 ? 'chat' : _h, _j = _a.commonPrefix, commonPrefix = _j === void 0 ? 'common' : _j;
    var t = (0, common_1.useTranslation)().t;
    var store = (0, common_1.useStateContext)().store;
    var _prefix = "".concat(prefix, "-message-list-item");
    var from = msg.from, 
    // fromNick,
    body = msg.body, attach = msg.attach, idClient = msg.idClient, status = msg.status, time = msg.time, type = msg.type, scene = msg.scene, to = msg.to;
    var messageActionDropdownContainerRef = (0, react_1.useRef)(null);
    var messageAvatarActionDropdownContainerRef = (0, react_1.useRef)(null);
    var isSelf = from === myAccount;
    var nick = store.uiStore.getAppellation({
        account: from,
        teamId: scene === 'team' ? to : undefined,
    });
    var nickWithoutAlias = store.uiStore.getAppellation({
        account: from,
        teamId: scene === 'team' ? to : undefined,
        ignoreAlias: true,
    });
    // 内存中插入的 msg 属性，具体内容参考 msg store
    var _k = attach || { type: '', canRecall: false, canEdit: false, oldBody: '' }, _l = _k.type, attachType = _l === void 0 ? '' : _l, _m = _k.canRecall, canRecall = _m === void 0 ? false : _m, _o = _k.canEdit, canEdit = _o === void 0 ? false : _o, _p = _k.oldBody, oldBody = _p === void 0 ? '' : _p;
    var renderSendStatus = function () {
        if (status === 'sending') {
            return react_1.default.createElement(icons_1.LoadingOutlined, { className: "".concat(_prefix, "-status-icon") });
        }
        if (status === 'read') {
            return react_1.default.createElement(icons_1.CheckCircleOutlined, { className: "".concat(_prefix, "-status-icon") });
        }
        if (status === 'sendFailed') {
            return (react_1.default.createElement(antd_1.Tooltip, { title: t('sendMsgFailedText') },
                react_1.default.createElement(icons_1.ExclamationCircleFilled, { className: "".concat(_prefix, "-status-icon-fail"), onClick: function () { return onResend(msg); } })));
        }
        if (status === 'refused') {
            return (react_1.default.createElement(antd_1.Tooltip, { title: t('sendBlackFailedText') },
                react_1.default.createElement(icons_1.ExclamationCircleFilled, { className: "".concat(_prefix, "-status-icon-fail"), onClick: function () { return onResend(msg); } })));
        }
        return normalStatusRenderer || null;
    };
    var renderMsgDate = function () {
        var date = (0, moment_1.default)(time);
        var isCurrentDay = date.isSame((0, moment_1.default)(), 'day');
        var isCurrentYear = date.isSame((0, moment_1.default)(), 'year');
        return isCurrentDay
            ? date.format('HH:mm:ss')
            : isCurrentYear
                ? date.format('MM-DD HH:mm:ss')
                : date.format('YYYY-MM-DD HH:mm:ss');
    };
    var renderMenuItems = function () {
        var defaultMenuItems = [
            // {
            //   label: '复制',
            //   key: 'copy',
            //   icon: <CopyOutlined />,
            // },
            {
                show: ['sending', 'sendFailed', 'refused', 'delete'].includes(status)
                    ? 0
                    : 1,
                label: t('replyText'),
                key: 'reply',
                icon: react_1.default.createElement(common_1.CommonIcon, { type: "icon-huifu" }),
            },
            {
                show: 1,
                label: t('deleteText'),
                key: 'delete',
                icon: react_1.default.createElement(icons_2.DeleteOutlined, null),
            },
            {
                show: ['sending', 'sendFailed', 'refused', 'delete'].includes(status) ||
                    type === 'audio'
                    ? 0
                    : 1,
                label: t('forwardText'),
                key: 'forward',
                icon: react_1.default.createElement(common_1.CommonIcon, { type: "icon-zhuanfa" }),
            },
            {
                show: canRecall ? 1 : 0,
                label: t('recallText'),
                key: 'recall',
                icon: react_1.default.createElement(icons_2.RollbackOutlined, null),
            },
        ];
        var menuItems = msgOperMenu
            ? (0, utils_1.mergeActions)(defaultMenuItems, msgOperMenu, 'key')
            : defaultMenuItems;
        return menuItems.filter(function (item) { return item.show; });
    };
    var renderAvatarMenuItems = function () {
        return [
            {
                // @ts-ignore: 需求导致不需要 群备注
                label: "@".concat(nickWithoutAlias),
                key: 'mention',
            },
        ];
    };
    var renderSpecialMsg = function () {
        return (react_1.default.createElement("div", { key: idClient, className: "".concat(_prefix, "-recall") }, attachType === 'reCallMsg' ? (react_1.default.createElement(react_1.default.Fragment, null, "".concat(t('you')).concat(t('recallMessageText')),
            canEdit ? (react_1.default.createElement("span", { className: "".concat(_prefix, "-reedit"), onClick: function () { return onReeditClick(msg); } }, t('reeditText'))) : null)) : ("".concat(isSelf ? t('you') : nick, " ").concat(t('recallMessageText')))));
    };
    return attachType === 'reCallMsg' || attachType === 'beReCallMsg' ? (renderSpecialMsg()) : type === 'notification' ? (react_1.default.createElement(common_1.ParseSession, { replyMsg: replyMsg, msg: msg, prefix: commonPrefix })) : (react_1.default.createElement("div", { className: (0, classnames_1.default)("".concat(_prefix, "-wrap"), (_b = {},
            _b["".concat(_prefix, "-self")] = isSelf,
            _b)) }, (_d = renderMessageAvatar === null || renderMessageAvatar === void 0 ? void 0 : renderMessageAvatar(msg)) !== null && _d !== void 0 ? _d : (react_1.default.createElement("div", { className: "".concat(_prefix, "-avatar") }, isSelf ? (react_1.default.createElement(common_1.MyAvatarContainer, { prefix: commonPrefix, canClick: false })) : (react_1.default.createElement(antd_1.Dropdown, { key: idClient, trigger: ['contextMenu'], overlay: onMessageAvatarAction ? (react_1.default.createElement(antd_1.Menu, { onClick: function (_a) {
                var key = _a.key;
                return onMessageAvatarAction === null || onMessageAvatarAction === void 0 ? void 0 : onMessageAvatarAction(key, msg);
            }, items: renderAvatarMenuItems() })) : (react_1.default.createElement(react_1.Fragment, null)), getPopupContainer: function (triggerNode) {
            return messageAvatarActionDropdownContainerRef.current || triggerNode;
        } },
        react_1.default.createElement("div", { className: "".concat(_prefix, "-avatar-wrap"), ref: messageAvatarActionDropdownContainerRef },
            react_1.default.createElement(common_1.ComplexAvatarContainer, { prefix: commonPrefix, account: from })))))),
        react_1.default.createElement(antd_1.Dropdown, { key: idClient, trigger: ['contextMenu'], overlay: react_1.default.createElement(antd_1.Menu, { onClick: function (_a) {
                    var key = _a.key;
                    return onMessageAction(key, msg);
                }, items: renderMenuItems() }), getPopupContainer: function (triggerNode) {
                return messageActionDropdownContainerRef.current || triggerNode;
            } },
            react_1.default.createElement("div", { className: "".concat(_prefix, "-content-box"), ref: messageActionDropdownContainerRef }, (_e = renderMessageName === null || renderMessageName === void 0 ? void 0 : renderMessageName(msg)) !== null && _e !== void 0 ? _e : (react_1.default.createElement("div", { className: "".concat(_prefix, "-nick") }, nick)),
                react_1.default.createElement("div", { className: "".concat(_prefix, "-content") },
                    isSelf && (react_1.default.createElement("div", { className: "".concat(_prefix, "-status") }, renderSendStatus())), (_f = renderMessageOuterContent === null || renderMessageOuterContent === void 0 ? void 0 : renderMessageOuterContent(msg)) !== null && _f !== void 0 ? _f : (react_1.default.createElement("div", { className: "".concat(_prefix, "-body") }, (_g = renderMessageInnerContent === null || renderMessageInnerContent === void 0 ? void 0 : renderMessageInnerContent(msg)) !== null && _g !== void 0 ? _g : (react_1.default.createElement(common_1.ParseSession, { replyMsg: replyMsg, msg: msg, prefix: commonPrefix }))))),
                react_1.default.createElement("div", { className: (0, classnames_1.default)("".concat(_prefix, "-date"), (_c = {},
                        _c["".concat(_prefix, "-date-self")] = isSelf,
                        _c)) }, renderMsgDate())))));
});
exports.default = exports.ChatMessageItem;
