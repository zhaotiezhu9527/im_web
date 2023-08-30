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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importStar(require("react"));
var ChatActionBar_1 = __importDefault(require("../components/ChatActionBar"));
var ChatHeader_1 = __importDefault(require("../components/ChatHeader"));
var ChatP2pMessageList_1 = __importDefault(require("../components/ChatP2pMessageList"));
var ChatMessageInput_1 = __importDefault(require("../components/ChatMessageInput"));
var ChatSettingDrawer_1 = __importDefault(require("../components/ChatSettingDrawer"));
var ChatCreateTeam_1 = __importDefault(require("../components/ChatCreateTeam"));
var common_1 = require("../../common");
var ChatP2pSetting_1 = __importDefault(require("../components/ChatP2pSetting"));
var utils_1 = require("@xkit-yx/utils");
var antd_1 = require("antd");
var constant_1 = require("../../constant");
var mobx_react_1 = require("mobx-react");
var ChatForwardModal_1 = __importDefault(require("../components/ChatForwardModal"));
var P2pChatContainer = (0, mobx_react_1.observer)(function (_a) {
    var scene = _a.scene, to = _a.to, settingActions = _a.settingActions, actions = _a.actions, msgOperMenu = _a.msgOperMenu, onSendTextFromProps = _a.onSendText, renderP2pCustomMessage = _a.renderP2pCustomMessage, renderHeader = _a.renderHeader, renderP2pInputPlaceHolder = _a.renderP2pInputPlaceHolder, renderMessageAvatar = _a.renderMessageAvatar, renderMessageName = _a.renderMessageName, renderMessageInnerContent = _a.renderMessageInnerContent, renderMessageOuterContent = _a.renderMessageOuterContent, _b = _a.prefix, prefix = _b === void 0 ? 'chat' : _b, _c = _a.commonPrefix, commonPrefix = _c === void 0 ? 'common' : _c;
    var _d = (0, common_1.useStateContext)(), store = _d.store, nim = _d.nim, localOptions = _d.localOptions;
    var t = (0, common_1.useTranslation)().t;
    var sessionId = "".concat(scene, "-").concat(to);
    var session = store.sessionStore.sessions.get(sessionId);
    var msgs = store.msgStore.getMsg(sessionId);
    // 当前输入框的回复消息
    var replyMsg = store.msgStore.replyMsgs.get(sessionId);
    var user = store.uiStore.getFriendWithUserNameCard(to);
    var myUser = store.userStore.myUserInfo;
    var userNickOrAccount = store.uiStore.getAppellation({
        account: user.account,
    });
    var isOnline = store.eventStore.stateMap.get(to) === 'online';
    var createDefaultAccounts = (0, react_1.useMemo)(function () { return [to]; }, [to]);
    var messageListContainerDomRef = (0, react_1.useRef)(null);
    var settingDrawDomRef = (0, react_1.useRef)(null);
    var chatMessageInputRef = (0, react_1.useRef)(null);
    var visibilityObserver = (0, react_1.useMemo)(function () {
        return new utils_1.VisibilityObserver({
            root: messageListContainerDomRef.current,
        });
    }, [to]);
    // 以下是 UI 相关的 state，需要在切换会话时重置
    var _e = __read((0, react_1.useState)({}), 2), replyMsgsMap = _e[0], setReplyMsgsMap = _e[1]; // 回复消息的 map
    var _f = __read((0, react_1.useState)(undefined), 2), action = _f[0], setAction = _f[1];
    var _g = __read((0, react_1.useState)(''), 2), inputValue = _g[0], setInputValue = _g[1];
    var _h = __read((0, react_1.useState)(false), 2), groupCreateVisible = _h[0], setGroupCreateVisible = _h[1];
    var _j = __read((0, react_1.useState)(false), 2), loadingMore = _j[0], setLoadingMore = _j[1];
    var _k = __read((0, react_1.useState)(false), 2), noMore = _k[0], setNoMore = _k[1];
    var _l = __read((0, react_1.useState)(false), 2), receiveMsgBtnVisible = _l[0], setReceiveMsgBtnVisible = _l[1];
    var _m = __read((0, react_1.useState)(false), 2), settingDrawerVisible = _m[0], setSettingDrawerVisible = _m[1];
    var _o = __read((0, react_1.useState)(undefined), 2), forwardMessage = _o[0], setForwardMessage = _o[1];
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
        setAction(undefined);
        setSettingDrawerVisible(false);
    };
    var onReeditClick = function (msg) {
        var _a, _b, _c;
        setInputValue(((_a = msg.attach) === null || _a === void 0 ? void 0 : _a.oldBody) || '');
        var replyMsg = replyMsgsMap[msg.idClient];
        replyMsg && store.msgStore.replyMsgActive(replyMsg);
        (_c = (_b = chatMessageInputRef.current) === null || _b === void 0 ? void 0 : _b.input) === null || _c === void 0 ? void 0 : _c.focus();
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
    var onSendText = function (value) { return __awaiter(void 0, void 0, void 0, function () {
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
        var msgOperMenuItem, _a;
        var _b, _c;
        return __generator(this, function (_d) {
            switch (_d.label) {
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
                    _d.sent();
                    return [3 /*break*/, 9];
                case 3: return [4 /*yield*/, store.msgStore.reCallMsgActive(msg)];
                case 4:
                    _d.sent();
                    return [3 /*break*/, 9];
                case 5: return [4 /*yield*/, store.msgStore.replyMsgActive(msg)];
                case 6:
                    _d.sent();
                    (_c = (_b = chatMessageInputRef.current) === null || _b === void 0 ? void 0 : _b.input) === null || _c === void 0 ? void 0 : _c.focus();
                    return [3 /*break*/, 9];
                case 7:
                    setForwardMessage(msg);
                    return [3 /*break*/, 9];
                case 8: return [3 /*break*/, 9];
                case 9: return [2 /*return*/];
            }
        });
    }); };
    var onGroupCreate = function (_a) {
        var name = _a.name, avatar = _a.avatar, selectedAccounts = _a.selectedAccounts;
        return __awaiter(void 0, void 0, void 0, function () {
            var error_5;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _b.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, store.teamStore.createTeamActive({
                                name: name,
                                avatar: avatar,
                                accounts: selectedAccounts,
                            })];
                    case 1:
                        _b.sent();
                        resetSettingState();
                        antd_1.message.success(t('createTeamSuccessText'));
                        return [3 /*break*/, 3];
                    case 2:
                        error_5 = _b.sent();
                        switch (error_5 === null || error_5 === void 0 ? void 0 : error_5.code) {
                            // 无权限
                            case 802:
                                antd_1.message.error(t('noPermission'));
                                break;
                            default:
                                antd_1.message.error(t('createTeamFailedText'));
                                break;
                        }
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    var resetSettingState = function () {
        setAction(undefined);
        setGroupCreateVisible(false);
        setSettingDrawerVisible(false);
    };
    var resetState = function () {
        resetSettingState();
        setInputValue('');
        setLoadingMore(false);
        setNoMore(false);
        setReceiveMsgBtnVisible(false);
        setForwardMessage(undefined);
    };
    // 收消息，发消息时需要调用
    var scrollToBottom = function () {
        if (messageListContainerDomRef.current) {
            messageListContainerDomRef.current.scrollTop =
                messageListContainerDomRef.current.scrollHeight;
        }
        setReceiveMsgBtnVisible(false);
    };
    var getHistory = function (endTime, lastMsgId) { return __awaiter(void 0, void 0, void 0, function () {
        var historyMsgs, error_6;
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
                    error_6 = _a.sent();
                    setLoadingMore(false);
                    antd_1.message.error(t('getHistoryMsgFailedText'));
                    return [3 /*break*/, 3];
                case 3: return [2 /*return*/];
            }
        });
    }); };
    var handleForwardModalSend = function () {
        scrollToBottom();
        setForwardMessage(undefined);
    };
    var handleForwardModalClose = function () {
        setForwardMessage(undefined);
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
                    store.msgStore.sendMsgReceiptActive(msg).finally(function () {
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
    }, [store.msgStore, msgs, visibilityObserver, myUser.account]);
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
    }, [to]);
    // 处理消息
    (0, react_1.useEffect)(function () {
        if (msgs.length !== 0) {
            var replyMsgsMap_1 = {};
            var reqMsgs_1 = [];
            var idClients_1 = {};
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
                                    idClients_1[idServer] = msg.idClient;
                                }
                            }
                        }
                    }
                    catch (_a) { }
                }
            });
            if (reqMsgs_1.length > 0) {
                store.msgStore.getMsgByIdServerActive({ reqMsgs: reqMsgs_1 }).then(function (res) {
                    res.forEach(function (item) {
                        if (item.idServer) {
                            replyMsgsMap_1[idClients_1[item.idServer]] = item;
                        }
                    });
                    setReplyMsgsMap(__assign({}, replyMsgsMap_1));
                });
            }
            else {
                setReplyMsgsMap(__assign({}, replyMsgsMap_1));
            }
        }
    }, [msgs, store]);
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
    return session ? (react_1.default.createElement("div", { className: "".concat(prefix, "-wrap") },
        react_1.default.createElement("div", { ref: settingDrawDomRef, className: "".concat(prefix, "-content") },
            renderHeader ? (renderHeader(session)) : (react_1.default.createElement(ChatHeader_1.default, { prefix: prefix, title: userNickOrAccount +
                    (isOnline && localOptions.loginStateVisible
                        ? t('onlineText')
                        : ''), subTitle: !isOnline && localOptions.loginStateVisible
                    ? t('offlineText')
                    : undefined, avatar: react_1.default.createElement(common_1.ComplexAvatarContainer, { account: to, canClick: true, prefix: commonPrefix }) })),
            react_1.default.createElement(ChatP2pMessageList_1.default, { prefix: prefix, commonPrefix: commonPrefix, ref: messageListContainerDomRef, msgs: msgs, msgOperMenu: msgOperMenu, replyMsgsMap: replyMsgsMap, member: user, noMore: noMore, loadingMore: loadingMore, myAccount: (myUser === null || myUser === void 0 ? void 0 : myUser.account) || '', receiveMsgBtnVisible: receiveMsgBtnVisible, msgReceiptTime: session === null || session === void 0 ? void 0 : session.msgReceiptTime, onReceiveMsgBtnClick: scrollToBottom, onResend: onResend, onMessageAction: onMessageAction, onReeditClick: onReeditClick, onScroll: onMsgListScrollHandler, renderP2pCustomMessage: renderP2pCustomMessage, renderMessageAvatar: renderMessageAvatar, renderMessageName: renderMessageName, renderMessageInnerContent: renderMessageInnerContent, renderMessageOuterContent: renderMessageOuterContent }),
            react_1.default.createElement(ChatMessageInput_1.default, { ref: chatMessageInputRef, prefix: prefix, placeholder: renderP2pInputPlaceHolder
                    ? renderP2pInputPlaceHolder(session)
                    : "".concat(t('sendToText'), " ").concat(userNickOrAccount).concat(t('sendUsageText')), replyMsg: replyMsg, scene: scene, to: to, actions: actions, inputValue: inputValue, uploadImageLoading: store.uiStore.uploadImageLoading, uploadFileLoading: store.uiStore.uploadFileLoading, setInputValue: setInputValue, onSendText: onSendText, onSendFile: onSendFile, onSendImg: onSendImg, onRemoveReplyMsg: onRemoveReplyMsg }),
            react_1.default.createElement(ChatSettingDrawer_1.default, { prefix: prefix, visible: settingDrawerVisible, drawerContainer: settingDrawDomRef, onClose: onSettingDrawerClose, title: t('setText') },
                react_1.default.createElement(ChatP2pSetting_1.default, { alias: user.alias || '', account: user.account || '', nick: user.nick || '', onCreateGroupClick: function () {
                        setGroupCreateVisible(true);
                    } }))),
        react_1.default.createElement(ChatActionBar_1.default, { prefix: prefix, action: action, settingActions: settingActions, onActionClick: onActionClick }),
        react_1.default.createElement(ChatCreateTeam_1.default, { defaultAccounts: createDefaultAccounts, visible: groupCreateVisible, onGroupCreate: onGroupCreate, onCancel: function () {
                setGroupCreateVisible(false);
            }, prefix: prefix, commonPrefix: commonPrefix }),
        react_1.default.createElement(ChatForwardModal_1.default, { visible: !!forwardMessage, msg: forwardMessage, onSend: handleForwardModalSend, onCancel: handleForwardModalClose, prefix: prefix, commonPrefix: commonPrefix }))) : null;
});
exports.default = P2pChatContainer;
