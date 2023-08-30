"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MsgList = void 0;
var react_1 = __importDefault(require("react"));
var common_1 = require("../../../common");
var MsgItem_1 = require("./MsgItem");
var antd_1 = require("antd");
var MsgList = function (_a) {
    var msgs = _a.msgs, _b = _a.listLoading, listLoading = _b === void 0 ? false : _b, _c = _a.applyTeamLoaidng, applyTeamLoaidng = _c === void 0 ? false : _c, _d = _a.teamInviteLoading, teamInviteLoading = _d === void 0 ? false : _d, _e = _a.applyFriendLoading, applyFriendLoading = _e === void 0 ? false : _e, onAcceptApplyTeamClick = _a.onAcceptApplyTeamClick, onRejectApplyTeamClick = _a.onRejectApplyTeamClick, onAcceptTeamInviteClick = _a.onAcceptTeamInviteClick, onRejectTeamInviteClick = _a.onRejectTeamInviteClick, onAcceptApplyFriendClick = _a.onAcceptApplyFriendClick, onRejectApplyFriendClick = _a.onRejectApplyFriendClick, afterSendMsgClick = _a.afterSendMsgClick, renderMsgListHeader = _a.renderMsgListHeader, renderMsgListEmpty = _a.renderMsgListEmpty, _f = _a.prefix, prefix = _f === void 0 ? 'contact' : _f, _g = _a.commonPrefix, commonPrefix = _g === void 0 ? 'common' : _g;
    var _prefix = "".concat(prefix, "-msg");
    var t = (0, common_1.useTranslation)().t;
    return (react_1.default.createElement("div", { className: "".concat(_prefix, "-wrapper") },
        react_1.default.createElement("div", { className: "".concat(_prefix, "-title") }, renderMsgListHeader ? renderMsgListHeader() : t('msgListTitle')),
        listLoading ? (react_1.default.createElement(antd_1.Spin, null)) : !msgs.length ? (renderMsgListEmpty ? (renderMsgListEmpty()) : (react_1.default.createElement(antd_1.Empty, { style: { marginTop: 10 } }))) : (react_1.default.createElement("div", { className: "".concat(_prefix, "-content") }, msgs.map(function (item) { return (react_1.default.createElement(MsgItem_1.MsgItem, { key: "".concat(item.idServer, "_").concat(item.from, "_").concat(item.to, "_").concat(item.type), msg: item, applyTeamLoaidng: applyTeamLoaidng, teamInviteLoading: teamInviteLoading, applyFriendLoading: applyFriendLoading, onAcceptApplyTeamClick: onAcceptApplyTeamClick, onRejectApplyTeamClick: onRejectApplyTeamClick, onAcceptTeamInviteClick: onAcceptTeamInviteClick, onRejectTeamInviteClick: onRejectTeamInviteClick, onAcceptApplyFriendClick: onAcceptApplyFriendClick, onRejectApplyFriendClick: onRejectApplyFriendClick, afterSendMsgClick: afterSendMsgClick, prefix: prefix, commonPrefix: commonPrefix })); })))));
};
exports.MsgList = MsgList;
