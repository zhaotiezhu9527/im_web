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
Object.defineProperty(exports, "__esModule", { value: true });
exports.GroupAvatarSelect = exports.urls = void 0;
var react_1 = __importStar(require("react"));
var antd_1 = require("antd");
var CrudeAvatar_1 = require("../CrudeAvatar");
exports.urls = [
    'https://yx-web-nosdn.netease.im/common/2425b4cc058e5788867d63c322feb7ac/groupAvatar1.png',
    'https://yx-web-nosdn.netease.im/common/62c45692c9771ab388d43fea1c9d2758/groupAvatar2.png',
    'https://yx-web-nosdn.netease.im/common/d1ed3c21d3f87a41568d17197760e663/groupAvatar3.png',
    'https://yx-web-nosdn.netease.im/common/e677d8551deb96723af2b40b821c766a/groupAvatar4.png',
    'https://yx-web-nosdn.netease.im/common/fd6c75bb6abca9c810d1292e66d5d87e/groupAvatar5.png',
];
var GroupAvatarSelect = function (_a) {
    var onSelect = _a.onSelect, _b = _a.prefix, prefix = _b === void 0 ? 'common' : _b, props = __rest(_a, ["onSelect", "prefix"]);
    var _c = __read((0, react_1.useState)(undefined), 2), avatar = _c[0], setAvatar = _c[1];
    var _prefix = "".concat(prefix, "-group-avatar-select");
    var titleRenderer = (0, react_1.useMemo)(function () {
        return (react_1.default.createElement("div", { className: "".concat(_prefix, "-content") }, exports.urls.map(function (url) { return (react_1.default.createElement(antd_1.Button, { key: url, onClick: function () {
                setAvatar(url);
                onSelect(url);
            }, type: "text", className: "".concat(_prefix, "-btn") },
            react_1.default.createElement("img", { className: "".concat(_prefix, "-btn-img"), src: url }))); })));
    }, [onSelect, _prefix]);
    (0, react_1.useEffect)(function () {
        setAvatar(props.avatar);
    }, [props.avatar]);
    return (react_1.default.createElement(antd_1.Tooltip, { title: titleRenderer, trigger: ['click'], color: "#fff", overlayClassName: "".concat(_prefix, "-wrapper"), placement: "bottom", arrowPointAtCenter: true },
        react_1.default.createElement("div", { className: "".concat(_prefix, "-main") },
            react_1.default.createElement(CrudeAvatar_1.CrudeAvatar, __assign({}, props, { avatar: avatar })))));
};
exports.GroupAvatarSelect = GroupAvatarSelect;
