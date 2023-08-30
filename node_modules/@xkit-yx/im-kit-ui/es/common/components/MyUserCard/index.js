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
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
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
import React, { useEffect, useState, useMemo } from 'react';
import { Modal, Input, Select, Upload, message, Form } from 'antd';
import { CrudeAvatar } from '../CrudeAvatar';
import { useTranslation } from '../../hooks/useTranslation';
export var MyUserCard = function (_a) {
    var visible = _a.visible, onSave = _a.onSave, onCancel = _a.onCancel, _b = _a.prefix, prefix = _b === void 0 ? 'common' : _b, props = __rest(_a, ["visible", "onSave", "onCancel", "prefix"]);
    var _prefix = "".concat(prefix, "-mycard");
    var t = useTranslation().t;
    var genderOptions = useMemo(function () { return [
        { label: t('man'), value: 'male' },
        { label: t('woman'), value: 'female' },
        { label: t('unknow'), value: 'unknown' },
    ]; }, []);
    var _c = __read(useState(undefined), 2), nick = _c[0], setNick = _c[1];
    // base64 编码的头像，用于预览
    var _d = __read(useState(undefined), 2), avatar = _d[0], setAvatar = _d[1];
    // 头像 file 对象，用于上传
    var _e = __read(useState(undefined), 2), avatarFile = _e[0], setAvatarFile = _e[1];
    var _f = __read(useState(undefined), 2), gender = _f[0], setGender = _f[1];
    var _g = __read(useState(undefined), 2), tel = _g[0], setTel = _g[1];
    var _h = __read(useState(undefined), 2), email = _h[0], setEmail = _h[1];
    var _j = __read(useState(undefined), 2), signature = _j[0], setSignature = _j[1];
    useEffect(function () {
        if (props.nick) {
            setNick(props.nick);
        }
    }, [props.nick]);
    useEffect(function () {
        if (props.avatar) {
            setAvatar(props.avatar);
        }
    }, [props.avatar]);
    useEffect(function () {
        if (props.gender) {
            setGender(props.gender);
        }
    }, [props.gender]);
    useEffect(function () {
        if (props.tel) {
            setTel(props.tel);
        }
    }, [props.tel]);
    useEffect(function () {
        if (props.email) {
            setEmail(props.email);
        }
    }, [props.email]);
    useEffect(function () {
        if (props.signature) {
            setSignature(props.signature);
        }
    }, [props.signature]);
    var resetState = function () {
        setNick(props.nick);
        setAvatar(props.avatar);
        setGender(props.gender);
        setTel(props.tel);
        setEmail(props.email);
        setSignature(props.signature);
        setAvatarFile(undefined);
    };
    var handleCancel = function () {
        resetState();
        onCancel === null || onCancel === void 0 ? void 0 : onCancel();
    };
    var handleSave = function (e) {
        if (email &&
            !email.includes('@') &&
            !email.includes('com') &&
            !email.includes('cn')) {
            message.error(t('emailErrorText'));
            return;
        }
        onSave === null || onSave === void 0 ? void 0 : onSave({
            avatar: avatar,
            avatarFile: avatarFile,
            nick: nick,
            gender: gender,
            tel: tel,
            email: email,
            signature: signature,
        });
    };
    var handleBeforeUpload = function (file, FileList) {
        var LIMIT = 5;
        var isLt5M = file.size / 1024 / 1024 < LIMIT;
        if (!isLt5M) {
            message.error("".concat(t('uploadLimitText')).concat(LIMIT).concat(t('uploadLimitUnit')));
        }
        return isLt5M;
    };
    var handleUpload = function (file) {
        var reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = function () {
            setAvatar(reader.result);
            setAvatarFile(file);
        };
        reader.onerror = function (error) {
            message.error(t('uploadImgFailedText'));
            throw error;
        };
    };
    var contentRenderer = function () {
        return (React.createElement(React.Fragment, null,
            React.createElement("div", { className: "".concat(_prefix, "-header") },
                React.createElement("div", { className: "".concat(_prefix, "-header-avatar") },
                    React.createElement(Upload, { beforeUpload: handleBeforeUpload, showUploadList: false, accept: ".jpg,.png,.jpeg", action: handleUpload },
                        React.createElement(CrudeAvatar, __assign({}, __assign(__assign({}, props), { avatar: avatar || props.avatar, size: 50 }))))),
                React.createElement("span", { className: "".concat(_prefix, "-header-nick") }, props.nick || props.account)),
            React.createElement("div", { className: "".concat(_prefix, "-content") },
                React.createElement(Form, { labelCol: { span: 6 } },
                    React.createElement(Form.Item, { label: t('accountText') },
                        React.createElement("div", { className: "".concat(_prefix, "-content-form-item") },
                            React.createElement(Input, { value: props.account, disabled: true }))),
                    React.createElement(Form.Item, { label: t('nickText') },
                        React.createElement("div", { className: "".concat(_prefix, "-content-form-item") },
                            React.createElement(Input, { value: nick, maxLength: 15, placeholder: t('nickPlaceholder'), onChange: function (e) {
                                    setNick(e.target.value);
                                } }))),
                    React.createElement(Form.Item, { label: t('genderText') },
                        React.createElement("div", { className: "".concat(_prefix, "-content-form-item") },
                            React.createElement(Select, { style: { width: '100%' }, options: genderOptions, value: gender, placeholder: t('genderPlaceholder'), onChange: setGender }))),
                    React.createElement(Form.Item, { label: t('phoneText') },
                        React.createElement("div", { className: "".concat(_prefix, "-content-form-item") },
                            React.createElement(Input, { value: tel, maxLength: 11, placeholder: t('phonePlaceholder'), onChange: function (e) {
                                    setTel(e.target.value.replace(/\D/g, ''));
                                } }))),
                    React.createElement(Form.Item, { label: t('emailText') },
                        React.createElement("div", { className: "".concat(_prefix, "-content-form-item") },
                            React.createElement(Input, { value: email, maxLength: 30, placeholder: t('emailPlaceholder'), onChange: function (e) {
                                    setEmail(e.target.value);
                                } }))),
                    React.createElement(Form.Item, { label: t('signText') },
                        React.createElement("div", { className: "".concat(_prefix, "-content-form-item") },
                            React.createElement(Input.TextArea, { value: signature, maxLength: 50, style: { resize: 'none' }, placeholder: t('signPlaceholder'), onChange: function (e) {
                                    setSignature(e.target.value);
                                } })))))));
    };
    return (React.createElement(Modal, { wrapClassName: "".concat(_prefix, "-modal"), visible: visible, maskClosable: true, closable: false, title: null, maskStyle: { backgroundColor: 'rgba(255,255,255,0)' }, okText: t('saveText'), cancelText: t('cancelText'), onOk: handleSave, onCancel: handleCancel, width: 370 }, contentRenderer()));
};
