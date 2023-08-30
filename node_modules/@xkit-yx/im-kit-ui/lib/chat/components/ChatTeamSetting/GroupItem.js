"use strict";
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
exports.GroupItem = void 0;
var react_1 = __importStar(require("react"));
var antd_1 = require("antd");
var classnames_1 = __importDefault(require("classnames"));
var common_1 = require("../../../common");
var mobx_react_1 = require("mobx-react");
var confirm = antd_1.Modal.confirm;
exports.GroupItem = (0, mobx_react_1.observer)(function (_a) {
    var myMemberInfo = _a.myMemberInfo, member = _a.member, onRemoveTeamMemberClick = _a.onRemoveTeamMemberClick, afterSendMsgClick = _a.afterSendMsgClick, _b = _a.prefix, prefix = _b === void 0 ? 'chat' : _b, _c = _a.commonPrefix, commonPrefix = _c === void 0 ? 'common' : _c;
    var _prefix = "".concat(prefix, "-group-item");
    var t = (0, common_1.useTranslation)().t;
    var store = (0, common_1.useStateContext)().store;
    var _d = __read((0, react_1.useState)(false), 2), isActive = _d[0], setIsActive = _d[1];
    var isSelf = member.account === myMemberInfo.account;
    var renderRemoveBtn = function () {
        return (react_1.default.createElement("a", { type: "link", className: "".concat(_prefix, "-remove-member"), onClick: function () {
                confirm({
                    content: t('removeTeamMemberConfirmText'),
                    okText: t('okText'),
                    cancelText: t('cancelText'),
                    okType: 'danger',
                    onOk: function () {
                        onRemoveTeamMemberClick(member);
                    },
                });
            } }, t('removeTeamMemberText')));
    };
    var renderButton = function () {
        if (member.type === 'owner') {
            return react_1.default.createElement("span", { className: "".concat(_prefix, "-owner") }, t('teamOwnerText'));
        }
        if (member.type === 'manager') {
            return myMemberInfo.type === 'owner' && isActive ? (renderRemoveBtn()) : (react_1.default.createElement("span", { className: "".concat(_prefix, "-manager") }, t('teamManagerText')));
        }
        if (member.type === 'normal') {
            return (myMemberInfo.type === 'owner' ||
                myMemberInfo.type === 'manager') &&
                isActive &&
                !isSelf
                ? renderRemoveBtn()
                : null;
        }
        return null;
    };
    return (react_1.default.createElement("div", { className: (0, classnames_1.default)("".concat(_prefix, "-wrap"), "".concat(isActive ? "".concat(_prefix, "-active") : '')), onMouseOver: function () {
            setIsActive(true);
        }, onMouseLeave: function () { return setIsActive(false); } },
        react_1.default.createElement("div", { className: "".concat(_prefix, "-avatar-box") },
            react_1.default.createElement(common_1.ComplexAvatarContainer, { prefix: commonPrefix, afterSendMsgClick: afterSendMsgClick, canClick: !isSelf, account: member.account }),
            react_1.default.createElement("span", { className: "".concat(_prefix, "-label") }, store.uiStore.getAppellation({
                account: member.account,
                teamId: member.teamId,
            }))),
        renderButton()));
});
