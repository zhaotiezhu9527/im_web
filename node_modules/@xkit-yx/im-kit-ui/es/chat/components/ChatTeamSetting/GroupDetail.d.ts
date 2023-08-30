import { FC } from 'react';
import { Team } from 'nim-web-sdk-ng/dist/NIM_BROWSER_SDK/TeamServiceInterface';
export interface GroupDetailmProps {
    team: Team;
    hasPower: boolean;
    onUpdateTeamInfo: (team: Partial<Team>) => void;
    prefix?: string;
    commonPrefix?: string;
}
declare const GroupDetail: FC<GroupDetailmProps>;
export default GroupDetail;
