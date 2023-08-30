import React from 'react';
import P2pChatContainer from './containers/p2pChatContainer';
import TeamChatContainer from './containers/teamChatContainer';
import { useStateContext, useEventTracking, Welcome, Utils } from '../common';
import { observer } from 'mobx-react';
import packageJson from '../../package.json';
export var ChatContainer = observer(function (_a) {
    var selectedSession = _a.selectedSession, actions = _a.actions, p2pSettingActions = _a.p2pSettingActions, teamSettingActions = _a.teamSettingActions, msgOperMenu = _a.msgOperMenu, onSendText = _a.onSendText, afterTransferTeam = _a.afterTransferTeam, renderEmpty = _a.renderEmpty, renderP2pCustomMessage = _a.renderP2pCustomMessage, renderTeamCustomMessage = _a.renderTeamCustomMessage, renderHeader = _a.renderHeader, renderP2pInputPlaceHolder = _a.renderP2pInputPlaceHolder, renderTeamInputPlaceHolder = _a.renderTeamInputPlaceHolder, renderTeamMemberItem = _a.renderTeamMemberItem, renderMessageAvatar = _a.renderMessageAvatar, renderMessageName = _a.renderMessageName, renderMessageInnerContent = _a.renderMessageInnerContent, renderMessageOuterContent = _a.renderMessageOuterContent, _b = _a.prefix, prefix = _b === void 0 ? 'chat' : _b, _c = _a.commonPrefix, commonPrefix = _c === void 0 ? 'common' : _c;
    var _d = useStateContext(), store = _d.store, nim = _d.nim, initOptions = _d.initOptions;
    var finalSelectedSession = selectedSession || store.uiStore.selectedSession || '';
    var _e = Utils.parseSessionId(finalSelectedSession), scene = _e.scene, to = _e.to;
    useEventTracking({
        appkey: initOptions.appkey,
        version: packageJson.version,
        component: 'ChatUIKit',
        imVersion: nim.version,
    });
    return finalSelectedSession ? (scene === 'p2p' ? (React.createElement(P2pChatContainer, { prefix: prefix, commonPrefix: commonPrefix, scene: scene, to: to, onSendText: onSendText, actions: actions, settingActions: p2pSettingActions, msgOperMenu: msgOperMenu, renderP2pCustomMessage: renderP2pCustomMessage, renderHeader: renderHeader, renderP2pInputPlaceHolder: renderP2pInputPlaceHolder, renderMessageAvatar: renderMessageAvatar, renderMessageName: renderMessageName, renderMessageInnerContent: renderMessageInnerContent, renderMessageOuterContent: renderMessageOuterContent })) : scene === 'team' ? (React.createElement(TeamChatContainer, { prefix: prefix, commonPrefix: commonPrefix, scene: scene, to: to, onSendText: onSendText, actions: actions, settingActions: teamSettingActions, msgOperMenu: msgOperMenu, afterTransferTeam: afterTransferTeam, renderTeamCustomMessage: renderTeamCustomMessage, renderHeader: renderHeader, renderTeamInputPlaceHolder: renderTeamInputPlaceHolder, renderTeamMemberItem: renderTeamMemberItem, renderMessageAvatar: renderMessageAvatar, renderMessageName: renderMessageName, renderMessageInnerContent: renderMessageInnerContent, renderMessageOuterContent: renderMessageOuterContent })) : null) : renderEmpty ? (renderEmpty()) : (React.createElement(Welcome, { prefix: commonPrefix }));
});
