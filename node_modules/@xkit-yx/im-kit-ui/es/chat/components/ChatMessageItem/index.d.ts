import React from 'react';
import { IMMessage } from 'nim-web-sdk-ng/dist/NIM_BROWSER_SDK/MsgServiceInterface';
import { MsgOperMenuItem } from '../../Container';
export type MenuItemKey = 'recall' | 'delete' | 'reply' | 'forward' | string;
export type AvatarMenuItem = 'mention';
export interface MenuItem {
    show?: 1 | 0;
    label?: string;
    key: MenuItemKey;
    icon?: React.ReactNode;
}
export interface MessageItemProps {
    myAccount: string;
    msg: IMMessage;
    replyMsg?: IMMessage;
    normalStatusRenderer?: React.ReactNode;
    msgOperMenu?: MsgOperMenuItem[];
    onResend: (msg: IMMessage) => void;
    onReeditClick: (msg: IMMessage) => void;
    onMessageAction: (key: MenuItemKey, msg: IMMessage) => void;
    onMessageAvatarAction?: (key: AvatarMenuItem, msg: IMMessage) => void;
    renderMessageAvatar?: (msg: IMMessage) => JSX.Element | null | undefined;
    renderMessageName?: (msg: IMMessage) => JSX.Element | null | undefined;
    renderMessageOuterContent?: (msg: IMMessage) => JSX.Element | null | undefined;
    renderMessageInnerContent?: (msg: IMMessage) => JSX.Element | null | undefined;
    prefix?: string;
    commonPrefix?: string;
}
export declare const ChatMessageItem: React.FC<MessageItemProps>;
export default ChatMessageItem;
