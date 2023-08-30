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
exports.MyAvatarContainer = void 0;
var react_1 = __importStar(require("react"));
var ComplexAvatarUI_1 = require("../ComplexAvatar/ComplexAvatarUI");
var antd_1 = require("antd");
var useStateContext_1 = require("../../hooks/useStateContext");
var useTranslation_1 = require("../../hooks/useTranslation");
var mobx_react_1 = require("mobx-react");
exports.MyAvatarContainer = (0, mobx_react_1.observer)(function (_a) {
    var _b = _a.canClick, canClick = _b === void 0 ? true : _b, _c = _a.prefix, prefix = _c === void 0 ? 'common' : _c, count = _a.count, dot = _a.dot, size = _a.size, icon = _a.icon, onCancel = _a.onCancel, afterSave = _a.afterSave;
    var store = (0, useStateContext_1.useStateContext)().store;
    var t = (0, useTranslation_1.useTranslation)().t;
    var _d = __read((0, react_1.useState)(false), 2), visible = _d[0], setVisible = _d[1];
    var userInfo = store.userStore.myUserInfo;
    var handleSave = function (params) {
        store.userStore
            .saveMyUserInfoActive(__assign(__assign({}, params), { file: params.avatarFile, type: params.avatarFile ? 'image' : undefined }))
            .then(function (res) {
            antd_1.message.success(t('saveSuccessText'));
            setVisible(false);
            afterSave === null || afterSave === void 0 ? void 0 : afterSave(res);
        })
            .catch(function () {
            antd_1.message.error(t('saveFailedText'));
        });
    };
    var handleCancel = function () {
        setVisible(false);
        onCancel === null || onCancel === void 0 ? void 0 : onCancel();
    };
    var handleOnAvatarClick = function () {
        setVisible(true);
    };
    return (react_1.default.createElement(ComplexAvatarUI_1.ComplexAvatarUI, __assign({ relation: "myself", visible: visible, onCancel: handleCancel, onSave: handleSave, onAvatarClick: canClick ? handleOnAvatarClick : undefined, prefix: prefix, count: count, dot: dot, size: size, icon: icon }, userInfo)));
});
