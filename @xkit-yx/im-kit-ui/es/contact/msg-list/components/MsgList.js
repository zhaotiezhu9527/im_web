import React from 'react';
import { useTranslation } from '../../../common';
import { MsgItem } from './MsgItem';
import { Spin, Empty } from 'antd';
export var MsgList = function (_a) {
    var msgs = _a.msgs, _b = _a.listLoading, listLoading = _b === void 0 ? false : _b, _c = _a.applyTeamLoaidng, applyTeamLoaidng = _c === void 0 ? false : _c, _d = _a.teamInviteLoading, teamInviteLoading = _d === void 0 ? false : _d, _e = _a.applyFriendLoading, applyFriendLoading = _e === void 0 ? false : _e, onAcceptApplyTeamClick = _a.onAcceptApplyTeamClick, onRejectApplyTeamClick = _a.onRejectApplyTeamClick, onAcceptTeamInviteClick = _a.onAcceptTeamInviteClick, onRejectTeamInviteClick = _a.onRejectTeamInviteClick, onAcceptApplyFriendClick = _a.onAcceptApplyFriendClick, onRejectApplyFriendClick = _a.onRejectApplyFriendClick, afterSendMsgClick = _a.afterSendMsgClick, renderMsgListHeader = _a.renderMsgListHeader, renderMsgListEmpty = _a.renderMsgListEmpty, _f = _a.prefix, prefix = _f === void 0 ? 'contact' : _f, _g = _a.commonPrefix, commonPrefix = _g === void 0 ? 'common' : _g;
    var _prefix = "".concat(prefix, "-msg");
    var t = useTranslation().t;
    return (React.createElement("div", { className: "".concat(_prefix, "-wrapper") },
        React.createElement("div", { className: "".concat(_prefix, "-title") }, renderMsgListHeader ? renderMsgListHeader() : t('msgListTitle')),
        listLoading ? (React.createElement(Spin, null)) : !msgs.length ? (renderMsgListEmpty ? (renderMsgListEmpty()) : (React.createElement(Empty, { style: { marginTop: 10 } }))) : (React.createElement("div", { className: "".concat(_prefix, "-content") }, msgs.map(function (item) { return (React.createElement(MsgItem, { key: "".concat(item.idServer, "_").concat(item.from, "_").concat(item.to, "_").concat(item.type), msg: item, applyTeamLoaidng: applyTeamLoaidng, teamInviteLoading: teamInviteLoading, applyFriendLoading: applyFriendLoading, onAcceptApplyTeamClick: onAcceptApplyTeamClick, onRejectApplyTeamClick: onRejectApplyTeamClick, onAcceptTeamInviteClick: onAcceptTeamInviteClick, onRejectTeamInviteClick: onRejectTeamInviteClick, onAcceptApplyFriendClick: onAcceptApplyFriendClick, onRejectApplyFriendClick: onRejectApplyFriendClick, afterSendMsgClick: afterSendMsgClick, prefix: prefix, commonPrefix: commonPrefix })); })))));
};
