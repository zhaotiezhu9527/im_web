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
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
import React, { useEffect, useState } from 'react';
import { message, Modal } from 'antd';
import { FriendSelectContainer, useTranslation } from '../../../common';
var emptyArr = [];
var ChatAddMemebers = function (_a) {
    var _b = _a.defaultAccounts, defaultAccounts = _b === void 0 ? emptyArr : _b, visible = _a.visible, onCancel = _a.onCancel, onGroupAddMembers = _a.onGroupAddMembers, _c = _a.prefix, prefix = _c === void 0 ? 'chat' : _c, _d = _a.commonPrefix, commonPrefix = _d === void 0 ? 'common' : _d;
    var _e = __read(useState([]), 2), selectedAccounts = _e[0], setSelectedAccounts = _e[1];
    // const [searchText, setSearchText] = useState('')
    useEffect(function () {
        if (visible) {
            setSelectedAccounts(__spreadArray([], __read(new Set(defaultAccounts)), false));
        }
    }, [defaultAccounts, visible]);
    useEffect(function () {
        if (!visible) {
            resetState();
        }
    }, [visible]);
    var t = useTranslation().t;
    var _prefix = "".concat(prefix, "-add-members");
    var handleOk = function () {
        if (!selectedAccounts.length) {
            message.error(t('addTeamMemberConfirmText'));
            return;
        }
        onGroupAddMembers(selectedAccounts);
    };
    var handleCancel = function () {
        onCancel();
    };
    var resetState = function () {
        setSelectedAccounts([]);
    };
    return (React.createElement(Modal, { className: "".concat(_prefix, "-wrap"), title: t('addTeamMemberText'), onOk: handleOk, onCancel: handleCancel, visible: visible, width: 630, cancelText: t('cancelText'), destroyOnClose: true, okText: t('addTeamMemberText') },
        React.createElement("div", { style: { height: 450 } },
            React.createElement(FriendSelectContainer, { prefix: commonPrefix, onSelect: function (selectedList) {
                    return setSelectedAccounts(selectedList.map(function (item) { return item.account; }));
                }, selectedAccounts: selectedAccounts }))));
};
export default ChatAddMemebers;
