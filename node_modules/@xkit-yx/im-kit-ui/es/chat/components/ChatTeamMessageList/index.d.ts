import React from 'react';
import { IMMessage } from 'nim-web-sdk-ng/dist/NIM_BROWSER_SDK/MsgServiceInterface';
import { TeamMember } from 'nim-web-sdk-ng/dist/NIM_BROWSER_SDK/TeamServiceInterface';
import { MessageItemProps } from '../ChatMessageItem';
import { MsgOperMenuItem } from '../../Container';
export interface RenderTeamCustomMessageOptions extends Omit<MessageItemProps, 'myAccount'> {
    members: TeamMember[];
}
export interface ChatTeamMessageListProps extends Omit<MessageItemProps, 'msg' | 'alias'> {
    msgs: IMMessage[];
    msgOperMenu?: MsgOperMenuItem[];
    replyMsgsMap: Record<string, IMMessage>;
    members: TeamMember[];
    renderTeamCustomMessage?: (options: RenderTeamCustomMessageOptions) => JSX.Element | null | undefined;
    loadingMore: boolean;
    noMore: boolean;
    receiveMsgBtnVisible?: boolean;
    strangerNotiVisible?: boolean;
    strangerNotiText?: string;
    onReceiveMsgBtnClick?: () => void;
    onScroll?: (e: React.UIEvent<HTMLDivElement, UIEvent>) => void;
}
declare const ChatTeamMessageList: React.ForwardRefExoticComponent<ChatTeamMessageListProps & React.RefAttributes<HTMLDivElement>>;
export default ChatTeamMessageList;
