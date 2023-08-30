"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BlackListContainer = void 0;
var react_1 = __importDefault(require("react"));
var BlackList_1 = require("./components/BlackList");
var common_1 = require("../../common");
var package_json_1 = __importDefault(require("../../../package.json"));
var mobx_react_1 = require("mobx-react");
exports.BlackListContainer = (0, mobx_react_1.observer)(function (_a) {
    var onItemClick = _a.onItemClick, afterSendMsgClick = _a.afterSendMsgClick, renderBlackListEmpty = _a.renderBlackListEmpty, renderBlackListHeader = _a.renderBlackListHeader, _b = _a.prefix, prefix = _b === void 0 ? 'contact' : _b, _c = _a.commonPrefix, commonPrefix = _c === void 0 ? 'common' : _c;
    var _d = (0, common_1.useStateContext)(), store = _d.store, initOptions = _d.initOptions, nim = _d.nim;
    (0, common_1.useEventTracking)({
        appkey: initOptions.appkey,
        version: package_json_1.default.version,
        component: 'ContactUIKit',
        imVersion: nim.version,
    });
    return (react_1.default.createElement(BlackList_1.BlackList, { list: store.relationStore.blacklist, 
        // loading={loading}
        onItemClick: onItemClick, afterSendMsgClick: afterSendMsgClick, renderBlackListHeader: renderBlackListHeader, renderBlackListEmpty: renderBlackListEmpty, prefix: prefix, commonPrefix: commonPrefix }));
});
