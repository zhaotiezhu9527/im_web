import { FC } from 'react';
import { ComplexAvatarProps } from './ComplexAvatarUI';
export type ComplexAvatarContainerProps = Pick<ComplexAvatarProps, 'count' | 'dot' | 'size' | 'icon' | 'account'> & {
    canClick?: boolean;
    onCancel?: () => void;
    afterAddFriend?: (account: string) => void;
    afterDeleteFriend?: (account: string) => void;
    afterBlockFriend?: (account: string) => void;
    afterRemoveBlockFriend?: (account: string) => void;
    afterSendMsgClick?: () => void;
    prefix?: string;
};
export declare const ComplexAvatarContainer: FC<ComplexAvatarContainerProps>;
