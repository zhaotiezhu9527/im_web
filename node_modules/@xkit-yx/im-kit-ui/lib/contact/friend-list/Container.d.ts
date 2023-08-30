import { FC } from 'react';
export interface FriendListContainerProps {
    /**
     好友点击事件
     */
    onItemClick?: (account: string) => void;
    /**
     点击发送消息后的事件
     */
    afterSendMsgClick?: () => void;
    /**
     自定义渲染好友列表为空时内容
     */
    renderFriendListEmpty?: () => JSX.Element;
    /**
     自定义渲染好友列表头部内容
     */
    renderFriendListHeader?: () => JSX.Element;
    /**
     样式前缀
     */
    prefix?: string;
    /**
     公共样式前缀
     */
    commonPrefix?: string;
}
export declare const FriendListContainer: FC<FriendListContainerProps>;
