import React from 'react';
import { Utils, CrudeAvatar, SearchInput, CommonIcon, ComplexAvatarUI, ComplexAvatarContainer, MyAvatarContainer, Context, Provider, ProviderProps, ContextProps, UserCard, MyUserCard, GroupAvatarSelect, urls, FriendSelectContainer, Welcome, ReadPercent, ParseSession, useStateContext, useTranslation, useEventTracking, UseEventTrackingProps } from './common';
import { NimKitCoreTypes, NimKitCoreFactory } from '@xkit-yx/core-kit';
import { ConversationContainer } from './conversation';
import { ContactListContainer, BlackListContainer, FriendListContainer, GroupListContainer, ContactInfoContainer } from './contact';
import { ChatContainer, ChatMessageItem } from './chat';
import { AddContainer, SearchContainer } from './search';
import RootStore from '@xkit-yx/im-store';
import { NIMInitializeOptions } from 'nim-web-sdk-ng/dist/NIM_BROWSER_SDK/NIMInterface';
export declare class IMUIKit {
    private providerProps;
    context: {
        nim: NimKitCoreTypes.INimKitCore;
        store: RootStore;
        initOptions: NIMInitializeOptions;
    } | void;
    constructor(providerProps: Omit<ProviderProps, 'children'>);
    render<T extends typeof ComplexAvatarContainer | typeof MyAvatarContainer | typeof FriendSelectContainer | typeof ConversationContainer | typeof ContactListContainer | typeof BlackListContainer | typeof FriendListContainer | typeof GroupListContainer | typeof ContactInfoContainer | typeof ChatContainer | typeof AddContainer | typeof SearchContainer>(item: T, props: React.ComponentProps<T> | null, view: HTMLElement): void;
    unmount(view: HTMLElement): void;
    getStateContext(): {
        nim: NimKitCoreTypes.INimKitCore;
        store: RootStore;
        initOptions: NIMInitializeOptions;
    } | void;
    destroy(): void;
}
export { Utils, CrudeAvatar, SearchInput, CommonIcon, ComplexAvatarUI, ComplexAvatarContainer, MyAvatarContainer, Context, RootStore, Provider, UserCard, MyUserCard, GroupAvatarSelect, urls, FriendSelectContainer, Welcome, ReadPercent, ParseSession, useStateContext, useTranslation, useEventTracking, NimKitCoreTypes, NimKitCoreFactory, ConversationContainer, ContactListContainer, BlackListContainer, FriendListContainer, GroupListContainer, ContactInfoContainer, ChatContainer, ChatMessageItem, AddContainer, SearchContainer, };
export type { ProviderProps, ContextProps, UseEventTrackingProps };
