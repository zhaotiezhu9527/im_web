import { FC } from 'react';
export interface BlackListProps {
    list: string[];
    loading?: boolean;
    onItemClick?: (account: string) => void;
    afterSendMsgClick?: () => void;
    renderBlackListHeader?: () => JSX.Element;
    renderBlackListEmpty?: () => JSX.Element;
    prefix?: string;
    commonPrefix?: string;
}
export declare const BlackList: FC<BlackListProps>;
