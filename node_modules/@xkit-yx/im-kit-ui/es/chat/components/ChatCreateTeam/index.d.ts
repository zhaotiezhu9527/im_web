import React from 'react';
export interface GroupCreateFormParams {
    name: string;
}
export interface GroupCreateProps {
    defaultAccounts?: string[];
    visible: boolean;
    onCancel: () => void;
    onGroupCreate: (params: GroupCreateFormParams & {
        selectedAccounts: string[];
        avatar: string;
    }) => void;
    prefix?: string;
    commonPrefix?: string;
}
declare const GroupCreate: React.FC<GroupCreateProps>;
export default GroupCreate;
