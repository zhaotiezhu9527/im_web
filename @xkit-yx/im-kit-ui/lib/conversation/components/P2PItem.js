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
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.P2PItem = void 0;
var react_1 = __importStar(require("react"));
var antd_1 = require("antd");
var common_1 = require("../../common");
var ConversationItem_1 = require("./ConversationItem");
var icons_1 = require("@ant-design/icons");
var mobx_react_1 = require("mobx-react");
exports.P2PItem = (0, mobx_react_1.observer)(function (_a) {
    var onStickTopChange = _a.onStickTopChange, onDeleteClick = _a.onDeleteClick, onMuteChange = _a.onMuteChange, onItemClick = _a.onItemClick, isMute = _a.isMute, stickTopInfo = _a.stickTopInfo, to = _a.to, unread = _a.unread, lastMsg = _a.lastMsg, updateTime = _a.updateTime, isSelected = _a.isSelected, avatarRenderer = _a.avatarRenderer, sessionMsgRenderer = _a.sessionMsgRenderer, sessionNameRenderer = _a.sessionNameRenderer, _b = _a.prefix, prefix = _b === void 0 ? 'conversation' : _b, _c = _a.commonPrefix, commonPrefix = _c === void 0 ? 'common' : _c, msgReceiptTime = _a.msgReceiptTime, props = __rest(_a, ["onStickTopChange", "onDeleteClick", "onMuteChange", "onItemClick", "isMute", "stickTopInfo", "to", "unread", "lastMsg", "updateTime", "isSelected", "avatarRenderer", "sessionMsgRenderer", "sessionNameRenderer", "prefix", "commonPrefix", "msgReceiptTime"]);
    var t = (0, common_1.useTranslation)().t;
    var _d = (0, common_1.useStateContext)(), store = _d.store, localOptions = _d.localOptions;
    var menuRenderer = (0, react_1.useMemo)(function () {
        var items = [
            {
                label: (stickTopInfo === null || stickTopInfo === void 0 ? void 0 : stickTopInfo.isStickOnTop)
                    ? t('deleteStickTopText')
                    : t('addStickTopText'),
                icon: (stickTopInfo === null || stickTopInfo === void 0 ? void 0 : stickTopInfo.isStickOnTop) ? (react_1.default.createElement(common_1.CommonIcon, { type: "icon-quxiaozhiding" })) : (react_1.default.createElement(common_1.CommonIcon, { type: "icon-xiaoxizhiding" })),
                key: 'stickTop',
            },
            {
                label: isMute ? t('unmuteSessionText') : t('muteSessionText'),
                icon: isMute ? (react_1.default.createElement(common_1.CommonIcon, { type: "icon-quxiaoxiaoximiandarao" })) : (react_1.default.createElement(common_1.CommonIcon, { type: "icon-xiaoximiandarao" })),
                key: 'muteSession',
            },
            {
                label: t('deleteSessionText'),
                icon: react_1.default.createElement(common_1.CommonIcon, { type: "icon-shanchu" }),
                key: 'deleteSession',
            },
        ];
        return (react_1.default.createElement(antd_1.Menu, { onClick: function (_a) {
                var key = _a.key, domEvent = _a.domEvent;
                domEvent.stopPropagation();
                switch (key) {
                    case 'stickTop':
                        onStickTopChange(!(stickTopInfo === null || stickTopInfo === void 0 ? void 0 : stickTopInfo.isStickOnTop));
                        break;
                    case 'muteSession':
                        onMuteChange(!isMute);
                        break;
                    case 'deleteSession':
                        onDeleteClick();
                        break;
                    default:
                        break;
                }
            }, items: items }));
    }, [
        isMute,
        stickTopInfo === null || stickTopInfo === void 0 ? void 0 : stickTopInfo.isStickOnTop,
        onStickTopChange,
        onDeleteClick,
        onMuteChange,
        t,
    ]);
    var renderSessionMsgIsRead = function () {
        var _a;
        return localOptions.p2pMsgReceiptVisible &&
            (lastMsg === null || lastMsg === void 0 ? void 0 : lastMsg.flow) === 'out' &&
            (lastMsg === null || lastMsg === void 0 ? void 0 : lastMsg.type) !== 'g2' &&
            (lastMsg === null || lastMsg === void 0 ? void 0 : lastMsg.type) !== 'notification' ? (react_1.default.createElement("div", { className: "".concat(prefix, "-item-content-read-status") }, (msgReceiptTime !== null && msgReceiptTime !== void 0 ? msgReceiptTime : 0) - ((_a = lastMsg === null || lastMsg === void 0 ? void 0 : lastMsg.time) !== null && _a !== void 0 ? _a : 0) > 0 ? (react_1.default.createElement(icons_1.CheckCircleOutlined, { className: "".concat(prefix, "-item-content-read-icon") })) : (react_1.default.createElement(common_1.ReadPercent, { radius: 7, unread: 1, read: 0, prefix: commonPrefix })))) : null;
    };
    return (react_1.default.createElement(ConversationItem_1.ConversationItem, { isTop: !!(stickTopInfo === null || stickTopInfo === void 0 ? void 0 : stickTopInfo.isStickOnTop), isMute: isMute, sessionName: store.uiStore.getAppellation({ account: to }), time: (lastMsg === null || lastMsg === void 0 ? void 0 : lastMsg.time) || updateTime, lastMsg: lastMsg, isSelected: isSelected, onItemClick: onItemClick, menuRenderer: menuRenderer, prefix: prefix, commonPrefix: commonPrefix, sessionMsgRenderer: sessionMsgRenderer, sessionNameRenderer: sessionNameRenderer, renderSessionMsgIsRead: renderSessionMsgIsRead, avatarRenderer: avatarRenderer !== null && avatarRenderer !== void 0 ? avatarRenderer : (react_1.default.createElement(common_1.ComplexAvatarContainer, { account: to, prefix: commonPrefix, canClick: false, count: isSelected ? 0 : unread, dot: isSelected ? false : isMute && unread > 0 })) }));
});
