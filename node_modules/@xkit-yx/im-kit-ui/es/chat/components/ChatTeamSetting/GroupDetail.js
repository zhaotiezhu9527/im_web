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
import React, { useEffect, useState } from 'react';
import { Form, Input, Button } from 'antd';
import { GroupAvatarSelect, useTranslation, CrudeAvatar } from '../../../common';
var GroupDetail = function (_a) {
    var team = _a.team, hasPower = _a.hasPower, onUpdateTeamInfo = _a.onUpdateTeamInfo, _b = _a.prefix, prefix = _b === void 0 ? 'chat' : _b, _c = _a.commonPrefix, commonPrefix = _c === void 0 ? 'common' : _c;
    var t = useTranslation().t;
    var _d = __read(useState(''), 2), avatar = _d[0], setAvatar = _d[1];
    var _e = __read(useState(''), 2), intro = _e[0], setIntro = _e[1];
    var _f = __read(useState(''), 2), name = _f[0], setName = _f[1];
    var _g = team.intro, lastIntro = _g === void 0 ? '' : _g;
    var _prefix = "".concat(prefix, "-group-detail");
    useEffect(function () {
        setAvatar(team.avatar);
    }, [team.avatar]);
    useEffect(function () {
        setIntro(lastIntro);
    }, [lastIntro]);
    useEffect(function () {
        setName(team.name);
    }, [team.name]);
    var onUpdateTeamInfoSubmitHandler = function () {
        var obj = { avatar: avatar, name: name, intro: intro };
        Object.keys(obj).forEach(function (key) {
            if (obj[key] === team[key]) {
                delete obj[key];
            }
        });
        onUpdateTeamInfo(__assign(__assign({}, obj), { teamId: team.teamId }));
    };
    return (React.createElement(Form, { className: "".concat(_prefix, "-wrap"), layout: "vertical" },
        React.createElement(Form.Item, { className: "".concat(_prefix, "-avatar-box"), label: React.createElement("b", null, t('teamAvatarText')), name: "avatar" }, hasPower ? (React.createElement(GroupAvatarSelect, { prefix: commonPrefix, avatar: avatar, account: team.teamId, nick: team.name, onSelect: setAvatar })) : (React.createElement(CrudeAvatar, { account: team.teamId, nick: team.name, avatar: avatar }))),
        React.createElement(Form.Item, { label: React.createElement("b", null, t('teamIdText')) },
            React.createElement(Input, { disabled: true, className: "".concat(_prefix, "-form-input"), value: team.teamId })),
        React.createElement(Form.Item, { label: React.createElement("b", null, t('teamTitle')) },
            React.createElement(Input, { disabled: !hasPower, className: "".concat(_prefix, "-form-input"), showCount: true, maxLength: 30, value: name, onChange: function (e) {
                    setName(e.target.value);
                }, placeholder: t('teamTitlePlaceholder') })),
        React.createElement(Form.Item, { label: React.createElement("b", null, t('teamSignText')) },
            React.createElement(Input.TextArea, { disabled: !hasPower, className: "".concat(_prefix, "-form-input"), maxLength: 100, showCount: true, rows: 4, value: intro, onChange: function (e) {
                    setIntro(e.target.value);
                }, placeholder: t('teamSignPlaceholder') })),
        React.createElement(Button, { className: "".concat(_prefix, "-save-btn"), type: "primary", disabled: !hasPower, onClick: onUpdateTeamInfoSubmitHandler }, t('saveText'))));
};
export default GroupDetail;
