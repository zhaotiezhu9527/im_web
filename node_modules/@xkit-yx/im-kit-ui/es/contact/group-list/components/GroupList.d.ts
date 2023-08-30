import { FC } from 'react';
import { Team } from 'nim-web-sdk-ng/dist/NIM_BROWSER_SDK/TeamServiceInterface';
export interface GroupListProps {
    list: Team[];
    loading?: boolean;
    onItemClick?: (team: Team) => void;
    renderGroupListHeader?: () => JSX.Element;
    renderGroupListEmpty?: () => JSX.Element;
    prefix?: string;
}
export declare const GroupList: FC<GroupListProps>;
