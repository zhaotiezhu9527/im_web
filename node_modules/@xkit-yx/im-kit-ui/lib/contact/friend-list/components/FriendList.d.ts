import { FC } from 'react';
import { NimKitCoreTypes } from '@xkit-yx/core-kit';
export interface FriendListProps {
    list: NimKitCoreTypes.IFriendInfo[];
    loading?: boolean;
    onItemClick?: (account: string) => void;
    afterSendMsgClick?: () => void;
    renderFriendListHeader?: () => JSX.Element;
    renderFriendListEmpty?: () => JSX.Element;
    prefix?: string;
    commonPrefix?: string;
}
export declare const FriendList: FC<FriendListProps>;
