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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ContactList = void 0;
var react_1 = __importDefault(require("react"));
var icons_1 = require("@ant-design/icons");
var ContactItem_1 = require("./ContactItem");
var common_1 = require("../../../common");
var ContactList = function (_a) {
    var selectedContactType = _a.selectedContactType, onItemClick = _a.onItemClick, renderCustomContact = _a.renderCustomContact, systemMsgUnread = _a.systemMsgUnread, _b = _a.prefix, prefix = _b === void 0 ? 'contact' : _b;
    var _prefix = "".concat(prefix, "-list");
    var t = (0, common_1.useTranslation)().t;
    var dataSource = [
        {
            contactType: 'msgList',
            label: t('msgMenuText'),
            icon: react_1.default.createElement(icons_1.TeamOutlined, null),
            backgroundColor: '#60CFA7',
            onItemClick: function (contactType) {
                onItemClick(contactType);
            },
            unread: systemMsgUnread,
        },
        {
            contactType: 'blackList',
            label: t('blackMenuText'),
            icon: react_1.default.createElement(icons_1.UserOutlined, null),
            backgroundColor: '#53C3F3',
            onItemClick: function (contactType) {
                onItemClick(contactType);
            },
        },
        {
            contactType: 'friendList',
            label: t('friendMenuText'),
            icon: react_1.default.createElement(icons_1.UserOutlined, null),
            backgroundColor: '#537FF4',
            onItemClick: function (contactType) {
                onItemClick(contactType);
            },
        },
        {
            contactType: 'groupList',
            label: t('teamMenuText'),
            icon: react_1.default.createElement(icons_1.TeamOutlined, null),
            backgroundColor: '#BE65D9',
            onItemClick: function (contactType) {
                onItemClick(contactType);
            },
        },
    ];
    return (react_1.default.createElement("div", { className: "".concat(_prefix, "-wrapper") }, dataSource.map(function (item) {
        var _a;
        return ((_a = renderCustomContact === null || renderCustomContact === void 0 ? void 0 : renderCustomContact(item.contactType)) !== null && _a !== void 0 ? _a : (react_1.default.createElement(ContactItem_1.ContactItem, __assign({ key: item.contactType, prefix: prefix, isSelectd: item.contactType === selectedContactType }, item))));
    })));
};
exports.ContactList = ContactList;
