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
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importStar(require("react"));
var antd_1 = require("antd");
var common_1 = require("../../../common");
var emptyArr = [];
var GroupCreate = function (_a) {
    var _b = _a.defaultAccounts, defaultAccounts = _b === void 0 ? emptyArr : _b, onGroupCreate = _a.onGroupCreate, visible = _a.visible, onCancel = _a.onCancel, _c = _a.prefix, prefix = _c === void 0 ? 'chat' : _c, _d = _a.commonPrefix, commonPrefix = _d === void 0 ? 'common' : _d;
    var t = (0, common_1.useTranslation)().t;
    var _e = __read(antd_1.Form.useForm(), 1), form = _e[0];
    var _prefix = "".concat(prefix, "-group-create");
    var _f = __read((0, react_1.useState)(common_1.urls[Math.floor(Math.random() * 5)]), 2), avatar = _f[0], setAvatar = _f[1];
    var _g = __read((0, react_1.useState)([]), 2), selectedAccounts = _g[0], setSelectedAccounts = _g[1];
    (0, react_1.useEffect)(function () {
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
        setAvatar(common_1.urls[Math.floor(Math.random() * 5)]);
        setSelectedAccounts([]);
    };
    return (react_1.default.createElement(antd_1.Modal, { className: "".concat(_prefix, "-wrap"), title: t('createTeamText'), forceRender: true, onOk: handleOk, onCancel: handleCancel, visible: visible, width: 630, style: { height: 500 }, cancelText: t('cancelText'), okText: t('createButtonText') },
        react_1.default.createElement(antd_1.Form, { form: form, labelCol: { span: 5 } },
            react_1.default.createElement(antd_1.Form.Item, { label: t('teamTitle'), name: "name", rules: [{ required: true, message: t('teamTitleConfirmText') }] },
                react_1.default.createElement(antd_1.Input, { placeholder: t('searchTeamPlaceholder'), style: { width: 400 }, onChange: function (e) {
                        form.setFieldsValue({
                            name: e.target.value,
                        });
                    }, autoComplete: "off" })),
            react_1.default.createElement(antd_1.Form.Item, { name: "avatar", label: t('teamAvatarText') },
                react_1.default.createElement(common_1.GroupAvatarSelect, { prefix: commonPrefix, avatar: avatar, account: '', onSelect: setAvatar })),
            react_1.default.createElement("div", { style: { height: 450 } },
                react_1.default.createElement(common_1.FriendSelectContainer, { prefix: commonPrefix, onSelect: function (accounts) {
                        return setSelectedAccounts(accounts.map(function (item) { return item.account; }));
                    }, selectedAccounts: selectedAccounts })))));
};
exports.default = GroupCreate;
