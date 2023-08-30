"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SearchContainer = exports.AddContainer = exports.ChatMessageItem = exports.ChatContainer = exports.ContactInfoContainer = exports.GroupListContainer = exports.FriendListContainer = exports.BlackListContainer = exports.ContactListContainer = exports.ConversationContainer = exports.NimKitCoreFactory = exports.NimKitCoreTypes = exports.useEventTracking = exports.useTranslation = exports.useStateContext = exports.ParseSession = exports.ReadPercent = exports.Welcome = exports.FriendSelectContainer = exports.urls = exports.GroupAvatarSelect = exports.MyUserCard = exports.UserCard = exports.Provider = exports.RootStore = exports.Context = exports.MyAvatarContainer = exports.ComplexAvatarContainer = exports.ComplexAvatarUI = exports.CommonIcon = exports.SearchInput = exports.CrudeAvatar = exports.Utils = exports.IMUIKit = void 0;
var react_1 = __importDefault(require("react"));
var react_dom_1 = __importDefault(require("react-dom"));
var common_1 = require("./common");
Object.defineProperty(exports, "Utils", { enumerable: true, get: function () { return common_1.Utils; } });
Object.defineProperty(exports, "CrudeAvatar", { enumerable: true, get: function () { return common_1.CrudeAvatar; } });
Object.defineProperty(exports, "SearchInput", { enumerable: true, get: function () { return common_1.SearchInput; } });
Object.defineProperty(exports, "CommonIcon", { enumerable: true, get: function () { return common_1.CommonIcon; } });
Object.defineProperty(exports, "ComplexAvatarUI", { enumerable: true, get: function () { return common_1.ComplexAvatarUI; } });
Object.defineProperty(exports, "ComplexAvatarContainer", { enumerable: true, get: function () { return common_1.ComplexAvatarContainer; } });
Object.defineProperty(exports, "MyAvatarContainer", { enumerable: true, get: function () { return common_1.MyAvatarContainer; } });
Object.defineProperty(exports, "Context", { enumerable: true, get: function () { return common_1.Context; } });
Object.defineProperty(exports, "Provider", { enumerable: true, get: function () { return common_1.Provider; } });
Object.defineProperty(exports, "UserCard", { enumerable: true, get: function () { return common_1.UserCard; } });
Object.defineProperty(exports, "MyUserCard", { enumerable: true, get: function () { return common_1.MyUserCard; } });
Object.defineProperty(exports, "GroupAvatarSelect", { enumerable: true, get: function () { return common_1.GroupAvatarSelect; } });
Object.defineProperty(exports, "urls", { enumerable: true, get: function () { return common_1.urls; } });
Object.defineProperty(exports, "FriendSelectContainer", { enumerable: true, get: function () { return common_1.FriendSelectContainer; } });
Object.defineProperty(exports, "Welcome", { enumerable: true, get: function () { return common_1.Welcome; } });
Object.defineProperty(exports, "ReadPercent", { enumerable: true, get: function () { return common_1.ReadPercent; } });
Object.defineProperty(exports, "ParseSession", { enumerable: true, get: function () { return common_1.ParseSession; } });
Object.defineProperty(exports, "useStateContext", { enumerable: true, get: function () { return common_1.useStateContext; } });
Object.defineProperty(exports, "useTranslation", { enumerable: true, get: function () { return common_1.useTranslation; } });
Object.defineProperty(exports, "useEventTracking", { enumerable: true, get: function () { return common_1.useEventTracking; } });
var core_kit_1 = require("@xkit-yx/core-kit");
Object.defineProperty(exports, "NimKitCoreTypes", { enumerable: true, get: function () { return core_kit_1.NimKitCoreTypes; } });
Object.defineProperty(exports, "NimKitCoreFactory", { enumerable: true, get: function () { return core_kit_1.NimKitCoreFactory; } });
var conversation_1 = require("./conversation");
Object.defineProperty(exports, "ConversationContainer", { enumerable: true, get: function () { return conversation_1.ConversationContainer; } });
var contact_1 = require("./contact");
Object.defineProperty(exports, "ContactListContainer", { enumerable: true, get: function () { return contact_1.ContactListContainer; } });
Object.defineProperty(exports, "BlackListContainer", { enumerable: true, get: function () { return contact_1.BlackListContainer; } });
Object.defineProperty(exports, "FriendListContainer", { enumerable: true, get: function () { return contact_1.FriendListContainer; } });
Object.defineProperty(exports, "GroupListContainer", { enumerable: true, get: function () { return contact_1.GroupListContainer; } });
Object.defineProperty(exports, "ContactInfoContainer", { enumerable: true, get: function () { return contact_1.ContactInfoContainer; } });
var chat_1 = require("./chat");
Object.defineProperty(exports, "ChatContainer", { enumerable: true, get: function () { return chat_1.ChatContainer; } });
Object.defineProperty(exports, "ChatMessageItem", { enumerable: true, get: function () { return chat_1.ChatMessageItem; } });
var search_1 = require("./search");
Object.defineProperty(exports, "AddContainer", { enumerable: true, get: function () { return search_1.AddContainer; } });
Object.defineProperty(exports, "SearchContainer", { enumerable: true, get: function () { return search_1.SearchContainer; } });
var im_store_1 = __importDefault(require("@xkit-yx/im-store"));
exports.RootStore = im_store_1.default;
var IMUIKit = /** @class */ (function () {
    function IMUIKit(providerProps) {
        this.providerProps = providerProps;
        this.context = window.__xkit_store__;
    }
    IMUIKit.prototype.render = function (item, props, view) {
        react_dom_1.default.render(react_1.default.createElement(common_1.Provider, Object.assign({}, this.providerProps), 
        // @ts-ignore
        react_1.default.createElement(item, Object.assign({}, props))), view);
    };
    IMUIKit.prototype.unmount = function (view) {
        react_dom_1.default.unmountComponentAtNode(view);
    };
    IMUIKit.prototype.getStateContext = function () {
        return this.context;
    };
    IMUIKit.prototype.destroy = function () {
        var _a, _b;
        (_a = this.context) === null || _a === void 0 ? void 0 : _a.store.destroy();
        (_b = this.context) === null || _b === void 0 ? void 0 : _b.nim.destroy();
        var NIM = (0, core_kit_1.NimKitCoreFactory)(this.providerProps.sdkVersion || 1);
        // @ts-ignore
        im_store_1.default.ins = void 0;
        //@ts-ignore
        NIM.ins = void 0;
    };
    return IMUIKit;
}());
exports.IMUIKit = IMUIKit;
