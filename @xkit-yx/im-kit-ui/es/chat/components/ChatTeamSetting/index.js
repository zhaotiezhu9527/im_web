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
import React, { useState, useEffect, useMemo } from 'react';
import { Modal, Button, Input } from 'antd';
import { ExclamationCircleOutlined } from '@ant-design/icons';
import { RightOutlined, PlusOutlined } from '@ant-design/icons';
import { ComplexAvatarContainer, CrudeAvatar, useStateContext, useTranslation, } from '../../../common';
import GroupDetail from './GroupDetail';
import GroupList from './GroupList';
import GroupPower from './GroupPower';
var confirm = Modal.confirm;
var ChatTeamSetting = function (_a) {
    var _b;
    var members = _a.members, team = _a.team, myAccount = _a.myAccount, isGroupOwner = _a.isGroupOwner, isGroupManager = _a.isGroupManager, navHistoryStack = _a.navHistoryStack, onDismissTeam = _a.onDismissTeam, onLeaveTeam = _a.onLeaveTeam, onAddMembersClick = _a.onAddMembersClick, onTransferTeamClick = _a.onTransferTeamClick, onRemoveTeamMemberClick = _a.onRemoveTeamMemberClick, onUpdateTeamInfo = _a.onUpdateTeamInfo, onUpdateMyMemberInfo = _a.onUpdateMyMemberInfo, onTeamMuteChange = _a.onTeamMuteChange, afterSendMsgClick = _a.afterSendMsgClick, setNavHistoryStack = _a.setNavHistoryStack, renderTeamMemberItem = _a.renderTeamMemberItem, _c = _a.prefix, prefix = _c === void 0 ? 'chat' : _c, _d = _a.commonPrefix, commonPrefix = _d === void 0 ? 'common' : _d;
    var localOptions = useStateContext().localOptions;
    var t = useTranslation().t;
    var _prefix = "".concat(prefix, "-group-setting");
    var _e = __read(useState(''), 2), nickInTeam = _e[0], setNickInTeam = _e[1];
    var path = ((_b = navHistoryStack[navHistoryStack.length - 1]) === null || _b === void 0 ? void 0 : _b.path) || 'home';
    var GROUP_SETTING_NAV_TITLE = useMemo(function () { return ({
        home: t('setText'),
        list: t('teamMemberText'),
        detail: t('teamInfoText'),
        power: t('teamPowerText'),
    }); }, [t]);
    var handleStackPush = function (path) {
        setNavHistoryStack(navHistoryStack.concat({
            path: path,
            title: GROUP_SETTING_NAV_TITLE[path],
        }));
    };
    var handleChangeNickInTeam = function (e) {
        setNickInTeam(e.target.value.trim());
    };
    var handleUpdateMyMemberInfo = function (e) {
        onUpdateMyMemberInfo({
            teamId: team.teamId,
            nickInTeam: nickInTeam,
        });
    };
    var showDismissConfirm = function () {
        confirm({
            title: t('dismissTeamText'),
            icon: React.createElement(ExclamationCircleOutlined, null),
            content: t('dismissTeamConfirmText'),
            okText: t('okText'),
            cancelText: t('cancelText'),
            onOk: function () {
                onDismissTeam();
            },
        });
    };
    var showLeaveConfirm = function () {
        confirm({
            title: t('leaveTeamTitle'),
            icon: React.createElement(ExclamationCircleOutlined, null),
            content: t('leaveTeamConfirmText'),
            okText: t('okText'),
            cancelText: t('cancelText'),
            onOk: function () {
                onLeaveTeam();
            },
        });
    };
    var isOwnerOrManager = isGroupOwner || isGroupManager;
    var hasUpdateTeamPower = useMemo(function () {
        if (team.updateTeamMode === 'manager' && isOwnerOrManager) {
            return true;
        }
        return team.updateTeamMode === 'all';
    }, [team.updateTeamMode, isOwnerOrManager]);
    var myMemberInfo = useMemo(function () {
        return (members.find(function (item) { return item.account === myAccount; }) || {});
    }, [myAccount, members]);
    var teamManagers = useMemo(function () {
        return members.filter(function (item) { return item.type === 'manager'; });
    }, [members]);
    useEffect(function () {
        setNickInTeam(myMemberInfo.nickInTeam || '');
    }, [myMemberInfo.nickInTeam]);
    useEffect(function () {
        if (!navHistoryStack.length) {
            handleStackPush('home');
        }
    }, [navHistoryStack]);
    return (React.createElement("div", { className: "".concat(_prefix, "-wrap") },
        path === 'home' ? (React.createElement(React.Fragment, null,
            React.createElement("div", { className: "".concat(_prefix, "-head ").concat(_prefix, "-item"), onClick: handleStackPush.bind(null, 'detail') },
                React.createElement("div", { className: "".concat(_prefix, "-head-info") },
                    React.createElement(CrudeAvatar, { account: team.teamId, nick: team.name, avatar: team.avatar }),
                    React.createElement("span", { className: "".concat(_prefix, "-label") }, team.name)),
                React.createElement(RightOutlined, { size: 10 })),
            React.createElement("div", { className: "".concat(_prefix, "-members ").concat(_prefix, "-item") },
                React.createElement("div", { className: "".concat(_prefix, "-members-info"), onClick: handleStackPush.bind(null, 'list') },
                    React.createElement("div", null,
                        React.createElement("b", null, t('teamMemberText')),
                        React.createElement("span", { className: "".concat(_prefix, "-members-num") },
                            "(",
                            members.length,
                            " )",
                            t('personUnit'))),
                    React.createElement(RightOutlined, { size: 10 })),
                React.createElement("div", { className: "".concat(_prefix, "-members-list") },
                    React.createElement("span", { className: "".concat(_prefix, "-add-icon"), onClick: onAddMembersClick },
                        React.createElement(PlusOutlined, { style: { fontSize: 14, color: '#C1C8D1' } })),
                    React.createElement("span", { className: "".concat(_prefix, "-members-upload") }),
                    members.slice(0, 6).map(function (item) {
                        return (React.createElement(ComplexAvatarContainer, { key: item.account, prefix: commonPrefix, account: item.account, canClick: false }));
                    }))),
            React.createElement("div", { className: "".concat(_prefix, "-item") },
                React.createElement("b", null, t('nickInTeamText')),
                React.createElement(Input, { className: "".concat(_prefix, "-nickinteam"), value: nickInTeam, allowClear: true, maxLength: 15, onChange: handleChangeNickInTeam, onBlur: handleUpdateMyMemberInfo, placeholder: t('editNickInTeamText') })),
            team.type !== 'normal' && isOwnerOrManager ? (React.createElement("div", { className: "".concat(_prefix, "-power ").concat(_prefix, "-item"), onClick: handleStackPush.bind(null, 'power') },
                React.createElement("b", null, t('teamPowerText')),
                React.createElement(RightOutlined, { size: 10 }))) : null)) : (React.createElement(React.Fragment, null,
            path === 'detail' && (React.createElement(GroupDetail, { team: team, hasPower: hasUpdateTeamPower, onUpdateTeamInfo: onUpdateTeamInfo, prefix: prefix, commonPrefix: commonPrefix })),
            path === 'list' && (React.createElement(GroupList, { members: members, myMemberInfo: myMemberInfo, onRemoveTeamMemberClick: onRemoveTeamMemberClick, afterSendMsgClick: afterSendMsgClick, renderTeamMemberItem: renderTeamMemberItem, prefix: prefix, commonPrefix: commonPrefix })),
            path === 'power' && (React.createElement(GroupPower, { onUpdateTeamInfo: onUpdateTeamInfo, onTeamMuteChange: onTeamMuteChange, team: team, managers: teamManagers, afterSendMsgClick: afterSendMsgClick, isGroupOwner: isGroupOwner, prefix: prefix })))),
        path === 'home' &&
            (isGroupOwner ? (React.createElement("div", { className: "".concat(_prefix, "-group-operation") },
                localOptions.allowTransferTeamOwner && (React.createElement(Button, { className: "".concat(_prefix, "-group-operation-item"), onClick: onTransferTeamClick, danger: true }, t('transferOwnerText'))),
                React.createElement(Button, { danger: true, className: "".concat(_prefix, "-group-operation-item ").concat(_prefix, "-group-operation-dismiss"), onClick: showDismissConfirm }, t('dismissTeamText')))) : (React.createElement(Button, { danger: true, className: "".concat(_prefix, "-exit-btn"), onClick: showLeaveConfirm }, t('leaveTeamButtonText'))))));
};
export default ChatTeamSetting;
