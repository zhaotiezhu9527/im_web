import React, { FC } from 'react';
import { UserCardProps } from '../UserCard';
import { MyUserCardProps } from '../MyUserCard';
import { CrudeAvatarProps } from '../CrudeAvatar';
export type ComplexAvatarProps = Omit<UserCardProps, 'relation' | 'onCancel'> & Omit<MyUserCardProps, 'onSave' | 'onCancel'> & CrudeAvatarProps & {
    relation: UserCardProps['relation'] | 'myself';
    onChangeAlias?: (alias: string) => void;
    onAvatarClick?: (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
    onCancel?: () => void;
    onSave?: MyUserCardProps['onSave'];
};
export declare const ComplexAvatarUI: FC<ComplexAvatarProps>;
