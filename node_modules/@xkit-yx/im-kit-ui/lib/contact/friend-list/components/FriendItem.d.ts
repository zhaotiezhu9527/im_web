import { FC } from 'react';
export interface FriendItemProps {
    account: string;
    onItemClick?: (account: string) => void;
    afterSendMsgClick?: () => void;
    prefix?: string;
    commonPrefix?: string;
}
export declare const FriendItem: FC<FriendItemProps>;
