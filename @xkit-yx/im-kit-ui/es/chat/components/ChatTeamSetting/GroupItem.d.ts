import { FC } from 'react';
import { TeamMember } from 'nim-web-sdk-ng/dist/NIM_BROWSER_SDK/TeamServiceInterface';
export interface GroupItemProps {
    myMemberInfo: TeamMember;
    member: TeamMember;
    onRemoveTeamMemberClick: (member: TeamMember) => void;
    afterSendMsgClick?: () => void;
    prefix?: string;
    commonPrefix?: string;
}
export declare const GroupItem: FC<GroupItemProps>;
