import React, { forwardRef } from 'react';
import MessageListItem from '../ChatMessageItem';
import { Alert, Spin } from 'antd';
import { ArrowDownOutlined } from '@ant-design/icons';
import { ReadPercent, useStateContext, useTranslation } from '../../../common';
import { storeUtils } from '@xkit-yx/im-store';
var ChatTeamMessageList = forwardRef(function (_a, ref) {
    var _b = _a.prefix, prefix = _b === void 0 ? 'chat' : _b, _c = _a.commonPrefix, commonPrefix = _c === void 0 ? 'common' : _c, msgs = _a.msgs, msgOperMenu = _a.msgOperMenu, replyMsgsMap = _a.replyMsgsMap, members = _a.members, _d = _a.receiveMsgBtnVisible, receiveMsgBtnVisible = _d === void 0 ? false : _d, _e = _a.strangerNotiVisible, strangerNotiVisible = _e === void 0 ? false : _e, _f = _a.strangerNotiText, strangerNotiText = _f === void 0 ? '' : _f, onReceiveMsgBtnClick = _a.onReceiveMsgBtnClick, loadingMore = _a.loadingMore, noMore = _a.noMore, myAccount = _a.myAccount, onResend = _a.onResend, onMessageAction = _a.onMessageAction, onMessageAvatarAction = _a.onMessageAvatarAction, onReeditClick = _a.onReeditClick, onScroll = _a.onScroll, renderTeamCustomMessage = _a.renderTeamCustomMessage, renderMessageAvatar = _a.renderMessageAvatar, renderMessageName = _a.renderMessageName, renderMessageInnerContent = _a.renderMessageInnerContent, renderMessageOuterContent = _a.renderMessageOuterContent;
    var _prefix = "".concat(prefix, "-message-list");
    var t = useTranslation().t;
    var localOptions = useStateContext().localOptions;
    var renderMsgs = storeUtils.getFilterMsgs(msgs);
    return (React.createElement("div", { className: _prefix, ref: ref, onScroll: onScroll },
        React.createElement("div", { className: "".concat(_prefix, "-tip") }, noMore ? t('noMoreText') : loadingMore ? React.createElement(Spin, null) : null),
        React.createElement("div", { className: "".concat(_prefix, "-content") }, renderMsgs.map(function (msg) {
            var _a, _b, _c, _d, _e;
            var msgItem = (_a = renderTeamCustomMessage === null || renderTeamCustomMessage === void 0 ? void 0 : renderTeamCustomMessage({
                msg: msg,
                replyMsg: replyMsgsMap[msg.idClient],
                members: members,
                onResend: onResend,
                onReeditClick: onReeditClick,
                onMessageAction: onMessageAction,
            })) !== null && _a !== void 0 ? _a : (React.createElement(MessageListItem, { key: msg.idClient, prefix: prefix, commonPrefix: commonPrefix, msg: msg, msgOperMenu: msgOperMenu, replyMsg: replyMsgsMap[msg.idClient], normalStatusRenderer: localOptions.teamMsgReceiptVisible ? (React.createElement(ReadPercent, { unread: (_c = (_b = msg.attach) === null || _b === void 0 ? void 0 : _b.yxUnread) !== null && _c !== void 0 ? _c : members.length - 1, read: (_e = (_d = msg.attach) === null || _d === void 0 ? void 0 : _d.yxRead) !== null && _e !== void 0 ? _e : 0, hoverable: true, prefix: commonPrefix })) : null, myAccount: myAccount, onResend: onResend, onMessageAction: onMessageAction, onMessageAvatarAction: onMessageAvatarAction, onReeditClick: onReeditClick, renderMessageAvatar: renderMessageAvatar, renderMessageName: renderMessageName, renderMessageInnerContent: renderMessageInnerContent, renderMessageOuterContent: renderMessageOuterContent }));
            return (React.createElement("div", { id: msg.idClient, key: msg.idClient }, msgItem));
        })),
        receiveMsgBtnVisible ? (React.createElement("div", { className: "".concat(_prefix, "-tobottom"), onClick: onReceiveMsgBtnClick },
            React.createElement("span", null, t('receiveText')),
            React.createElement(ArrowDownOutlined, null))) : null,
        strangerNotiVisible ? (React.createElement(Alert, { className: "".concat(_prefix, "-stranger-noti"), banner: true, closable: true, message: strangerNotiText })) : null));
});
export default ChatTeamMessageList;
