import React, { forwardRef } from 'react';
import MessageListItem from '../ChatMessageItem';
import { Alert, Spin } from 'antd';
import { ArrowDownOutlined } from '@ant-design/icons';
import { useTranslation, ReadPercent, useStateContext } from '../../../common';
import { storeUtils } from '@xkit-yx/im-store';
import { observer } from 'mobx-react';
var ChatP2pMessageList = observer(forwardRef(function (_a, ref) {
    var _b = _a.prefix, prefix = _b === void 0 ? 'chat' : _b, _c = _a.commonPrefix, commonPrefix = _c === void 0 ? 'common' : _c, msgs = _a.msgs, replyMsgsMap = _a.replyMsgsMap, member = _a.member, _d = _a.receiveMsgBtnVisible, receiveMsgBtnVisible = _d === void 0 ? false : _d, _e = _a.msgReceiptTime, msgReceiptTime = _e === void 0 ? 0 : _e, msgOperMenu = _a.msgOperMenu, onReceiveMsgBtnClick = _a.onReceiveMsgBtnClick, loadingMore = _a.loadingMore, noMore = _a.noMore, myAccount = _a.myAccount, onResend = _a.onResend, onMessageAction = _a.onMessageAction, onReeditClick = _a.onReeditClick, onScroll = _a.onScroll, renderP2pCustomMessage = _a.renderP2pCustomMessage, renderMessageAvatar = _a.renderMessageAvatar, renderMessageName = _a.renderMessageName, renderMessageOuterContent = _a.renderMessageOuterContent, renderMessageInnerContent = _a.renderMessageInnerContent;
    var _prefix = "".concat(prefix, "-message-list");
    var t = useTranslation().t;
    var _f = useStateContext(), store = _f.store, localOptions = _f.localOptions;
    var renderMsgs = storeUtils.getFilterMsgs(msgs);
    return (React.createElement("div", { className: _prefix, ref: ref, onScroll: onScroll },
        React.createElement("div", { className: "".concat(_prefix, "-tip") }, noMore ? t('noMoreText') : loadingMore ? React.createElement(Spin, null) : null),
        React.createElement("div", { className: "".concat(_prefix, "-content") }, renderMsgs.map(function (msg) {
            var _a;
            var msgItem = (_a = renderP2pCustomMessage === null || renderP2pCustomMessage === void 0 ? void 0 : renderP2pCustomMessage({
                msg: msg,
                replyMsg: replyMsgsMap[msg.idClient],
                member: member,
                onResend: onResend,
                onReeditClick: onReeditClick,
                onMessageAction: onMessageAction,
            })) !== null && _a !== void 0 ? _a : (React.createElement(MessageListItem, { key: msg.idClient, prefix: prefix, commonPrefix: commonPrefix, msg: msg, msgOperMenu: msgOperMenu, replyMsg: replyMsgsMap[msg.idClient], normalStatusRenderer: localOptions.p2pMsgReceiptVisible ? (React.createElement(ReadPercent, { unread: msg.time <= msgReceiptTime ? 0 : 1, read: msg.time <= msgReceiptTime ? 1 : 0, prefix: commonPrefix })) : null, myAccount: myAccount, onResend: onResend, onMessageAction: onMessageAction, onReeditClick: onReeditClick, renderMessageAvatar: renderMessageAvatar, renderMessageName: renderMessageName, renderMessageInnerContent: renderMessageInnerContent, renderMessageOuterContent: renderMessageOuterContent }));
            return (React.createElement("div", { id: msg.idClient, key: msg.idClient }, msgItem));
        })),
        receiveMsgBtnVisible ? (React.createElement("div", { className: "".concat(_prefix, "-tobottom"), onClick: onReceiveMsgBtnClick },
            React.createElement("span", null, t('receiveText')),
            React.createElement(ArrowDownOutlined, null))) : null,
        store.uiStore.getRelation(member.account) === 'stranger' ? (React.createElement(Alert, { className: "".concat(_prefix, "-stranger-noti"), banner: true, closable: true, message: "".concat(store.uiStore.getAppellation({
                account: member.account,
            }), " ").concat(t('strangerNotiText')) })) : null));
}));
export default ChatP2pMessageList;
