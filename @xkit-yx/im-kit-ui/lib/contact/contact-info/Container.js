"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ContactInfoContainer = void 0;
var react_1 = __importDefault(require("react"));
var mobx_react_1 = require("mobx-react");
var common_1 = require("../../common");
var Container_1 = require("../friend-list/Container");
var Container_2 = require("../black-list/Container");
var Container_3 = require("../group-list/Container");
var Container_4 = require("../msg-list/Container");
var package_json_1 = __importDefault(require("../../../package.json"));
exports.ContactInfoContainer = (0, mobx_react_1.observer)(function (_a) {
    var onBlackItemClick = _a.onBlackItemClick, onFriendItemClick = _a.onFriendItemClick, onGroupItemClick = _a.onGroupItemClick, renderBlackListEmpty = _a.renderBlackListEmpty, renderBlackListHeader = _a.renderBlackListHeader, renderFriendListEmpty = _a.renderFriendListEmpty, renderFriendListHeader = _a.renderFriendListHeader, renderGroupListEmpty = _a.renderGroupListEmpty, renderGroupListHeader = _a.renderGroupListHeader, renderMsgListEmpty = _a.renderMsgListEmpty, renderMsgListHeader = _a.renderMsgListHeader, renderEmpty = _a.renderEmpty, afterSendMsgClick = _a.afterSendMsgClick, afterAcceptApplyTeam = _a.afterAcceptApplyTeam, afterRejectApplyTeam = _a.afterRejectApplyTeam, afterAcceptTeamInvite = _a.afterAcceptTeamInvite, afterRejectTeamInvite = _a.afterRejectTeamInvite, afterAcceptApplyFriend = _a.afterAcceptApplyFriend, afterRejectApplyFriend = _a.afterRejectApplyFriend, _b = _a.prefix, prefix = _b === void 0 ? 'contact' : _b, _c = _a.commonPrefix, commonPrefix = _c === void 0 ? 'common' : _c;
    var _d = (0, common_1.useStateContext)(), store = _d.store, nim = _d.nim, initOptions = _d.initOptions;
    (0, common_1.useEventTracking)({
        appkey: initOptions.appkey,
        version: package_json_1.default.version,
        component: 'ContactUIKit',
        imVersion: nim.version,
    });
    return store.uiStore.selectedContactType === 'friendList' ? (react_1.default.createElement(Container_1.FriendListContainer, { onItemClick: onFriendItemClick, renderFriendListEmpty: renderFriendListEmpty, renderFriendListHeader: renderFriendListHeader, afterSendMsgClick: afterSendMsgClick, prefix: prefix, commonPrefix: commonPrefix })) : store.uiStore.selectedContactType === 'blackList' ? (react_1.default.createElement(Container_2.BlackListContainer, { onItemClick: onBlackItemClick, renderBlackListEmpty: renderBlackListEmpty, renderBlackListHeader: renderBlackListHeader, afterSendMsgClick: afterSendMsgClick, prefix: prefix, commonPrefix: commonPrefix })) : store.uiStore.selectedContactType === 'groupList' ? (react_1.default.createElement(Container_3.GroupListContainer, { onItemClick: onGroupItemClick, renderGroupListEmpty: renderGroupListEmpty, renderGroupListHeader: renderGroupListHeader, prefix: prefix })) : store.uiStore.selectedContactType === 'msgList' ? (react_1.default.createElement(Container_4.MsgListContainer, { renderMsgListEmpty: renderMsgListEmpty, renderMsgListHeader: renderMsgListHeader, afterSendMsgClick: afterSendMsgClick, afterAcceptApplyTeam: afterAcceptApplyTeam, afterRejectApplyTeam: afterRejectApplyTeam, afterAcceptTeamInvite: afterAcceptTeamInvite, afterRejectTeamInvite: afterRejectTeamInvite, afterAcceptApplyFriend: afterAcceptApplyFriend, afterRejectApplyFriend: afterRejectApplyFriend, prefix: prefix, commonPrefix: commonPrefix })) : renderEmpty ? (renderEmpty()) : (react_1.default.createElement(common_1.Welcome, { prefix: commonPrefix }));
});
