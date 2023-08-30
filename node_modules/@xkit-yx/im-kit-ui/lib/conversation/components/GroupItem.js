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
Object.defineProperty(exports, "__esModule", { value: true });
exports.GroupItem = void 0;
var react_1 = __importStar(require("react"));
var antd_1 = require("antd");
var common_1 = require("../../common");
var ConversationItem_1 = require("./ConversationItem");
var GroupItem = function (_a) {
    var onStickTopChange = _a.onStickTopChange, onDeleteClick = _a.onDeleteClick, teamId = _a.teamId, name = _a.name, avatar = _a.avatar, unread = _a.unread, lastMsg = _a.lastMsg, beMentioned = _a.beMentioned, stickTopInfo = _a.stickTopInfo, updateTime = _a.updateTime, isSelected = _a.isSelected, onItemClick = _a.onItemClick, avatarRenderer = _a.avatarRenderer, sessionNameRenderer = _a.sessionNameRenderer, sessionMsgRenderer = _a.sessionMsgRenderer, _b = _a.prefix, prefix = _b === void 0 ? 'conversation' : _b, _c = _a.commonPrefix, commonPrefix = _c === void 0 ? 'common' : _c;
    var t = (0, common_1.useTranslation)().t;
    var menuRenderer = (0, react_1.useMemo)(function () {
        var items = [
            {
                label: (stickTopInfo === null || stickTopInfo === void 0 ? void 0 : stickTopInfo.isStickOnTop)
                    ? t('deleteStickTopText')
                    : t('addStickTopText'),
                icon: (stickTopInfo === null || stickTopInfo === void 0 ? void 0 : stickTopInfo.isStickOnTop) ? (react_1.default.createElement(common_1.CommonIcon, { type: "icon-quxiaozhiding" })) : (react_1.default.createElement(common_1.CommonIcon, { type: "icon-xiaoxizhiding" })),
                key: 'stickTop',
            },
            // {
            //   label: ext === '0' ? t('unmuteSessionText') : t('muteSessionText'),
            //   icon: isMute ? (
            //     <CommonIcon type="icon-quxiaoxiaoximiandarao" />
            //   ) : (
            //     <CommonIcon type="icon-xiaoximiandarao" />
            //   ),
            //   key: 'muteSession',
            // },
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
                    case 'deleteSession':
                        onDeleteClick();
                        break;
                    default:
                        break;
                }
            }, items: items }));
    }, [stickTopInfo === null || stickTopInfo === void 0 ? void 0 : stickTopInfo.isStickOnTop, onStickTopChange, onDeleteClick, t]);
    return (react_1.default.createElement(ConversationItem_1.ConversationItem, { isTop: !!(stickTopInfo === null || stickTopInfo === void 0 ? void 0 : stickTopInfo.isStickOnTop), isMute: false, sessionName: name || teamId, time: (lastMsg === null || lastMsg === void 0 ? void 0 : lastMsg.time) || updateTime, lastMsg: lastMsg, beMentioned: beMentioned, isSelected: isSelected, onItemClick: onItemClick, prefix: prefix, commonPrefix: commonPrefix, menuRenderer: menuRenderer, sessionMsgRenderer: sessionMsgRenderer, sessionNameRenderer: sessionNameRenderer, avatarRenderer: avatarRenderer !== null && avatarRenderer !== void 0 ? avatarRenderer : (react_1.default.createElement(common_1.CrudeAvatar, { nick: name, account: teamId, avatar: avatar, count: isSelected ? 0 : unread })) }));
};
exports.GroupItem = GroupItem;
