import { FC } from 'react';
export interface MsgListContainerProps {
    /**
     自定义渲染消息中心为空时内容
     */
    renderMsgListEmpty?: () => JSX.Element;
    /**
     自定义渲染消息中心头部内容
     */
    renderMsgListHeader?: () => JSX.Element;
    /**
     点击发送消息后的事件
     */
    afterSendMsgClick?: () => void;
    /**
     通过入群申请后的事件
     */
    afterAcceptApplyTeam?: (options: {
        teamId: string;
        from: string;
    }) => void;
    /**
     拒绝入群申请后的事件
     */
    afterRejectApplyTeam?: (options: {
        teamId: string;
        from: string;
    }) => void;
    /**
     通过入群邀请后的事件
     */
    afterAcceptTeamInvite?: (options: {
        teamId: string;
        from: string;
    }) => void;
    /**
     拒绝入群邀请后的事件
     */
    afterRejectTeamInvite?: (options: {
        teamId: string;
        from: string;
    }) => void;
    /**
     通过好友申请后的事件
     */
    afterAcceptApplyFriend?: (account: string) => void;
    /**
     拒绝好友申请后的事件
     */
    afterRejectApplyFriend?: (account: string) => void;
    /**
     样式前缀
     */
    prefix?: string;
    /**
     公共样式前缀
     */
    commonPrefix?: string;
}
export declare const MsgListContainer: FC<MsgListContainerProps>;
