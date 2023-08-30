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
import React, { useEffect, useState } from 'react';
import { ConversationList, } from './components/ConversationList';
import { useStateContext, useEventTracking } from '../common';
import packageJson from '../../package.json';
import { observer } from 'mobx-react';
export var ConversationContainer = observer(function (_a) {
    var _b = _a.prefix, prefix = _b === void 0 ? 'conversation' : _b, _c = _a.commonPrefix, commonPrefix = _c === void 0 ? 'common' : _c, onSessionItemClick = _a.onSessionItemClick, onSessionItemDeleteClick = _a.onSessionItemDeleteClick, onSessionItemStickTopChange = _a.onSessionItemStickTopChange, onSessionItemMuteChange = _a.onSessionItemMuteChange, renderSessionListEmpty = _a.renderSessionListEmpty, renderCustomP2pSession = _a.renderCustomP2pSession, renderCustomTeamSession = _a.renderCustomTeamSession, renderP2pSessionAvatar = _a.renderP2pSessionAvatar, renderTeamSessionAvatar = _a.renderTeamSessionAvatar, renderSessionName = _a.renderSessionName, renderSessionMsg = _a.renderSessionMsg;
    var _d = useStateContext(), nim = _d.nim, store = _d.store, initOptions = _d.initOptions, localOptions = _d.localOptions;
    var sessionId = store.uiStore.selectedSession;
    useEventTracking({
        appkey: initOptions.appkey,
        version: packageJson.version,
        component: 'ConversationUIKit',
        imVersion: nim.version,
    });
    // 处理 team 会话列表 @ 提醒
    var _e = __read(useState([]), 2), sessionList = _e[0], setSessionList = _e[1];
    var handleSessionItemClick = function (session) { return __awaiter(void 0, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, store.uiStore.selectSession(session.id)];
                case 1:
                    _a.sent();
                    onSessionItemClick === null || onSessionItemClick === void 0 ? void 0 : onSessionItemClick(session.id);
                    return [2 /*return*/];
            }
        });
    }); };
    var handleSessionItemDeleteClick = function (session) { return __awaiter(void 0, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, store.sessionStore.deleteSessionActive(session.id)];
                case 1:
                    _a.sent();
                    onSessionItemDeleteClick === null || onSessionItemDeleteClick === void 0 ? void 0 : onSessionItemDeleteClick(session.id);
                    return [2 /*return*/];
            }
        });
    }); };
    var handleSessionItemStickTopChange = function (session, isTop) { return __awaiter(void 0, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    if (!isTop) return [3 /*break*/, 2];
                    return [4 /*yield*/, store.sessionStore.addStickTopSessionActive(session.id)];
                case 1:
                    _a.sent();
                    return [3 /*break*/, 4];
                case 2: return [4 /*yield*/, store.sessionStore.deleteStickTopSessionActive(session.id)];
                case 3:
                    _a.sent();
                    _a.label = 4;
                case 4:
                    onSessionItemStickTopChange === null || onSessionItemStickTopChange === void 0 ? void 0 : onSessionItemStickTopChange(session.id, isTop);
                    return [2 /*return*/];
            }
        });
    }); };
    var handleSessionItemMuteChange = function (session, mute) { return __awaiter(void 0, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, store.relationStore.setMuteActive({
                        account: session.to,
                        isAdd: mute,
                    })];
                case 1:
                    _a.sent();
                    onSessionItemMuteChange === null || onSessionItemMuteChange === void 0 ? void 0 : onSessionItemMuteChange(session.id, mute);
                    return [2 /*return*/];
            }
        });
    }); };
    useEffect(function () {
        setSessionList(__spreadArray([], __read(store.uiStore.sessionList), false));
    }, [store.uiStore.sessionList]);
    useEffect(function () {
        // 订阅会话列表中 p2p 的在线离线状态
        var accounts = store.uiStore.sessionList
            .filter(function (item) { return item.scene === 'p2p'; })
            .map(function (item) { return item.to; });
        store.eventStore.subscribeLoginStateActive(accounts).catch(function (err) {
            // 忽略报错
        });
    }, [store.uiStore.sessionList, store.eventStore]);
    return (React.createElement(ConversationList, { sessions: sessionList, 
        // loading={loading}
        selectedSession: store.uiStore.selectedSession, onSessionItemClick: handleSessionItemClick, onSessionItemDeleteClick: handleSessionItemDeleteClick, onSessionItemStickTopChange: handleSessionItemStickTopChange, onSessionItemMuteChange: handleSessionItemMuteChange, renderCustomP2pSession: renderCustomP2pSession, renderCustomTeamSession: renderCustomTeamSession, renderSessionListEmpty: renderSessionListEmpty, renderP2pSessionAvatar: renderP2pSessionAvatar, renderTeamSessionAvatar: renderTeamSessionAvatar, renderSessionName: renderSessionName, renderSessionMsg: renderSessionMsg, prefix: prefix, commonPrefix: commonPrefix }));
});
