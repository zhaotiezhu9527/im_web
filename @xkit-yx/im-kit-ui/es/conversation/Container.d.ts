import { FC } from 'react';
import { ConversationCallbackProps } from './components/ConversationList';
import { NimKitCoreTypes } from '@xkit-yx/core-kit';
export interface ConversationContainerProps {
    /**
     样式前缀
     */
    prefix?: string;
    /**
     公共样式前缀
     */
    commonPrefix?: string;
    /**
     会话点击事件
     */
    onSessionItemClick?: (id: string) => void;
    /**
     会话删除事件
     */
    onSessionItemDeleteClick?: (id: string) => void;
    /**
     会话置顶状态改变事件
     */
    onSessionItemStickTopChange?: (id: string, isTop: boolean) => void;
    /**
     会话免打扰状态改变事件
     */
    onSessionItemMuteChange?: (id: string, mute: boolean) => void;
    /**
     自定义渲染会话列表为空时内容
     */
    renderSessionListEmpty?: () => JSX.Element | null | undefined;
    /**
     自定义渲染会话类型是单聊的内容
     */
    renderCustomP2pSession?: (options: {
        session: NimKitCoreTypes.ISession;
    } & ConversationCallbackProps) => JSX.Element | null | undefined;
    /**
     自定义渲染会话类型是群聊的内容
     */
    renderCustomTeamSession?: (options: {
        session: NimKitCoreTypes.ISession;
    } & Omit<ConversationCallbackProps, 'onSessionItemMuteChange'>) => JSX.Element | null | undefined;
    /**
     自定义会话名称。如果 p2p 会话定义了 renderCustomP2pSession 或群组会话定义了 renderCustomTeamSession 则不生效。
     */
    renderSessionName?: (options: {
        session: NimKitCoreTypes.ISession;
    }) => JSX.Element | null | undefined;
    /**
     自定义会话消息。如果 p2p 会话定义了 renderCustomP2pSession 或群组会话定义了 renderCustomTeamSession 则不生效。
     */
    renderSessionMsg?: (options: {
        session: NimKitCoreTypes.ISession;
    }) => JSX.Element | null | undefined;
    /**
     自定义 p2p 会话头像。如果定义了 renderCustomP2pSession 则不生效。
     */
    renderP2pSessionAvatar?: (options: {
        session: NimKitCoreTypes.ISession;
    }) => JSX.Element | null | undefined;
    /**
     自定义群组会话头像。如果定义了 renderCustomTeamSession 则不生效。
     */
    renderTeamSessionAvatar?: (options: {
        session: NimKitCoreTypes.ISession;
    }) => JSX.Element | null | undefined;
}
export declare const ConversationContainer: FC<ConversationContainerProps>;
