import { FC } from 'react';
import { Team } from 'nim-web-sdk-ng/dist/NIM_BROWSER_SDK/TeamServiceInterface';
export interface GroupItemProps extends Team {
    onItemClick?: (team: Team) => void;
    prefix?: string;
}
export declare const GroupItem: FC<GroupItemProps>;
