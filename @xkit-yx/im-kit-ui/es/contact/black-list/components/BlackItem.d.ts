import { FC } from 'react';
export interface BlackItemProps {
    account: string;
    onItemClick?: (account: string) => void;
    afterSendMsgClick?: () => void;
    prefix?: string;
    commonPrefix?: string;
}
export declare const BlackItem: FC<BlackItemProps>;
