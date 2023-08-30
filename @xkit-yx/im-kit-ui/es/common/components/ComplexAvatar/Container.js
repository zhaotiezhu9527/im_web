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
import React, { useState, useEffect } from 'react';
import { ComplexAvatarUI } from './ComplexAvatarUI';
import { message, Modal } from 'antd';
import { useStateContext } from '../../hooks/useStateContext';
import { useTranslation } from '../../hooks/useTranslation';
import { observer } from 'mobx-react';
export var ComplexAvatarContainer = observer(function (_a) {
    var _b = _a.canClick, canClick = _b === void 0 ? true : _b, account = _a.account, _c = _a.prefix, prefix = _c === void 0 ? 'common' : _c, count = _a.count, dot = _a.dot, size = _a.size, icon = _a.icon, onCancel = _a.onCancel, afterAddFriend = _a.afterAddFriend, afterDeleteFriend = _a.afterDeleteFriend, afterBlockFriend = _a.afterBlockFriend, afterRemoveBlockFriend = _a.afterRemoveBlockFriend, afterSendMsgClick = _a.afterSendMsgClick;
    var _d = useStateContext(), store = _d.store, localOptions = _d.localOptions;
    var t = useTranslation().t;
    var _e = __read(useState(false), 2), visible = _e[0], setVisible = _e[1];
    // const [relation, setRelation] = useState<Relation>('stranger')
    var relation = store.uiStore.getRelation(account);
    var userInfo = store.uiStore.getFriendWithUserNameCard(account);
    useEffect(function () {
        store.userStore.getUserActive(account);
    }, [store.userStore, account]);
    useEffect(function () {
        if (visible) {
            // 从服务端更新下个人信息
            store.userStore.getUserForceActive(account);
        }
    }, [store.uiStore, store.userStore, account, visible]);
    var handleCancel = function () {
        setVisible(false);
        onCancel === null || onCancel === void 0 ? void 0 : onCancel();
    };
    var handleOnAddFriendClick = function () { return __awaiter(void 0, void 0, void 0, function () {
        var error_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 5, , 6]);
                    if (!localOptions.addFriendNeedVerify) return [3 /*break*/, 2];
                    return [4 /*yield*/, store.friendStore.applyFriendActive(account)];
                case 1:
                    _a.sent();
                    message.success(t('applyFriendSuccessText'));
                    return [3 /*break*/, 4];
                case 2: return [4 /*yield*/, store.friendStore.addFriendActive(account)];
                case 3:
                    _a.sent();
                    message.success(t('addFriendSuccessText'));
                    _a.label = 4;
                case 4:
                    setVisible(false);
                    afterAddFriend === null || afterAddFriend === void 0 ? void 0 : afterAddFriend(account);
                    return [3 /*break*/, 6];
                case 5:
                    error_1 = _a.sent();
                    if (localOptions.addFriendNeedVerify) {
                        message.error(t('applyFriendFailedText'));
                    }
                    else {
                        message.error(t('addFriendFailedText'));
                    }
                    return [3 /*break*/, 6];
                case 6: return [2 /*return*/];
            }
        });
    }); };
    var handleOnDeleteFriendClick = function () {
        Modal.confirm({
            title: t('deleteFriendText'),
            content: t('confirmDeleteFriendText'),
            okText: t('okText'),
            cancelText: t('cancelText'),
            onOk: function () { return __awaiter(void 0, void 0, void 0, function () {
                var error_2;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            _a.trys.push([0, 2, , 3]);
                            return [4 /*yield*/, store.friendStore.deleteFriendActive(account)];
                        case 1:
                            _a.sent();
                            message.success(t('deleteFriendSuccessText'));
                            setVisible(false);
                            afterDeleteFriend === null || afterDeleteFriend === void 0 ? void 0 : afterDeleteFriend(account);
                            return [3 /*break*/, 3];
                        case 2:
                            error_2 = _a.sent();
                            message.error(t('deleteFriendFailedText'));
                            return [3 /*break*/, 3];
                        case 3: return [2 /*return*/];
                    }
                });
            }); },
        });
    };
    var handleOnBlockFriendClick = function () { return __awaiter(void 0, void 0, void 0, function () {
        var error_3;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
                    return [4 /*yield*/, store.relationStore.setBlackActive({
                            account: account,
                            isAdd: true,
                        })];
                case 1:
                    _a.sent();
                    message.success(t('blackSuccessText'));
                    setVisible(false);
                    afterBlockFriend === null || afterBlockFriend === void 0 ? void 0 : afterBlockFriend(account);
                    return [3 /*break*/, 3];
                case 2:
                    error_3 = _a.sent();
                    message.error(t('blackFailedText'));
                    return [3 /*break*/, 3];
                case 3: return [2 /*return*/];
            }
        });
    }); };
    var handleOnRemoveBlockFriendClick = function () { return __awaiter(void 0, void 0, void 0, function () {
        var error_4;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
                    return [4 /*yield*/, store.relationStore.setBlackActive({
                            account: account,
                            isAdd: false,
                        })];
                case 1:
                    _a.sent();
                    message.success(t('removeBlackSuccessText'));
                    setVisible(false);
                    afterRemoveBlockFriend === null || afterRemoveBlockFriend === void 0 ? void 0 : afterRemoveBlockFriend(account);
                    return [3 /*break*/, 3];
                case 2:
                    error_4 = _a.sent();
                    message.error(t('removeBlackFailedText'));
                    return [3 /*break*/, 3];
                case 3: return [2 /*return*/];
            }
        });
    }); };
    var handleOnSendMsgClick = function () { return __awaiter(void 0, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    setVisible(false);
                    return [4 /*yield*/, store.sessionStore.insertSessionActive('p2p', account)];
                case 1:
                    _a.sent();
                    afterSendMsgClick === null || afterSendMsgClick === void 0 ? void 0 : afterSendMsgClick();
                    return [2 /*return*/];
            }
        });
    }); };
    var handleOnAvatarClick = function () {
        setVisible(true);
    };
    var handleChangeAlias = function (alias) { return __awaiter(void 0, void 0, void 0, function () {
        var error_5;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 3, , 4]);
                    if (!userInfo.account) return [3 /*break*/, 2];
                    return [4 /*yield*/, store.friendStore.updateFriendActive(userInfo.account, alias)];
                case 1:
                    _a.sent();
                    message.success(t('updateAliasSuccessText'));
                    _a.label = 2;
                case 2: return [3 /*break*/, 4];
                case 3:
                    error_5 = _a.sent();
                    message.error(t('updateAliasFailedText'));
                    return [3 /*break*/, 4];
                case 4: return [2 /*return*/];
            }
        });
    }); };
    return (React.createElement(ComplexAvatarUI, __assign({ relation: relation, visible: visible, onCancel: handleCancel, onChangeAlias: handleChangeAlias, onAddFriendClick: handleOnAddFriendClick, onDeleteFriendClick: handleOnDeleteFriendClick, onBlockFriendClick: handleOnBlockFriendClick, onRemoveBlockFriendClick: handleOnRemoveBlockFriendClick, onSendMsglick: handleOnSendMsgClick, onAvatarClick: canClick ? handleOnAvatarClick : undefined, prefix: prefix, count: count, dot: dot, size: size, icon: icon }, userInfo)));
});
