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
import React, { useState, useMemo, useEffect } from 'react';
import { Modal, Button, Dropdown, Menu, Input } from 'antd';
import { UsergroupAddOutlined, UsergroupDeleteOutlined, DeleteOutlined, MoreOutlined, } from '@ant-design/icons';
import { CrudeAvatar } from '../CrudeAvatar';
import { useTranslation } from '../../hooks/useTranslation';
export var UserCard = function (_a) {
    var visible = _a.visible, relation = _a.relation, onChangeAlias = _a.onChangeAlias, onAddFriendClick = _a.onAddFriendClick, onDeleteFriendClick = _a.onDeleteFriendClick, onBlockFriendClick = _a.onBlockFriendClick, onRemoveBlockFriendClick = _a.onRemoveBlockFriendClick, onSendMsglick = _a.onSendMsglick, onCancel = _a.onCancel, _b = _a.prefix, prefix = _b === void 0 ? 'common' : _b, props = __rest(_a, ["visible", "relation", "onChangeAlias", "onAddFriendClick", "onDeleteFriendClick", "onBlockFriendClick", "onRemoveBlockFriendClick", "onSendMsglick", "onCancel", "prefix"]);
    var _prefix = "".concat(prefix, "-usercard");
    var t = useTranslation().t;
    var _c = __read(useState(''), 2), alias = _c[0], setAlias = _c[1];
    var genderOptions = useMemo(function () { return [
        { label: t('man'), value: 'male' },
        { label: t('woman'), value: 'female' },
        { label: t('unknow'), value: 'unknown' },
    ]; }, [t]);
    var controlsMenuRenderer = useMemo(function () {
        var items = [
            relation === 'friend'
                ? {
                    key: 'block',
                    label: t('blackText'),
                    icon: React.createElement(UsergroupAddOutlined, null),
                }
                : {
                    key: 'removeBlock',
                    label: t('removeBlackText'),
                    icon: React.createElement(UsergroupDeleteOutlined, null),
                },
            {
                key: 'deleteFriend',
                label: t('deleteFriendText'),
                icon: React.createElement(DeleteOutlined, null),
            },
        ];
        return (React.createElement(Menu, { onClick: function (e) {
                switch (e.key) {
                    case 'block':
                        onBlockFriendClick === null || onBlockFriendClick === void 0 ? void 0 : onBlockFriendClick();
                        break;
                    case 'removeBlock':
                        onRemoveBlockFriendClick === null || onRemoveBlockFriendClick === void 0 ? void 0 : onRemoveBlockFriendClick();
                        break;
                    case 'deleteFriend':
                        onDeleteFriendClick === null || onDeleteFriendClick === void 0 ? void 0 : onDeleteFriendClick();
                        break;
                    default:
                        break;
                }
            }, items: items }));
    }, [
        t,
        relation,
        onBlockFriendClick,
        onRemoveBlockFriendClick,
        onDeleteFriendClick,
    ]);
    useEffect(function () {
        setAlias(props.alias || '');
    }, [props.alias]);
    var handleChangeAlias = function (e) {
        setAlias(e.target.value.trim());
    };
    var handleBlurAlias = function (e) {
        onChangeAlias === null || onChangeAlias === void 0 ? void 0 : onChangeAlias(e.target.value.trim());
    };
    var contentRenderer = function () {
        return (React.createElement(React.Fragment, null,
            React.createElement("div", { className: "".concat(_prefix, "-header") },
                React.createElement("div", { className: "".concat(_prefix, "-header-avatar") },
                    React.createElement(CrudeAvatar, __assign({}, __assign(__assign({}, props), { avatar: props.avatar, size: 50 })))),
                React.createElement("span", { className: "".concat(_prefix, "-header-nick") }, props.alias || props.nick || props.account),
                relation !== 'stranger' ? (React.createElement(Dropdown, { overlay: controlsMenuRenderer },
                    React.createElement(Button, { className: "".concat(_prefix, "-header-controls"), type: "text", icon: React.createElement(MoreOutlined, null) }))) : null),
            React.createElement("div", { className: "".concat(_prefix, "-content") },
                ['friend', 'blacklist'].includes(relation) ? (React.createElement("div", { className: "".concat(_prefix, "-content-form-item") },
                    React.createElement("label", null, t('aliasText')),
                    React.createElement(Input, { className: "".concat(_prefix, "-content-form-item-text"), onBlur: handleBlurAlias, onChange: handleChangeAlias, maxLength: 15, value: alias }))) : null,
                React.createElement("div", { className: "".concat(_prefix, "-content-form-item") },
                    React.createElement("label", null, t('accountText')),
                    React.createElement("span", { className: "".concat(_prefix, "-content-form-item-text") }, props.account)),
                React.createElement("div", { className: "".concat(_prefix, "-content-form-item") },
                    React.createElement("label", null, t('genderText')),
                    React.createElement("span", { className: "".concat(_prefix, "-content-form-item-text") }, (genderOptions.find(function (item) { return item.value === props.gender; }) || {
                        label: t('unknow'),
                    }).label)),
                React.createElement("div", { className: "".concat(_prefix, "-content-form-item") },
                    React.createElement("label", null, t('phoneText')),
                    React.createElement("span", { className: "".concat(_prefix, "-content-form-item-text") }, props.tel || '')),
                React.createElement("div", { className: "".concat(_prefix, "-content-form-item") },
                    React.createElement("label", null, t('emailText')),
                    React.createElement("span", { className: "".concat(_prefix, "-content-form-item-text") }, props.email || '')),
                React.createElement("div", { className: "".concat(_prefix, "-content-form-item") },
                    React.createElement("label", null, t('signText')),
                    React.createElement("span", { className: "".concat(_prefix, "-content-form-item-text") }, props.signature || '')))));
    };
    var footerRenderer = useMemo(function () {
        return relation === 'stranger' ? (React.createElement(Button, { className: "".concat(_prefix, "-footer-button"), type: "primary", onClick: onAddFriendClick }, t('addFriendText'))) : (React.createElement(Button, { className: "".concat(_prefix, "-footer-button"), type: "primary", onClick: onSendMsglick }, t('sendText')));
    }, [t, _prefix, relation, onAddFriendClick, onSendMsglick]);
    return (React.createElement(Modal, { wrapClassName: "".concat(_prefix, "-modal"), visible: visible, footer: footerRenderer, maskClosable: true, closable: false, title: null, maskStyle: { backgroundColor: 'rgba(255,255,255,0)' }, onCancel: onCancel }, contentRenderer()));
};
