import { FC } from 'react';
import { NimKitCoreTypes } from '@xkit-yx/core-kit';
export interface FriendSelectItemProps extends NimKitCoreTypes.IFriendInfo {
    isSelected?: boolean;
    onSelect?: (account: string, selected: boolean) => void;
    canSelect: boolean;
    prefix?: string;
}
export declare const FriendSelectItem: FC<FriendSelectItemProps>;
