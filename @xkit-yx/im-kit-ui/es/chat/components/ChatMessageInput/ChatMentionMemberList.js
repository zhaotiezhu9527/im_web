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
import React, { useEffect, useState } from 'react';
import { CommonIcon, ComplexAvatarContainer, useStateContext, useTranslation, } from '../../../common';
import classNames from 'classnames';
import { observer } from 'mobx-react';
import { AT_ALL_ACCOUNT } from '@xkit-yx/im-store';
export var ChatAtMemberList = observer(function (_a) {
    var _b;
    var _c = _a.allowAtAll, allowAtAll = _c === void 0 ? true : _c, _d = _a.prefix, prefix = _d === void 0 ? 'chat' : _d, _e = _a.commonPrefix, commonPrefix = _e === void 0 ? 'common' : _e, mentionMembers = _a.mentionMembers, onSelect = _a.onSelect;
    var _prefix = "".concat(prefix, "-at-member");
    var t = useTranslation().t;
    var store = useStateContext().store;
    var _f = __read(useState(0), 2), activeIndex = _f[0], setActiveIndex = _f[1];
    useEffect(function () {
        if (mentionMembers) {
            setActiveIndex(0);
        }
    }, [mentionMembers]);
    useEffect(function () {
        if (mentionMembers) {
            var maxIndex_1 = mentionMembers.length - 1;
            var handleKeyDown_1 = function (e) {
                if (e.key === 'ArrowUp') {
                    var index = activeIndex - 1;
                    setActiveIndex(index < -1 ? maxIndex_1 : index);
                }
                else if (e.key === 'ArrowDown') {
                    var index = activeIndex + 1;
                    setActiveIndex(index > maxIndex_1 ? -1 : index);
                }
                else if (e.key === 'Enter') {
                    if (activeIndex === -1) {
                        onSelect === null || onSelect === void 0 ? void 0 : onSelect({
                            account: AT_ALL_ACCOUNT,
                            appellation: t('teamAll'),
                        });
                    }
                    else {
                        var member = mentionMembers[activeIndex];
                        onSelect === null || onSelect === void 0 ? void 0 : onSelect({
                            account: member.account,
                            appellation: store.uiStore.getAppellation({
                                account: member.account,
                                teamId: member.teamId,
                                ignoreAlias: true,
                            }),
                        });
                    }
                }
            };
            document.addEventListener('keydown', handleKeyDown_1);
            return function () {
                document.removeEventListener('keydown', handleKeyDown_1);
            };
        }
    }, [activeIndex, mentionMembers, onSelect, t, store.uiStore]);
    return (React.createElement("div", { className: "".concat(_prefix, "-wrap") },
        allowAtAll && (React.createElement("div", { className: classNames("".concat(_prefix, "-item"), (_b = {},
                _b["".concat(_prefix, "-item-active")] = -1 === activeIndex,
                _b)), onClick: function () {
                return onSelect === null || onSelect === void 0 ? void 0 : onSelect({
                    account: AT_ALL_ACCOUNT,
                    appellation: t('teamAll'),
                });
            }, onMouseEnter: function () { return setActiveIndex(-1); } },
            React.createElement("div", { className: "".concat(_prefix, "-all-icon") },
                React.createElement(CommonIcon, { type: "icon-team" })),
            React.createElement("span", { className: "".concat(_prefix, "-label") }, t('teamAll')))), mentionMembers === null || mentionMembers === void 0 ? void 0 :
        mentionMembers.map(function (member, index) {
            var _a;
            return (React.createElement("div", { className: classNames("".concat(_prefix, "-item"), (_a = {},
                    _a["".concat(_prefix, "-item-active")] = index === activeIndex,
                    _a)), key: member.account, onClick: function () {
                    onSelect === null || onSelect === void 0 ? void 0 : onSelect({
                        account: member.account,
                        appellation: store.uiStore.getAppellation({
                            account: member.account,
                            teamId: member.teamId,
                            ignoreAlias: true,
                        }),
                    });
                }, onMouseEnter: function () { return setActiveIndex(index); } },
                React.createElement(ComplexAvatarContainer, { prefix: commonPrefix, canClick: false, size: 28, account: member.account }),
                React.createElement("span", { className: "".concat(_prefix, "-label") }, store.uiStore.getAppellation({
                    account: member.account,
                    teamId: member.teamId,
                }))));
        })));
});
export default ChatAtMemberList;
