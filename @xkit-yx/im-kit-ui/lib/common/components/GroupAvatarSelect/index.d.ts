import { FC } from 'react';
import { CrudeAvatarProps } from '../CrudeAvatar';
export interface GroupAvatarSelectProps extends CrudeAvatarProps {
    onSelect: (url: string) => void;
    prefix?: string;
}
export declare const urls: string[];
export declare const GroupAvatarSelect: FC<GroupAvatarSelectProps>;
