"use strict";
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
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
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
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserCard = void 0;
var react_1 = __importStar(require("react"));
var antd_1 = require("antd");
var icons_1 = require("@ant-design/icons");
var CrudeAvatar_1 = require("../CrudeAvatar");
var useTranslation_1 = require("../../hooks/useTranslation");
var UserCard = function (_a) {
    var visible = _a.visible, relation = _a.relation, onChangeAlias = _a.onChangeAlias, onAddFriendClick = _a.onAddFriendClick, onDeleteFriendClick = _a.onDeleteFriendClick, onBlockFriendClick = _a.onBlockFriendClick, onRemoveBlockFriendClick = _a.onRemoveBlockFriendClick, onSendMsglick = _a.onSendMsglick, onCancel = _a.onCancel, _b = _a.prefix, prefix = _b === void 0 ? 'common' : _b, props = __rest(_a, ["visible", "relation", "onChangeAlias", "onAddFriendClick", "onDeleteFriendClick", "onBlockFriendClick", "onRemoveBlockFriendClick", "onSendMsglick", "onCancel", "prefix"]);
    var _prefix = "".concat(prefix, "-usercard");
    var t = (0, useTranslation_1.useTranslation)().t;
    var _c = __read((0, react_1.useState)(''), 2), alias = _c[0], setAlias = _c[1];
    var genderOptions = (0, react_1.useMemo)(function () { return [
        { label: t('man'), value: 'male' },
        { label: t('woman'), value: 'female' },
        { label: t('unknow'), value: 'unknown' },
    ]; }, [t]);
    var controlsMenuRenderer = (0, react_1.useMemo)(function () {
        var items = [
            relation === 'friend'
                ? {
                    key: 'block',
                    label: t('blackText'),
                    icon: react_1.default.createElement(icons_1.UsergroupAddOutlined, null),
                }
                : {
                    key: 'removeBlock',
                    label: t('removeBlackText'),
                    icon: react_1.default.createElement(icons_1.UsergroupDeleteOutlined, null),
                },
            {
                key: 'deleteFriend',
                label: t('deleteFriendText'),
                icon: react_1.default.createElement(icons_1.DeleteOutlined, null),
            },
        ];
        return (react_1.default.createElement(antd_1.Menu, { onClick: function (e) {
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
    (0, react_1.useEffect)(function () {
        setAlias(props.alias || '');
    }, [props.alias]);
    var handleChangeAlias = function (e) {
        setAlias(e.target.value.trim());
    };
    var handleBlurAlias = function (e) {
        onChangeAlias === null || onChangeAlias === void 0 ? void 0 : onChangeAlias(e.target.value.trim());
    };
    var contentRenderer = function () {
        return (react_1.default.createElement(react_1.default.Fragment, null,
            react_1.default.createElement("div", { className: "".concat(_prefix, "-header") },
                react_1.default.createElement("div", { className: "".concat(_prefix, "-header-avatar") },
                    react_1.default.createElement(CrudeAvatar_1.CrudeAvatar, __assign({}, __assign(__assign({}, props), { avatar: props.avatar, size: 50 })))),
                react_1.default.createElement("span", { className: "".concat(_prefix, "-header-nick") }, props.alias || props.nick || props.account),
                relation !== 'stranger' ? (react_1.default.createElement(antd_1.Dropdown, { overlay: controlsMenuRenderer },
                    react_1.default.createElement(antd_1.Button, { className: "".concat(_prefix, "-header-controls"), type: "text", icon: react_1.default.createElement(icons_1.MoreOutlined, null) }))) : null),
            react_1.default.createElement("div", { className: "".concat(_prefix, "-content") },
                ['friend', 'blacklist'].includes(relation) ? (react_1.default.createElement("div", { className: "".concat(_prefix, "-content-form-item") },
                    react_1.default.createElement("label", null, t('aliasText')),
                    react_1.default.createElement(antd_1.Input, { className: "".concat(_prefix, "-content-form-item-text"), onBlur: handleBlurAlias, onChange: handleChangeAlias, maxLength: 15, value: alias }))) : null,
                react_1.default.createElement("div", { className: "".concat(_prefix, "-content-form-item") },
                    react_1.default.createElement("label", null, t('accountText')),
                    react_1.default.createElement("span", { className: "".concat(_prefix, "-content-form-item-text") }, props.account)),
                react_1.default.createElement("div", { className: "".concat(_prefix, "-content-form-item") },
                    react_1.default.createElement("label", null, t('genderText')),
                    react_1.default.createElement("span", { className: "".concat(_prefix, "-content-form-item-text") }, (genderOptions.find(function (item) { return item.value === props.gender; }) || {
                        label: t('unknow'),
                    }).label)),
                react_1.default.createElement("div", { className: "".concat(_prefix, "-content-form-item") },
                    react_1.default.createElement("label", null, t('phoneText')),
                    react_1.default.createElement("span", { className: "".concat(_prefix, "-content-form-item-text") }, props.tel || '')),
                react_1.default.createElement("div", { className: "".concat(_prefix, "-content-form-item") },
                    react_1.default.createElement("label", null, t('emailText')),
                    react_1.default.createElement("span", { className: "".concat(_prefix, "-content-form-item-text") }, props.email || '')),
                react_1.default.createElement("div", { className: "".concat(_prefix, "-content-form-item") },
                    react_1.default.createElement("label", null, t('signText')),
                    react_1.default.createElement("span", { className: "".concat(_prefix, "-content-form-item-text") }, props.signature || '')))));
    };
    var footerRenderer = (0, react_1.useMemo)(function () {
        return relation === 'stranger' ? (react_1.default.createElement(antd_1.Button, { className: "".concat(_prefix, "-footer-button"), type: "primary", onClick: onAddFriendClick }, t('addFriendText'))) : (react_1.default.createElement(antd_1.Button, { className: "".concat(_prefix, "-footer-button"), type: "primary", onClick: onSendMsglick }, t('sendText')));
    }, [t, _prefix, relation, onAddFriendClick, onSendMsglick]);
    return (react_1.default.createElement(antd_1.Modal, { wrapClassName: "".concat(_prefix, "-modal"), visible: visible, footer: footerRenderer, maskClosable: true, closable: false, title: null, maskStyle: { backgroundColor: 'rgba(255,255,255,0)' }, onCancel: onCancel }, contentRenderer()));
};
exports.UserCard = UserCard;
