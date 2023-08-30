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
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
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
import React, { useMemo, useState, useEffect } from 'react';
import { Tooltip, Button } from 'antd';
import { CrudeAvatar } from '../CrudeAvatar';
export var urls = [
    'https://yx-web-nosdn.netease.im/common/2425b4cc058e5788867d63c322feb7ac/groupAvatar1.png',
    'https://yx-web-nosdn.netease.im/common/62c45692c9771ab388d43fea1c9d2758/groupAvatar2.png',
    'https://yx-web-nosdn.netease.im/common/d1ed3c21d3f87a41568d17197760e663/groupAvatar3.png',
    'https://yx-web-nosdn.netease.im/common/e677d8551deb96723af2b40b821c766a/groupAvatar4.png',
    'https://yx-web-nosdn.netease.im/common/fd6c75bb6abca9c810d1292e66d5d87e/groupAvatar5.png',
];
export var GroupAvatarSelect = function (_a) {
    var onSelect = _a.onSelect, _b = _a.prefix, prefix = _b === void 0 ? 'common' : _b, props = __rest(_a, ["onSelect", "prefix"]);
    var _c = __read(useState(undefined), 2), avatar = _c[0], setAvatar = _c[1];
    var _prefix = "".concat(prefix, "-group-avatar-select");
    var titleRenderer = useMemo(function () {
        return (React.createElement("div", { className: "".concat(_prefix, "-content") }, urls.map(function (url) { return (React.createElement(Button, { key: url, onClick: function () {
                setAvatar(url);
                onSelect(url);
            }, type: "text", className: "".concat(_prefix, "-btn") },
            React.createElement("img", { className: "".concat(_prefix, "-btn-img"), src: url }))); })));
    }, [onSelect, _prefix]);
    useEffect(function () {
        setAvatar(props.avatar);
    }, [props.avatar]);
    return (React.createElement(Tooltip, { title: titleRenderer, trigger: ['click'], color: "#fff", overlayClassName: "".concat(_prefix, "-wrapper"), placement: "bottom", arrowPointAtCenter: true },
        React.createElement("div", { className: "".concat(_prefix, "-main") },
            React.createElement(CrudeAvatar, __assign({}, props, { avatar: avatar })))));
};
