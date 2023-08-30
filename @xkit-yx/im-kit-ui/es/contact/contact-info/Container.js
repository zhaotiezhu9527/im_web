import React from 'react';
import { observer } from 'mobx-react';
import { useStateContext, useEventTracking, Welcome } from '../../common';
import { FriendListContainer } from '../friend-list/Container';
import { BlackListContainer } from '../black-list/Container';
import { GroupListContainer } from '../group-list/Container';
import { MsgListContainer } from '../msg-list/Container';
import packageJson from '../../../package.json';
export var ContactInfoContainer = observer(function (_a) {
    var onBlackItemClick = _a.onBlackItemClick, onFriendItemClick = _a.onFriendItemClick, onGroupItemClick = _a.onGroupItemClick, renderBlackListEmpty = _a.renderBlackListEmpty, renderBlackListHeader = _a.renderBlackListHeader, renderFriendListEmpty = _a.renderFriendListEmpty, renderFriendListHeader = _a.renderFriendListHeader, renderGroupListEmpty = _a.renderGroupListEmpty, renderGroupListHeader = _a.renderGroupListHeader, renderMsgListEmpty = _a.renderMsgListEmpty, renderMsgListHeader = _a.renderMsgListHeader, renderEmpty = _a.renderEmpty, afterSendMsgClick = _a.afterSendMsgClick, afterAcceptApplyTeam = _a.afterAcceptApplyTeam, afterRejectApplyTeam = _a.afterRejectApplyTeam, afterAcceptTeamInvite = _a.afterAcceptTeamInvite, afterRejectTeamInvite = _a.afterRejectTeamInvite, afterAcceptApplyFriend = _a.afterAcceptApplyFriend, afterRejectApplyFriend = _a.afterRejectApplyFriend, _b = _a.prefix, prefix = _b === void 0 ? 'contact' : _b, _c = _a.commonPrefix, commonPrefix = _c === void 0 ? 'common' : _c;
    var _d = useStateContext(), store = _d.store, nim = _d.nim, initOptions = _d.initOptions;
    useEventTracking({
        appkey: initOptions.appkey,
        version: packageJson.version,
        component: 'ContactUIKit',
        imVersion: nim.version,
    });
    return store.uiStore.selectedContactType === 'friendList' ? (React.createElement(FriendListContainer, { onItemClick: onFriendItemClick, renderFriendListEmpty: renderFriendListEmpty, renderFriendListHeader: renderFriendListHeader, afterSendMsgClick: afterSendMsgClick, prefix: prefix, commonPrefix: commonPrefix })) : store.uiStore.selectedContactType === 'blackList' ? (React.createElement(BlackListContainer, { onItemClick: onBlackItemClick, renderBlackListEmpty: renderBlackListEmpty, renderBlackListHeader: renderBlackListHeader, afterSendMsgClick: afterSendMsgClick, prefix: prefix, commonPrefix: commonPrefix })) : store.uiStore.selectedContactType === 'groupList' ? (React.createElement(GroupListContainer, { onItemClick: onGroupItemClick, renderGroupListEmpty: renderGroupListEmpty, renderGroupListHeader: renderGroupListHeader, prefix: prefix })) : store.uiStore.selectedContactType === 'msgList' ? (React.createElement(MsgListContainer, { renderMsgListEmpty: renderMsgListEmpty, renderMsgListHeader: renderMsgListHeader, afterSendMsgClick: afterSendMsgClick, afterAcceptApplyTeam: afterAcceptApplyTeam, afterRejectApplyTeam: afterRejectApplyTeam, afterAcceptTeamInvite: afterAcceptTeamInvite, afterRejectTeamInvite: afterRejectTeamInvite, afterAcceptApplyFriend: afterAcceptApplyFriend, afterRejectApplyFriend: afterRejectApplyFriend, prefix: prefix, commonPrefix: commonPrefix })) : renderEmpty ? (renderEmpty()) : (React.createElement(Welcome, { prefix: commonPrefix }));
});
