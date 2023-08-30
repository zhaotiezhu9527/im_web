import { FC } from 'react';
import { NimKitCoreTypes } from '@xkit-yx/core-kit';
export interface P2PItemProps extends NimKitCoreTypes.P2PSession {
    isSelected: boolean;
    onStickTopChange: (isTop: boolean) => void;
    onDeleteClick: () => void;
    onMuteChange: (mute: boolean) => void;
    onItemClick: () => void;
    avatarRenderer?: JSX.Element | null;
    sessionNameRenderer?: JSX.Element | null;
    sessionMsgRenderer?: JSX.Element | null;
    msgReceiptTime?: number;
    prefix?: string;
    commonPrefix?: string;
}
export declare const P2PItem: FC<P2PItemProps>;
