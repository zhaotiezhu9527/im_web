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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importStar(require("react"));
var antd_1 = require("antd");
var common_1 = require("../../../common");
var ChatTeamMemberModal_1 = __importDefault(require("../ChatTeamMemberModal"));
var constant_1 = require("../../../constant");
var GroupPower = function (_a) {
    var onUpdateTeamInfo = _a.onUpdateTeamInfo, onTeamMuteChange = _a.onTeamMuteChange, team = _a.team, managers = _a.managers, isGroupOwner = _a.isGroupOwner, afterSendMsgClick = _a.afterSendMsgClick, _b = _a.prefix, prefix = _b === void 0 ? 'chat' : _b, _c = _a.commonPrefix, commonPrefix = _c === void 0 ? 'common' : _c;
    var localOptions = (0, common_1.useStateContext)().localOptions;
    var t = (0, common_1.useTranslation)().t;
    var _prefix = "".concat(prefix, "-group-power");
    var _d = __read((0, react_1.useState)(false), 2), memberModalVisible = _d[0], setMemberModalVisible = _d[1];
    var options = (0, react_1.useMemo)(function () {
        return [
            {
                label: localOptions.teamManagerVisible
                    ? t('teamOwnerAndManagerText')
                    : t('teamOwnerText'),
                value: 'manager',
            },
            {
                label: t('teamAll'),
                value: 'all',
            },
        ];
    }, [localOptions.teamManagerVisible, t]);
    var ext = (0, react_1.useMemo)(function () {
        var res = {};
        try {
            res = JSON.parse(team.ext || '{}');
        }
        catch (error) {
            //
        }
        return res;
    }, [team.ext]);
    return (react_1.default.createElement("div", { className: "".concat(_prefix, "-wrap") },
        localOptions.teamManagerVisible && (react_1.default.createElement("div", { className: "".concat(_prefix, "-manager") },
            react_1.default.createElement("div", { className: "".concat(_prefix, "-manager-title") },
                react_1.default.createElement("label", null, t('teamManagerText')),
                isGroupOwner && (react_1.default.createElement(antd_1.Button, { onClick: function () {
                        setMemberModalVisible(true);
                    }, className: "".concat(_prefix, "-manager-btn"), type: "link" }, t('teamManagerEditText') + ' >'))),
            react_1.default.createElement("div", { className: "".concat(_prefix, "-manager-avatars") }, !managers.length ? (react_1.default.createElement(antd_1.Empty, { className: "".concat(_prefix, "-manager-avatars-empty"), image: antd_1.Empty.PRESENTED_IMAGE_SIMPLE, description: t('teamManagerEmptyText') })) : (managers.map(function (item) { return (react_1.default.createElement(common_1.ComplexAvatarContainer, { key: item.account, account: item.account, afterSendMsgClick: afterSendMsgClick, prefix: commonPrefix })); }))))),
        react_1.default.createElement("div", { className: "".concat(_prefix, "-who") },
            react_1.default.createElement("div", { className: "".concat(_prefix, "-who-item") },
                react_1.default.createElement("label", null, t('teamManagerLimitText')),
                react_1.default.createElement(antd_1.Select, { className: "".concat(_prefix, "-who-select"), options: options, value: team.updateTeamMode, onChange: function (value) {
                        onUpdateTeamInfo({ updateTeamMode: value });
                    } })),
            react_1.default.createElement("div", { className: "".concat(_prefix, "-who-item") },
                react_1.default.createElement("label", null, t('teamInviteModeText')),
                react_1.default.createElement(antd_1.Select, { className: "".concat(_prefix, "-who-select"), options: options, value: team.inviteMode, onChange: function (value) {
                        onUpdateTeamInfo({ inviteMode: value });
                    } })),
            react_1.default.createElement("div", { className: "".concat(_prefix, "-who-item") },
                react_1.default.createElement("label", null, t('teamAtModeText')),
                react_1.default.createElement(antd_1.Select, { className: "".concat(_prefix, "-who-select"), options: options, value: ext[constant_1.ALLOW_AT] || 'all', onChange: function (value) {
                        var _a;
                        onUpdateTeamInfo({
                            ext: JSON.stringify(__assign(__assign({}, ext), (_a = {}, _a[constant_1.ALLOW_AT] = value, _a))),
                        });
                    } }))),
        react_1.default.createElement("div", { className: "".concat(_prefix, "-action") },
            react_1.default.createElement("div", { className: "".concat(_prefix, "-action-item") },
                react_1.default.createElement("label", null, t('teamMuteText')),
                react_1.default.createElement(antd_1.Switch, { checked: team.mute, onChange: onTeamMuteChange }))),
        react_1.default.createElement(ChatTeamMemberModal_1.default, { visible: memberModalVisible, onCancel: function () {
                setMemberModalVisible(false);
            }, teamId: team.teamId, commonPrefix: commonPrefix })));
};
exports.default = GroupPower;
