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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.App = exports.Provider = exports.Context = void 0;
var react_1 = __importStar(require("react"));
var im_store_1 = __importDefault(require("@xkit-yx/im-store"));
var mobx_react_1 = require("mobx-react");
var core_kit_1 = require("@xkit-yx/core-kit");
var useStateContext_1 = require("../hooks/useStateContext");
var zh_1 = __importDefault(require("../locales/zh"));
exports.Context = (0, react_1.createContext)({});
var defaultLocalOptions = {
    addFriendNeedVerify: true,
    teamBeInviteMode: 'needVerify',
    teamJoinMode: 'noVerify',
    teamInviteMode: 'manager',
    teamUpdateTeamMode: 'manager',
    teamUpdateExtMode: 'manager',
    leaveOnTransfer: false,
    needMention: true,
    p2pMsgReceiptVisible: false,
    teamMsgReceiptVisible: false,
    loginStateVisible: false,
    allowTransferTeamOwner: false,
    teamManagerVisible: false,
    teamManagerLimit: 10,
    sendMsgBefore: function (options) { return __awaiter(void 0, void 0, void 0, function () { return __generator(this, function (_a) {
        return [2 /*return*/, options];
    }); }); },
};
exports.Provider = (0, react_1.memo)(function (_a) {
    var children = _a.children, initOptions = _a.initOptions, otherOptions = _a.otherOptions, funcOptions = _a.funcOptions, _b = _a.localOptions, localOptions = _b === void 0 ? defaultLocalOptions : _b, nimKitCore = _a.nimKitCore, _c = _a.sdkVersion, sdkVersion = _c === void 0 ? 1 : _c, _d = _a.locale, locale = _d === void 0 ? 'zh' : _d, _e = _a.localeConfig, localeConfig = _e === void 0 ? zh_1.default : _e, renderImIdle = _a.renderImIdle, renderImDisConnected = _a.renderImDisConnected, renderImConnecting = _a.renderImConnecting, _f = _a.singleton, singleton = _f === void 0 ? false : _f;
    // 对象参数的引用很容易变，会导致 nim 重新生成，因此最好将对象参数用 useMemo 包裹一下再传进来
    var nim = (0, react_1.useMemo)(function () {
        var _nim;
        if (nimKitCore) {
            _nim = nimKitCore;
        }
        else {
            var NIM = (0, core_kit_1.NimKitCoreFactory)(sdkVersion);
            if (singleton) {
                _nim = NIM.getInstance({ initOptions: initOptions, otherOptions: otherOptions, funcOptions: funcOptions });
            }
            else {
                _nim = new NIM({ initOptions: initOptions, otherOptions: otherOptions, funcOptions: funcOptions });
            }
        }
        _nim.connect();
        return _nim;
    }, [
        initOptions,
        otherOptions,
        funcOptions,
        sdkVersion,
        nimKitCore,
        singleton,
    ]);
    var localeMap = (0, react_1.useMemo)(function () { return ({
        zh: zh_1.default,
    }); }, []);
    var t = (0, react_1.useCallback)(function (str) {
        return __assign(__assign({}, (localeMap[locale] || zh_1.default)), localeConfig)[str];
    }, [locale, localeConfig, localeMap]);
    var finalLocalOptions = (0, react_1.useMemo)(function () {
        return __assign(__assign({}, defaultLocalOptions), localOptions);
    }, [localOptions]);
    var rootStore = (0, react_1.useMemo)(function () {
        if (singleton) {
            return im_store_1.default.getInstance(nim, finalLocalOptions);
        }
        return new im_store_1.default(nim, finalLocalOptions);
    }, [nim, singleton, finalLocalOptions]);
    // @ts-ignore
    window.__xkit_store__ = {
        nim: nim,
        store: rootStore,
        initOptions: initOptions,
        localOptions: finalLocalOptions,
    };
    (0, react_1.useEffect)(function () {
        return function () {
            if (!singleton) {
                rootStore.destroy();
            }
        };
    }, [rootStore, singleton]);
    (0, react_1.useEffect)(function () {
        return function () {
            if (!singleton) {
                nim.destroy();
            }
        };
    }, [nim, singleton]);
    return (react_1.default.createElement(exports.Context.Provider, { value: {
            store: rootStore,
            nim: nim,
            initOptions: initOptions,
            localOptions: finalLocalOptions,
            t: t,
        } },
        react_1.default.createElement(exports.App, { renderImIdle: renderImIdle, renderImConnecting: renderImConnecting, renderImDisConnected: renderImDisConnected }, children)));
});
exports.App = (0, mobx_react_1.observer)(function (_a) {
    var renderImIdle = _a.renderImIdle, renderImConnecting = _a.renderImConnecting, renderImDisConnected = _a.renderImDisConnected, children = _a.children;
    var store = (0, useStateContext_1.useStateContext)().store;
    var render = function () {
        switch (store.connectStore.connectState) {
            case 'connected':
                return children;
            case 'idle':
                return renderImIdle ? renderImIdle() : null;
            case 'connecting':
                return renderImConnecting ? (renderImConnecting()) : (react_1.default.createElement("span", null, "Loading\u2026\u2026"));
            case 'disconnected':
                return renderImDisConnected ? (renderImDisConnected()) : (react_1.default.createElement("span", null, "\u5F53\u524D\u7F51\u7EDC\u4E0D\u53EF\u7528\uFF0C\u8BF7\u68C0\u67E5\u7F51\u7EDC\u8BBE\u7F6E\uFF0C\u5237\u65B0\u9875\u9762"));
            default:
                return null;
        }
    };
    return react_1.default.createElement(react_1.default.Fragment, null, render());
});
