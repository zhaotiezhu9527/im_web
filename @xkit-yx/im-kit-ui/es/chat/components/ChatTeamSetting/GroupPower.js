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
import React, { useMemo, useState } from 'react';
import { Switch, Select, Button, Empty } from 'antd';
import { ComplexAvatarContainer, useStateContext, useTranslation, } from '../../../common';
import ChatTeamMemberModal from '../ChatTeamMemberModal';
import { ALLOW_AT } from '../../../constant';
var GroupPower = function (_a) {
    var onUpdateTeamInfo = _a.onUpdateTeamInfo, onTeamMuteChange = _a.onTeamMuteChange, team = _a.team, managers = _a.managers, isGroupOwner = _a.isGroupOwner, afterSendMsgClick = _a.afterSendMsgClick, _b = _a.prefix, prefix = _b === void 0 ? 'chat' : _b, _c = _a.commonPrefix, commonPrefix = _c === void 0 ? 'common' : _c;
    var localOptions = useStateContext().localOptions;
    var t = useTranslation().t;
    var _prefix = "".concat(prefix, "-group-power");
    var _d = __read(useState(false), 2), memberModalVisible = _d[0], setMemberModalVisible = _d[1];
    var options = useMemo(function () {
        return [
            {
                label: localOptions.teamManagerVisible
                    ? t('teamOwnerAndManagerText')
                    : t('teamOwnerText'),
                value: 'manager',
            },
            {
                label: t('teamAll'),
                value: 'all',
            },
        ];
    }, [localOptions.teamManagerVisible, t]);
    var ext = useMemo(function () {
        var res = {};
        try {
            res = JSON.parse(team.ext || '{}');
        }
        catch (error) {
            //
        }
        return res;
    }, [team.ext]);
    return (React.createElement("div", { className: "".concat(_prefix, "-wrap") },
        localOptions.teamManagerVisible && (React.createElement("div", { className: "".concat(_prefix, "-manager") },
            React.createElement("div", { className: "".concat(_prefix, "-manager-title") },
                React.createElement("label", null, t('teamManagerText')),
                isGroupOwner && (React.createElement(Button, { onClick: function () {
                        setMemberModalVisible(true);
                    }, className: "".concat(_prefix, "-manager-btn"), type: "link" }, t('teamManagerEditText') + ' >'))),
            React.createElement("div", { className: "".concat(_prefix, "-manager-avatars") }, !managers.length ? (React.createElement(Empty, { className: "".concat(_prefix, "-manager-avatars-empty"), image: Empty.PRESENTED_IMAGE_SIMPLE, description: t('teamManagerEmptyText') })) : (managers.map(function (item) { return (React.createElement(ComplexAvatarContainer, { key: item.account, account: item.account, afterSendMsgClick: afterSendMsgClick, prefix: commonPrefix })); }))))),
        React.createElement("div", { className: "".concat(_prefix, "-who") },
            React.createElement("div", { className: "".concat(_prefix, "-who-item") },
                React.createElement("label", null, t('teamManagerLimitText')),
                React.createElement(Select, { className: "".concat(_prefix, "-who-select"), options: options, value: team.updateTeamMode, onChange: function (value) {
                        onUpdateTeamInfo({ updateTeamMode: value });
                    } })),
            React.createElement("div", { className: "".concat(_prefix, "-who-item") },
                React.createElement("label", null, t('teamInviteModeText')),
                React.createElement(Select, { className: "".concat(_prefix, "-who-select"), options: options, value: team.inviteMode, onChange: function (value) {
                        onUpdateTeamInfo({ inviteMode: value });
                    } })),
            React.createElement("div", { className: "".concat(_prefix, "-who-item") },
                React.createElement("label", null, t('teamAtModeText')),
                React.createElement(Select, { className: "".concat(_prefix, "-who-select"), options: options, value: ext[ALLOW_AT] || 'all', onChange: function (value) {
                        var _a;
                        onUpdateTeamInfo({
                            ext: JSON.stringify(__assign(__assign({}, ext), (_a = {}, _a[ALLOW_AT] = value, _a))),
                        });
                    } }))),
        React.createElement("div", { className: "".concat(_prefix, "-action") },
            React.createElement("div", { className: "".concat(_prefix, "-action-item") },
                React.createElement("label", null, t('teamMuteText')),
                React.createElement(Switch, { checked: team.mute, onChange: onTeamMuteChange }))),
        React.createElement(ChatTeamMemberModal, { visible: memberModalVisible, onCancel: function () {
                setMemberModalVisible(false);
            }, teamId: team.teamId, commonPrefix: commonPrefix })));
};
export default GroupPower;
