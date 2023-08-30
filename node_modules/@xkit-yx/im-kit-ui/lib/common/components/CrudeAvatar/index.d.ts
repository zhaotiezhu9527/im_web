import React, { FC } from 'react';
import { UserNameCard } from 'nim-web-sdk-ng/dist/NIM_BROWSER_SDK/UserServiceInterface';
export interface CrudeAvatarProps extends Pick<UserNameCard, 'account' | 'avatar' | 'nick'> {
    size?: number;
    icon?: React.ReactNode;
    count?: number;
    dot?: boolean;
}
export declare const CrudeAvatar: FC<CrudeAvatarProps>;
