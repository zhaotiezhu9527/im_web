import { FC } from 'react';
import { FriendSelectUIProps } from './FriendSelectUI';
export type FriendSelectContainerProps = Omit<FriendSelectUIProps, 'list'>;
export declare const FriendSelectContainer: FC<FriendSelectContainerProps>;
