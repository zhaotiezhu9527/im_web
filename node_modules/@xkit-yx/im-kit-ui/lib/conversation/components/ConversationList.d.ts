import React from 'react';
import { NimKitCoreTypes } from '@xkit-yx/core-kit';
export type ConversationCallbackProps = {
    onSessionItemClick: (session: NimKitCoreTypes.ISession) => void;
    onSessionItemDeleteClick: (session: NimKitCoreTypes.ISession) => void;
    onSessionItemStickTopChange: (session: NimKitCoreTypes.ISession, isTop: boolean) => void;
    onSessionItemMuteChange: (session: NimKitCoreTypes.ISession, mute: boolean) => void;
};
export type ConversationListProps = {
    sessions: NimKitCoreTypes.ISession[];
    loading?: boolean;
    selectedSession?: string;
    renderCustomTeamSession?: (options: {
        session: NimKitCoreTypes.TeamSession;
    } & Omit<ConversationCallbackProps, 'onSessionItemMuteChange'>) => JSX.Element | null | undefined;
    renderCustomP2pSession?: (options: {
        session: NimKitCoreTypes.P2PSession;
    } & ConversationCallbackProps) => JSX.Element | null | undefined;
    renderSessionListEmpty?: () => JSX.Element | null | undefined;
    renderSessionName?: (options: {
        session: NimKitCoreTypes.ISession;
    }) => JSX.Element | null | undefined;
    renderSessionMsg?: (options: {
        session: NimKitCoreTypes.ISession;
    }) => JSX.Element | null | undefined;
    renderP2pSessionAvatar?: (options: {
        session: NimKitCoreTypes.ISession;
    }) => JSX.Element | null | undefined;
    renderTeamSessionAvatar?: (options: {
        session: NimKitCoreTypes.ISession;
    }) => JSX.Element | null | undefined;
    prefix?: string;
    commonPrefix?: string;
} & ConversationCallbackProps;
export declare const ConversationList: React.FC<ConversationListProps>;
