import React from 'react';
interface ChatAddMemebersProps {
    defaultAccounts?: string[];
    visible: boolean;
    onCancel: () => void;
    onGroupAddMembers: (selectedAccounts: string[]) => void;
    prefix?: string;
    commonPrefix?: string;
}
declare const ChatAddMemebers: React.FC<ChatAddMemebersProps>;
export default ChatAddMemebers;
