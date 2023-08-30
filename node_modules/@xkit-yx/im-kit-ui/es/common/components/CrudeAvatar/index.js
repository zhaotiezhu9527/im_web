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
import React, { useEffect, useMemo, useState } from 'react';
import { Avatar, Badge } from 'antd';
import { Storage } from '@xkit-yx/utils';
export var CrudeAvatar = function (_a) {
    var nick = _a.nick, account = _a.account, avatar = _a.avatar, _b = _a.size, size = _b === void 0 ? 36 : _b, icon = _a.icon, _c = _a.count, count = _c === void 0 ? 0 : _c, _d = _a.dot, dot = _d === void 0 ? false : _d;
    var _e = __read(useState(false), 2), imgFailed = _e[0], setImgFailed = _e[1];
    var _f = __read(useState(''), 2), bgColor = _f[0], setBgColor = _f[1];
    var text = useMemo(function () {
        // 头像不用随备注而改变，产品需求
        return (nick || account || '').slice(-2);
    }, [nick, account]);
    useEffect(function () {
        var colorMap = {
            0: '#60CFA7',
            1: '#53C3F3',
            2: '#537FF4',
            3: '#854FE2',
            4: '#BE65D9',
            5: '#E9749D',
            6: '#F9B751',
        };
        var store = new Storage('localStorage', '__xkit__');
        var key = "avatarColor-".concat(account);
        var bgColor = store.get(key);
        if (!bgColor) {
            bgColor = colorMap[Math.floor(Math.random() * 7)];
            store.set(key, bgColor);
        }
        setBgColor(bgColor);
    }, [account]);
    useEffect(function () {
        if (avatar) {
            setImgFailed(false);
        }
    }, [avatar]);
    var avatarStyle = useMemo(function () {
        if (avatar && !imgFailed) {
            return {
                verticalAlign: 'middle',
            };
        }
        return {
            backgroundColor: bgColor,
            verticalAlign: 'middle',
        };
    }, [avatar, imgFailed, bgColor]);
    return (React.createElement(Badge, { dot: dot, count: count, color: "red", overflowCount: 99, showZero: false },
        React.createElement(Avatar, { style: avatarStyle, alt: text, src: avatar, size: size, icon: icon, onError: function () {
                setImgFailed(true);
                return true;
            } }, text)));
};
