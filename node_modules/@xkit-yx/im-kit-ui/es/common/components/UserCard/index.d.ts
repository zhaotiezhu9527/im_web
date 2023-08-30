import { FC } from 'react';
import { UserNameCard } from 'nim-web-sdk-ng/dist/NIM_BROWSER_SDK/UserServiceInterface';
import { Relation } from '@xkit-yx/im-store';
export interface UserCardProps extends Omit<UserNameCard, 'createTime' | 'updateTime'> {
    alias?: string;
    visible: boolean;
    relation: Relation;
    onChangeAlias?: (alias: string) => void;
    onSendMsglick?: () => void;
    onAddFriendClick?: () => void;
    onDeleteFriendClick?: () => void;
    onBlockFriendClick?: () => void;
    onRemoveBlockFriendClick?: () => void;
    onCancel?: () => void;
    prefix?: string;
}
export declare const UserCard: FC<UserCardProps>;
