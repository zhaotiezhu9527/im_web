import React from 'react';
import { Team } from 'nim-web-sdk-ng/dist/NIM_BROWSER_SDK/TeamServiceInterface';
export interface ContactInfoContainerProps {
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
     好友点击事件
     */
    onFriendItemClick?: (account: string) => void;
    /**
     黑名单点击事件
     */
    onBlackItemClick?: (account: string) => void;
    /**
     群组点击事件
     */
    onGroupItemClick?: (team: Team) => void;
    /**
      自定义渲染好友列表为空时内容
      */
    renderFriendListEmpty?: () => JSX.Element;
    /**
        自定义渲染好友列表头部内容
        */
    renderFriendListHeader?: () => JSX.Element;
    /**
     自定义渲染黑名单列表为空时内容
     */
    renderBlackListEmpty?: () => JSX.Element;
    /**
      自定义渲染黑名单列表头部内容
      */
    renderBlackListHeader?: () => JSX.Element;
    /**
      自定义渲染群组列表为空时内容
      */
    renderGroupListEmpty?: () => JSX.Element;
    /**
      自定义渲染群组列表头部内容
      */
    renderGroupListHeader?: () => JSX.Element;
    /**
     自定义渲染消息中心为空时内容
     */
    renderMsgListEmpty?: () => JSX.Element;
    /**
      自定义渲染消息中心头部内容
      */
    renderMsgListHeader?: () => JSX.Element;
    /**
     自定义渲染未选中任何列表时的内容
     */
    renderEmpty?: () => JSX.Element;
    /**
      样式前缀
      */
    prefix?: string;
    /**
      公共样式前缀
      */
    commonPrefix?: string;
}
export declare const ContactInfoContainer: React.FC<ContactInfoContainerProps>;
