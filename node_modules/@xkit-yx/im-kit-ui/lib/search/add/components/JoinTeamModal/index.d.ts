import React from 'react';
export interface JoinTeamModalProps {
    visible: boolean;
    onCancel: () => void;
    onChat: (teamId: string) => void;
    prefix?: string;
    commonPrefix?: string;
}
declare const JoinTeamModal: React.FC<JoinTeamModalProps>;
export default JoinTeamModal;
