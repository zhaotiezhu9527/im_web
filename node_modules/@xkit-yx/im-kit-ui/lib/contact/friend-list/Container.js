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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FriendListContainer = void 0;
var react_1 = __importStar(require("react"));
var FriendList_1 = require("./components/FriendList");
var common_1 = require("../../common");
var package_json_1 = __importDefault(require("../../../package.json"));
var mobx_react_1 = require("mobx-react");
exports.FriendListContainer = (0, mobx_react_1.observer)(function (_a) {
    var onItemClick = _a.onItemClick, afterSendMsgClick = _a.afterSendMsgClick, renderFriendListEmpty = _a.renderFriendListEmpty, renderFriendListHeader = _a.renderFriendListHeader, _b = _a.prefix, prefix = _b === void 0 ? 'contact' : _b, _c = _a.commonPrefix, commonPrefix = _c === void 0 ? 'common' : _c;
    var _d = (0, common_1.useStateContext)(), nim = _d.nim, store = _d.store, initOptions = _d.initOptions;
    (0, common_1.useEventTracking)({
        appkey: initOptions.appkey,
        version: package_json_1.default.version,
        component: 'ContactUIKit',
        imVersion: nim.version,
    });
    (0, react_1.useEffect)(function () {
        // 订阅好友列表
        var accounts = store.uiStore.friendsWithoutBlacklist.map(function (item) { return item.account; });
        store.eventStore.subscribeLoginStateActive(accounts).catch(function (err) {
            // 忽略报错
        });
    }, [store.uiStore.friendsWithoutBlacklist, store.eventStore]);
    return (react_1.default.createElement(FriendList_1.FriendList, { list: store.uiStore.friendsWithoutBlacklist, 
        // loading={loading}
        onItemClick: onItemClick, afterSendMsgClick: afterSendMsgClick, renderFriendListHeader: renderFriendListHeader, renderFriendListEmpty: renderFriendListEmpty, prefix: prefix, commonPrefix: commonPrefix }));
});
