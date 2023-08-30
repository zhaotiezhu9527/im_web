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
import React, { useState } from 'react';
import { MsgList } from './components/MsgList';
import { useEventTracking, useStateContext, useTranslation } from '../../common';
import packageJson from '../../../package.json';
import { observer } from 'mobx-react';
import { message } from 'antd';
import { logger } from '../../utils';
export var MsgListContainer = observer(function (_a) {
    var renderMsgListHeader = _a.renderMsgListHeader, renderMsgListEmpty = _a.renderMsgListEmpty, afterSendMsgClick = _a.afterSendMsgClick, afterAcceptApplyTeam = _a.afterAcceptApplyTeam, afterRejectApplyTeam = _a.afterRejectApplyTeam, afterAcceptTeamInvite = _a.afterAcceptTeamInvite, afterRejectTeamInvite = _a.afterRejectTeamInvite, afterAcceptApplyFriend = _a.afterAcceptApplyFriend, afterRejectApplyFriend = _a.afterRejectApplyFriend, _b = _a.prefix, prefix = _b === void 0 ? 'contact' : _b, _c = _a.commonPrefix, commonPrefix = _c === void 0 ? 'common' : _c;
    var _d = useStateContext(), nim = _d.nim, store = _d.store, initOptions = _d.initOptions;
    var t = useTranslation().t;
    useEventTracking({
        appkey: initOptions.appkey,
        version: packageJson.version,
        component: 'ContactUIKit',
        imVersion: nim.version,
    });
    var _e = __read(useState(false), 2), applyTeamLoaidng = _e[0], setApplyTeamLoaidng = _e[1];
    var _f = __read(useState(false), 2), teamInviteLoading = _f[0], setTeamInviteLoading = _f[1];
    var _g = __read(useState(false), 2), applyFriendLoading = _g[0], setApplyFriendLoading = _g[1];
    var onAcceptApplyTeamClick = function (options) {
        setApplyTeamLoaidng(true);
        store.teamStore
            .passTeamApplyActive(options)
            .then(function () {
            message.success(t('acceptedText'));
            afterAcceptApplyTeam === null || afterAcceptApplyTeam === void 0 ? void 0 : afterAcceptApplyTeam(options);
        })
            .catch(function (err) {
            message.error(t('acceptFailedText'));
            logger.error('同意该申请失败: ', err);
        })
            .finally(function () {
            setApplyTeamLoaidng(false);
        });
    };
    var onRejectApplyTeamClick = function (options) {
        setApplyTeamLoaidng(true);
        store.teamStore
            .rejectTeamApplyActive(options)
            .then(function () {
            message.success(t('rejectedText'));
            afterRejectApplyTeam === null || afterRejectApplyTeam === void 0 ? void 0 : afterRejectApplyTeam(options);
        })
            .catch(function (err) {
            message.error(t('rejectFailedText'));
            logger.error('拒绝该申请失败: ', err);
        })
            .finally(function () {
            setApplyTeamLoaidng(false);
        });
    };
    var onAcceptTeamInviteClick = function (options) {
        setTeamInviteLoading(true);
        store.teamStore
            .acceptTeamInviteActive(options)
            .then(function () {
            message.success(t('acceptedText'));
            afterAcceptTeamInvite === null || afterAcceptTeamInvite === void 0 ? void 0 : afterAcceptTeamInvite(options);
        })
            .catch(function (err) {
            message.error(t('acceptFailedText'));
            logger.error('同意该申请失败: ', err);
        })
            .finally(function () {
            setTeamInviteLoading(false);
        });
    };
    var onRejectTeamInviteClick = function (options) {
        setTeamInviteLoading(true);
        store.teamStore
            .rejectTeamInviteActive(options)
            .then(function () {
            message.success(t('rejectedText'));
            afterRejectTeamInvite === null || afterRejectTeamInvite === void 0 ? void 0 : afterRejectTeamInvite(options);
        })
            .catch(function (err) {
            message.error(t('rejectFailedText'));
            logger.error('拒绝该申请失败: ', err);
        })
            .finally(function () {
            setTeamInviteLoading(false);
        });
    };
    var onAcceptApplyFriendClick = function (account) { return __awaiter(void 0, void 0, void 0, function () {
        var error_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, 3, 4]);
                    setApplyFriendLoading(true);
                    return [4 /*yield*/, store.friendStore.passFriendApplyActive(account)];
                case 1:
                    _a.sent();
                    message.success(t('acceptedText'));
                    afterAcceptApplyFriend === null || afterAcceptApplyFriend === void 0 ? void 0 : afterAcceptApplyFriend(account);
                    return [3 /*break*/, 4];
                case 2:
                    error_1 = _a.sent();
                    message.error(t('acceptFailedText'));
                    logger.error('同意该申请失败: ', error_1);
                    return [3 /*break*/, 4];
                case 3:
                    setApplyFriendLoading(false);
                    return [7 /*endfinally*/];
                case 4: return [2 /*return*/];
            }
        });
    }); };
    var onRejectApplyFriendClick = function (account) {
        setApplyFriendLoading(true);
        store.friendStore
            .rejectFriendApplyActive(account)
            .then(function () {
            message.success(t('rejectedText'));
            afterRejectApplyFriend === null || afterRejectApplyFriend === void 0 ? void 0 : afterRejectApplyFriend(account);
        })
            .catch(function (err) {
            message.error(t('rejectFailedText'));
            logger.error('拒绝该申请失败: ', err);
        })
            .finally(function () {
            setApplyFriendLoading(false);
        });
    };
    return (React.createElement(MsgList, { msgs: store.uiStore.applyMsgList, applyTeamLoaidng: applyTeamLoaidng, teamInviteLoading: teamInviteLoading, applyFriendLoading: applyFriendLoading, onAcceptApplyTeamClick: onAcceptApplyTeamClick, onRejectApplyTeamClick: onRejectApplyTeamClick, onAcceptTeamInviteClick: onAcceptTeamInviteClick, onRejectTeamInviteClick: onRejectTeamInviteClick, onAcceptApplyFriendClick: onAcceptApplyFriendClick, onRejectApplyFriendClick: onRejectApplyFriendClick, afterSendMsgClick: afterSendMsgClick, renderMsgListHeader: renderMsgListHeader, renderMsgListEmpty: renderMsgListEmpty, prefix: prefix, commonPrefix: commonPrefix }));
});
