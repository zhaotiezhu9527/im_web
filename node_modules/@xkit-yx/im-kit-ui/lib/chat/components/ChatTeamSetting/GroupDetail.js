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
var react_1 = __importStar(require("react"));
var antd_1 = require("antd");
var common_1 = require("../../../common");
var GroupDetail = function (_a) {
    var team = _a.team, hasPower = _a.hasPower, onUpdateTeamInfo = _a.onUpdateTeamInfo, _b = _a.prefix, prefix = _b === void 0 ? 'chat' : _b, _c = _a.commonPrefix, commonPrefix = _c === void 0 ? 'common' : _c;
    var t = (0, common_1.useTranslation)().t;
    var _d = __read((0, react_1.useState)(''), 2), avatar = _d[0], setAvatar = _d[1];
    var _e = __read((0, react_1.useState)(''), 2), intro = _e[0], setIntro = _e[1];
    var _f = __read((0, react_1.useState)(''), 2), name = _f[0], setName = _f[1];
    var _g = team.intro, lastIntro = _g === void 0 ? '' : _g;
    var _prefix = "".concat(prefix, "-group-detail");
    (0, react_1.useEffect)(function () {
        setAvatar(team.avatar);
    }, [team.avatar]);
    (0, react_1.useEffect)(function () {
        setIntro(lastIntro);
    }, [lastIntro]);
    (0, react_1.useEffect)(function () {
        setName(team.name);
    }, [team.name]);
    var onUpdateTeamInfoSubmitHandler = function () {
        var obj = { avatar: avatar, name: name, intro: intro };
        Object.keys(obj).forEach(function (key) {
            if (obj[key] === team[key]) {
                delete obj[key];
            }
        });
        onUpdateTeamInfo(__assign(__assign({}, obj), { teamId: team.teamId }));
    };
    return (react_1.default.createElement(antd_1.Form, { className: "".concat(_prefix, "-wrap"), layout: "vertical" },
        react_1.default.createElement(antd_1.Form.Item, { className: "".concat(_prefix, "-avatar-box"), label: react_1.default.createElement("b", null, t('teamAvatarText')), name: "avatar" }, hasPower ? (react_1.default.createElement(common_1.GroupAvatarSelect, { prefix: commonPrefix, avatar: avatar, account: team.teamId, nick: team.name, onSelect: setAvatar })) : (react_1.default.createElement(common_1.CrudeAvatar, { account: team.teamId, nick: team.name, avatar: avatar }))),
        react_1.default.createElement(antd_1.Form.Item, { label: react_1.default.createElement("b", null, t('teamIdText')) },
            react_1.default.createElement(antd_1.Input, { disabled: true, className: "".concat(_prefix, "-form-input"), value: team.teamId })),
        react_1.default.createElement(antd_1.Form.Item, { label: react_1.default.createElement("b", null, t('teamTitle')) },
            react_1.default.createElement(antd_1.Input, { disabled: !hasPower, className: "".concat(_prefix, "-form-input"), showCount: true, maxLength: 30, value: name, onChange: function (e) {
                    setName(e.target.value);
                }, placeholder: t('teamTitlePlaceholder') })),
        react_1.default.createElement(antd_1.Form.Item, { label: react_1.default.createElement("b", null, t('teamSignText')) },
            react_1.default.createElement(antd_1.Input.TextArea, { disabled: !hasPower, className: "".concat(_prefix, "-form-input"), maxLength: 100, showCount: true, rows: 4, value: intro, onChange: function (e) {
                    setIntro(e.target.value);
                }, placeholder: t('teamSignPlaceholder') })),
        react_1.default.createElement(antd_1.Button, { className: "".concat(_prefix, "-save-btn"), type: "primary", disabled: !hasPower, onClick: onUpdateTeamInfoSubmitHandler }, t('saveText'))));
};
exports.default = GroupDetail;
