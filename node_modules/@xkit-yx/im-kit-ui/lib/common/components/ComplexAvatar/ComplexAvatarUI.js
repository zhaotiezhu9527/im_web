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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ComplexAvatarUI = void 0;
var react_1 = __importDefault(require("react"));
var UserCard_1 = require("../UserCard");
var MyUserCard_1 = require("../MyUserCard");
var CrudeAvatar_1 = require("../CrudeAvatar");
var ComplexAvatarUI = function (_a) {
    var relation = _a.relation, visible = _a.visible, _b = _a.prefix, prefix = _b === void 0 ? 'common' : _b, onChangeAlias = _a.onChangeAlias, onAvatarClick = _a.onAvatarClick, onCancel = _a.onCancel, onSave = _a.onSave, onAddFriendClick = _a.onAddFriendClick, onDeleteFriendClick = _a.onDeleteFriendClick, onBlockFriendClick = _a.onBlockFriendClick, onRemoveBlockFriendClick = _a.onRemoveBlockFriendClick, onSendMsglick = _a.onSendMsglick, props = __rest(_a, ["relation", "visible", "prefix", "onChangeAlias", "onAvatarClick", "onCancel", "onSave", "onAddFriendClick", "onDeleteFriendClick", "onBlockFriendClick", "onRemoveBlockFriendClick", "onSendMsglick"]);
    var _prefix = "".concat(prefix, "-complex-avatar");
    return (react_1.default.createElement("div", { className: "".concat(_prefix, "-wrapper ").concat(!onAvatarClick ? "".concat(_prefix, "-wrapper-nocursor") : ''), onClick: function (e) {
            e.stopPropagation();
        } },
        react_1.default.createElement("div", { onClick: onAvatarClick },
            react_1.default.createElement(CrudeAvatar_1.CrudeAvatar, __assign({}, props))),
        relation === 'myself' ? (react_1.default.createElement(MyUserCard_1.MyUserCard, __assign({ visible: visible, onSave: onSave, onCancel: onCancel, prefix: prefix }, props))) : (react_1.default.createElement(UserCard_1.UserCard, __assign({ visible: visible, relation: relation, onCancel: onCancel, onChangeAlias: onChangeAlias, onAddFriendClick: onAddFriendClick, onDeleteFriendClick: onDeleteFriendClick, onBlockFriendClick: onBlockFriendClick, onRemoveBlockFriendClick: onRemoveBlockFriendClick, onSendMsglick: onSendMsglick, prefix: prefix }, props)))));
};
exports.ComplexAvatarUI = ComplexAvatarUI;
