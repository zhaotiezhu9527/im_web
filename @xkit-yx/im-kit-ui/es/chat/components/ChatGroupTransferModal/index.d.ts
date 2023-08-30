import React from 'react';
import { TeamMember } from 'nim-web-sdk-ng/dist/NIM_BROWSER_SDK/TeamServiceInterface';
import { FriendProfile } from 'nim-web-sdk-ng/dist/NIM_BROWSER_SDK/FriendServiceInterface';
interface GroupActionModalProps {
    visible: boolean;
    members: (TeamMember & Partial<FriendProfile>)[];
    onOk: () => void;
    onCancel: () => void;
    commonPrefix?: string;
    teamId: string;
}
declare const GroupTransferModal: React.FC<GroupActionModalProps>;
export default GroupTransferModal;
