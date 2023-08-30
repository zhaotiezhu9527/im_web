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
import React, { useMemo } from 'react';
import { Menu } from 'antd';
import { ComplexAvatarContainer, CommonIcon, useTranslation, useStateContext, ReadPercent, } from '../../common';
import { ConversationItem } from './ConversationItem';
import { CheckCircleOutlined } from '@ant-design/icons';
import { observer } from 'mobx-react';
export var P2PItem = observer(function (_a) {
    var onStickTopChange = _a.onStickTopChange, onDeleteClick = _a.onDeleteClick, onMuteChange = _a.onMuteChange, onItemClick = _a.onItemClick, isMute = _a.isMute, stickTopInfo = _a.stickTopInfo, to = _a.to, unread = _a.unread, lastMsg = _a.lastMsg, updateTime = _a.updateTime, isSelected = _a.isSelected, avatarRenderer = _a.avatarRenderer, sessionMsgRenderer = _a.sessionMsgRenderer, sessionNameRenderer = _a.sessionNameRenderer, _b = _a.prefix, prefix = _b === void 0 ? 'conversation' : _b, _c = _a.commonPrefix, commonPrefix = _c === void 0 ? 'common' : _c, msgReceiptTime = _a.msgReceiptTime, props = __rest(_a, ["onStickTopChange", "onDeleteClick", "onMuteChange", "onItemClick", "isMute", "stickTopInfo", "to", "unread", "lastMsg", "updateTime", "isSelected", "avatarRenderer", "sessionMsgRenderer", "sessionNameRenderer", "prefix", "commonPrefix", "msgReceiptTime"]);
    var t = useTranslation().t;
    var _d = useStateContext(), store = _d.store, localOptions = _d.localOptions;
    var menuRenderer = useMemo(function () {
        var items = [
            {
                label: (stickTopInfo === null || stickTopInfo === void 0 ? void 0 : stickTopInfo.isStickOnTop)
                    ? t('deleteStickTopText')
                    : t('addStickTopText'),
                icon: (stickTopInfo === null || stickTopInfo === void 0 ? void 0 : stickTopInfo.isStickOnTop) ? (React.createElement(CommonIcon, { type: "icon-quxiaozhiding" })) : (React.createElement(CommonIcon, { type: "icon-xiaoxizhiding" })),
                key: 'stickTop',
            },
            {
                label: isMute ? t('unmuteSessionText') : t('muteSessionText'),
                icon: isMute ? (React.createElement(CommonIcon, { type: "icon-quxiaoxiaoximiandarao" })) : (React.createElement(CommonIcon, { type: "icon-xiaoximiandarao" })),
                key: 'muteSession',
            },
            {
                label: t('deleteSessionText'),
                icon: React.createElement(CommonIcon, { type: "icon-shanchu" }),
                key: 'deleteSession',
            },
        ];
        return (React.createElement(Menu, { onClick: function (_a) {
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
            (lastMsg === null || lastMsg === void 0 ? void 0 : lastMsg.type) !== 'notification' ? (React.createElement("div", { className: "".concat(prefix, "-item-content-read-status") }, (msgReceiptTime !== null && msgReceiptTime !== void 0 ? msgReceiptTime : 0) - ((_a = lastMsg === null || lastMsg === void 0 ? void 0 : lastMsg.time) !== null && _a !== void 0 ? _a : 0) > 0 ? (React.createElement(CheckCircleOutlined, { className: "".concat(prefix, "-item-content-read-icon") })) : (React.createElement(ReadPercent, { radius: 7, unread: 1, read: 0, prefix: commonPrefix })))) : null;
    };
    return (React.createElement(ConversationItem, { isTop: !!(stickTopInfo === null || stickTopInfo === void 0 ? void 0 : stickTopInfo.isStickOnTop), isMute: isMute, sessionName: store.uiStore.getAppellation({ account: to }), time: (lastMsg === null || lastMsg === void 0 ? void 0 : lastMsg.time) || updateTime, lastMsg: lastMsg, isSelected: isSelected, onItemClick: onItemClick, menuRenderer: menuRenderer, prefix: prefix, commonPrefix: commonPrefix, sessionMsgRenderer: sessionMsgRenderer, sessionNameRenderer: sessionNameRenderer, renderSessionMsgIsRead: renderSessionMsgIsRead, avatarRenderer: avatarRenderer !== null && avatarRenderer !== void 0 ? avatarRenderer : (React.createElement(ComplexAvatarContainer, { account: to, prefix: commonPrefix, canClick: false, count: isSelected ? 0 : unread, dot: isSelected ? false : isMute && unread > 0 })) }));
});
