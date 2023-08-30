import { FC } from 'react';
import { NimKitCoreTypes } from '@xkit-yx/core-kit';
export interface GroupItemProps extends NimKitCoreTypes.TeamSession {
    isSelected: boolean;
    onStickTopChange: (isTop: boolean) => void;
    onDeleteClick: () => void;
    onItemClick: () => void;
    beMentioned?: boolean;
    avatarRenderer?: JSX.Element | null;
    sessionNameRenderer?: JSX.Element | null;
    sessionMsgRenderer?: JSX.Element | null;
    prefix?: string;
    commonPrefix?: string;
}
export declare const GroupItem: FC<GroupItemProps>;
