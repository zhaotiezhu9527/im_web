import { FC } from 'react';
import { ComplexAvatarProps } from '../ComplexAvatar/ComplexAvatarUI';
import { UserNameCard } from 'nim-web-sdk-ng/dist/NIM_BROWSER_SDK/UserServiceInterface';
export type MyAvatarContainerProps = Pick<ComplexAvatarProps, 'count' | 'dot' | 'size' | 'icon'> & {
    canClick?: boolean;
    onCancel?: () => void;
    afterSave?: (res: UserNameCard) => void;
    prefix?: string;
};
export declare const MyAvatarContainer: FC<MyAvatarContainerProps>;
