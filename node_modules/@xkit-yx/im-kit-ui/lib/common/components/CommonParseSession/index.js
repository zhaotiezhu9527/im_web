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
exports.getMsgContentTipByType = exports.ParseSession = exports.pauseAllVideo = exports.pauseOtherVideo = exports.pauseAllAudio = void 0;
var react_1 = __importStar(require("react"));
var antd_1 = require("antd");
var react_string_replace_1 = __importDefault(require("react-string-replace"));
var CommonIcon_1 = __importDefault(require("../CommonIcon"));
var utils_1 = require("@xkit-yx/utils");
var utils_2 = require("../../../utils");
var index_1 = require("../../index");
var mobx_react_1 = require("mobx-react");
var utils_3 = require("../../../utils");
var constant_1 = require("../../../constant");
// 对话框中要展示的文件icon标识
var fileIconMap = {
    img: 'icon-tupian2',
    pdf: 'icon-PPT',
    word: 'icon-Word',
    excel: 'icon-Excel',
    ppt: 'icon-PPT',
    audio: 'icon-yinle',
    zip: 'icon-RAR1',
    video: 'icon-shipin',
    txt: 'icon-qita',
};
var pauseAllAudio = function () {
    var audio = document.getElementById('yx-audio-message');
    audio === null || audio === void 0 ? void 0 : audio.pause();
    return audio;
};
exports.pauseAllAudio = pauseAllAudio;
var pauseOtherVideo = function (idClient) {
    var videoElements = document.getElementsByTagName('video');
    for (var i = 0; i < videoElements.length; i++) {
        if (videoElements[i].id !== "msg-video-".concat(idClient)) {
            videoElements[i].pause();
        }
    }
};
exports.pauseOtherVideo = pauseOtherVideo;
var pauseAllVideo = function () {
    var videoElements = document.getElementsByTagName('video');
    for (var i = 0; i < videoElements.length; i++) {
        if (videoElements[i].id.startsWith('msg-video-')) {
            videoElements[i].pause();
        }
    }
};
exports.pauseAllVideo = pauseAllVideo;
exports.ParseSession = (0, mobx_react_1.observer)(function (_a) {
    var _b = _a.prefix, prefix = _b === void 0 ? 'common' : _b, msg = _a.msg, replyMsg = _a.replyMsg;
    var _prefix = "".concat(prefix, "-parse-session");
    var _c = (0, index_1.useStateContext)(), store = _c.store, localOptions = _c.localOptions;
    // const imagePreview = useRef<HTMLDivElement | null>(null)
    var t = (0, index_1.useTranslation)().t;
    var locationDomRef = (0, react_1.useRef)(null);
    var audioContainerRef = (0, react_1.useRef)(null);
    var notSupportMessageText = t('notSupportMessageText');
    // const { type, body, idClient, sessionId, ext } = msg
    var _d = __read((0, react_1.useState)('icon-yuyin3'), 2), audioIconType = _d[0], setAudioIconType = _d[1];
    var _e = (0, utils_3.parseSessionId)(msg.sessionId), scene = _e.scene, to = _e.to;
    var animationFlag = false;
    var teamId = scene === 'team' ? to : '';
    var _f = (0, utils_2.handleEmojiTranslate)(t), EMOJI_ICON_MAP_CONFIG = _f.EMOJI_ICON_MAP_CONFIG, INPUT_EMOJI_SYMBOL_REG = _f.INPUT_EMOJI_SYMBOL_REG;
    var renderCustomText = function (msg) {
        var body = msg.body, idClient = msg.idClient, ext = msg.ext;
        var text = (0, react_string_replace_1.default)(body, /(https?:\/\/\S+)/gi, function (match, i) { return (react_1.default.createElement("a", { key: idClient + match + i, href: match, target: "_blank" }, match)); });
        text = (0, react_string_replace_1.default)(text, INPUT_EMOJI_SYMBOL_REG, function (match, i) {
            return (react_1.default.createElement(CommonIcon_1.default, { key: idClient + match + i, className: "".concat(_prefix, "-emoji-icon"), type: EMOJI_ICON_MAP_CONFIG[match] }));
        });
        if (ext) {
            try {
                var extObj = JSON.parse(ext);
                var yxAitMsg_1 = extObj.yxAitMsg;
                if (yxAitMsg_1 && localOptions.needMention) {
                    Object.keys(yxAitMsg_1).forEach(function (key) {
                        var item = yxAitMsg_1[key];
                        text = (0, react_string_replace_1.default)(text, item.text, function (match, i) {
                            return (react_1.default.createElement("span", { key: idClient + match + i, className: "".concat(_prefix, "-mention") }, match));
                        });
                    });
                }
            }
            catch (_a) { }
        }
        return react_1.default.createElement("div", { className: "".concat(_prefix, "-text-wrapper") }, text);
    };
    var playAudioAnimation = function () {
        animationFlag = true;
        var audioIcons = ['icon-yuyin1', 'icon-yuyin2', 'icon-yuyin3'];
        var handler = function () {
            var icon = audioIcons.shift();
            if (icon) {
                setAudioIconType(icon);
                if (!audioIcons.length && animationFlag) {
                    audioIcons = ['icon-yuyin1', 'icon-yuyin2', 'icon-yuyin3'];
                }
                if (audioIcons.length) {
                    setTimeout(handler, 300);
                }
            }
        };
        handler();
    };
    var renderImage = function (msg) {
        var attach = msg.attach;
        var url = "".concat(attach === null || attach === void 0 ? void 0 : attach.url, "?download=").concat(attach === null || attach === void 0 ? void 0 : attach.name);
        return (react_1.default.createElement("div", { className: "".concat(_prefix, "-image-container"), onContextMenu: function (e) {
                // @ts-ignore
                if (!e.target.className.includes('-image-mask')) {
                    e.stopPropagation();
                }
            } },
            react_1.default.createElement(antd_1.Image, { rootClassName: "".concat(_prefix, "-image"), src: url })));
    };
    var renderFile = function (msg) {
        var _a, _b, _c, _d, _e, _f;
        return (react_1.default.createElement("div", { className: "".concat(_prefix, "-file-box") },
            react_1.default.createElement(CommonIcon_1.default, { className: "".concat(_prefix, "-file-icon"), type: fileIconMap[(0, utils_1.getFileType)((_a = msg === null || msg === void 0 ? void 0 : msg.attach) === null || _a === void 0 ? void 0 : _a.ext)] || 'icon-weizhiwenjian' }),
            react_1.default.createElement("div", { className: "".concat(_prefix, "-file-info") },
                react_1.default.createElement("a", { download: (_b = msg === null || msg === void 0 ? void 0 : msg.attach) === null || _b === void 0 ? void 0 : _b.name, href: (0, utils_1.addUrlSearch)((_c = msg === null || msg === void 0 ? void 0 : msg.attach) === null || _c === void 0 ? void 0 : _c.url, "download=".concat((_d = msg === null || msg === void 0 ? void 0 : msg.attach) === null || _d === void 0 ? void 0 : _d.name)), target: "_blank" }, (_e = msg === null || msg === void 0 ? void 0 : msg.attach) === null || _e === void 0 ? void 0 : _e.name),
                react_1.default.createElement("span", null, (0, utils_1.parseFileSize)((_f = msg === null || msg === void 0 ? void 0 : msg.attach) === null || _f === void 0 ? void 0 : _f.size)))));
    };
    var renderNotification = function (msg) {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l;
        switch ((_a = msg.attach) === null || _a === void 0 ? void 0 : _a.type) {
            case 'updateTeam': {
                var team = ((_b = msg.attach) === null || _b === void 0 ? void 0 : _b.team) || {};
                var content = [];
                if (team.avatar !== undefined) {
                    content.push(t('updateTeamAvatar'));
                }
                if (team.name !== undefined) {
                    content.push("".concat(t('updateTeamName'), "\u201C").concat(team.name, "\u201D"));
                }
                if (team.intro !== undefined) {
                    content.push(t('updateTeamIntro'));
                }
                if (team.inviteMode) {
                    content.push("".concat(t('updateTeamInviteMode'), "\u201C").concat(team.inviteMode === 'all'
                        ? t('teamAll')
                        : localOptions.teamManagerVisible
                            ? t('teamOwnerAndManagerText')
                            : t('onlyTeamOwner'), "\u201D"));
                }
                if (team.updateTeamMode) {
                    content.push("".concat(t('updateTeamUpdateTeamMode'), "\u201C").concat(team.updateTeamMode === 'all'
                        ? t('teamAll')
                        : localOptions.teamManagerVisible
                            ? t('teamOwnerAndManagerText')
                            : t('onlyTeamOwner'), "\u201D"));
                }
                if (team.muteType) {
                    content.push("".concat(t('updateTeamMute')).concat(team.muteType === 'none' ? t('closeText') : t('openText')));
                }
                if (team.ext) {
                    var ext = {};
                    try {
                        ext = JSON.parse(team.ext);
                    }
                    catch (error) {
                        //
                    }
                    if (ext[constant_1.ALLOW_AT] !== undefined) {
                        content.push("".concat(t('updateAllowAt'), "\u201C").concat(ext[constant_1.ALLOW_AT] === 'manager'
                            ? localOptions.teamManagerVisible
                                ? t('teamOwnerAndManagerText')
                                : t('onlyTeamOwner')
                            : t('teamAll'), "\u201D"));
                    }
                }
                var attachUser = ((_c = msg.attach) === null || _c === void 0 ? void 0 : _c.users).find(function (_) { return _.account === msg.from; });
                return content.length ? (react_1.default.createElement("div", { className: "".concat(_prefix, "-noti") },
                    store.uiStore.getAppellation({
                        account: msg.from,
                        teamId: teamId,
                        nickFromMsg: attachUser === null || attachUser === void 0 ? void 0 : attachUser.nick,
                    }),
                    ' ',
                    content.join('、'))) : null;
            }
            // 有人主动加入群聊
            case 'passTeamApply':
            // 邀请加入群聊对方同意
            case 'acceptTeamInvite': {
                var attachUser = ((_d = msg.attach) === null || _d === void 0 ? void 0 : _d.users).find(function (_) { return _.account === msg.from; });
                return (react_1.default.createElement("div", { className: "".concat(_prefix, "-noti") },
                    store.uiStore.getAppellation({
                        account: msg.from,
                        teamId: teamId,
                        nickFromMsg: attachUser === null || attachUser === void 0 ? void 0 : attachUser.nick,
                    }),
                    ' ',
                    t('joinTeamText')));
            }
            // 邀请加入群聊无需验证
            case 'addTeamMembers': {
                var accounts = ((_e = msg.attach) === null || _e === void 0 ? void 0 : _e.accounts) || [];
                var nicks = accounts
                    .map(function (item) {
                    var _a;
                    var attachUser = ((_a = msg.attach) === null || _a === void 0 ? void 0 : _a.users).find(function (_) { return _.account === item; });
                    return store.uiStore.getAppellation({
                        account: item,
                        teamId: teamId,
                        nickFromMsg: attachUser === null || attachUser === void 0 ? void 0 : attachUser.nick,
                    });
                })
                    .filter(function (item) { return !!item; })
                    .join('、');
                return (react_1.default.createElement("div", { className: "".concat(_prefix, "-noti") },
                    nicks,
                    " ",
                    t('joinTeamText')));
            }
            // 踢出群聊
            case 'removeTeamMembers': {
                var accounts = ((_f = msg.attach) === null || _f === void 0 ? void 0 : _f.accounts) || [];
                var nicks = accounts
                    .map(function (item) {
                    var _a;
                    var attachUser = ((_a = msg.attach) === null || _a === void 0 ? void 0 : _a.users).find(function (_) { return _.account === item; });
                    return store.uiStore.getAppellation({
                        account: item,
                        teamId: teamId,
                        nickFromMsg: attachUser === null || attachUser === void 0 ? void 0 : attachUser.nick,
                    });
                })
                    .filter(function (item) { return !!item; })
                    .join('、');
                return (react_1.default.createElement("div", { className: "".concat(_prefix, "-noti") },
                    nicks,
                    " ",
                    t('beRemoveTeamText')));
            }
            // 增加群管理员
            case 'addTeamManagers': {
                var accounts = ((_g = msg.attach) === null || _g === void 0 ? void 0 : _g.accounts) || [];
                var nicks = accounts
                    .map(function (item) {
                    var _a;
                    var attachUser = ((_a = msg.attach) === null || _a === void 0 ? void 0 : _a.users).find(function (_) { return _.account === item; });
                    return store.uiStore.getAppellation({
                        account: item,
                        teamId: teamId,
                        nickFromMsg: attachUser === null || attachUser === void 0 ? void 0 : attachUser.nick,
                    });
                })
                    .filter(function (item) { return !!item; })
                    .join('、');
                return (react_1.default.createElement("div", { className: "".concat(_prefix, "-noti") },
                    nicks,
                    " ",
                    t('beAddTeamManagersText')));
            }
            // 移除群管理员
            case 'removeTeamManagers': {
                var accounts = ((_h = msg.attach) === null || _h === void 0 ? void 0 : _h.accounts) || [];
                var nicks = accounts
                    .map(function (item) {
                    var _a;
                    var attachUser = ((_a = msg.attach) === null || _a === void 0 ? void 0 : _a.users).find(function (_) { return _.account === item; });
                    return store.uiStore.getAppellation({
                        account: item,
                        teamId: teamId,
                        nickFromMsg: attachUser === null || attachUser === void 0 ? void 0 : attachUser.nick,
                    });
                })
                    .filter(function (item) { return !!item; })
                    .join('、');
                return (react_1.default.createElement("div", { className: "".concat(_prefix, "-noti") },
                    nicks,
                    " ",
                    t('beRemoveTeamManagersText')));
            }
            // 主动退出群聊
            case 'leaveTeam': {
                var attachUser = ((_j = msg.attach) === null || _j === void 0 ? void 0 : _j.users).find(function (_) { return _.account === msg.from; });
                return (react_1.default.createElement("div", { className: "".concat(_prefix, "-noti") },
                    store.uiStore.getAppellation({
                        account: msg.from,
                        teamId: teamId,
                        nickFromMsg: attachUser === null || attachUser === void 0 ? void 0 : attachUser.nick,
                    }),
                    ' ',
                    t('leaveTeamText')));
            }
            // 转让群主
            case 'transferTeam': {
                var attachUser = ((_k = msg.attach) === null || _k === void 0 ? void 0 : _k.users).find(function (_) { var _a; return _.account === ((_a = msg.attach) === null || _a === void 0 ? void 0 : _a.account); });
                return (react_1.default.createElement("div", { className: "".concat(_prefix, "-noti") },
                    react_1.default.createElement("span", { className: "".concat(_prefix, "-noti-transfer") }, store.uiStore.getAppellation({
                        account: (_l = msg.attach) === null || _l === void 0 ? void 0 : _l.account,
                        teamId: teamId,
                        nickFromMsg: attachUser === null || attachUser === void 0 ? void 0 : attachUser.nick,
                    })),
                    t('newGroupOwnerText')));
            }
            default:
                return null;
        }
    };
    var renderAudio = function (msg) {
        var flow = msg.flow, attach = msg.attach;
        var duration = Math.floor((attach === null || attach === void 0 ? void 0 : attach.dur) / 1000) || 0;
        var containerWidth = 80 + 15 * (duration - 1);
        return (react_1.default.createElement("div", { className: "".concat(_prefix, "-audio-container"), style: { width: containerWidth }, ref: audioContainerRef },
            react_1.default.createElement("div", { className: flow === 'in' ? "".concat(_prefix, "-audio-in") : "".concat(_prefix, "-audio-out"), onClick: function () {
                    var _a;
                    (0, exports.pauseAllVideo)();
                    var oldAudio = (0, exports.pauseAllAudio)();
                    var msgId = oldAudio === null || oldAudio === void 0 ? void 0 : oldAudio.getAttribute('msgId');
                    // 如果是自己，暂停动画
                    if (msgId === msg.idClient) {
                        animationFlag = false;
                        return;
                    }
                    var audio = new Audio(attach === null || attach === void 0 ? void 0 : attach.url);
                    // 播放音频，并开始动画
                    audio.id = 'yx-audio-message';
                    audio.setAttribute('msgId', msg.idClient);
                    audio.play();
                    (_a = audioContainerRef.current) === null || _a === void 0 ? void 0 : _a.appendChild(audio);
                    audio.addEventListener('ended', function () {
                        var _a;
                        animationFlag = false;
                        (_a = audio.parentNode) === null || _a === void 0 ? void 0 : _a.removeChild(audio);
                    });
                    audio.addEventListener('pause', function () {
                        var _a;
                        animationFlag = false;
                        (_a = audio.parentNode) === null || _a === void 0 ? void 0 : _a.removeChild(audio);
                    });
                    playAudioAnimation();
                } },
                duration,
                "s",
                react_1.default.createElement("span", { className: "".concat(_prefix, "-audio-icon-wrapper") },
                    react_1.default.createElement(CommonIcon_1.default, { type: audioIconType })))));
    };
    var renderVideo = function (msg) {
        var attach = msg.attach;
        var url = "".concat(attach === null || attach === void 0 ? void 0 : attach.url, "?download=").concat(msg.idClient, ".").concat(attach === null || attach === void 0 ? void 0 : attach.ext);
        return (react_1.default.createElement("video", { src: url, id: "msg-video-".concat(msg.idClient), controls: true, onPlay: function () {
                // 播放视频，暂停其他视频和音频
                (0, exports.pauseOtherVideo)(msg.idClient);
                (0, exports.pauseAllAudio)();
            }, onError: function () {
                // 处理异常 例如：视频格式不支持播放等
            }, height: 300 }));
    };
    var renderLocation = function (msg) {
        var attach = msg.attach, body = msg.body;
        var amapUrl = "https://uri.amap.com/marker?position=".concat(attach === null || attach === void 0 ? void 0 : attach.lng, ",").concat(attach === null || attach === void 0 ? void 0 : attach.lat, "&name=").concat(body);
        var txmapUrl = "https://apis.map.qq.com/uri/v1/marker?marker=coord:".concat(attach === null || attach === void 0 ? void 0 : attach.lat, ",").concat(attach === null || attach === void 0 ? void 0 : attach.lng, ";title:").concat(body, ";addr:").concat(attach === null || attach === void 0 ? void 0 : attach.title, "&referer=myapp");
        var bdmapUrl = "http://api.map.baidu.com/marker?location=".concat(attach === null || attach === void 0 ? void 0 : attach.lat, ",").concat(attach === null || attach === void 0 ? void 0 : attach.lng, "&title=").concat(body, "&content=").concat(attach === null || attach === void 0 ? void 0 : attach.title, "&output=html&coord_type=gcj02&src=myapp");
        var menu = (react_1.default.createElement("div", { className: "".concat(_prefix, "-map-menu") },
            react_1.default.createElement("div", null,
                react_1.default.createElement("a", { target: "_blank", rel: "noopener noreferrer", href: amapUrl }, t('amap'))),
            react_1.default.createElement("div", null,
                react_1.default.createElement("a", { target: "_blank", rel: "noopener noreferrer", href: txmapUrl }, t('txmap'))),
            react_1.default.createElement("div", null,
                react_1.default.createElement("a", { target: "_blank", rel: "noopener noreferrer", href: bdmapUrl }, t('bdmap')))));
        return (react_1.default.createElement(antd_1.Popover, { content: menu, trigger: ['click'], overlayClassName: "".concat(_prefix, "-map-menu-popover"), getPopupContainer: function (triggerNode) {
                return locationDomRef.current || triggerNode;
            } },
            react_1.default.createElement("div", { className: "".concat(_prefix, "-location-card"), ref: locationDomRef },
                react_1.default.createElement("div", { className: "".concat(_prefix, "-location-title") }, body),
                react_1.default.createElement("div", { className: "".concat(_prefix, "-location-subTitle") }, attach === null || attach === void 0 ? void 0 : attach.title),
                react_1.default.createElement("img", { src: "https://yx-web-nosdn.netease.im/common/00685d88b3d4bead5e95479408b5b30f/map.png", alt: "" }))));
    };
    var renderReplyMsg = function () {
        if (replyMsg) {
            var content = '';
            // @ts-ignore
            if (replyMsg === 'noFind') {
                content = t('recallReplyMessageText');
            }
            var nick = store.uiStore.getAppellation({
                account: replyMsg.from,
                teamId: teamId,
                ignoreAlias: true,
            });
            return (react_1.default.createElement("div", { className: "".concat(_prefix, "-reply-wrapper"), onClick: function () {
                    // 滚动到回复的消息
                    // document.getElementById(replyMsg.idClient)?.scrollIntoView()
                } }, content ? (content) : (react_1.default.createElement(react_1.default.Fragment, null,
                react_1.default.createElement("div", { className: "".concat(_prefix, "-reply-nick") },
                    nick,
                    "\uFF1A"),
                renderMsgContent(replyMsg)))));
        }
        return null;
    };
    var renderMsgContent = function (msg) {
        switch (msg.type) {
            case 'text':
            case 'custom':
                return renderCustomText(msg);
            case 'image':
                return renderImage(msg);
            case 'file':
                return renderFile(msg);
            case 'notification':
                return renderNotification(msg);
            case 'audio':
                return renderAudio(msg);
            case 'g2':
                return "[".concat(t('callMsgText'), "\uFF0C").concat(notSupportMessageText, "]");
            case 'geo':
                return renderLocation(msg);
            case 'robot':
                return "[".concat(t('robotMsgText'), "\uFF0C").concat(notSupportMessageText, "]");
            case 'tip':
                return "[".concat(t('tipMsgText'), "\uFF0C").concat(notSupportMessageText, "]");
            case 'video':
                return renderVideo(msg);
            default:
                return "[".concat(t('unknowMsgText'), "\uFF0C").concat(notSupportMessageText, "]");
        }
    };
    return (react_1.default.createElement(react_1.default.Fragment, null,
        renderReplyMsg(),
        renderMsgContent(msg)));
});
var getMsgContentTipByType = function (msg, t) {
    var type = msg.type, body = msg.body;
    switch (type) {
        case 'text':
            return body || "[".concat(t('textMsgText'), "]");
        case 'custom':
            return body || "[".concat(t('customMsgText'), "]");
        case 'audio':
            return "[".concat(t('audioMsgText'), "]");
        case 'file':
            return "[".concat(t('fileMsgText'), "]");
        case 'g2':
            return "[".concat(t('callMsgText'), "]");
        case 'geo':
            return "[".concat(t('geoMsgText'), "]");
        case 'image':
            return "[".concat(t('imgMsgText'), "]");
        case 'notification':
            return "[".concat(t('notiMsgText'), "]");
        case 'robot':
            return "[".concat(t('robotMsgText'), "]");
        case 'tip':
            return "[".concat(t('tipMsgText'), "]");
        case 'video':
            return "[".concat(t('videoMsgText'), "]");
        default:
            return "[".concat(t('unknowMsgText'), "]");
    }
};
exports.getMsgContentTipByType = getMsgContentTipByType;
