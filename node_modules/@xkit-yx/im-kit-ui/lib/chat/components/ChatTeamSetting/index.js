"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importStar(require("react"));
var antd_1 = require("antd");
var icons_1 = require("@ant-design/icons");
var icons_2 = require("@ant-design/icons");
var common_1 = require("../../../common");
var GroupDetail_1 = __importDefault(require("./GroupDetail"));
var GroupList_1 = __importDefault(require("./GroupList"));
var GroupPower_1 = __importDefault(require("./GroupPower"));
var confirm = antd_1.Modal.confirm;
var ChatTeamSetting = function (_a) {
    var _b;
    var members = _a.members, team = _a.team, myAccount = _a.myAccount, isGroupOwner = _a.isGroupOwner, isGroupManager = _a.isGroupManager, navHistoryStack = _a.navHistoryStack, onDismissTeam = _a.onDismissTeam, onLeaveTeam = _a.onLeaveTeam, onAddMembersClick = _a.onAddMembersClick, onTransferTeamClick = _a.onTransferTeamClick, onRemoveTeamMemberClick = _a.onRemoveTeamMemberClick, onUpdateTeamInfo = _a.onUpdateTeamInfo, onUpdateMyMemberInfo = _a.onUpdateMyMemberInfo, onTeamMuteChange = _a.onTeamMuteChange, afterSendMsgClick = _a.afterSendMsgClick, setNavHistoryStack = _a.setNavHistoryStack, renderTeamMemberItem = _a.renderTeamMemberItem, _c = _a.prefix, prefix = _c === void 0 ? 'chat' : _c, _d = _a.commonPrefix, commonPrefix = _d === void 0 ? 'common' : _d;
    var localOptions = (0, common_1.useStateContext)().localOptions;
    var t = (0, common_1.useTranslation)().t;
    var _prefix = "".concat(prefix, "-group-setting");
    var _e = __read((0, react_1.useState)(''), 2), nickInTeam = _e[0], setNickInTeam = _e[1];
    var path = ((_b = navHistoryStack[navHistoryStack.length - 1]) === null || _b === void 0 ? void 0 : _b.path) || 'home';
    var GROUP_SETTING_NAV_TITLE = (0, react_1.useMemo)(function () { return ({
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
            icon: react_1.default.createElement(icons_1.ExclamationCircleOutlined, null),
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
            icon: react_1.default.createElement(icons_1.ExclamationCircleOutlined, null),
            content: t('leaveTeamConfirmText'),
            okText: t('okText'),
            cancelText: t('cancelText'),
            onOk: function () {
                onLeaveTeam();
            },
        });
    };
    var isOwnerOrManager = isGroupOwner || isGroupManager;
    var hasUpdateTeamPower = (0, react_1.useMemo)(function () {
        if (team.updateTeamMode === 'manager' && isOwnerOrManager) {
            return true;
        }
        return team.updateTeamMode === 'all';
    }, [team.updateTeamMode, isOwnerOrManager]);
    var myMemberInfo = (0, react_1.useMemo)(function () {
        return (members.find(function (item) { return item.account === myAccount; }) || {});
    }, [myAccount, members]);
    var teamManagers = (0, react_1.useMemo)(function () {
        return members.filter(function (item) { return item.type === 'manager'; });
    }, [members]);
    (0, react_1.useEffect)(function () {
        setNickInTeam(myMemberInfo.nickInTeam || '');
    }, [myMemberInfo.nickInTeam]);
    (0, react_1.useEffect)(function () {
        if (!navHistoryStack.length) {
            handleStackPush('home');
        }
    }, [navHistoryStack]);
    return (react_1.default.createElement("div", { className: "".concat(_prefix, "-wrap") },
        path === 'home' ? (react_1.default.createElement(react_1.default.Fragment, null,
            react_1.default.createElement("div", { className: "".concat(_prefix, "-head ").concat(_prefix, "-item"), onClick: handleStackPush.bind(null, 'detail') },
                react_1.default.createElement("div", { className: "".concat(_prefix, "-head-info") },
                    react_1.default.createElement(common_1.CrudeAvatar, { account: team.teamId, nick: team.name, avatar: team.avatar }),
                    react_1.default.createElement("span", { className: "".concat(_prefix, "-label") }, team.name)),
                react_1.default.createElement(icons_2.RightOutlined, { size: 10 })),
            react_1.default.createElement("div", { className: "".concat(_prefix, "-members ").concat(_prefix, "-item") },
                react_1.default.createElement("div", { className: "".concat(_prefix, "-members-info"), onClick: handleStackPush.bind(null, 'list') },
                    react_1.default.createElement("div", null,
                        react_1.default.createElement("b", null, t('teamMemberText')),
                        react_1.default.createElement("span", { className: "".concat(_prefix, "-members-num") },
                            "(",
                            members.length,
                            " )",
                            t('personUnit'))),
                    react_1.default.createElement(icons_2.RightOutlined, { size: 10 })),
                react_1.default.createElement("div", { className: "".concat(_prefix, "-members-list") },
                    react_1.default.createElement("span", { className: "".concat(_prefix, "-add-icon"), onClick: onAddMembersClick },
                        react_1.default.createElement(icons_2.PlusOutlined, { style: { fontSize: 14, color: '#C1C8D1' } })),
                    react_1.default.createElement("span", { className: "".concat(_prefix, "-members-upload") }),
                    members.slice(0, 6).map(function (item) {
                        return (react_1.default.createElement(common_1.ComplexAvatarContainer, { key: item.account, prefix: commonPrefix, account: item.account, canClick: false }));
                    }))),
            react_1.default.createElement("div", { className: "".concat(_prefix, "-item") },
                react_1.default.createElement("b", null, t('nickInTeamText')),
                react_1.default.createElement(antd_1.Input, { className: "".concat(_prefix, "-nickinteam"), value: nickInTeam, allowClear: true, maxLength: 15, onChange: handleChangeNickInTeam, onBlur: handleUpdateMyMemberInfo, placeholder: t('editNickInTeamText') })),
            team.type !== 'normal' && isOwnerOrManager ? (react_1.default.createElement("div", { className: "".concat(_prefix, "-power ").concat(_prefix, "-item"), onClick: handleStackPush.bind(null, 'power') },
                react_1.default.createElement("b", null, t('teamPowerText')),
                react_1.default.createElement(icons_2.RightOutlined, { size: 10 }))) : null)) : (react_1.default.createElement(react_1.default.Fragment, null,
            path === 'detail' && (react_1.default.createElement(GroupDetail_1.default, { team: team, hasPower: hasUpdateTeamPower, onUpdateTeamInfo: onUpdateTeamInfo, prefix: prefix, commonPrefix: commonPrefix })),
            path === 'list' && (react_1.default.createElement(GroupList_1.default, { members: members, myMemberInfo: myMemberInfo, onRemoveTeamMemberClick: onRemoveTeamMemberClick, afterSendMsgClick: afterSendMsgClick, renderTeamMemberItem: renderTeamMemberItem, prefix: prefix, commonPrefix: commonPrefix })),
            path === 'power' && (react_1.default.createElement(GroupPower_1.default, { onUpdateTeamInfo: onUpdateTeamInfo, onTeamMuteChange: onTeamMuteChange, team: team, managers: teamManagers, afterSendMsgClick: afterSendMsgClick, isGroupOwner: isGroupOwner, prefix: prefix })))),
        path === 'home' &&
            (isGroupOwner ? (react_1.default.createElement("div", { className: "".concat(_prefix, "-group-operation") },
                localOptions.allowTransferTeamOwner && (react_1.default.createElement(antd_1.Button, { className: "".concat(_prefix, "-group-operation-item"), onClick: onTransferTeamClick, danger: true }, t('transferOwnerText'))),
                react_1.default.createElement(antd_1.Button, { danger: true, className: "".concat(_prefix, "-group-operation-item ").concat(_prefix, "-group-operation-dismiss"), onClick: showDismissConfirm }, t('dismissTeamText')))) : (react_1.default.createElement(antd_1.Button, { danger: true, className: "".concat(_prefix, "-exit-btn"), onClick: showLeaveConfirm }, t('leaveTeamButtonText'))))));
};
exports.default = ChatTeamSetting;
