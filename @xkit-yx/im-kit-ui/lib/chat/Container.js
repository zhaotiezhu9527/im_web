"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ChatContainer = void 0;
var react_1 = __importDefault(require("react"));
var p2pChatContainer_1 = __importDefault(require("./containers/p2pChatContainer"));
var teamChatContainer_1 = __importDefault(require("./containers/teamChatContainer"));
var common_1 = require("../common");
var mobx_react_1 = require("mobx-react");
var package_json_1 = __importDefault(require("../../package.json"));
exports.ChatContainer = (0, mobx_react_1.observer)(function (_a) {
    var selectedSession = _a.selectedSession, actions = _a.actions, p2pSettingActions = _a.p2pSettingActions, teamSettingActions = _a.teamSettingActions, msgOperMenu = _a.msgOperMenu, onSendText = _a.onSendText, afterTransferTeam = _a.afterTransferTeam, renderEmpty = _a.renderEmpty, renderP2pCustomMessage = _a.renderP2pCustomMessage, renderTeamCustomMessage = _a.renderTeamCustomMessage, renderHeader = _a.renderHeader, renderP2pInputPlaceHolder = _a.renderP2pInputPlaceHolder, renderTeamInputPlaceHolder = _a.renderTeamInputPlaceHolder, renderTeamMemberItem = _a.renderTeamMemberItem, renderMessageAvatar = _a.renderMessageAvatar, renderMessageName = _a.renderMessageName, renderMessageInnerContent = _a.renderMessageInnerContent, renderMessageOuterContent = _a.renderMessageOuterContent, _b = _a.prefix, prefix = _b === void 0 ? 'chat' : _b, _c = _a.commonPrefix, commonPrefix = _c === void 0 ? 'common' : _c;
    var _d = (0, common_1.useStateContext)(), store = _d.store, nim = _d.nim, initOptions = _d.initOptions;
    var finalSelectedSession = selectedSession || store.uiStore.selectedSession || '';
    var _e = common_1.Utils.parseSessionId(finalSelectedSession), scene = _e.scene, to = _e.to;
    (0, common_1.useEventTracking)({
        appkey: initOptions.appkey,
        version: package_json_1.default.version,
        component: 'ChatUIKit',
        imVersion: nim.version,
    });
    return finalSelectedSession ? (scene === 'p2p' ? (react_1.default.createElement(p2pChatContainer_1.default, { prefix: prefix, commonPrefix: commonPrefix, scene: scene, to: to, onSendText: onSendText, actions: actions, settingActions: p2pSettingActions, msgOperMenu: msgOperMenu, renderP2pCustomMessage: renderP2pCustomMessage, renderHeader: renderHeader, renderP2pInputPlaceHolder: renderP2pInputPlaceHolder, renderMessageAvatar: renderMessageAvatar, renderMessageName: renderMessageName, renderMessageInnerContent: renderMessageInnerContent, renderMessageOuterContent: renderMessageOuterContent })) : scene === 'team' ? (react_1.default.createElement(teamChatContainer_1.default, { prefix: prefix, commonPrefix: commonPrefix, scene: scene, to: to, onSendText: onSendText, actions: actions, settingActions: teamSettingActions, msgOperMenu: msgOperMenu, afterTransferTeam: afterTransferTeam, renderTeamCustomMessage: renderTeamCustomMessage, renderHeader: renderHeader, renderTeamInputPlaceHolder: renderTeamInputPlaceHolder, renderTeamMemberItem: renderTeamMemberItem, renderMessageAvatar: renderMessageAvatar, renderMessageName: renderMessageName, renderMessageInnerContent: renderMessageInnerContent, renderMessageOuterContent: renderMessageOuterContent })) : null) : renderEmpty ? (renderEmpty()) : (react_1.default.createElement(common_1.Welcome, { prefix: commonPrefix }));
});
