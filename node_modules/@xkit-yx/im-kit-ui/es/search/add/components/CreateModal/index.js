var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
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
import { Button, message, Modal, Input } from 'antd';
import React, { useState } from 'react';
import { urls, FriendSelectContainer, GroupAvatarSelect, useTranslation, useStateContext, } from '../../../../common';
var CreateModal = function (_a) {
    var visible = _a.visible, onChat = _a.onChat, onCancel = _a.onCancel, _b = _a.prefix, prefix = _b === void 0 ? 'search' : _b, _c = _a.commonPrefix, commonPrefix = _c === void 0 ? 'common' : _c;
    var _prefix = "".concat(prefix, "-add-create-modal");
    var t = useTranslation().t;
    var store = useStateContext().store;
    var _d = __read(useState([]), 2), selectedList = _d[0], setSelectedList = _d[1];
    var _e = __read(useState(''), 2), groupName = _e[0], setGroupName = _e[1];
    var _f = __read(useState(urls[Math.floor(Math.random() * 5)]), 2), avatarUrl = _f[0], setAvatarUrl = _f[1];
    var _g = __read(useState(''), 2), teamId = _g[0], setTeamId = _g[1];
    var _h = __read(useState(false), 2), creating = _h[0], setCreating = _h[1];
    var handleCreate = function () { return __awaiter(void 0, void 0, void 0, function () {
        var team, error_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
                    setCreating(true);
                    return [4 /*yield*/, store.teamStore.createTeamActive({
                            accounts: selectedList.map(function (item) { return item.account; }),
                            avatar: avatarUrl,
                            name: groupName.trim(),
                        })];
                case 1:
                    team = _a.sent();
                    message.success(t('createTeamSuccessText'));
                    setTeamId(team.teamId);
                    setCreating(false);
                    return [3 /*break*/, 3];
                case 2:
                    error_1 = _a.sent();
                    message.error(t('createTeamFailedText'));
                    setCreating(false);
                    return [3 /*break*/, 3];
                case 3: return [2 /*return*/];
            }
        });
    }); };
    var handleChat = function () { return __awaiter(void 0, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    if (!teamId) return [3 /*break*/, 2];
                    return [4 /*yield*/, store.sessionStore.insertSessionActive('team', teamId)];
                case 1:
                    _a.sent();
                    onChat(teamId);
                    resetState();
                    _a.label = 2;
                case 2: return [2 /*return*/];
            }
        });
    }); };
    var handleCancel = function () {
        onCancel();
        resetState();
    };
    var resetState = function () {
        setSelectedList([]);
        setGroupName('');
        setAvatarUrl(urls[Math.floor(Math.random() * 5)]);
        setTeamId('');
        setCreating(false);
    };
    var footer = (React.createElement("div", { className: "".concat(_prefix, "-footer") },
        React.createElement(Button, { onClick: handleCancel }, t('cancelText')),
        teamId ? (React.createElement(Button, { onClick: handleChat, type: "primary" }, t('chatButtonText'))) : (React.createElement(Button, { onClick: handleCreate, type: "primary", disabled: !groupName || !selectedList.length, loading: creating }, t('createButtonText')))));
    return (React.createElement(Modal, { className: _prefix, title: t('createTeamText'), visible: visible, onCancel: handleCancel, width: 530, footer: footer },
        React.createElement("div", { className: "".concat(_prefix, "-group-name") },
            React.createElement("div", { className: "".concat(_prefix, "-group-name-content") }, t('teamTitle')),
            React.createElement(Input, { className: "".concat(_prefix, "-group-name-input"), placeholder: t('searchTeamPlaceholder'), maxLength: 30, value: groupName, onChange: function (e) {
                    setGroupName(e.target.value);
                } })),
        React.createElement("div", { className: "".concat(_prefix, "-group-avatar") },
            React.createElement("div", { className: "".concat(_prefix, "-group-avatar-content") }, t('teamAvatarText')),
            React.createElement(GroupAvatarSelect, { avatar: avatarUrl, onSelect: function (url) {
                    setAvatarUrl(url);
                }, account: '', prefix: commonPrefix })),
        React.createElement("div", { className: "".concat(_prefix, "-group-friendList") },
            React.createElement("div", { className: "".concat(_prefix, "-group-friendList-content") }, t('addTeamMemberText')),
            React.createElement(FriendSelectContainer, { onSelect: function (list) {
                    setSelectedList(list);
                }, max: 10, selectedAccounts: selectedList.map(function (item) { return item.account; }), prefix: commonPrefix }))));
};
export default CreateModal;
