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
var antd_1 = require("antd");
var common_1 = require("../../../common");
var constant_1 = require("../../../constant");
var im_store_1 = require("@xkit-yx/im-store");
var icons_1 = require("@ant-design/icons");
var mobx_react_1 = require("mobx-react");
var ChatMentionMemberList_1 = __importDefault(require("./ChatMentionMemberList"));
var utils_1 = require("../../../utils");
var TextArea = antd_1.Input.TextArea;
var ChatMessageInput = (0, mobx_react_1.observer)((0, react_1.forwardRef)(function (props, ref) {
    var _a = props.prefix, prefix = _a === void 0 ? 'chat' : _a, _b = props.commonPrefix, commonPrefix = _b === void 0 ? 'common' : _b, _c = props.placeholder, placeholder = _c === void 0 ? '' : _c, mentionMembers = props.mentionMembers, actions = props.actions, scene = props.scene, to = props.to, _d = props.mute, mute = _d === void 0 ? false : _d, _e = props.allowAtAll, allowAtAll = _e === void 0 ? true : _e, _f = props.inputValue, inputValue = _f === void 0 ? '' : _f, _g = props.uploadImageLoading, uploadImageLoading = _g === void 0 ? false : _g, _h = props.uploadFileLoading, uploadFileLoading = _h === void 0 ? false : _h, replyMsg = props.replyMsg, setInputValue = props.setInputValue, onSendText = props.onSendText, onSendFile = props.onSendFile, onSendImg = props.onSendImg, onRemoveReplyMsg = props.onRemoveReplyMsg;
    var _prefix = "".concat(prefix, "-message-input");
    var t = (0, common_1.useTranslation)().t;
    var _j = (0, common_1.useStateContext)(), store = _j.store, localOptions = _j.localOptions;
    var textAreaRef = (0, react_1.useRef)(null);
    var popupContainerRef = (0, react_1.useRef)(null);
    var _k = __read((0, react_1.useState)(false), 2), emojiVisible = _k[0], setEmojiVisible = _k[1];
    var _l = __read((0, react_1.useState)(false), 2), atVisible = _l[0], setAtVisible = _l[1];
    var _m = __read((0, react_1.useState)(''), 2), atMemberSearchText = _m[0], setAtMemberSearchText = _m[1];
    var _o = __read((0, react_1.useState)([]), 2), selectedAtMembers = _o[0], setSelectedAtMembers = _o[1];
    var EMOJI_ICON_MAP_CONFIG = common_1.Utils.handleEmojiTranslate(t).EMOJI_ICON_MAP_CONFIG;
    var LoadingIcon = (react_1.default.createElement(icons_1.LoadingOutlined, { className: "".concat(_prefix, "-loading-spin"), spin: true }));
    var defaultActions = [
        {
            action: 'emoji',
            visible: true,
            render: function () {
                return (react_1.default.createElement(antd_1.Button, { type: "text", disabled: mute },
                    react_1.default.createElement(antd_1.Popover, { trigger: "click", visible: emojiVisible, overlayClassName: "".concat(_prefix, "-emoji-box"), content: emojiContent, onVisibleChange: setEmojiVisible },
                        react_1.default.createElement(common_1.CommonIcon, { className: "".concat(_prefix, "-icon-emoji"), type: "icon-biaoqing" }))));
            },
        },
        {
            action: 'sendImg',
            visible: true,
            render: function () {
                return (react_1.default.createElement(antd_1.Button, { size: "small", disabled: mute }, uploadImageLoading ? (react_1.default.createElement(antd_1.Spin, { indicator: LoadingIcon })) : (react_1.default.createElement(antd_1.Upload, { beforeUpload: onBeforeUploadImgHandler, showUploadList: false, accept: ".jpg,.png,.jpeg,.gif", 
                    // action={onUploadImgHandler}
                    className: "".concat(_prefix, "-icon-upload") },
                    react_1.default.createElement(common_1.CommonIcon, { className: "".concat(_prefix, "-icon-image"), type: "icon-tupian" })))));
            },
        },
        {
            action: 'sendFile',
            visible: true,
            render: function () {
                return (react_1.default.createElement(antd_1.Button, { size: "small", disabled: mute }, uploadFileLoading ? (react_1.default.createElement(antd_1.Spin, { indicator: LoadingIcon })) : (react_1.default.createElement(antd_1.Upload, { beforeUpload: onBeforeUploadFileHandler, showUploadList: false, disabled: mute, 
                    // action={onUploadFileHandler}
                    className: "".concat(_prefix, "-icon-upload") },
                    react_1.default.createElement(common_1.CommonIcon, { className: "".concat(_prefix, "-icon-file"), type: "icon-wenjian" })))));
            },
        },
        {
            action: 'sendMsg',
            visible: true,
            render: function () {
                return (react_1.default.createElement(antd_1.Button, { onClick: onClickSendMsgHandler, size: "small", disabled: mute },
                    react_1.default.createElement(common_1.CommonIcon, { className: mute
                            ? "".concat(_prefix, "-icon-msg")
                            : inputValue
                                ? "".concat(_prefix, "-icon-msg-select")
                                : "".concat(_prefix, "-icon-msg"), type: "icon-fasong" })));
            },
        },
    ];
    var finalActions = actions
        ? (0, utils_1.mergeActions)(defaultActions, actions, 'action')
        : defaultActions;
    var filterAtMembers = (0, react_1.useMemo)(function () {
        if (atMemberSearchText) {
            var res = mentionMembers === null || mentionMembers === void 0 ? void 0 : mentionMembers.filter(function (member) {
                var _a;
                return (_a = store.uiStore
                    .getAppellation({
                    account: member.account,
                    teamId: member.teamId,
                })) === null || _a === void 0 ? void 0 : _a.includes(atMemberSearchText.replace('@', ''));
            });
            return res;
        }
        else {
            return mentionMembers;
        }
    }, [mentionMembers, atMemberSearchText, store.uiStore]);
    (0, react_1.useEffect)(function () {
        setAtMemberSearchText('');
        setAtVisible(false);
    }, [to]);
    (0, react_1.useEffect)(function () {
        if (atMemberSearchText) {
            if (filterAtMembers === null || filterAtMembers === void 0 ? void 0 : filterAtMembers.length) {
                setAtVisible(true);
            }
            else {
                setAtVisible(false);
            }
        }
        else {
            setAtVisible(false);
        }
    }, [filterAtMembers, atMemberSearchText]);
    var onAtMembersExtHandler = function () {
        var ext;
        if (selectedAtMembers.length) {
            selectedAtMembers
                .filter(function (member) {
                if (!allowAtAll && member.account === im_store_1.AT_ALL_ACCOUNT) {
                    return false;
                }
                return true;
            })
                .forEach(function (member) {
                var _a;
                var substr = "@".concat(member.appellation, " ");
                var positions = [];
                var pos = inputValue.indexOf(substr);
                while (pos !== -1) {
                    positions.push(pos);
                    pos = inputValue.indexOf(substr, pos + 1);
                }
                if (positions.length) {
                    if (!ext) {
                        ext = {
                            yxAitMsg: (_a = {},
                                _a[member.account] = {
                                    text: substr,
                                    segments: [],
                                },
                                _a),
                        };
                    }
                    else {
                        ext.yxAitMsg[member.account] = {
                            text: substr,
                            segments: [],
                        };
                    }
                    positions.forEach(function (position) {
                        var start = position;
                        ext.yxAitMsg[member.account].segments.push({
                            start: start,
                            end: start + substr.length - 1,
                            broken: false,
                        });
                    });
                }
            });
        }
        return ext;
    };
    var onTextAreaSelectionRangeHandler = function () {
        function getCursorPosition(cursorIndex) {
            var selectionStart, selectionEnd;
            selectedAtMembers.some(function (member) {
                var alias = "@".concat(member.appellation, " ");
                var regex = new RegExp(alias, 'g');
                var match;
                while ((match = regex.exec(inputValue))) {
                    var start = match.index;
                    var end = start + alias.length;
                    if (cursorIndex > start && cursorIndex < end) {
                        selectionStart = start;
                        selectionEnd = end;
                        return true;
                    }
                }
            });
            return {
                selectionStart: selectionStart !== null && selectionStart !== void 0 ? selectionStart : cursorIndex,
                selectionEnd: selectionEnd !== null && selectionEnd !== void 0 ? selectionEnd : cursorIndex,
            };
        }
        setTimeout(function () {
            var _a, _b, _c, _d, _e, _f;
            var input = (_b = (_a = textAreaRef.current) === null || _a === void 0 ? void 0 : _a.resizableTextArea) === null || _b === void 0 ? void 0 : _b.textArea;
            //当needMention为false时  避免不必要的计算
            if (input && localOptions.needMention) {
                var selectionStart = (_d = (_c = getCursorPosition(input.selectionStart)) === null || _c === void 0 ? void 0 : _c.selectionStart) !== null && _d !== void 0 ? _d : input.selectionStart;
                var selectionEnd = (_f = (_e = getCursorPosition(input.selectionEnd)) === null || _e === void 0 ? void 0 : _e.selectionEnd) !== null && _f !== void 0 ? _f : input.selectionEnd;
                input.setSelectionRange(selectionStart, selectionEnd);
            }
        }, 0);
    };
    var onInputChangeHandler = function (e) {
        var _a, _b;
        var newValue = e.target.value;
        var input = (_b = (_a = textAreaRef.current) === null || _a === void 0 ? void 0 : _a.resizableTextArea) === null || _b === void 0 ? void 0 : _b.textArea;
        var atMemberSearchText = '';
        if (input) {
            var cursorIndex = input.selectionStart;
            var subStr = newValue.slice(0, cursorIndex);
            var atIndex = subStr.lastIndexOf('@');
            if (atIndex !== -1) {
                atMemberSearchText = newValue.slice(atIndex, cursorIndex);
            }
        }
        if (localOptions.needMention) {
            setAtMemberSearchText(atMemberSearchText);
        }
        setInputValue(newValue);
    };
    var onAtMemberSelectHandler = (0, react_1.useCallback)(function (member) {
        var _a, _b;
        setSelectedAtMembers(__spreadArray(__spreadArray([], __read(selectedAtMembers.filter(function (item) { return item.account !== member.account; })), false), [
            member,
        ], false));
        var input = (_b = (_a = textAreaRef.current) === null || _a === void 0 ? void 0 : _a.resizableTextArea) === null || _b === void 0 ? void 0 : _b.textArea;
        if (input) {
            input.focus();
            input.setRangeText("@".concat(member.appellation, " "), atVisible
                ? input.selectionStart - atMemberSearchText.length
                : input.selectionStart, input.selectionEnd, 'end');
            setInputValue(input.value);
        }
        setAtMemberSearchText('');
    }, [atMemberSearchText, selectedAtMembers, setInputValue, atVisible]);
    var onClickSendMsgHandler = function (e) {
        if (atVisible) {
            e.preventDefault();
            setAtVisible(false);
            setAtMemberSearchText('');
            return;
        }
        var trimValue = inputValue.trim();
        if (!trimValue) {
            antd_1.message.warning(t('sendEmptyText'));
            return;
        }
        onSendText(inputValue, onAtMembersExtHandler());
        setInputValue('');
        setSelectedAtMembers([]);
    };
    var onPressEnterHandler = function (e) {
        if (atVisible) {
            e.preventDefault();
            return;
        }
        var trimValue = inputValue.trim();
        if (!e.shiftKey) {
            e.preventDefault();
            if (!trimValue) {
                antd_1.message.warning(t('sendEmptyText'));
                return;
            }
            onSendText(inputValue, onAtMembersExtHandler());
            setInputValue('');
            setSelectedAtMembers([]);
        }
    };
    var onKeyDownHandler = function (e) {
        var _a, _b;
        if (['ArrowLeft', 'ArrowRight'].includes(e.key)) {
            setAtVisible(false);
            onTextAreaSelectionRangeHandler();
        }
        else if (['ArrowUp', 'ArrowDown'].includes(e.key) && atVisible) {
            e.nativeEvent.preventDefault();
        }
        else if (e.key === 'Backspace') {
            var input_1 = (_b = (_a = textAreaRef.current) === null || _a === void 0 ? void 0 : _a.resizableTextArea) === null || _b === void 0 ? void 0 : _b.textArea;
            if (input_1) {
                var cursorIndex_1 = input_1 === null || input_1 === void 0 ? void 0 : input_1.selectionStart;
                var atIndex_1;
                selectedAtMembers.some(function (member) {
                    var alias = "@".concat(member.appellation, " ");
                    var regex = new RegExp(alias, 'g');
                    var match;
                    while ((match = regex.exec(inputValue))) {
                        var start = match.index;
                        var end = start + alias.length;
                        if (cursorIndex_1 === end) {
                            atIndex_1 = start;
                            return true;
                        }
                    }
                });
                if (atIndex_1 !== undefined) {
                    e.nativeEvent.preventDefault();
                    setInputValue(inputValue.slice(0, atIndex_1) + inputValue.slice(cursorIndex_1));
                    setTimeout(function () {
                        input_1.setSelectionRange(atIndex_1, atIndex_1);
                    }, 0);
                }
            }
        }
    };
    var onClickHandler = onTextAreaSelectionRangeHandler;
    var onBeforeUploadFileHandler = function (file) {
        var isLimit = file.size / 1024 / 1000 > constant_1.MAX_UPLOAD_FILE_SIZE;
        if (isLimit) {
            antd_1.message.error("".concat(t('uploadLimitText')).concat(constant_1.MAX_UPLOAD_FILE_SIZE).concat(t('uploadLimitUnit')));
        }
        else {
            onSendFile(file);
        }
        return false;
    };
    var onBeforeUploadImgHandler = function (file) {
        var isLimit = file.size / 1024 / 1000 > constant_1.MAX_UPLOAD_FILE_SIZE;
        if (isLimit) {
            antd_1.message.error("".concat(t('uploadLimitText')).concat(constant_1.MAX_UPLOAD_FILE_SIZE).concat(t('uploadLimitUnit')));
        }
        else {
            onSendImg(file);
        }
        return false;
    };
    // const onUploadImgHandler = (file: any): any => {
    //   onSendImg(file)
    // }
    // const onUploadFileHandler = (file: any): any => {
    //   onSendFile(file)
    // }
    var onEmojiClickHandler = function (tag) {
        var _a, _b;
        var input = (_b = (_a = textAreaRef.current) === null || _a === void 0 ? void 0 : _a.resizableTextArea) === null || _b === void 0 ? void 0 : _b.textArea;
        if (input) {
            input.focus();
            input.setRangeText(tag, input.selectionStart, input.selectionEnd, 'end');
            setInputValue(input.value);
        }
        setEmojiVisible(false);
    };
    var emojiContent = (react_1.default.createElement(react_1.default.Fragment, null, Object.keys(EMOJI_ICON_MAP_CONFIG).map(function (tag, index) { return (react_1.default.createElement("span", { onClick: function () {
            onEmojiClickHandler(tag);
        }, className: "".concat(_prefix, "-emoji-item"), title: tag, key: tag },
        react_1.default.createElement(common_1.CommonIcon, { className: "".concat(_prefix, "-emoji-item-icon"), type: EMOJI_ICON_MAP_CONFIG[tag] }))); })));
    var replyMsgContent = function () {
        if (replyMsg) {
            var nick = store.uiStore.getAppellation({
                account: replyMsg.from,
                teamId: replyMsg.scene === 'team' ? replyMsg.to : undefined,
                ignoreAlias: true,
            });
            var content = "".concat(t('replyText'), " ").concat(nick, "\uFF1A");
            content += replyMsg ? (0, common_1.getMsgContentTipByType)(replyMsg, t) : '';
            return react_1.default.createElement("div", { className: "".concat(_prefix, "-reply-content") }, content);
        }
    };
    (0, react_1.useImperativeHandle)(ref, function () {
        var _a, _b;
        return ({
            onAtMemberSelectHandler: onAtMemberSelectHandler,
            setSelectedAtMembers: setSelectedAtMembers,
            input: (_b = (_a = textAreaRef.current) === null || _a === void 0 ? void 0 : _a.resizableTextArea) === null || _b === void 0 ? void 0 : _b.textArea,
        });
    }, [onAtMemberSelectHandler]);
    return (react_1.default.createElement("div", { className: "".concat(prefix, "-message-input") },
        react_1.default.createElement("div", { className: "".concat(_prefix, "-wrap") },
            react_1.default.createElement(antd_1.Popover, { open: atVisible, trigger: [], content: react_1.default.createElement(ChatMentionMemberList_1.default, { allowAtAll: allowAtAll, prefix: prefix, commonPrefix: commonPrefix, mentionMembers: filterAtMembers, onSelect: onAtMemberSelectHandler }), overlayClassName: "".concat(_prefix, "-at-popover"), getPopupContainer: function (triggerNode) {
                    return popupContainerRef.current || triggerNode;
                }, onVisibleChange: setAtVisible, destroyTooltipOnHide: true },
                react_1.default.createElement("div", { className: "".concat(_prefix, "-popup-container"), ref: popupContainerRef })),
            !!replyMsg && (react_1.default.createElement("div", { className: "".concat(_prefix, "-reply-wrap") },
                react_1.default.createElement("div", { className: "".concat(_prefix, "-reply-container") },
                    react_1.default.createElement(icons_1.CloseOutlined, { onClick: function () { return onRemoveReplyMsg === null || onRemoveReplyMsg === void 0 ? void 0 : onRemoveReplyMsg(); } }),
                    replyMsgContent()))),
            react_1.default.createElement("div", { className: "".concat(_prefix, "-content") },
                react_1.default.createElement(TextArea, { ref: textAreaRef, bordered: false, className: "".concat(_prefix, "-textarea"), placeholder: placeholder, value: inputValue, disabled: mute, onInput: onInputChangeHandler, onPressEnter: onPressEnterHandler, onKeyDown: onKeyDownHandler, onClick: onClickHandler, autoSize: { maxRows: 2 } }),
                react_1.default.createElement("div", { className: "".concat(_prefix, "-icon-box") }, finalActions.map(function (item) {
                    return item.render && item.visible ? (react_1.default.createElement(react_1.Fragment, { key: item.action }, item.render(__assign(__assign({}, props), { prefix: _prefix })))) : null;
                }))))));
}));
exports.default = ChatMessageInput;
