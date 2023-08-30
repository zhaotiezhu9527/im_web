import React from 'react';
import { Team, TeamMember } from 'nim-web-sdk-ng/dist/NIM_BROWSER_SDK/TeamServiceInterface';
export interface GroupPowerProps {
    onUpdateTeamInfo: (team: Partial<Team>) => void;
    onTeamMuteChange: (mute: boolean) => void;
    team: Team;
    managers: TeamMember[];
    isGroupOwner: boolean;
    afterSendMsgClick?: () => void;
    prefix?: string;
    commonPrefix?: string;
}
declare const GroupPower: React.FC<GroupPowerProps>;
export default GroupPower;
