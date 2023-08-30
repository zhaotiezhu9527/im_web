import React from 'react';
export interface ChatTeamMemberModalProps {
    visible: boolean;
    onCancel: () => void;
    teamId: string;
    commonPrefix?: string;
}
declare const ChatTeamMemberModal: React.FC<ChatTeamMemberModalProps>;
export default ChatTeamMemberModal;
