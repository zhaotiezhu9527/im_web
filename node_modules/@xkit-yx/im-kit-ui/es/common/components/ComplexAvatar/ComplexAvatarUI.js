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
import React from 'react';
import { UserCard } from '../UserCard';
import { MyUserCard } from '../MyUserCard';
import { CrudeAvatar } from '../CrudeAvatar';
export var ComplexAvatarUI = function (_a) {
    var relation = _a.relation, visible = _a.visible, _b = _a.prefix, prefix = _b === void 0 ? 'common' : _b, onChangeAlias = _a.onChangeAlias, onAvatarClick = _a.onAvatarClick, onCancel = _a.onCancel, onSave = _a.onSave, onAddFriendClick = _a.onAddFriendClick, onDeleteFriendClick = _a.onDeleteFriendClick, onBlockFriendClick = _a.onBlockFriendClick, onRemoveBlockFriendClick = _a.onRemoveBlockFriendClick, onSendMsglick = _a.onSendMsglick, props = __rest(_a, ["relation", "visible", "prefix", "onChangeAlias", "onAvatarClick", "onCancel", "onSave", "onAddFriendClick", "onDeleteFriendClick", "onBlockFriendClick", "onRemoveBlockFriendClick", "onSendMsglick"]);
    var _prefix = "".concat(prefix, "-complex-avatar");
    return (React.createElement("div", { className: "".concat(_prefix, "-wrapper ").concat(!onAvatarClick ? "".concat(_prefix, "-wrapper-nocursor") : ''), onClick: function (e) {
            e.stopPropagation();
        } },
        React.createElement("div", { onClick: onAvatarClick },
            React.createElement(CrudeAvatar, __assign({}, props))),
        relation === 'myself' ? (React.createElement(MyUserCard, __assign({ visible: visible, onSave: onSave, onCancel: onCancel, prefix: prefix }, props))) : (React.createElement(UserCard, __assign({ visible: visible, relation: relation, onCancel: onCancel, onChangeAlias: onChangeAlias, onAddFriendClick: onAddFriendClick, onDeleteFriendClick: onDeleteFriendClick, onBlockFriendClick: onBlockFriendClick, onRemoveBlockFriendClick: onRemoveBlockFriendClick, onSendMsglick: onSendMsglick, prefix: prefix }, props)))));
};
