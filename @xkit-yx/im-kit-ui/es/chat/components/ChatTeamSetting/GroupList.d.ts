import { FC } from 'react';
import { GroupItemProps } from './GroupItem';
import { TeamMember } from 'nim-web-sdk-ng/dist/NIM_BROWSER_SDK/TeamServiceInterface';
export interface GroupListProps {
    myMemberInfo: TeamMember;
    members: TeamMember[];
    onRemoveTeamMemberClick: (member: TeamMember) => void;
    afterSendMsgClick?: () => void;
    renderTeamMemberItem?: (params: GroupItemProps) => JSX.Element | null | undefined;
    prefix?: string;
    commonPrefix?: string;
}
declare const GroupList: FC<GroupListProps>;
export default GroupList;
