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
Object.defineProperty(exports, "__esModule", { value: true });
exports.CrudeAvatar = void 0;
var react_1 = __importStar(require("react"));
var antd_1 = require("antd");
var utils_1 = require("@xkit-yx/utils");
var CrudeAvatar = function (_a) {
    var nick = _a.nick, account = _a.account, avatar = _a.avatar, _b = _a.size, size = _b === void 0 ? 36 : _b, icon = _a.icon, _c = _a.count, count = _c === void 0 ? 0 : _c, _d = _a.dot, dot = _d === void 0 ? false : _d;
    var _e = __read((0, react_1.useState)(false), 2), imgFailed = _e[0], setImgFailed = _e[1];
    var _f = __read((0, react_1.useState)(''), 2), bgColor = _f[0], setBgColor = _f[1];
    var text = (0, react_1.useMemo)(function () {
        // 头像不用随备注而改变，产品需求
        return (nick || account || '').slice(-2);
    }, [nick, account]);
    (0, react_1.useEffect)(function () {
        var colorMap = {
            0: '#60CFA7',
            1: '#53C3F3',
            2: '#537FF4',
            3: '#854FE2',
            4: '#BE65D9',
            5: '#E9749D',
            6: '#F9B751',
        };
        var store = new utils_1.Storage('localStorage', '__xkit__');
        var key = "avatarColor-".concat(account);
        var bgColor = store.get(key);
        if (!bgColor) {
            bgColor = colorMap[Math.floor(Math.random() * 7)];
            store.set(key, bgColor);
        }
        setBgColor(bgColor);
    }, [account]);
    (0, react_1.useEffect)(function () {
        if (avatar) {
            setImgFailed(false);
        }
    }, [avatar]);
    var avatarStyle = (0, react_1.useMemo)(function () {
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
    return (react_1.default.createElement(antd_1.Badge, { dot: dot, count: count, color: "red", overflowCount: 99, showZero: false },
        react_1.default.createElement(antd_1.Avatar, { style: avatarStyle, alt: text, src: avatar, size: size, icon: icon, onError: function () {
                setImgFailed(true);
                return true;
            } }, text)));
};
exports.CrudeAvatar = CrudeAvatar;
