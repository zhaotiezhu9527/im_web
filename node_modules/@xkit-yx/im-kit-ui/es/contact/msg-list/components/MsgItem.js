import React from 'react';
import { ComplexAvatarContainer, CrudeAvatar, useTranslation, useStateContext, } from '../../../common';
import { Button } from 'antd';
import { CheckCircleFilled, CloseCircleFilled } from '@ant-design/icons';
import { observer } from 'mobx-react';
export var MsgItem = observer(function (_a) {
    var msg = _a.msg, _b = _a.applyTeamLoaidng, applyTeamLoaidng = _b === void 0 ? false : _b, _c = _a.teamInviteLoading, teamInviteLoading = _c === void 0 ? false : _c, _d = _a.applyFriendLoading, applyFriendLoading = _d === void 0 ? false : _d, onAcceptApplyTeamClick = _a.onAcceptApplyTeamClick, onRejectApplyTeamClick = _a.onRejectApplyTeamClick, onAcceptTeamInviteClick = _a.onAcceptTeamInviteClick, onRejectTeamInviteClick = _a.onRejectTeamInviteClick, onAcceptApplyFriendClick = _a.onAcceptApplyFriendClick, onRejectApplyFriendClick = _a.onRejectApplyFriendClick, afterSendMsgClick = _a.afterSendMsgClick, _e = _a.prefix, prefix = _e === void 0 ? 'contact' : _e, _f = _a.commonPrefix, commonPrefix = _f === void 0 ? 'common' : _f;
    var _prefix = "".concat(prefix, "-msg-item");
    var t = useTranslation().t;
    var store = useStateContext().store;
    var handleRejectApplyTeamClick = function () {
        var _a, _b, _c, _d;
        onRejectApplyTeamClick === null || onRejectApplyTeamClick === void 0 ? void 0 : onRejectApplyTeamClick({
            teamId: (_b = (_a = msg.attach) === null || _a === void 0 ? void 0 : _a.toTeam) === null || _b === void 0 ? void 0 : _b.teamId,
            from: (_d = (_c = msg.attach) === null || _c === void 0 ? void 0 : _c.fromUser) === null || _d === void 0 ? void 0 : _d.account,
        });
    };
    var handleAcceptApplyTeamClick = function () {
        var _a, _b, _c, _d;
        onAcceptApplyTeamClick === null || onAcceptApplyTeamClick === void 0 ? void 0 : onAcceptApplyTeamClick({
            teamId: (_b = (_a = msg.attach) === null || _a === void 0 ? void 0 : _a.toTeam) === null || _b === void 0 ? void 0 : _b.teamId,
            from: (_d = (_c = msg.attach) === null || _c === void 0 ? void 0 : _c.fromUser) === null || _d === void 0 ? void 0 : _d.account,
        });
    };
    var handleRejectTeamInviteClick = function () {
        var _a, _b, _c, _d;
        onRejectTeamInviteClick === null || onRejectTeamInviteClick === void 0 ? void 0 : onRejectTeamInviteClick({
            teamId: (_b = (_a = msg.attach) === null || _a === void 0 ? void 0 : _a.toTeam) === null || _b === void 0 ? void 0 : _b.teamId,
            from: (_d = (_c = msg.attach) === null || _c === void 0 ? void 0 : _c.fromUser) === null || _d === void 0 ? void 0 : _d.account,
        });
    };
    var handleAcceptTeamInviteClick = function () {
        var _a, _b, _c, _d;
        onAcceptTeamInviteClick === null || onAcceptTeamInviteClick === void 0 ? void 0 : onAcceptTeamInviteClick({
            teamId: (_b = (_a = msg.attach) === null || _a === void 0 ? void 0 : _a.toTeam) === null || _b === void 0 ? void 0 : _b.teamId,
            from: (_d = (_c = msg.attach) === null || _c === void 0 ? void 0 : _c.fromUser) === null || _d === void 0 ? void 0 : _d.account,
        });
    };
    var handleRejectApplyFriendClick = function () {
        var _a, _b;
        onRejectApplyFriendClick === null || onRejectApplyFriendClick === void 0 ? void 0 : onRejectApplyFriendClick((_b = (_a = msg.attach) === null || _a === void 0 ? void 0 : _a.fromUser) === null || _b === void 0 ? void 0 : _b.account);
    };
    var handleAcceptApplyFriendClick = function () {
        var _a, _b;
        onAcceptApplyFriendClick === null || onAcceptApplyFriendClick === void 0 ? void 0 : onAcceptApplyFriendClick((_b = (_a = msg.attach) === null || _a === void 0 ? void 0 : _a.fromUser) === null || _b === void 0 ? void 0 : _b.account);
    };
    var renderMsg = function () {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q, _r, _s, _t, _u, _v, _w, _x, _y, _z, _0, _1, _2, _3, _4, _5, _6, _7, _8, _9, _10, _11, _12, _13, _14, _15, _16, _17, _18, _19, _20, _21, _22, _23, _24, _25, _26;
        switch (msg.type) {
            case 'applyTeam':
                // 某人申请加入群聊
                return (React.createElement(React.Fragment, null,
                    React.createElement("div", { className: "".concat(_prefix, "-flex") },
                        React.createElement(CrudeAvatar, { account: (_b = (_a = msg.attach) === null || _a === void 0 ? void 0 : _a.toTeam) === null || _b === void 0 ? void 0 : _b.teamId, nick: (_d = (_c = msg.attach) === null || _c === void 0 ? void 0 : _c.toTeam) === null || _d === void 0 ? void 0 : _d.name, avatar: (_f = (_e = msg.attach) === null || _e === void 0 ? void 0 : _e.toTeam) === null || _f === void 0 ? void 0 : _f.avatar }),
                        React.createElement("span", { className: "".concat(_prefix, "-label") },
                            store.uiStore.getAppellation({
                                account: (_h = (_g = msg.attach) === null || _g === void 0 ? void 0 : _g.fromUser) === null || _h === void 0 ? void 0 : _h.account,
                            }),
                            ' ',
                            t('applyTeamText'),
                            " \u201C",
                            ((_k = (_j = msg.attach) === null || _j === void 0 ? void 0 : _j.toTeam) === null || _k === void 0 ? void 0 : _k.name) || ((_m = (_l = msg.attach) === null || _l === void 0 ? void 0 : _l.toTeam) === null || _m === void 0 ? void 0 : _m.teamId),
                            "\u201D")),
                    msg.state === 'pass' ? (React.createElement("div", { className: "".concat(_prefix, "-state") },
                        React.createElement(CheckCircleFilled, { className: "".concat(_prefix, "-state-icon") }),
                        React.createElement("span", null, t('acceptResultText')))) : msg.state === 'decline' ? (React.createElement("div", { className: "".concat(_prefix, "-state") },
                        React.createElement(CloseCircleFilled, { className: "".concat(_prefix, "-state-icon") }),
                        React.createElement("span", null, t('rejectResultText')))) : (React.createElement("div", { className: "".concat(_prefix, "-flex") },
                        React.createElement(Button, { className: "".concat(_prefix, "-reject-btn"), onClick: handleRejectApplyTeamClick, loading: applyTeamLoaidng }, t('rejectText')),
                        React.createElement(Button, { onClick: handleAcceptApplyTeamClick, loading: applyTeamLoaidng, type: "primary" }, t('acceptText'))))));
            case 'teamInvite':
                // 某人邀请你进群
                return (React.createElement(React.Fragment, null,
                    React.createElement("div", { className: "".concat(_prefix, "-flex") },
                        React.createElement(CrudeAvatar, { account: (_p = (_o = msg.attach) === null || _o === void 0 ? void 0 : _o.toTeam) === null || _p === void 0 ? void 0 : _p.teamId, nick: (_r = (_q = msg.attach) === null || _q === void 0 ? void 0 : _q.toTeam) === null || _r === void 0 ? void 0 : _r.name, avatar: (_t = (_s = msg.attach) === null || _s === void 0 ? void 0 : _s.toTeam) === null || _t === void 0 ? void 0 : _t.avatar }),
                        React.createElement("span", { className: "".concat(_prefix, "-label") },
                            store.uiStore.getAppellation({
                                account: (_v = (_u = msg.attach) === null || _u === void 0 ? void 0 : _u.fromUser) === null || _v === void 0 ? void 0 : _v.account,
                            }),
                            ' ',
                            t('inviteTeamText'),
                            " \u201C",
                            ((_x = (_w = msg.attach) === null || _w === void 0 ? void 0 : _w.toTeam) === null || _x === void 0 ? void 0 : _x.name) || ((_z = (_y = msg.attach) === null || _y === void 0 ? void 0 : _y.toTeam) === null || _z === void 0 ? void 0 : _z.teamId),
                            "\u201D")),
                    msg.state === 'pass' ? (React.createElement("div", { className: "".concat(_prefix, "-state") },
                        React.createElement(CheckCircleFilled, { className: "".concat(_prefix, "-state-icon") }),
                        React.createElement("span", null, t('acceptResultText')))) : msg.state === 'decline' ? (React.createElement("div", { className: "".concat(_prefix, "-state") },
                        React.createElement(CloseCircleFilled, { className: "".concat(_prefix, "-state-icon") }),
                        React.createElement("span", null, t('rejectResultText')))) : (React.createElement("div", { className: "".concat(_prefix, "-flex") },
                        React.createElement(Button, { className: "".concat(_prefix, "-reject-btn"), onClick: handleRejectTeamInviteClick, loading: teamInviteLoading }, t('rejectText')),
                        React.createElement(Button, { onClick: handleAcceptTeamInviteClick, loading: teamInviteLoading, type: "primary" }, t('acceptText'))))));
            case 'rejectTeamApply':
                // 管理员拒绝你的入群申请
                return (React.createElement(React.Fragment, null,
                    React.createElement("div", { className: "".concat(_prefix, "-flex") },
                        React.createElement(CrudeAvatar, { account: (_1 = (_0 = msg.attach) === null || _0 === void 0 ? void 0 : _0.fromTeam) === null || _1 === void 0 ? void 0 : _1.teamId, nick: (_3 = (_2 = msg.attach) === null || _2 === void 0 ? void 0 : _2.fromTeam) === null || _3 === void 0 ? void 0 : _3.name, avatar: (_5 = (_4 = msg.attach) === null || _4 === void 0 ? void 0 : _4.fromTeam) === null || _5 === void 0 ? void 0 : _5.avatar }),
                        React.createElement("span", { className: "".concat(_prefix, "-name") }, ((_7 = (_6 = msg.attach) === null || _6 === void 0 ? void 0 : _6.fromTeam) === null || _7 === void 0 ? void 0 : _7.name) || ((_9 = (_8 = msg.attach) === null || _8 === void 0 ? void 0 : _8.fromTeam) === null || _9 === void 0 ? void 0 : _9.teamId))),
                    React.createElement("div", { className: "".concat(_prefix, "-state") },
                        React.createElement(CloseCircleFilled, { className: "".concat(_prefix, "-state-icon") }),
                        React.createElement("span", null, t('rejectResultText')))));
            case 'rejectTeamInvite':
                // 对方拒绝你的群邀请
                return (React.createElement(React.Fragment, null,
                    React.createElement("div", { className: "".concat(_prefix, "-flex") },
                        React.createElement(ComplexAvatarContainer, { account: (_11 = (_10 = msg.attach) === null || _10 === void 0 ? void 0 : _10.fromUser) === null || _11 === void 0 ? void 0 : _11.account, prefix: commonPrefix, afterSendMsgClick: afterSendMsgClick }),
                        React.createElement("span", { className: "".concat(_prefix, "-name") },
                            store.uiStore.getAppellation({
                                account: (_13 = (_12 = msg.attach) === null || _12 === void 0 ? void 0 : _12.fromUser) === null || _13 === void 0 ? void 0 : _13.account,
                            }),
                            ' ',
                            t('rejectTeamInviteText')))));
            case 'friendRequest': {
                switch ((_14 = msg.attach) === null || _14 === void 0 ? void 0 : _14.type) {
                    case 'applyFriend':
                        // 某人请求添加你为好友
                        return (React.createElement(React.Fragment, null,
                            React.createElement("div", { className: "".concat(_prefix, "-flex") },
                                React.createElement(ComplexAvatarContainer, { account: (_16 = (_15 = msg.attach) === null || _15 === void 0 ? void 0 : _15.fromUser) === null || _16 === void 0 ? void 0 : _16.account, prefix: commonPrefix, afterSendMsgClick: afterSendMsgClick }),
                                React.createElement("span", { className: "".concat(_prefix, "-name") }, store.uiStore.getAppellation({
                                    account: (_18 = (_17 = msg.attach) === null || _17 === void 0 ? void 0 : _17.fromUser) === null || _18 === void 0 ? void 0 : _18.account,
                                })),
                                React.createElement("span", { className: "".concat(_prefix, "-label") }, t('applyFriendText'))),
                            msg.state === 'pass' ? (React.createElement("div", { className: "".concat(_prefix, "-state") },
                                React.createElement(CheckCircleFilled, { className: "".concat(_prefix, "-state-icon") }),
                                React.createElement("span", null, t('acceptResultText')))) : msg.state === 'decline' ? (React.createElement("div", { className: "".concat(_prefix, "-state") },
                                React.createElement(CloseCircleFilled, { className: "".concat(_prefix, "-state-icon") }),
                                React.createElement("span", null, t('rejectResultText')))) : (React.createElement("div", { className: "".concat(_prefix, "-flex") },
                                React.createElement(Button, { className: "".concat(_prefix, "-reject-btn"), onClick: handleRejectApplyFriendClick, loading: applyFriendLoading }, t('rejectText')),
                                React.createElement(Button, { onClick: handleAcceptApplyFriendClick, loading: applyFriendLoading, type: "primary" }, t('acceptText'))))));
                    case 'rejectFriendApply':
                        // 对方拒绝了好友申请
                        return (React.createElement(React.Fragment, null,
                            React.createElement("div", { className: "".concat(_prefix, "-flex") },
                                React.createElement(ComplexAvatarContainer, { account: (_20 = (_19 = msg.attach) === null || _19 === void 0 ? void 0 : _19.fromUser) === null || _20 === void 0 ? void 0 : _20.account, prefix: commonPrefix, afterSendMsgClick: afterSendMsgClick }),
                                React.createElement("span", { className: "".concat(_prefix, "-name") },
                                    store.uiStore.getAppellation({
                                        account: (_22 = (_21 = msg.attach) === null || _21 === void 0 ? void 0 : _21.fromUser) === null || _22 === void 0 ? void 0 : _22.account,
                                    }),
                                    ' ',
                                    t('beRejectResultText')))));
                    case 'passFriendApply':
                        // 对方同意了好友申请
                        return (React.createElement(React.Fragment, null,
                            React.createElement("div", { className: "".concat(_prefix, "-flex") },
                                React.createElement(ComplexAvatarContainer, { account: (_24 = (_23 = msg.attach) === null || _23 === void 0 ? void 0 : _23.fromUser) === null || _24 === void 0 ? void 0 : _24.account, prefix: commonPrefix, afterSendMsgClick: afterSendMsgClick }),
                                React.createElement("span", { className: "".concat(_prefix, "-name") },
                                    store.uiStore.getAppellation({
                                        account: (_26 = (_25 = msg.attach) === null || _25 === void 0 ? void 0 : _25.fromUser) === null || _26 === void 0 ? void 0 : _26.account,
                                    }),
                                    ' ',
                                    t('passResultText')))));
                    default:
                        return null;
                }
            }
            default:
                return null;
        }
    };
    return (React.createElement("div", { className: _prefix, onClick: function (e) {
            e.stopPropagation();
        } }, renderMsg()));
});
