var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
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
import React, { useState, useEffect } from 'react';
import { Form, Modal, Input } from 'antd';
import { urls, GroupAvatarSelect, FriendSelectContainer, useTranslation, } from '../../../common';
var emptyArr = [];
var GroupCreate = function (_a) {
    var _b = _a.defaultAccounts, defaultAccounts = _b === void 0 ? emptyArr : _b, onGroupCreate = _a.onGroupCreate, visible = _a.visible, onCancel = _a.onCancel, _c = _a.prefix, prefix = _c === void 0 ? 'chat' : _c, _d = _a.commonPrefix, commonPrefix = _d === void 0 ? 'common' : _d;
    var t = useTranslation().t;
    var _e = __read(Form.useForm(), 1), form = _e[0];
    var _prefix = "".concat(prefix, "-group-create");
    var _f = __read(useState(urls[Math.floor(Math.random() * 5)]), 2), avatar = _f[0], setAvatar = _f[1];
    var _g = __read(useState([]), 2), selectedAccounts = _g[0], setSelectedAccounts = _g[1];
    useEffect(function () {
        setSelectedAccounts(__spreadArray([], __read(new Set(defaultAccounts)), false));
    }, [defaultAccounts]);
    var handleOk = function () {
        form
            .validateFields()
            .then(function (values) {
            onGroupCreate(__assign(__assign({}, values), { selectedAccounts: selectedAccounts, avatar: avatar, name: values.name.trim() }));
            resetState();
        })
            .catch(function () {
            //
        });
    };
    var handleCancel = function () {
        resetState();
        onCancel();
    };
    var resetState = function () {
        form.resetFields();
        setAvatar(urls[Math.floor(Math.random() * 5)]);
        setSelectedAccounts([]);
    };
    return (React.createElement(Modal, { className: "".concat(_prefix, "-wrap"), title: t('createTeamText'), forceRender: true, onOk: handleOk, onCancel: handleCancel, visible: visible, width: 630, style: { height: 500 }, cancelText: t('cancelText'), okText: t('createButtonText') },
        React.createElement(Form, { form: form, labelCol: { span: 5 } },
            React.createElement(Form.Item, { label: t('teamTitle'), name: "name", rules: [{ required: true, message: t('teamTitleConfirmText') }] },
                React.createElement(Input, { placeholder: t('searchTeamPlaceholder'), style: { width: 400 }, onChange: function (e) {
                        form.setFieldsValue({
                            name: e.target.value,
                        });
                    }, autoComplete: "off" })),
            React.createElement(Form.Item, { name: "avatar", label: t('teamAvatarText') },
                React.createElement(GroupAvatarSelect, { prefix: commonPrefix, avatar: avatar, account: '', onSelect: setAvatar })),
            React.createElement("div", { style: { height: 450 } },
                React.createElement(FriendSelectContainer, { prefix: commonPrefix, onSelect: function (accounts) {
                        return setSelectedAccounts(accounts.map(function (item) { return item.account; }));
                    }, selectedAccounts: selectedAccounts })))));
};
export default GroupCreate;
