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
import { Button, message, Modal } from 'antd';
import { SearchInput, useTranslation, useStateContext, } from '../../../../common';
import React, { useState } from 'react';
import { CrudeAvatar } from '../../../../common';
var JoinTeamModal = function (_a) {
    var visible = _a.visible, onCancel = _a.onCancel, onChat = _a.onChat, _b = _a.prefix, prefix = _b === void 0 ? 'search' : _b, _c = _a.commonPrefix, commonPrefix = _c === void 0 ? 'common' : _c;
    var _prefix = "".concat(prefix, "-add-modal");
    var store = useStateContext().store;
    var t = useTranslation().t;
    var _d = __read(useState(''), 2), searchValue = _d[0], setSearchValue = _d[1];
    var _e = __read(useState(false), 2), inTeam = _e[0], setInTeam = _e[1];
    var _f = __read(useState(undefined), 2), searchRes = _f[0], setSearchRes = _f[1];
    var _g = __read(useState(false), 2), searchResEmpty = _g[0], setSearchResEmpty = _g[1];
    var _h = __read(useState(false), 2), searching = _h[0], setSearching = _h[1];
    var _j = __read(useState(false), 2), adding = _j[0], setAdding = _j[1];
    var handleChange = function (val) {
        setSearchValue(val);
        setSearchResEmpty(false);
        setSearchRes(undefined);
    };
    var handleSearch = function () { return __awaiter(void 0, void 0, void 0, function () {
        var _a, team, inTeam_1, error_1;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    _b.trys.push([0, 2, , 3]);
                    setSearching(true);
                    return [4 /*yield*/, store.uiStore.getTeamAndRelation(searchValue)];
                case 1:
                    _a = _b.sent(), team = _a.team, inTeam_1 = _a.inTeam;
                    if (!team) {
                        setSearchResEmpty(true);
                    }
                    else {
                        setInTeam(inTeam_1);
                        setSearchRes(team);
                    }
                    setSearching(false);
                    return [3 /*break*/, 3];
                case 2:
                    error_1 = _b.sent();
                    setSearchResEmpty(true);
                    setSearching(false);
                    return [3 /*break*/, 3];
                case 3: return [2 /*return*/];
            }
        });
    }); };
    var handleAdd = function () { return __awaiter(void 0, void 0, void 0, function () {
        var error_2;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 3, , 4]);
                    if (!searchRes) return [3 /*break*/, 2];
                    if (searchRes.type === 'normal') {
                        message.error(t('notSupportJoinText'));
                        return [2 /*return*/];
                    }
                    setAdding(true);
                    return [4 /*yield*/, store.teamStore.applyTeamActive(searchRes.teamId)];
                case 1:
                    _a.sent();
                    if (store.teamStore.teams.get(searchRes.teamId)) {
                        setInTeam(true);
                        message.success(t('joinTeamSuccessText'));
                    }
                    else {
                        message.success(t('applyTeamSuccessText'));
                    }
                    _a.label = 2;
                case 2:
                    setAdding(false);
                    return [3 /*break*/, 4];
                case 3:
                    error_2 = _a.sent();
                    setAdding(false);
                    return [3 /*break*/, 4];
                case 4: return [2 /*return*/];
            }
        });
    }); };
    var handleChat = function () { return __awaiter(void 0, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    if (!searchRes) return [3 /*break*/, 2];
                    return [4 /*yield*/, store.sessionStore.insertSessionActive('team', searchRes.teamId)];
                case 1:
                    _a.sent();
                    onChat(searchRes.teamId);
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
        setSearchValue('');
        setInTeam(false);
        setSearchRes(undefined);
        setSearchResEmpty(false);
        setSearching(false);
        setAdding(false);
    };
    var renderFooter = function () { return (React.createElement("div", { className: "".concat(_prefix, "-footer") },
        React.createElement(Button, { onClick: handleCancel }, t('cancelText')),
        React.createElement(Button, { loading: searching, onClick: handleSearch, type: "primary" }, t('searchButtonText')))); };
    return (React.createElement("div", null,
        React.createElement(Modal, { className: _prefix, title: t('joinTeamText'), onCancel: handleCancel, visible: visible, width: 460, footer: !searchRes ? renderFooter() : null },
            React.createElement(SearchInput, { placeholder: t('teamIdPlaceholder'), prefix: commonPrefix, onChange: handleChange, value: searchValue }),
            searchResEmpty ? (React.createElement("div", { className: "".concat(_prefix, "-empty-content") }, t('teamIdNotMatchText'))) : searchRes ? (React.createElement("div", { className: "".concat(_prefix, "-content") },
                React.createElement(CrudeAvatar, { avatar: searchRes.avatar, nick: searchRes.name, account: searchRes.teamId }),
                React.createElement("div", { className: "".concat(_prefix, "-info") },
                    React.createElement("div", { className: "".concat(_prefix, "-info-name") }, searchRes.name || searchRes.teamId),
                    React.createElement("div", { className: "".concat(_prefix, "-info-account") }, searchRes.teamId)),
                inTeam ? (React.createElement(Button, { type: "primary", onClick: handleChat }, t('chatButtonText'))) : (React.createElement(Button, { loading: adding, type: "primary", onClick: handleAdd }, t('addButtonText'))))) : null)));
};
export default JoinTeamModal;
