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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ConversationList = void 0;
var react_1 = __importDefault(require("react"));
var P2PItem_1 = require("./P2PItem");
var GroupItem_1 = require("./GroupItem");
var antd_1 = require("antd");
var ConversationList = function (_a) {
    var _b;
    var sessions = _a.sessions, _c = _a.loading, loading = _c === void 0 ? false : _c, selectedSession = _a.selectedSession, onSessionItemClick = _a.onSessionItemClick, onSessionItemDeleteClick = _a.onSessionItemDeleteClick, onSessionItemStickTopChange = _a.onSessionItemStickTopChange, onSessionItemMuteChange = _a.onSessionItemMuteChange, renderCustomP2pSession = _a.renderCustomP2pSession, renderCustomTeamSession = _a.renderCustomTeamSession, renderSessionListEmpty = _a.renderSessionListEmpty, renderP2pSessionAvatar = _a.renderP2pSessionAvatar, renderTeamSessionAvatar = _a.renderTeamSessionAvatar, renderSessionMsg = _a.renderSessionMsg, renderSessionName = _a.renderSessionName, _d = _a.prefix, prefix = _d === void 0 ? 'conversation' : _d, _e = _a.commonPrefix, commonPrefix = _e === void 0 ? 'common' : _e;
    return (react_1.default.createElement("div", { className: "".concat(prefix, "-list-wrapper") }, loading ? (react_1.default.createElement(antd_1.Spin, null)) : !sessions.length ? ((_b = renderSessionListEmpty === null || renderSessionListEmpty === void 0 ? void 0 : renderSessionListEmpty()) !== null && _b !== void 0 ? _b : react_1.default.createElement(antd_1.Empty, { style: { marginTop: 10 } })) : (sessions.map(function (item) {
        var _a, _b;
        return item.scene === 'p2p'
            ? (_a = renderCustomP2pSession === null || renderCustomP2pSession === void 0 ? void 0 : renderCustomP2pSession({
                session: item,
                onSessionItemClick: onSessionItemClick,
                onSessionItemDeleteClick: onSessionItemDeleteClick,
                onSessionItemMuteChange: onSessionItemMuteChange,
                onSessionItemStickTopChange: onSessionItemStickTopChange,
            })) !== null && _a !== void 0 ? _a : (react_1.default.createElement(P2PItem_1.P2PItem, __assign({}, item, { key: item.id, prefix: prefix, commonPrefix: commonPrefix, isSelected: selectedSession === item.id, onItemClick: function () {
                    onSessionItemClick(item);
                }, onDeleteClick: function () {
                    onSessionItemDeleteClick(item);
                }, onStickTopChange: function (isTop) {
                    onSessionItemStickTopChange(item, isTop);
                }, onMuteChange: function (mute) {
                    onSessionItemMuteChange(item, mute);
                }, sessionNameRenderer: renderSessionName === null || renderSessionName === void 0 ? void 0 : renderSessionName({ session: item }), sessionMsgRenderer: renderSessionMsg === null || renderSessionMsg === void 0 ? void 0 : renderSessionMsg({ session: item }), avatarRenderer: renderP2pSessionAvatar === null || renderP2pSessionAvatar === void 0 ? void 0 : renderP2pSessionAvatar({ session: item }) })))
            : (_b = renderCustomTeamSession === null || renderCustomTeamSession === void 0 ? void 0 : renderCustomTeamSession({
                session: item,
                onSessionItemClick: onSessionItemClick,
                onSessionItemDeleteClick: onSessionItemDeleteClick,
                onSessionItemStickTopChange: onSessionItemStickTopChange,
            })) !== null && _b !== void 0 ? _b : (react_1.default.createElement(GroupItem_1.GroupItem, __assign({}, item, { key: item.id, prefix: prefix, commonPrefix: commonPrefix, isSelected: selectedSession === item.id, onItemClick: function () {
                    onSessionItemClick(item);
                }, onDeleteClick: function () {
                    onSessionItemDeleteClick(item);
                }, onStickTopChange: function (isTop) {
                    onSessionItemStickTopChange(item, isTop);
                }, sessionNameRenderer: renderSessionName === null || renderSessionName === void 0 ? void 0 : renderSessionName({ session: item }), sessionMsgRenderer: renderSessionMsg === null || renderSessionMsg === void 0 ? void 0 : renderSessionMsg({ session: item }), avatarRenderer: renderTeamSessionAvatar === null || renderTeamSessionAvatar === void 0 ? void 0 : renderTeamSessionAvatar({ session: item }) })));
    }))));
};
exports.ConversationList = ConversationList;
