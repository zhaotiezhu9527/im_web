import { FC } from 'react';
import { UserNameCard } from 'nim-web-sdk-ng/dist/NIM_BROWSER_SDK/UserServiceInterface';
export interface MyUserCardProps extends Omit<UserNameCard, 'createTime' | 'updateTime'> {
    visible: boolean;
    onSave?: (params: Pick<UserNameCard, 'avatar' | 'email' | 'gender' | 'nick' | 'tel' | 'signature'> & {
        avatarFile?: File;
    }) => void;
    onCancel?: () => void;
    prefix?: string;
}
export declare const MyUserCard: FC<MyUserCardProps>;
