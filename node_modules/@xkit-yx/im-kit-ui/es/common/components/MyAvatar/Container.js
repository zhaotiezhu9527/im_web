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
import React, { useState } from 'react';
import { ComplexAvatarUI, } from '../ComplexAvatar/ComplexAvatarUI';
import { message } from 'antd';
import { useStateContext } from '../../hooks/useStateContext';
import { useTranslation } from '../../hooks/useTranslation';
import { observer } from 'mobx-react';
export var MyAvatarContainer = observer(function (_a) {
    var _b = _a.canClick, canClick = _b === void 0 ? true : _b, _c = _a.prefix, prefix = _c === void 0 ? 'common' : _c, count = _a.count, dot = _a.dot, size = _a.size, icon = _a.icon, onCancel = _a.onCancel, afterSave = _a.afterSave;
    var store = useStateContext().store;
    var t = useTranslation().t;
    var _d = __read(useState(false), 2), visible = _d[0], setVisible = _d[1];
    var userInfo = store.userStore.myUserInfo;
    var handleSave = function (params) {
        store.userStore
            .saveMyUserInfoActive(__assign(__assign({}, params), { file: params.avatarFile, type: params.avatarFile ? 'image' : undefined }))
            .then(function (res) {
            message.success(t('saveSuccessText'));
            setVisible(false);
            afterSave === null || afterSave === void 0 ? void 0 : afterSave(res);
        })
            .catch(function () {
            message.error(t('saveFailedText'));
        });
    };
    var handleCancel = function () {
        setVisible(false);
        onCancel === null || onCancel === void 0 ? void 0 : onCancel();
    };
    var handleOnAvatarClick = function () {
        setVisible(true);
    };
    return (React.createElement(ComplexAvatarUI, __assign({ relation: "myself", visible: visible, onCancel: handleCancel, onSave: handleSave, onAvatarClick: canClick ? handleOnAvatarClick : undefined, prefix: prefix, count: count, dot: dot, size: size, icon: icon }, userInfo)));
});
