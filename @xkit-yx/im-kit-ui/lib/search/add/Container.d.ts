import React from 'react';
export type PanelScene = 'addFriend' | 'joinTeam' | 'createTeam';
export interface AddContainerProps {
    /**
     点击去聊天回调，id 为 account 或者 teamId
     */
    onClickChat?: (id: string) => void;
    /**
     样式前缀
     */
    prefix?: string;
    /**
     公共样式前缀
     */
    commonPrefix?: string;
}
export declare const AddContainer: React.FC<AddContainerProps>;
