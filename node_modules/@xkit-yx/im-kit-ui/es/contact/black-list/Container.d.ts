import { FC } from 'react';
export interface BlackListContainerProps {
    /**
     黑名单点击事件
     */
    onItemClick?: (account: string) => void;
    /**
     点击发送消息后的事件
     */
    afterSendMsgClick?: () => void;
    /**
     自定义渲染黑名单列表为空时内容
     */
    renderBlackListEmpty?: () => JSX.Element;
    /**
     自定义渲染黑名单列表头部内容
     */
    renderBlackListHeader?: () => JSX.Element;
    /**
     样式前缀
     */
    prefix?: string;
    /**
     公共样式前缀
     */
    commonPrefix?: string;
}
export declare const BlackListContainer: FC<BlackListContainerProps>;
