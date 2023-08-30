"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ContactListContainer = void 0;
var react_1 = __importDefault(require("react"));
var ContactList_1 = require("./components/ContactList");
var utils_1 = require("../../utils");
var common_1 = require("../../common");
var package_json_1 = __importDefault(require("../../../package.json"));
var mobx_react_1 = require("mobx-react");
exports.ContactListContainer = (0, mobx_react_1.observer)(function (_a) {
    var _b = _a.prefix, prefix = _b === void 0 ? 'contact' : _b, onItemClick = _a.onItemClick, renderCustomContact = _a.renderCustomContact;
    var _c = (0, common_1.useStateContext)(), nim = _c.nim, store = _c.store, initOptions = _c.initOptions;
    (0, common_1.useEventTracking)({
        appkey: initOptions.appkey,
        version: package_json_1.default.version,
        component: 'ContactUIKit',
        imVersion: nim.version,
    });
    var handleItemClick = function (contactType) {
        utils_1.logger.log('选中通讯录导航：', contactType);
        store.uiStore.selectContactType(contactType);
        if (contactType === 'msgList') {
            store.sysMsgStore.resetSystemMsgUnread();
        }
        onItemClick === null || onItemClick === void 0 ? void 0 : onItemClick(contactType);
    };
    return (react_1.default.createElement(ContactList_1.ContactList, { selectedContactType: store.uiStore.selectedContactType, onItemClick: handleItemClick, renderCustomContact: renderCustomContact, systemMsgUnread: store.uiStore.systemMsgUnread, prefix: prefix }));
});
