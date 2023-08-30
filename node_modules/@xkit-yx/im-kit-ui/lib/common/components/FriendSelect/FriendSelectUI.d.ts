import { FC } from 'react';
import { NimKitCoreTypes } from '@xkit-yx/core-kit';
export interface FriendSelectUIProps {
    list: NimKitCoreTypes.IFriendInfo[];
    selectedAccounts: string[];
    onSelect: (selected: NimKitCoreTypes.IFriendInfo[]) => void;
    loading?: boolean;
    max?: number;
    prefix?: string;
}
export declare const FriendSelectUI: FC<FriendSelectUIProps>;
