import React from 'react';
import { IMMessage } from 'nim-web-sdk-ng/dist/NIM_BROWSER_SDK/MsgServiceInterface';
import { MessageItemProps } from '../ChatMessageItem';
import { NimKitCoreTypes } from '@xkit-yx/core-kit';
import { MsgOperMenuItem } from '../../Container';
export interface RenderP2pCustomMessageOptions extends Omit<MessageItemProps, 'myAccount'> {
    member: NimKitCoreTypes.IFriendInfo;
}
export interface ChatP2pMessageListProps extends Omit<MessageItemProps, 'msg' | 'alias'> {
    msgs: IMMessage[];
    replyMsgsMap: Record<string, IMMessage>;
    member: NimKitCoreTypes.IFriendInfo;
    renderP2pCustomMessage?: (options: RenderP2pCustomMessageOptions) => JSX.Element | null | undefined;
    loadingMore: boolean;
    noMore: boolean;
    receiveMsgBtnVisible?: boolean;
    msgOperMenu?: MsgOperMenuItem[];
    msgReceiptTime?: number;
    onReceiveMsgBtnClick?: () => void;
    onScroll?: (e: React.UIEvent<HTMLDivElement, UIEvent>) => void;
}
declare const ChatP2pMessageList: React.ForwardRefExoticComponent<ChatP2pMessageListProps & React.RefAttributes<HTMLDivElement>>;
export default ChatP2pMessageList;
