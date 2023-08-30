import { FC } from 'react';
import { GroupSettingType } from '../../types';
import { Team, TeamMember } from 'nim-web-sdk-ng/dist/NIM_BROWSER_SDK/TeamServiceInterface';
import { UpdateMyMemberInfoOptions } from 'nim-web-sdk-ng/dist/NIM_BROWSER_SDK/TeamServiceInterface';
import { GroupItemProps } from './GroupItem';
export interface HistoryStack {
    path: GroupSettingType;
    title: string;
}
export interface ChatTeamSettingProps {
    members: TeamMember[];
    team: Team;
    myAccount: string;
    isGroupOwner: boolean;
    isGroupManager: boolean;
    navHistoryStack: HistoryStack[];
    onDismissTeam: () => void;
    onLeaveTeam: () => void;
    onAddMembersClick: () => void;
    onTransferTeamClick: () => void;
    onRemoveTeamMemberClick: (member: TeamMember) => void;
    onUpdateTeamInfo: (team: Partial<Team>) => void;
    onUpdateMyMemberInfo: (params: UpdateMyMemberInfoOptions) => void;
    onTeamMuteChange: (mute: boolean) => void;
    afterSendMsgClick?: () => void;
    setNavHistoryStack: (stack: HistoryStack[]) => void;
    renderTeamMemberItem?: (params: GroupItemProps) => JSX.Element | null | undefined;
    prefix?: string;
    commonPrefix?: string;
}
declare const ChatTeamSetting: FC<ChatTeamSettingProps>;
export default ChatTeamSetting;
