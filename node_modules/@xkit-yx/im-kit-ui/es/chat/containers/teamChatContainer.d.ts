import React from 'react';
import { RenderTeamCustomMessageOptions } from '../components/ChatTeamMessageList';
import { Action, ChatSettingActionItem, MsgOperMenuItem } from '../Container';
import { Session } from 'nim-web-sdk-ng/dist/NIM_BROWSER_SDK/SessionServiceInterface';
import { IMMessage, TMsgScene } from 'nim-web-sdk-ng/dist/NIM_BROWSER_SDK/MsgServiceInterface';
import { GroupItemProps } from '../components/ChatTeamSetting/GroupItem';
export interface TeamChatContainerProps {
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
    afterTransferTeam?: (teamId: string) => Promise<void>;
    renderTeamCustomMessage?: (options: RenderTeamCustomMessageOptions) => JSX.Element | null | undefined;
    renderHeader?: (session: Session) => JSX.Element;
    renderTeamInputPlaceHolder?: (params: {
        session: Session;
        mute: boolean;
    }) => string;
    renderTeamMemberItem?: (params: GroupItemProps) => JSX.Element | null | undefined;
    renderMessageAvatar?: (msg: IMMessage) => JSX.Element | null | undefined;
    renderMessageName?: (msg: IMMessage) => JSX.Element | null | undefined;
    renderMessageOuterContent?: (msg: IMMessage) => JSX.Element | null | undefined;
    renderMessageInnerContent?: (msg: IMMessage) => JSX.Element | null | undefined;
    prefix?: string;
    commonPrefix?: string;
}
declare const TeamChatContainer: React.FC<TeamChatContainerProps>;
export default TeamChatContainer;
