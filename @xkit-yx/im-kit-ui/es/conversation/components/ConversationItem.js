import React, { useMemo } from 'react';
import moment from 'moment';
import { Dropdown } from 'antd';
import { ExclamationCircleFilled } from '@ant-design/icons';
import { CommonIcon, getMsgContentTipByType, useTranslation, } from '../../common';
export var ConversationItem = function (_a) {
    var isTop = _a.isTop, isMute = _a.isMute, sessionName = _a.sessionName, menuRenderer = _a.menuRenderer, avatarRenderer = _a.avatarRenderer, time = _a.time, lastMsg = _a.lastMsg, _b = _a.beMentioned, beMentioned = _b === void 0 ? false : _b, _c = _a.isSelected, isSelected = _c === void 0 ? false : _c, onItemClick = _a.onItemClick, sessionMsgRenderer = _a.sessionMsgRenderer, sessionNameRenderer = _a.sessionNameRenderer, renderSessionMsgIsRead = _a.renderSessionMsgIsRead, _e = _a.prefix, prefix = _e === void 0 ? 'conversation' : _e, _f = _a.commonPrefix, commonPrefix = _f === void 0 ? 'common' : _f;
    var date = useMemo(function () {
        var _d = moment(time);
        var isCurrentDay = _d.isSame(moment(), 'day');
        var isCurrentYear = _d.isSame(moment(), 'year');
        return _d.format(isCurrentDay ? 'HH:mm' : isCurrentYear ? 'MM-DD' : 'YYYY-MM');
    }, [time]);
    var t = useTranslation().t;
    var msg = useMemo(function () {
        var _a = lastMsg || {}, _b = _a.type, type = _b === void 0 ? '' : _b, _c = _a.body, body = _c === void 0 ? '' : _c, status = _a.status;
        if (!type) {
            return '';
        }
        if (status === 'sending') {
            return '';
        }
        if (status === 'sendFailed' || status === 'refused') {
            return React.createElement(ExclamationCircleFilled, { style: { color: 'red' } });
        }
        return lastMsg ? getMsgContentTipByType(lastMsg, t) : '';
    }, [lastMsg, t]);
    return (React.createElement(Dropdown, { overlay: menuRenderer, trigger: ['contextMenu'] },
        React.createElement("div", { className: "".concat(prefix, "-item ").concat(isSelected ? "".concat(prefix, "-item-select") : '', " ").concat(isTop ? "".concat(prefix, "-item-top") : ''), onClick: onItemClick },
            avatarRenderer,
            React.createElement("div", { className: "".concat(prefix, "-item-content") },
                React.createElement("div", { className: "".concat(prefix, "-item-content-name") }, sessionNameRenderer !== null && sessionNameRenderer !== void 0 ? sessionNameRenderer : sessionName),
                React.createElement("div", { className: "".concat(prefix, "-item-content-msg") },
                    beMentioned && (React.createElement("span", { className: "".concat(prefix, "-item-content-mention") }, t('beMentioned'))), renderSessionMsgIsRead === null || renderSessionMsgIsRead === void 0 ? void 0 :
                    renderSessionMsgIsRead(),
                    React.createElement("div", { className: "".concat(prefix, "-item-content-msg-body") }, sessionMsgRenderer !== null && sessionMsgRenderer !== void 0 ? sessionMsgRenderer : msg))),
            React.createElement("div", { className: "".concat(prefix, "-item-state") },
                React.createElement("div", { className: "".concat(prefix, "-item-state-date") }, date),
                React.createElement("div", { className: "".concat(prefix, "-item-state-mute") }, isMute ? React.createElement(CommonIcon, { type: "icon-xiaoximiandarao" }) : null)))));
};
