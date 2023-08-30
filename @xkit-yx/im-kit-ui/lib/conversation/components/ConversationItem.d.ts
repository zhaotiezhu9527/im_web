import { FC, ReactElement } from 'react';
import { IMMessage } from 'nim-web-sdk-ng/dist/NIM_BROWSER_SDK/MsgServiceInterface';
export interface ConversationItemProps {
    isTop: boolean;
    isMute: boolean;
    sessionName: string;
    menuRenderer: ReactElement;
    avatarRenderer: ReactElement;
    time: number;
    lastMsg: IMMessage | null | undefined;
    isSelected: boolean;
    onItemClick: () => void;
    renderSessionMsgIsRead?: () => void;
    sessionNameRenderer?: JSX.Element | null;
    sessionMsgRenderer?: JSX.Element | null;
    beMentioned?: boolean;
    prefix?: string;
    commonPrefix?: string;
}
export declare const ConversationItem: FC<ConversationItemProps>;
