import React from 'react';
export interface AddFriendModalProps {
    visible: boolean;
    onCancel: () => void;
    onChat: (account: string) => void;
    prefix?: string;
    commonPrefix?: string;
}
declare const AddFriendModal: React.FC<AddFriendModalProps>;
export default AddFriendModal;
