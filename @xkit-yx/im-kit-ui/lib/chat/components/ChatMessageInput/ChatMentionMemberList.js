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
exports.ChatAtMemberList = void 0;
var react_1 = __importStar(require("react"));
var common_1 = require("../../../common");
var classnames_1 = __importDefault(require("classnames"));
var mobx_react_1 = require("mobx-react");
var im_store_1 = require("@xkit-yx/im-store");
exports.ChatAtMemberList = (0, mobx_react_1.observer)(function (_a) {
    var _b;
    var _c = _a.allowAtAll, allowAtAll = _c === void 0 ? true : _c, _d = _a.prefix, prefix = _d === void 0 ? 'chat' : _d, _e = _a.commonPrefix, commonPrefix = _e === void 0 ? 'common' : _e, mentionMembers = _a.mentionMembers, onSelect = _a.onSelect;
    var _prefix = "".concat(prefix, "-at-member");
    var t = (0, common_1.useTranslation)().t;
    var store = (0, common_1.useStateContext)().store;
    var _f = __read((0, react_1.useState)(0), 2), activeIndex = _f[0], setActiveIndex = _f[1];
    (0, react_1.useEffect)(function () {
        if (mentionMembers) {
            setActiveIndex(0);
        }
    }, [mentionMembers]);
    (0, react_1.useEffect)(function () {
        if (mentionMembers) {
            var maxIndex_1 = mentionMembers.length - 1;
            var handleKeyDown_1 = function (e) {
                if (e.key === 'ArrowUp') {
                    var index = activeIndex - 1;
                    setActiveIndex(index < -1 ? maxIndex_1 : index);
                }
                else if (e.key === 'ArrowDown') {
                    var index = activeIndex + 1;
                    setActiveIndex(index > maxIndex_1 ? -1 : index);
                }
                else if (e.key === 'Enter') {
                    if (activeIndex === -1) {
                        onSelect === null || onSelect === void 0 ? void 0 : onSelect({
                            account: im_store_1.AT_ALL_ACCOUNT,
                            appellation: t('teamAll'),
                        });
                    }
                    else {
                        var member = mentionMembers[activeIndex];
                        onSelect === null || onSelect === void 0 ? void 0 : onSelect({
                            account: member.account,
                            appellation: store.uiStore.getAppellation({
                                account: member.account,
                                teamId: member.teamId,
                                ignoreAlias: true,
                            }),
                        });
                    }
                }
            };
            document.addEventListener('keydown', handleKeyDown_1);
            return function () {
                document.removeEventListener('keydown', handleKeyDown_1);
            };
        }
    }, [activeIndex, mentionMembers, onSelect, t, store.uiStore]);
    return (react_1.default.createElement("div", { className: "".concat(_prefix, "-wrap") },
        allowAtAll && (react_1.default.createElement("div", { className: (0, classnames_1.default)("".concat(_prefix, "-item"), (_b = {},
                _b["".concat(_prefix, "-item-active")] = -1 === activeIndex,
                _b)), onClick: function () {
                return onSelect === null || onSelect === void 0 ? void 0 : onSelect({
                    account: im_store_1.AT_ALL_ACCOUNT,
                    appellation: t('teamAll'),
                });
            }, onMouseEnter: function () { return setActiveIndex(-1); } },
            react_1.default.createElement("div", { className: "".concat(_prefix, "-all-icon") },
                react_1.default.createElement(common_1.CommonIcon, { type: "icon-team" })),
            react_1.default.createElement("span", { className: "".concat(_prefix, "-label") }, t('teamAll')))), mentionMembers === null || mentionMembers === void 0 ? void 0 :
        mentionMembers.map(function (member, index) {
            var _a;
            return (react_1.default.createElement("div", { className: (0, classnames_1.default)("".concat(_prefix, "-item"), (_a = {},
                    _a["".concat(_prefix, "-item-active")] = index === activeIndex,
                    _a)), key: member.account, onClick: function () {
                    onSelect === null || onSelect === void 0 ? void 0 : onSelect({
                        account: member.account,
                        appellation: store.uiStore.getAppellation({
                            account: member.account,
                            teamId: member.teamId,
                            ignoreAlias: true,
                        }),
                    });
                }, onMouseEnter: function () { return setActiveIndex(index); } },
                react_1.default.createElement(common_1.ComplexAvatarContainer, { prefix: commonPrefix, canClick: false, size: 28, account: member.account }),
                react_1.default.createElement("span", { className: "".concat(_prefix, "-label") }, store.uiStore.getAppellation({
                    account: member.account,
                    teamId: member.teamId,
                }))));
        })));
});
exports.default = exports.ChatAtMemberList;
