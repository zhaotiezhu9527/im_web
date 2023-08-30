import React from 'react';
import ReactDOM from 'react-dom';
import { Utils, CrudeAvatar, SearchInput, CommonIcon, ComplexAvatarUI, ComplexAvatarContainer, MyAvatarContainer, Context, Provider, UserCard, MyUserCard, GroupAvatarSelect, urls, FriendSelectContainer, Welcome, ReadPercent, ParseSession, useStateContext, useTranslation, useEventTracking, } from './common';
import { NimKitCoreTypes, NimKitCoreFactory } from '@xkit-yx/core-kit';
import { ConversationContainer } from './conversation';
import { ContactListContainer, BlackListContainer, FriendListContainer, GroupListContainer, ContactInfoContainer, } from './contact';
import { ChatContainer, ChatMessageItem } from './chat';
import { AddContainer, SearchContainer } from './search';
import RootStore from '@xkit-yx/im-store';
var IMUIKit = /** @class */ (function () {
    function IMUIKit(providerProps) {
        this.providerProps = providerProps;
        this.context = window.__xkit_store__;
    }
    IMUIKit.prototype.render = function (item, props, view) {
        ReactDOM.render(React.createElement(Provider, Object.assign({}, this.providerProps), 
        // @ts-ignore
        React.createElement(item, Object.assign({}, props))), view);
    };
    IMUIKit.prototype.unmount = function (view) {
        ReactDOM.unmountComponentAtNode(view);
    };
    IMUIKit.prototype.getStateContext = function () {
        return this.context;
    };
    IMUIKit.prototype.destroy = function () {
        var _a, _b;
        (_a = this.context) === null || _a === void 0 ? void 0 : _a.store.destroy();
        (_b = this.context) === null || _b === void 0 ? void 0 : _b.nim.destroy();
        var NIM = NimKitCoreFactory(this.providerProps.sdkVersion || 1);
        // @ts-ignore
        RootStore.ins = void 0;
        //@ts-ignore
        NIM.ins = void 0;
    };
    return IMUIKit;
}());
export { IMUIKit };
export { Utils, CrudeAvatar, SearchInput, CommonIcon, ComplexAvatarUI, ComplexAvatarContainer, MyAvatarContainer, Context, RootStore, Provider, UserCard, MyUserCard, GroupAvatarSelect, urls, FriendSelectContainer, Welcome, ReadPercent, ParseSession, useStateContext, useTranslation, useEventTracking, NimKitCoreTypes, NimKitCoreFactory, ConversationContainer, ContactListContainer, BlackListContainer, FriendListContainer, GroupListContainer, ContactInfoContainer, ChatContainer, ChatMessageItem, AddContainer, SearchContainer, };
