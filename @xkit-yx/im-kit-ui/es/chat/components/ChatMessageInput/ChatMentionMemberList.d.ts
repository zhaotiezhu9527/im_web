import React from 'react';
import { TeamMember } from 'nim-web-sdk-ng/dist/NIM_BROWSER_SDK/TeamServiceInterface';
export type MentionedMember = {
    account: string;
    appellation: string;
};
export interface ChatMentionMemberList {
    allowAtAll?: boolean;
    prefix?: string;
    commonPrefix?: string;
    mentionMembers?: TeamMember[];
    onSelect?: (member: MentionedMember) => void;
}
export declare const ChatAtMemberList: React.FC<ChatMentionMemberList>;
export default ChatAtMemberList;
