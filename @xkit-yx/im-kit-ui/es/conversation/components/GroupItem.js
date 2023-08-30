import React, { useMemo } from 'react';
import { Menu } from 'antd';
import { CrudeAvatar, CommonIcon, useTranslation } from '../../common';
import { ConversationItem } from './ConversationItem';
export var GroupItem = function (_a) {
    var onStickTopChange = _a.onStickTopChange, onDeleteClick = _a.onDeleteClick, teamId = _a.teamId, name = _a.name, avatar = _a.avatar, unread = _a.unread, lastMsg = _a.lastMsg, beMentioned = _a.beMentioned, stickTopInfo = _a.stickTopInfo, updateTime = _a.updateTime, isSelected = _a.isSelected, onItemClick = _a.onItemClick, avatarRenderer = _a.avatarRenderer, sessionNameRenderer = _a.sessionNameRenderer, sessionMsgRenderer = _a.sessionMsgRenderer, _b = _a.prefix, prefix = _b === void 0 ? 'conversation' : _b, _c = _a.commonPrefix, commonPrefix = _c === void 0 ? 'common' : _c;
    var t = useTranslation().t;
    var menuRenderer = useMemo(function () {
        var items = [
            {
                label: (stickTopInfo === null || stickTopInfo === void 0 ? void 0 : stickTopInfo.isStickOnTop)
                    ? t('deleteStickTopText')
                    : t('addStickTopText'),
                icon: (stickTopInfo === null || stickTopInfo === void 0 ? void 0 : stickTopInfo.isStickOnTop) ? (React.createElement(CommonIcon, { type: "icon-quxiaozhiding" })) : (React.createElement(CommonIcon, { type: "icon-xiaoxizhiding" })),
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
                    case 'deleteSession':
                        onDeleteClick();
                        break;
                    default:
                        break;
                }
            }, items: items }));
    }, [stickTopInfo === null || stickTopInfo === void 0 ? void 0 : stickTopInfo.isStickOnTop, onStickTopChange, onDeleteClick, t]);
    return (React.createElement(ConversationItem, { isTop: !!(stickTopInfo === null || stickTopInfo === void 0 ? void 0 : stickTopInfo.isStickOnTop), isMute: false, sessionName: name || teamId, time: (lastMsg === null || lastMsg === void 0 ? void 0 : lastMsg.time) || updateTime, lastMsg: lastMsg, beMentioned: beMentioned, isSelected: isSelected, onItemClick: onItemClick, prefix: prefix, commonPrefix: commonPrefix, menuRenderer: menuRenderer, sessionMsgRenderer: sessionMsgRenderer, sessionNameRenderer: sessionNameRenderer, avatarRenderer: avatarRenderer !== null && avatarRenderer !== void 0 ? avatarRenderer : (React.createElement(CrudeAvatar, { nick: name, account: teamId, avatar: avatar, count: isSelected ? 0 : unread })) }));
};
