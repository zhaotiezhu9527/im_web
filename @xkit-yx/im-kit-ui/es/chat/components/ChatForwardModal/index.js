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
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
import React, { useEffect, useMemo, useState } from 'react';
import { Input, message } from 'antd';
import { useTranslation, ComplexAvatarContainer, useStateContext, CrudeAvatar, SelectModal, } from '../../../common';
import { parseSessionId } from '../../../utils';
var ChatForwardModal = function (_a) {
    var msg = _a.msg, visible = _a.visible, onCancel = _a.onCancel, onSend = _a.onSend, _b = _a.prefix, prefix = _b === void 0 ? 'chat' : _b, _c = _a.commonPrefix, commonPrefix = _c === void 0 ? 'common' : _c;
    var t = useTranslation().t;
    var store = useStateContext().store;
    var _d = __read(useState(''), 2), comment = _d[0], setComment = _d[1];
    var _e = __read(useState(false), 2), isSearching = _e[0], setIsSearching = _e[1];
    useEffect(function () {
        resetState();
    }, [visible]);
    var _prefix = "".concat(prefix, "-forward-modal");
    var datasource = useMemo(function () {
        if (isSearching) {
            var friends = store.uiStore.friends
                .filter(function (item) { return !store.relationStore.blacklist.includes(item.account); })
                .map(function (item) { return ({
                key: 'p2p-' + item.account,
                label: store.uiStore.getAppellation({ account: item.account }),
            }); });
            var teams = store.uiStore.teamList.map(function (item) { return ({
                key: 'team-' + item.teamId,
                label: item.name || item.teamId,
            }); });
            return __spreadArray(__spreadArray([], __read(friends), false), __read(teams), false);
        }
        var res = __spreadArray([], __read(store.sessionStore.sessions.values()), false).map(function (item) {
            if (item.scene === 'p2p') {
                return {
                    key: item.id,
                    label: store.uiStore.getAppellation({ account: item.to }),
                };
            }
            if (item.scene === 'team') {
                var team = store.teamStore.teams.get(item.to);
                return {
                    key: item.id,
                    label: (team === null || team === void 0 ? void 0 : team.name) || (team === null || team === void 0 ? void 0 : team.teamId) || '',
                };
            }
            return null;
        })
            .filter(function (item) { return !!item; });
        return res;
    }, [
        isSearching,
        store.sessionStore.sessions,
        store.teamStore.teams,
        store.relationStore.blacklist,
        store.uiStore,
    ]);
    var itemAvatarRender = function (data) {
        var _a = parseSessionId(data.key), scene = _a.scene, to = _a.to;
        if (scene === 'p2p') {
            return (React.createElement(ComplexAvatarContainer, { prefix: commonPrefix, canClick: false, account: to, size: 32 }));
        }
        if (scene === 'team') {
            var team = store.teamStore.teams.get(to);
            return (React.createElement(CrudeAvatar, { account: to, avatar: (team === null || team === void 0 ? void 0 : team.avatar) || '', nick: (team === null || team === void 0 ? void 0 : team.name) || '', size: 32 }));
        }
        return null;
    };
    var handleCommentChange = function (e) {
        setComment(e.target.value);
    };
    var resetState = function () {
        setComment('');
        setIsSearching(false);
    };
    var handleOk = function (data) { return __awaiter(void 0, void 0, void 0, function () {
        var _a, scene, to, error_1;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    _a = parseSessionId(data[0].key), scene = _a.scene, to = _a.to;
                    if (!(scene && to)) return [3 /*break*/, 4];
                    _b.label = 1;
                case 1:
                    _b.trys.push([1, 3, , 4]);
                    return [4 /*yield*/, store.msgStore.forwardMsgActive({
                            msg: msg,
                            scene: scene,
                            to: to,
                        }, comment)];
                case 2:
                    _b.sent();
                    onSend();
                    return [3 /*break*/, 4];
                case 3:
                    error_1 = _b.sent();
                    message.error(t('forwardFailedText'));
                    throw error_1;
                case 4: return [2 /*return*/];
            }
        });
    }); };
    return (React.createElement(SelectModal, { title: t('forwardText'), visible: visible, datasource: datasource, itemAvatarRender: itemAvatarRender, onSearchChange: function (value) {
            setIsSearching(!!value);
        }, type: "radio", min: 1, okText: t('sendBtnText'), searchPlaceholder: t('searchInputPlaceholder'), leftTitle: t(isSearching ? 'searchText' : 'recentSessionText'), rightTitle: t('sendToText'), bottomRenderer: React.createElement(Input, { className: "".concat(_prefix, "-input"), placeholder: t('commentText'), allowClear: true, value: comment, onChange: handleCommentChange }), onOk: handleOk, onCancel: onCancel, prefix: commonPrefix }));
};
export default ChatForwardModal;
