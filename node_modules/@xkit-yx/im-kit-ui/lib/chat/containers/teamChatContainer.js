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
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
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
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importStar(require("react"));
var ChatActionBar_1 = __importDefault(require("../components/ChatActionBar"));
var ChatHeader_1 = __importDefault(require("../components/ChatHeader"));
var ChatTeamMessageList_1 = __importDefault(require("../components/ChatTeamMessageList"));
var ChatMessageInput_1 = __importDefault(require("../components/ChatMessageInput"));
var ChatSettingDrawer_1 = __importDefault(require("../components/ChatSettingDrawer"));
var ChatAddMembers_1 = __importDefault(require("../components/ChatAddMembers"));
var common_1 = require("../../common");
var icons_1 = require("@ant-design/icons");
var ChatTeamSetting_1 = __importDefault(require("../components/ChatTeamSetting"));
var utils_1 = require("@xkit-yx/utils");
var antd_1 = require("antd");
var constant_1 = require("../../constant");
var im_store_1 = require("@xkit-yx/im-store");
var mobx_react_1 = require("mobx-react");
var ChatForwardModal_1 = __importDefault(require("../components/ChatForwardModal"));
var ChatGroupTransferModal_1 = __importDefault(require("../components/ChatGroupTransferModal"));
var TeamChatContainer = (0, mobx_react_1.observer)(function (_a) {
    var scene = _a.scene, to = _a.to, settingActions = _a.settingActions, actions = _a.actions, msgOperMenu = _a.msgOperMenu, onSendTextFromProps = _a.onSendText, afterTransferTeam = _a.afterTransferTeam, renderTeamCustomMessage = _a.renderTeamCustomMessage, renderHeader = _a.renderHeader, renderTeamInputPlaceHolder = _a.renderTeamInputPlaceHolder, renderTeamMemberItem = _a.renderTeamMemberItem, renderMessageAvatar = _a.renderMessageAvatar, renderMessageName = _a.renderMessageName, renderMessageInnerContent = _a.renderMessageInnerContent, renderMessageOuterContent = _a.renderMessageOuterContent, _b = _a.prefix, prefix = _b === void 0 ? 'chat' : _b, _c = _a.commonPrefix, commonPrefix = _c === void 0 ? 'common' : _c;
    var _d = (0, common_1.useStateContext)(), store = _d.store, nim = _d.nim;
    var t = (0, common_1.useTranslation)().t;
    var sessionId = "".concat(scene, "-").concat(to);
    var session = store.sessionStore.sessions.get(sessionId);
    var msgs = store.msgStore.getMsg(sessionId);
    var replyMsg = store.msgStore.replyMsgs.get(sessionId);
    var team = store.teamStore.teams.get(to) || {
        teamId: to,
        type: 'normal',
        name: '',
        avatar: '',
        intro: '',
        announcement: '',
        joinMode: 'noVerify',
        beInviteMode: 'noVerify',
        inviteMode: 'manager',
        updateTeamMode: 'manager',
        updateExtMode: 'manager',
        owner: '',
        level: 0,
        memberNum: 0,
        memberUpdateTime: Date.now(),
        createTime: Date.now(),
        updateTime: Date.now(),
        ext: '',
        serverExt: '',
        valid: false,
        validToCurrentUser: false,
        mute: false,
        muteType: 'none',
    };
    var teamMembers = store.teamMemberStore.getTeamMember(to);
    var myUser = store.userStore.myUserInfo;
    var teamNameOrTeamId = (team === null || team === void 0 ? void 0 : team.name) || (team === null || team === void 0 ? void 0 : team.teamId) || '';
    var isGroupOwner = (myUser === null || myUser === void 0 ? void 0 : myUser.account) === team.owner;
    var isGroupManager = teamMembers
        .filter(function (item) { return item.type === 'manager'; })
        .some(function (item) { return item.account === (myUser === null || myUser === void 0 ? void 0 : myUser.account); });
    var mentionMembers = (0, react_1.useMemo)(function () {
        return teamMembers.filter(function (member) { return member.account !== (myUser === null || myUser === void 0 ? void 0 : myUser.account); }
        // if (member.account !== myUser?.account) {
        // member.alias = store.uiStore.getAppellation({
        //   account: member.account,
        //   teamId: member.teamId,
        // })
        // member.nickInTeam = store.uiStore.getAppellation({
        //   account: member.account,
        //   teamId: member.teamId,
        //   ignoreAlias: true,
        // })
        //   return true
        // }
        // return false
        );
    }, [teamMembers, myUser === null || myUser === void 0 ? void 0 : myUser.account]);
    var sortedMembers = (0, react_1.useMemo)(function () {
        var owner = teamMembers.filter(function (item) { return item.type === 'owner'; });
        var manager = teamMembers
            .filter(function (item) { return item.type === 'manager'; })
            .sort(function (a, b) { return a.joinTime - b.joinTime; });
        var other = teamMembers
            .filter(function (item) { return !['owner', 'manager'].includes(item.type); })
            .sort(function (a, b) { return a.joinTime - b.joinTime; });
        var _sortedMembers = __spreadArray(__spreadArray(__spreadArray([], __read(owner), false), __read(manager), false), __read(other), false);
        return _sortedMembers;
    }, [teamMembers]);
    var teamMute = (0, react_1.useMemo)(function () {
        if (team.mute) {
            return !isGroupOwner && !isGroupManager;
        }
        return team.mute;
    }, [team.mute, isGroupOwner, isGroupManager]);
    var allowAtAll = (0, react_1.useMemo)(function () {
        var ext = {};
        try {
            ext = JSON.parse(team.ext || '{}');
        }
        catch (error) {
            //
        }
        if (ext[constant_1.ALLOW_AT] === 'manager') {
            return isGroupOwner || isGroupManager;
        }
        return true;
    }, [team.ext, isGroupOwner, isGroupManager]);
    var teamDefaultAddMembers = (0, react_1.useMemo)(function () {
        return teamMembers
            .filter(function (item) { return item.account !== (myUser === null || myUser === void 0 ? void 0 : myUser.account); })
            .map(function (item) { return item.account; });
    }, [teamMembers, myUser === null || myUser === void 0 ? void 0 : myUser.account]);
    var messageListContainerDomRef = (0, react_1.useRef)(null);
    var settingDrawDomRef = (0, react_1.useRef)(null);
    var chatMessageInputRef = (0, react_1.useRef)(null);
    var visibilityObserver = (0, react_1.useMemo)(function () {
        return new utils_1.VisibilityObserver({
            root: messageListContainerDomRef.current,
        });
    }, [to]);
    var _e = __read((0, react_1.useState)(false), 2), groupTransferModalVisible = _e[0], setGroupTransferModalVisible = _e[1];
    // 以下是 UI 相关的 state，需要在切换会话时重置
    var _f = __read((0, react_1.useState)({}), 2), replyMsgsMap = _f[0], setReplyMsgsMap = _f[1]; // 回复消息的 map
    var _g = __read((0, react_1.useState)(''), 2), inputValue = _g[0], setInputValue = _g[1];
    var _h = __read((0, react_1.useState)([]), 2), navHistoryStack = _h[0], setNavHistoryStack = _h[1];
    var _j = __read((0, react_1.useState)(undefined), 2), action = _j[0], setAction = _j[1];
    var _k = __read((0, react_1.useState)(false), 2), loadingMore = _k[0], setLoadingMore = _k[1];
    var _l = __read((0, react_1.useState)(false), 2), noMore = _l[0], setNoMore = _l[1];
    var _m = __read((0, react_1.useState)(false), 2), groupAddMembersVisible = _m[0], setGroupAddMembersVisible = _m[1];
    var _o = __read((0, react_1.useState)(false), 2), receiveMsgBtnVisible = _o[0], setReceiveMsgBtnVisible = _o[1];
    var _p = __read((0, react_1.useState)(false), 2), settingDrawerVisible = _p[0], setSettingDrawerVisible = _p[1];
    var _q = __read((0, react_1.useState)(undefined), 2), forwardMessage = _q[0], setForwardMessage = _q[1];
    var SETTING_NAV_TITLE_MAP = (0, react_1.useMemo)(function () { return ({
        chatSetting: t('setText'),
        chatRecord: t('chatHistoryText'),
    }); }, [t]);
    var title = (0, react_1.useMemo)(function () {
        var _a;
        var defaultTitle = SETTING_NAV_TITLE_MAP[action || 'chatSetting'];
        if (navHistoryStack.length > 1) {
            return (react_1.default.createElement("span", { onClick: function () {
                    setNavHistoryStack(navHistoryStack.slice(0, navHistoryStack.length - 1));
                } },
                react_1.default.createElement(icons_1.LeftOutlined, { style: { cursor: 'pointer', marginRight: 10, fontSize: 14 } }),
                ((_a = navHistoryStack[navHistoryStack.length - 1]) === null || _a === void 0 ? void 0 : _a.title) || defaultTitle));
        }
        return react_1.default.createElement("span", null, defaultTitle);
    }, [navHistoryStack, SETTING_NAV_TITLE_MAP, action]);
    var onMsgListScrollHandler = (0, utils_1.debounce)(function () { return __awaiter(void 0, void 0, void 0, function () {
        var _msg;
        var _a;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    if (!messageListContainerDomRef.current) return [3 /*break*/, 3];
                    if (!
                    // 滚动到最底部了
                    (messageListContainerDomRef.current.scrollTop >=
                        messageListContainerDomRef.current.scrollHeight -
                            messageListContainerDomRef.current.clientHeight -
                            200)) 
                    // 滚动到最底部了
                    return [3 /*break*/, 1];
                    setReceiveMsgBtnVisible(false);
                    return [3 /*break*/, 3];
                case 1:
                    if (!
                    // 滚动到顶部了
                    (messageListContainerDomRef.current.scrollTop < 10 &&
                        !loadingMore &&
                        !noMore)) 
                    // 滚动到顶部了
                    return [3 /*break*/, 3];
                    _msg = msgs.filter(function (item) {
                        var _a;
                        return !(item.type === 'custom' &&
                            ['beReCallMsg', 'reCallMsg'].includes(((_a = item.attach) === null || _a === void 0 ? void 0 : _a.type) || ''));
                    })[0];
                    if (!_msg) return [3 /*break*/, 3];
                    return [4 /*yield*/, getHistory(_msg.time, _msg.idServer)
                        // 滚动到加载的那条消息
                    ];
                case 2:
                    _b.sent();
                    // 滚动到加载的那条消息
                    (_a = document.getElementById(_msg.idClient)) === null || _a === void 0 ? void 0 : _a.scrollIntoView();
                    _b.label = 3;
                case 3: return [2 /*return*/];
            }
        });
    }); }, 300);
    var onActionClick = function (action) {
        var settingAction = settingActions === null || settingActions === void 0 ? void 0 : settingActions.find(function (item) { return item.action === action; });
        if (settingAction === null || settingAction === void 0 ? void 0 : settingAction.onClick) {
            return settingAction === null || settingAction === void 0 ? void 0 : settingAction.onClick();
        }
        switch (action) {
            case 'chatSetting':
                setAction(action);
                setSettingDrawerVisible(true);
                break;
            default:
                break;
        }
    };
    var onSettingDrawerClose = function () {
        setNavHistoryStack([]);
        setAction(undefined);
        setSettingDrawerVisible(false);
    };
    var onReeditClick = function (msg) {
        var _a, _b, _c, _d;
        var replyMsg = replyMsgsMap[msg.idClient];
        replyMsg && store.msgStore.replyMsgActive(replyMsg);
        // 处理 @ 消息
        var ext = msg.ext;
        if (ext) {
            try {
                var extObj = JSON.parse(ext);
                var yxAitMsg = extObj.yxAitMsg;
                if (yxAitMsg) {
                    var mentionedMembers_1 = [];
                    Object.keys(yxAitMsg).forEach(function (key) {
                        if (key === im_store_1.AT_ALL_ACCOUNT) {
                            mentionedMembers_1.push({
                                account: im_store_1.AT_ALL_ACCOUNT,
                                appellation: t('teamAll'),
                            });
                        }
                        else {
                            var member = teamMembers.find(function (item) { return item.account === key; });
                            member &&
                                mentionedMembers_1.push({
                                    account: member.account,
                                    appellation: store.uiStore.getAppellation({
                                        account: member.account,
                                        teamId: member.teamId,
                                        ignoreAlias: true,
                                    }),
                                });
                        }
                    });
                    (_a = chatMessageInputRef.current) === null || _a === void 0 ? void 0 : _a.setSelectedAtMembers(mentionedMembers_1);
                }
            }
            catch (_e) { }
        }
        setInputValue(((_b = msg.attach) === null || _b === void 0 ? void 0 : _b.oldBody) || '');
        (_d = (_c = chatMessageInputRef.current) === null || _c === void 0 ? void 0 : _c.input) === null || _d === void 0 ? void 0 : _d.focus();
    };
    var onResend = function (msg) { return __awaiter(void 0, void 0, void 0, function () {
        var error_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, 3, 4]);
                    return [4 /*yield*/, store.msgStore.resendMsgActive(msg)];
                case 1:
                    _a.sent();
                    return [3 /*break*/, 4];
                case 2:
                    error_1 = _a.sent();
                    return [3 /*break*/, 4];
                case 3:
                    scrollToBottom();
                    return [7 /*endfinally*/];
                case 4: return [2 /*return*/];
            }
        });
    }); };
    var onSendText = function (value, ext) { return __awaiter(void 0, void 0, void 0, function () {
        var error_2;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 5, 6, 7]);
                    if (!onSendTextFromProps) return [3 /*break*/, 2];
                    return [4 /*yield*/, onSendTextFromProps({
                            value: value,
                            scene: scene,
                            to: to,
                        })];
                case 1:
                    _a.sent();
                    return [3 /*break*/, 4];
                case 2: return [4 /*yield*/, store.msgStore.sendTextMsgActive({
                        scene: scene,
                        to: to,
                        body: value,
                        ext: ext,
                    })];
                case 3:
                    _a.sent();
                    _a.label = 4;
                case 4: return [3 /*break*/, 7];
                case 5:
                    error_2 = _a.sent();
                    return [3 /*break*/, 7];
                case 6:
                    scrollToBottom();
                    return [7 /*endfinally*/];
                case 7: return [2 /*return*/];
            }
        });
    }); };
    var onSendFile = function (file) { return __awaiter(void 0, void 0, void 0, function () {
        var error_3;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, 3, 4]);
                    return [4 /*yield*/, store.msgStore.sendFileMsgActive({
                            scene: scene,
                            to: to,
                            file: file,
                        })];
                case 1:
                    _a.sent();
                    return [3 /*break*/, 4];
                case 2:
                    error_3 = _a.sent();
                    return [3 /*break*/, 4];
                case 3:
                    scrollToBottom();
                    return [7 /*endfinally*/];
                case 4: return [2 /*return*/];
            }
        });
    }); };
    var onSendImg = function (file) { return __awaiter(void 0, void 0, void 0, function () {
        var error_4;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, 3, 4]);
                    return [4 /*yield*/, store.msgStore.sendImageMsgActive({
                            scene: scene,
                            to: to,
                            file: file,
                        })];
                case 1:
                    _a.sent();
                    return [3 /*break*/, 4];
                case 2:
                    error_4 = _a.sent();
                    return [3 /*break*/, 4];
                case 3:
                    scrollToBottom();
                    return [7 /*endfinally*/];
                case 4: return [2 /*return*/];
            }
        });
    }); };
    var onRemoveReplyMsg = function () {
        replyMsg && store.msgStore.removeReplyMsgActive(replyMsg.sessionId);
    };
    var onMessageAction = function (key, msg) { return __awaiter(void 0, void 0, void 0, function () {
        var msgOperMenuItem, _a, member;
        var _b, _c, _d;
        return __generator(this, function (_e) {
            switch (_e.label) {
                case 0:
                    msgOperMenuItem = msgOperMenu === null || msgOperMenu === void 0 ? void 0 : msgOperMenu.find(function (item) { return item.key === key; });
                    if (msgOperMenuItem === null || msgOperMenuItem === void 0 ? void 0 : msgOperMenuItem.onClick) {
                        return [2 /*return*/, msgOperMenuItem === null || msgOperMenuItem === void 0 ? void 0 : msgOperMenuItem.onClick(msg)];
                    }
                    _a = key;
                    switch (_a) {
                        case 'delete': return [3 /*break*/, 1];
                        case 'recall': return [3 /*break*/, 3];
                        case 'reply': return [3 /*break*/, 5];
                        case 'forward': return [3 /*break*/, 7];
                    }
                    return [3 /*break*/, 8];
                case 1: return [4 /*yield*/, store.msgStore.deleteMsgActive([msg])];
                case 2:
                    _e.sent();
                    return [3 /*break*/, 9];
                case 3: return [4 /*yield*/, store.msgStore.reCallMsgActive(msg)];
                case 4:
                    _e.sent();
                    return [3 /*break*/, 9];
                case 5:
                    member = mentionMembers.find(function (item) { return item.account === msg.from; });
                    member &&
                        ((_b = chatMessageInputRef.current) === null || _b === void 0 ? void 0 : _b.onAtMemberSelectHandler({
                            account: member.account,
                            appellation: store.uiStore.getAppellation({
                                account: member.account,
                                teamId: member.teamId,
                                ignoreAlias: true,
                            }),
                        }));
                    return [4 /*yield*/, store.msgStore.replyMsgActive(msg)];
                case 6:
                    _e.sent();
                    (_d = (_c = chatMessageInputRef.current) === null || _c === void 0 ? void 0 : _c.input) === null || _d === void 0 ? void 0 : _d.focus();
                    return [3 /*break*/, 9];
                case 7:
                    setForwardMessage(msg);
                    return [3 /*break*/, 9];
                case 8: return [3 /*break*/, 9];
                case 9: return [2 /*return*/];
            }
        });
    }); };
    var onMessageAvatarAction = function (key, msg) { return __awaiter(void 0, void 0, void 0, function () {
        var member;
        var _a;
        return __generator(this, function (_b) {
            switch (key) {
                case 'mention':
                    member = mentionMembers.find(function (item) { return item.account === msg.from; });
                    member &&
                        ((_a = chatMessageInputRef.current) === null || _a === void 0 ? void 0 : _a.onAtMemberSelectHandler({
                            account: member.account,
                            appellation: store.uiStore.getAppellation({
                                account: member.account,
                                teamId: member.teamId,
                                ignoreAlias: true,
                            }),
                        }));
                    break;
                default:
                    break;
            }
            return [2 /*return*/];
        });
    }); };
    var onDismissTeam = function () { return __awaiter(void 0, void 0, void 0, function () {
        var error_5;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
                    return [4 /*yield*/, store.teamStore.dismissTeamActive(team.teamId)];
                case 1:
                    _a.sent();
                    antd_1.message.success(t('dismissTeamSuccessText'));
                    return [3 /*break*/, 3];
                case 2:
                    error_5 = _a.sent();
                    switch (error_5 === null || error_5 === void 0 ? void 0 : error_5.code) {
                        // 无权限
                        case 802:
                            antd_1.message.error(t('noPermission'));
                            break;
                        default:
                            antd_1.message.error(t('dismissTeamFailedText'));
                            break;
                    }
                    return [3 /*break*/, 3];
                case 3: return [2 /*return*/];
            }
        });
    }); };
    var onLeaveTeam = function () { return __awaiter(void 0, void 0, void 0, function () {
        var error_6;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
                    return [4 /*yield*/, store.teamStore.leaveTeamActive(team.teamId)];
                case 1:
                    _a.sent();
                    antd_1.message.success(t('leaveTeamSuccessText'));
                    return [3 /*break*/, 3];
                case 2:
                    error_6 = _a.sent();
                    switch (error_6 === null || error_6 === void 0 ? void 0 : error_6.code) {
                        // 无权限
                        case 802:
                            antd_1.message.error(t('noPermission'));
                            break;
                        default:
                            antd_1.message.error(t('leaveTeamFailedText'));
                            break;
                    }
                    return [3 /*break*/, 3];
                case 3: return [2 /*return*/];
            }
        });
    }); };
    var onTransferMemberClick = function () {
        setGroupTransferModalVisible(true);
    };
    var handleTransferTeam = function () {
        setGroupTransferModalVisible(false);
        afterTransferTeam === null || afterTransferTeam === void 0 ? void 0 : afterTransferTeam(team.teamId);
    };
    var onAddMembersClick = function () {
        if (team.inviteMode === 'manager' && !isGroupOwner && !isGroupManager) {
            antd_1.message.error(t('noPermission'));
        }
        else {
            setGroupAddMembersVisible(true);
        }
    };
    var onAddTeamMember = function (accounts) { return __awaiter(void 0, void 0, void 0, function () {
        var error_7;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
                    return [4 /*yield*/, store.teamMemberStore.addTeamMemberActive({
                            teamId: team.teamId,
                            accounts: accounts,
                        })];
                case 1:
                    _a.sent();
                    antd_1.message.success(t('addTeamMemberSuccessText'));
                    resetSettingState();
                    return [3 /*break*/, 3];
                case 2:
                    error_7 = _a.sent();
                    switch (error_7 === null || error_7 === void 0 ? void 0 : error_7.code) {
                        // 无权限
                        case 802:
                            antd_1.message.error(t('noPermission'));
                            break;
                        default:
                            antd_1.message.error(t('addTeamMemberFailedText'));
                            break;
                    }
                    return [3 /*break*/, 3];
                case 3: return [2 /*return*/];
            }
        });
    }); };
    var onRemoveTeamMember = function (member) { return __awaiter(void 0, void 0, void 0, function () {
        var error_8;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
                    return [4 /*yield*/, store.teamMemberStore.removeTeamMemberActive({
                            teamId: team.teamId,
                            accounts: [member.account],
                        })];
                case 1:
                    _a.sent();
                    antd_1.message.success(t('removeTeamMemberSuccessText'));
                    return [3 /*break*/, 3];
                case 2:
                    error_8 = _a.sent();
                    switch (error_8 === null || error_8 === void 0 ? void 0 : error_8.code) {
                        // 无权限
                        case 802:
                            antd_1.message.error(t('noPermission'));
                            break;
                        default:
                            antd_1.message.error(t('removeTeamMemberFailedText'));
                            break;
                    }
                    return [3 /*break*/, 3];
                case 3: return [2 /*return*/];
            }
        });
    }); };
    var onUpdateTeamInfo = function (params) { return __awaiter(void 0, void 0, void 0, function () {
        var error_9;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
                    return [4 /*yield*/, store.teamStore.updateTeamActive(__assign(__assign({}, params), { teamId: team.teamId }))];
                case 1:
                    _a.sent();
                    antd_1.message.success(t('updateTeamSuccessText'));
                    return [3 /*break*/, 3];
                case 2:
                    error_9 = _a.sent();
                    switch (error_9 === null || error_9 === void 0 ? void 0 : error_9.code) {
                        // 无权限
                        case 802:
                            antd_1.message.error(t('noPermission'));
                            break;
                        default:
                            antd_1.message.error(t('updateTeamFailedText'));
                            break;
                    }
                    return [3 /*break*/, 3];
                case 3: return [2 /*return*/];
            }
        });
    }); };
    var onUpdateMyMemberInfo = function (params) { return __awaiter(void 0, void 0, void 0, function () {
        var nickTipVisible, bitConfigVisible, error_10;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    nickTipVisible = params.nickInTeam !== void 0;
                    bitConfigVisible = params.bitConfigMask !== void 0;
                    _a.label = 1;
                case 1:
                    _a.trys.push([1, 3, , 4]);
                    return [4 /*yield*/, store.teamMemberStore.updateMyMemberInfo(params)];
                case 2:
                    _a.sent();
                    if (nickTipVisible) {
                        antd_1.message.success(t('updateMyMemberNickSuccess'));
                    }
                    if (bitConfigVisible) {
                        antd_1.message.success(t('updateBitConfigMaskSuccess'));
                    }
                    return [3 /*break*/, 4];
                case 3:
                    error_10 = _a.sent();
                    switch (error_10 === null || error_10 === void 0 ? void 0 : error_10.code) {
                        // 无权限
                        case 802:
                            antd_1.message.error(t('noPermission'));
                            break;
                        default:
                            {
                                if (nickTipVisible) {
                                    antd_1.message.error(t('updateMyMemberNickFailed'));
                                }
                                if (bitConfigVisible) {
                                    antd_1.message.error(t('updateBitConfigMaskFailed'));
                                }
                            }
                            break;
                    }
                    return [3 /*break*/, 4];
                case 4: return [2 /*return*/];
            }
        });
    }); };
    var onTeamMuteChange = function (mute) { return __awaiter(void 0, void 0, void 0, function () {
        var error_11;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
                    return [4 /*yield*/, store.teamStore.muteTeamActive({
                            teamId: team.teamId,
                            mute: mute,
                        })];
                case 1:
                    _a.sent();
                    antd_1.message.success(mute ? t('muteAllTeamSuccessText') : t('unmuteAllTeamSuccessText'));
                    return [3 /*break*/, 3];
                case 2:
                    error_11 = _a.sent();
                    switch (error_11 === null || error_11 === void 0 ? void 0 : error_11.code) {
                        // 无权限
                        case 802:
                            antd_1.message.error(t('noPermission'));
                            break;
                        default:
                            antd_1.message.error(mute ? t('muteAllTeamFailedText') : t('unmuteAllTeamFailedText'));
                            break;
                    }
                    return [3 /*break*/, 3];
                case 3: return [2 /*return*/];
            }
        });
    }); };
    var resetSettingState = function () {
        setNavHistoryStack([]);
        setAction(undefined);
        setGroupAddMembersVisible(false);
        setSettingDrawerVisible(false);
    };
    var resetState = (0, react_1.useCallback)(function () {
        resetSettingState();
        setInputValue('');
        setLoadingMore(false);
        setNoMore(false);
        setReceiveMsgBtnVisible(false);
        setForwardMessage(undefined);
    }, []);
    // 收消息，发消息时需要调用
    var scrollToBottom = function () {
        if (messageListContainerDomRef.current) {
            messageListContainerDomRef.current.scrollTop =
                messageListContainerDomRef.current.scrollHeight;
        }
        setReceiveMsgBtnVisible(false);
    };
    var getHistory = (0, react_1.useCallback)(function (endTime, lastMsgId) { return __awaiter(void 0, void 0, void 0, function () {
        var historyMsgs, error_12;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
                    setLoadingMore(true);
                    return [4 /*yield*/, store.msgStore.getHistoryMsgActive({
                            sessionId: sessionId,
                            endTime: endTime,
                            lastMsgId: lastMsgId,
                            limit: constant_1.HISTORY_LIMIT,
                        })];
                case 1:
                    historyMsgs = _a.sent();
                    setLoadingMore(false);
                    if (historyMsgs.length < constant_1.HISTORY_LIMIT) {
                        setNoMore(true);
                    }
                    return [3 /*break*/, 3];
                case 2:
                    error_12 = _a.sent();
                    setLoadingMore(false);
                    antd_1.message.error(t('getHistoryMsgFailedText'));
                    return [3 /*break*/, 3];
                case 3: return [2 /*return*/];
            }
        });
    }); }, [sessionId, store.msgStore, t]);
    var handleForwardModalSend = function () {
        scrollToBottom();
        setForwardMessage(undefined);
    };
    var handleForwardModalClose = function () {
        setForwardMessage(undefined);
    };
    var handleGroupActionCancel = function () {
        setGroupTransferModalVisible(false);
    };
    (0, react_1.useEffect)(function () {
        var notMyMsgs = msgs
            .filter(function (item) { return item.from !== myUser.account; })
            .filter(function (item) { return !!item.idServer; })
            .filter(function (item) {
            // 以下这些类型的消息不需要发送已读未读
            return ['notification', 'tip', 'robot', 'g2'].every(function (j) { return j !== item.type; });
        });
        var visibleChangeHandler = function (params) {
            if (params.visible) {
                // 发送已读
                var msg = notMyMsgs.find(function (item) { return item.idClient === params.target.id; });
                if (msg) {
                    store.msgStore
                        .sendTeamMsgReceiptActive([
                        {
                            teamId: team.teamId,
                            idClient: msg.idClient,
                            idServer: msg.idServer ? msg.idServer : '',
                        },
                    ])
                        .catch(function (err) {
                        // 忽略这个报错
                    })
                        .finally(function () {
                        visibilityObserver.unobserve(params.target);
                    });
                }
            }
        };
        var handler = function (isObserve) {
            notMyMsgs.forEach(function (item) {
                var target = document.getElementById(item.idClient);
                if (target) {
                    if (isObserve) {
                        visibilityObserver.observe(target);
                    }
                    else {
                        visibilityObserver.unobserve(target);
                    }
                }
            });
            if (isObserve) {
                visibilityObserver.on('visibleChange', visibleChangeHandler);
            }
            else {
                visibilityObserver.off('visibleChange', visibleChangeHandler);
            }
        };
        handler(true);
        return function () {
            handler(false);
        };
    }, [store.msgStore, msgs, visibilityObserver, team.teamId, myUser.account]);
    (0, react_1.useEffect)(function () {
        return function () {
            visibilityObserver.destroy();
        };
    }, [visibilityObserver]);
    // 切换会话时需要重新初始化
    (0, react_1.useEffect)(function () {
        resetState();
        getHistory(Date.now()).then(function () {
            scrollToBottom();
        });
        store.teamStore.getTeamActive(to);
        store.teamMemberStore.getTeamMemberActive(to);
    }, [store.teamStore, store.teamMemberStore, to, getHistory, resetState]);
    // 处理消息
    (0, react_1.useEffect)(function () {
        if (msgs.length !== 0) {
            var replyMsgsMap_1 = {};
            var reqMsgs_1 = [];
            var idClients_1 = [];
            msgs.forEach(function (msg) {
                if (msg.ext) {
                    try {
                        var yxReplyMsg_1 = JSON.parse(msg.ext).yxReplyMsg;
                        if (yxReplyMsg_1) {
                            var replyMsg_1 = msgs.find(function (item) { return item.idClient === yxReplyMsg_1.idClient; });
                            if (replyMsg_1) {
                                replyMsgsMap_1[msg.idClient] = replyMsg_1;
                            }
                            else {
                                replyMsgsMap_1[msg.idClient] = 'noFind';
                                var scene_1 = yxReplyMsg_1.scene, from = yxReplyMsg_1.from, to_1 = yxReplyMsg_1.to, idServer = yxReplyMsg_1.idServer, time = yxReplyMsg_1.time;
                                if (scene_1 && from && to_1 && idServer && time) {
                                    reqMsgs_1.push({ scene: scene_1, from: from, to: to_1, idServer: idServer, time: time });
                                    idClients_1.push(msg.idClient);
                                }
                            }
                        }
                    }
                    catch (_a) { }
                }
            });
            if (reqMsgs_1.length > 0) {
                store.msgStore.getMsgByIdServerActive({ reqMsgs: reqMsgs_1 }).then(function (res) {
                    res.forEach(function (item, index) {
                        replyMsgsMap_1[idClients_1[index]] = item;
                    });
                    setReplyMsgsMap(__assign({}, replyMsgsMap_1));
                });
            }
            else {
                setReplyMsgsMap(__assign({}, replyMsgsMap_1));
            }
        }
    }, [msgs, store, team.teamId]);
    (0, react_1.useLayoutEffect)(function () {
        var onMsg = function (msg) {
            if (messageListContainerDomRef.current && msg.sessionId === sessionId) {
                // 当收到消息时，如果已经往上滚动了，是不需要滚动到最底部的
                if (messageListContainerDomRef.current.scrollTop <
                    messageListContainerDomRef.current.scrollHeight -
                        messageListContainerDomRef.current.clientHeight -
                        200) {
                    setReceiveMsgBtnVisible(true);
                }
                else {
                    scrollToBottom();
                }
            }
        };
        nim.on('msg', onMsg);
        return function () {
            nim.off('msg', onMsg);
        };
    }, [nim, sessionId]);
    (0, react_1.useEffect)(function () {
        // const onDismissTeam = (data: { teamId: string }) => {
        //   const _sessionId = `team-${data.teamId}`
        //   if (_sessionId === sessionId) {
        //     message.warning(t('onDismissTeamText'))
        //   }
        // }
        // const onAddTeamMembers = (data: {
        //   team: Team
        //   // 以下两个参数是增量
        //   accounts: string[]
        //   members: TeamMember[]
        // }) => {
        //   const _sessionId = `team-${data.team.teamId}`
        //   if (_sessionId === sessionId) {
        //     const nicks = data.members.map(
        //       (item) => item.nickInTeam || item.account
        //     )
        //     message.info(`${nicks.join('，')}${t('enterTeamText')}`)
        //   }
        // }
        // const onRemoveTeamMembers = (data: {
        //   team: Team
        //   accounts: string[]
        // }) => {
        //   const _sessionId = `team-${data.team.teamId}`
        //   if (_sessionId === sessionId) {
        //     if (data.accounts.includes(myUser.account)) {
        //       message.warning(t('onRemoveTeamText'))
        //     } else {
        //       const _tms = store.teamMemberStore.teamMembers.get(data.team.teamId)
        //       let nicks: string[] = []
        //       if (_tms) {
        //         nicks = data.accounts
        //           .map((item) => {
        //             const _t = _tms.get(item)
        //             if (_t) {
        //               return _t.nickInTeam || _t.account
        //             }
        //             return ''
        //           })
        //           .filter((item) => !!item)
        //       }
        //       message.info(`${nicks.join('，')}${t('leaveTeamText')}`)
        //     }
        //   }
        // }
        // 根据 onMsg 处理提示
        var onMsgToast = function (msg) {
            var _a, _b, _c, _d;
            if (msg.sessionId === sessionId && msg.type === 'notification') {
                switch ((_a = msg.attach) === null || _a === void 0 ? void 0 : _a.type) {
                    // 主动离开群聊
                    case 'leaveTeam': {
                        if (msg.from === myUser.account) {
                            antd_1.message.success(t('leaveTeamSuccessText'));
                        }
                        else {
                            antd_1.message.info("".concat(store.uiStore.getAppellation({
                                account: msg.from,
                                teamId: msg.to,
                            })).concat(t('leaveTeamText')));
                        }
                        break;
                    }
                    // 踢出群聊
                    case 'removeTeamMembers': {
                        if ((_b = msg.attach) === null || _b === void 0 ? void 0 : _b.accounts.includes(myUser.account)) {
                            antd_1.message.warning(t('onRemoveTeamText'));
                        }
                        else {
                            var nicks = (_c = msg.attach) === null || _c === void 0 ? void 0 : _c.accounts.map(function (item) {
                                return store.uiStore.getAppellation({
                                    account: item,
                                    teamId: msg.to,
                                });
                            });
                            antd_1.message.info("".concat(nicks.join('，')).concat(t('leaveTeamText')));
                        }
                        break;
                    }
                    // 解散群聊
                    case 'dismissTeam':
                        antd_1.message.warning(t('onDismissTeamText'));
                        break;
                    // 有人主动加入群聊
                    case 'passTeamApply':
                    // 邀请加入群聊对方同意
                    case 'acceptTeamInvite':
                        {
                            if (msg.from === myUser.account) {
                                antd_1.message.info("".concat(store.uiStore.getAppellation({
                                    account: msg.from,
                                    teamId: msg.to,
                                })).concat(t('enterTeamText')));
                            }
                        }
                        break;
                    // 邀请加入群聊无需验证
                    case 'addTeamMembers': {
                        var nicks = (_d = msg.attach) === null || _d === void 0 ? void 0 : _d.accounts.map(function (item) {
                            return store.uiStore.getAppellation({ account: item, teamId: msg.to });
                        });
                        antd_1.message.info("".concat(nicks.join('，')).concat(t('enterTeamText')));
                        break;
                    }
                }
            }
        };
        nim.on('msg', onMsgToast);
        // nim.on('dismissTeam', onDismissTeam)
        // nim.on('addTeamMembers', onAddTeamMembers)
        // nim.on('removeTeamMembers', onRemoveTeamMembers)
        return function () {
            nim.off('msg', onMsgToast);
            // nim.off('dismissTeam', onDismissTeam)
            // nim.off('addTeamMembers', onAddTeamMembers)
            // nim.off('removeTeamMembers', onRemoveTeamMembers)
        };
    }, [nim, sessionId, myUser.account, store.uiStore, t]);
    return session ? (react_1.default.createElement("div", { className: "".concat(prefix, "-wrap") },
        react_1.default.createElement("div", { ref: settingDrawDomRef, className: "".concat(prefix, "-content") },
            renderHeader ? (renderHeader(session)) : (react_1.default.createElement(ChatHeader_1.default, { prefix: prefix, title: teamNameOrTeamId, subTitle: "(".concat(teamMembers.length, " \u4EBA)"), avatar: react_1.default.createElement(common_1.CrudeAvatar, { account: team.teamId, nick: team.name, avatar: team.avatar }) })),
            react_1.default.createElement(ChatTeamMessageList_1.default, { prefix: prefix, commonPrefix: commonPrefix, ref: messageListContainerDomRef, msgs: msgs, msgOperMenu: msgOperMenu, replyMsgsMap: replyMsgsMap, members: teamMembers, noMore: noMore, loadingMore: loadingMore, myAccount: (myUser === null || myUser === void 0 ? void 0 : myUser.account) || '', receiveMsgBtnVisible: receiveMsgBtnVisible, onReceiveMsgBtnClick: scrollToBottom, onResend: onResend, onMessageAction: onMessageAction, onMessageAvatarAction: onMessageAvatarAction, onReeditClick: onReeditClick, onScroll: onMsgListScrollHandler, renderTeamCustomMessage: renderTeamCustomMessage, renderMessageAvatar: renderMessageAvatar, renderMessageName: renderMessageName, renderMessageInnerContent: renderMessageInnerContent, renderMessageOuterContent: renderMessageOuterContent }),
            react_1.default.createElement(ChatMessageInput_1.default, { ref: chatMessageInputRef, prefix: prefix, commonPrefix: commonPrefix, placeholder: renderTeamInputPlaceHolder
                    ? renderTeamInputPlaceHolder({
                        session: session,
                        mute: teamMute,
                    })
                    : teamMute
                        ? t('teamMutePlaceholder')
                        : "".concat(t('sendToText'), " ").concat(teamNameOrTeamId).concat(t('sendUsageText')), replyMsg: replyMsg, mentionMembers: mentionMembers, scene: scene, to: to, actions: actions, inputValue: inputValue, mute: teamMute, allowAtAll: allowAtAll, uploadImageLoading: store.uiStore.uploadImageLoading, uploadFileLoading: store.uiStore.uploadFileLoading, setInputValue: setInputValue, onRemoveReplyMsg: onRemoveReplyMsg, onSendText: onSendText, onSendFile: onSendFile, onSendImg: onSendImg }),
            react_1.default.createElement(ChatSettingDrawer_1.default, { prefix: prefix, visible: settingDrawerVisible, drawerContainer: settingDrawDomRef, onClose: onSettingDrawerClose, title: title },
                react_1.default.createElement(ChatTeamSetting_1.default, { members: sortedMembers, team: team, myAccount: (myUser === null || myUser === void 0 ? void 0 : myUser.account) || '', isGroupManager: isGroupManager, isGroupOwner: isGroupOwner, navHistoryStack: navHistoryStack, setNavHistoryStack: setNavHistoryStack, afterSendMsgClick: resetSettingState, onAddMembersClick: onAddMembersClick, onDismissTeam: onDismissTeam, onLeaveTeam: onLeaveTeam, onRemoveTeamMemberClick: onRemoveTeamMember, onUpdateTeamInfo: onUpdateTeamInfo, onUpdateMyMemberInfo: onUpdateMyMemberInfo, onTeamMuteChange: onTeamMuteChange, onTransferTeamClick: onTransferMemberClick, renderTeamMemberItem: renderTeamMemberItem, prefix: prefix, commonPrefix: commonPrefix }))),
        react_1.default.createElement(ChatActionBar_1.default, { prefix: prefix, action: action, settingActions: settingActions, onActionClick: onActionClick }),
        react_1.default.createElement(ChatAddMembers_1.default, { defaultAccounts: teamDefaultAddMembers, visible: groupAddMembersVisible, onGroupAddMembers: onAddTeamMember, onCancel: function () {
                setGroupAddMembersVisible(false);
            }, prefix: prefix, commonPrefix: commonPrefix }),
        react_1.default.createElement(ChatForwardModal_1.default, { visible: !!forwardMessage, msg: forwardMessage, onSend: handleForwardModalSend, onCancel: handleForwardModalClose, prefix: prefix, commonPrefix: commonPrefix }),
        react_1.default.createElement(ChatGroupTransferModal_1.default, { visible: groupTransferModalVisible, members: sortedMembers, onOk: handleTransferTeam, onCancel: handleGroupActionCancel, teamId: to }))) : null;
});
exports.default = TeamChatContainer;
