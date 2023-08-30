import React, { Fragment, useRef } from 'react';
import { Dropdown, Menu, Tooltip } from 'antd';
import { LoadingOutlined, CheckCircleOutlined, ExclamationCircleFilled, } from '@ant-design/icons';
import classNames from 'classnames';
import moment from 'moment';
import { ParseSession, ComplexAvatarContainer, MyAvatarContainer, useTranslation, CommonIcon, useStateContext, } from '../../../common';
import { RollbackOutlined, DeleteOutlined } from '@ant-design/icons';
import { observer } from 'mobx-react';
import { mergeActions } from '../../../utils';
export var ChatMessageItem = observer(function (_a) {
    var _b, _c;
    var _d, _e, _f, _g;
    var msg = _a.msg, replyMsg = _a.replyMsg, myAccount = _a.myAccount, normalStatusRenderer = _a.normalStatusRenderer, msgOperMenu = _a.msgOperMenu, onResend = _a.onResend, onMessageAction = _a.onMessageAction, onMessageAvatarAction = _a.onMessageAvatarAction, onReeditClick = _a.onReeditClick, renderMessageAvatar = _a.renderMessageAvatar, renderMessageName = _a.renderMessageName, renderMessageOuterContent = _a.renderMessageOuterContent, renderMessageInnerContent = _a.renderMessageInnerContent, _h = _a.prefix, prefix = _h === void 0 ? 'chat' : _h, _j = _a.commonPrefix, commonPrefix = _j === void 0 ? 'common' : _j;
    var t = useTranslation().t;
    var store = useStateContext().store;
    var _prefix = "".concat(prefix, "-message-list-item");
    var from = msg.from, 
    // fromNick,
    body = msg.body, attach = msg.attach, idClient = msg.idClient, status = msg.status, time = msg.time, type = msg.type, scene = msg.scene, to = msg.to;
    var messageActionDropdownContainerRef = useRef(null);
    var messageAvatarActionDropdownContainerRef = useRef(null);
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
            return React.createElement(LoadingOutlined, { className: "".concat(_prefix, "-status-icon") });
        }
        if (status === 'read') {
            return React.createElement(CheckCircleOutlined, { className: "".concat(_prefix, "-status-icon") });
        }
        if (status === 'sendFailed') {
            return (React.createElement(Tooltip, { title: t('sendMsgFailedText') },
                React.createElement(ExclamationCircleFilled, { className: "".concat(_prefix, "-status-icon-fail"), onClick: function () { return onResend(msg); } })));
        }
        if (status === 'refused') {
            return (React.createElement(Tooltip, { title: t('sendBlackFailedText') },
                React.createElement(ExclamationCircleFilled, { className: "".concat(_prefix, "-status-icon-fail"), onClick: function () { return onResend(msg); } })));
        }
        return normalStatusRenderer || null;
    };
    var renderMsgDate = function () {
        var date = moment(time);
        var isCurrentDay = date.isSame(moment(), 'day');
        var isCurrentYear = date.isSame(moment(), 'year');
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
                icon: React.createElement(CommonIcon, { type: "icon-huifu" }),
            },
            {
                show: 1,
                label: t('deleteText'),
                key: 'delete',
                icon: React.createElement(DeleteOutlined, null),
            },
            {
                show: ['sending', 'sendFailed', 'refused', 'delete'].includes(status) ||
                    type === 'audio'
                    ? 0
                    : 1,
                label: t('forwardText'),
                key: 'forward',
                icon: React.createElement(CommonIcon, { type: "icon-zhuanfa" }),
            },
            {
                show: canRecall ? 1 : 0,
                label: t('recallText'),
                key: 'recall',
                icon: React.createElement(RollbackOutlined, null),
            },
        ];
        var menuItems = msgOperMenu
            ? mergeActions(defaultMenuItems, msgOperMenu, 'key')
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
        return (React.createElement("div", { key: idClient, className: "".concat(_prefix, "-recall") }, attachType === 'reCallMsg' ? (React.createElement(React.Fragment, null, "".concat(t('you')).concat(t('recallMessageText')),
            canEdit ? (React.createElement("span", { className: "".concat(_prefix, "-reedit"), onClick: function () { return onReeditClick(msg); } }, t('reeditText'))) : null)) : ("".concat(isSelf ? t('you') : nick, " ").concat(t('recallMessageText')))));
    };
    return attachType === 'reCallMsg' || attachType === 'beReCallMsg' ? (renderSpecialMsg()) : type === 'notification' ? (React.createElement(ParseSession, { replyMsg: replyMsg, msg: msg, prefix: commonPrefix })) : (React.createElement("div", { className: classNames("".concat(_prefix, "-wrap"), (_b = {},
            _b["".concat(_prefix, "-self")] = isSelf,
            _b)) }, (_d = renderMessageAvatar === null || renderMessageAvatar === void 0 ? void 0 : renderMessageAvatar(msg)) !== null && _d !== void 0 ? _d : (React.createElement("div", { className: "".concat(_prefix, "-avatar") }, isSelf ? (React.createElement(MyAvatarContainer, { prefix: commonPrefix, canClick: false })) : (React.createElement(Dropdown, { key: idClient, trigger: ['contextMenu'], overlay: onMessageAvatarAction ? (React.createElement(Menu, { onClick: function (_a) {
                var key = _a.key;
                return onMessageAvatarAction === null || onMessageAvatarAction === void 0 ? void 0 : onMessageAvatarAction(key, msg);
            }, items: renderAvatarMenuItems() })) : (React.createElement(Fragment, null)), getPopupContainer: function (triggerNode) {
            return messageAvatarActionDropdownContainerRef.current || triggerNode;
        } },
        React.createElement("div", { className: "".concat(_prefix, "-avatar-wrap"), ref: messageAvatarActionDropdownContainerRef },
            React.createElement(ComplexAvatarContainer, { prefix: commonPrefix, account: from })))))),
        React.createElement(Dropdown, { key: idClient, trigger: ['contextMenu'], overlay: React.createElement(Menu, { onClick: function (_a) {
                    var key = _a.key;
                    return onMessageAction(key, msg);
                }, items: renderMenuItems() }), getPopupContainer: function (triggerNode) {
                return messageActionDropdownContainerRef.current || triggerNode;
            } },
            React.createElement("div", { className: "".concat(_prefix, "-content-box"), ref: messageActionDropdownContainerRef }, (_e = renderMessageName === null || renderMessageName === void 0 ? void 0 : renderMessageName(msg)) !== null && _e !== void 0 ? _e : (React.createElement("div", { className: "".concat(_prefix, "-nick") }, nick)),
                React.createElement("div", { className: "".concat(_prefix, "-content") },
                    isSelf && (React.createElement("div", { className: "".concat(_prefix, "-status") }, renderSendStatus())), (_f = renderMessageOuterContent === null || renderMessageOuterContent === void 0 ? void 0 : renderMessageOuterContent(msg)) !== null && _f !== void 0 ? _f : (React.createElement("div", { className: "".concat(_prefix, "-body") }, (_g = renderMessageInnerContent === null || renderMessageInnerContent === void 0 ? void 0 : renderMessageInnerContent(msg)) !== null && _g !== void 0 ? _g : (React.createElement(ParseSession, { replyMsg: replyMsg, msg: msg, prefix: commonPrefix }))))),
                React.createElement("div", { className: classNames("".concat(_prefix, "-date"), (_c = {},
                        _c["".concat(_prefix, "-date-self")] = isSelf,
                        _c)) }, renderMsgDate())))));
});
export default ChatMessageItem;
