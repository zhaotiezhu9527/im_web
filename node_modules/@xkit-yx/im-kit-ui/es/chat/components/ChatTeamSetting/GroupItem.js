var __read = (this && this.__read) || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
};
import React, { useState } from 'react';
import { Modal } from 'antd';
import classnames from 'classnames';
import { ComplexAvatarContainer, useTranslation, useStateContext, } from '../../../common';
import { observer } from 'mobx-react';
var confirm = Modal.confirm;
export var GroupItem = observer(function (_a) {
    var myMemberInfo = _a.myMemberInfo, member = _a.member, onRemoveTeamMemberClick = _a.onRemoveTeamMemberClick, afterSendMsgClick = _a.afterSendMsgClick, _b = _a.prefix, prefix = _b === void 0 ? 'chat' : _b, _c = _a.commonPrefix, commonPrefix = _c === void 0 ? 'common' : _c;
    var _prefix = "".concat(prefix, "-group-item");
    var t = useTranslation().t;
    var store = useStateContext().store;
    var _d = __read(useState(false), 2), isActive = _d[0], setIsActive = _d[1];
    var isSelf = member.account === myMemberInfo.account;
    var renderRemoveBtn = function () {
        return (React.createElement("a", { type: "link", className: "".concat(_prefix, "-remove-member"), onClick: function () {
                confirm({
                    content: t('removeTeamMemberConfirmText'),
                    okText: t('okText'),
                    cancelText: t('cancelText'),
                    okType: 'danger',
                    onOk: function () {
                        onRemoveTeamMemberClick(member);
                    },
                });
            } }, t('removeTeamMemberText')));
    };
    var renderButton = function () {
        if (member.type === 'owner') {
            return React.createElement("span", { className: "".concat(_prefix, "-owner") }, t('teamOwnerText'));
        }
        if (member.type === 'manager') {
            return myMemberInfo.type === 'owner' && isActive ? (renderRemoveBtn()) : (React.createElement("span", { className: "".concat(_prefix, "-manager") }, t('teamManagerText')));
        }
        if (member.type === 'normal') {
            return (myMemberInfo.type === 'owner' ||
                myMemberInfo.type === 'manager') &&
                isActive &&
                !isSelf
                ? renderRemoveBtn()
                : null;
        }
        return null;
    };
    return (React.createElement("div", { className: classnames("".concat(_prefix, "-wrap"), "".concat(isActive ? "".concat(_prefix, "-active") : '')), onMouseOver: function () {
            setIsActive(true);
        }, onMouseLeave: function () { return setIsActive(false); } },
        React.createElement("div", { className: "".concat(_prefix, "-avatar-box") },
            React.createElement(ComplexAvatarContainer, { prefix: commonPrefix, afterSendMsgClick: afterSendMsgClick, canClick: !isSelf, account: member.account }),
            React.createElement("span", { className: "".concat(_prefix, "-label") }, store.uiStore.getAppellation({
                account: member.account,
                teamId: member.teamId,
            }))),
        renderButton()));
});
