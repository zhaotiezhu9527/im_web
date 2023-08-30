import React from 'react';
import { RenderP2pCustomMessageOptions } from '../components/ChatP2pMessageList';
import { Action, ChatSettingActionItem, MsgOperMenuItem } from '../Container';
import { Session } from 'nim-web-sdk-ng/dist/NIM_BROWSER_SDK/SessionServiceInterface';
import { IMMessage, TMsgScene } from 'nim-web-sdk-ng/dist/NIM_BROWSER_SDK/MsgServiceInterface';
export interface P2pChatContainerProps {
    scene: TMsgScene;
    to: string;
    settingActions?: ChatSettingActionItem[];
    actions?: Action[];
    msgOperMenu?: MsgOperMenuItem[];
    onSendText?: (data: {
        value: string;
        scene: TMsgScene;
        to: string;
    }) => Promise<void>;
    renderP2pCustomMessage?: (options: RenderP2pCustomMessageOptions) => JSX.Element | null | undefined;
    renderHeader?: (session: Session) => JSX.Element;
    renderP2pInputPlaceHolder?: (session: Session) => string;
    renderMessageAvatar?: (msg: IMMessage) => JSX.Element | null | undefined;
    renderMessageName?: (msg: IMMessage) => JSX.Element | null | undefined;
    renderMessageOuterContent?: (msg: IMMessage) => JSX.Element | null | undefined;
    renderMessageInnerContent?: (msg: IMMessage) => JSX.Element | null | undefined;
    prefix?: string;
    commonPrefix?: string;
}
declare const P2pChatContainer: React.FC<P2pChatContainerProps>;
export default P2pChatContainer;
