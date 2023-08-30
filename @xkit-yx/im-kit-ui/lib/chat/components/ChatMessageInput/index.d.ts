import React from 'react';
import { IMMessage } from 'nim-web-sdk-ng/dist/NIM_BROWSER_SDK/MsgServiceInterface';
import { Action } from '../../Container';
import { TMsgScene } from 'nim-web-sdk-ng/dist/NIM_BROWSER_SDK/MsgServiceInterface';
import { TeamMember } from 'nim-web-sdk-ng/dist/NIM_BROWSER_SDK/TeamServiceInterface';
import { MentionedMember } from './ChatMentionMemberList';
export interface ChatMessageInputProps {
    prefix?: string;
    commonPrefix?: string;
    placeholder?: string;
    replyMsg?: IMMessage;
    mentionMembers?: TeamMember[];
    scene: TMsgScene;
    to: string;
    actions?: Action[];
    mute?: boolean;
    allowAtAll?: boolean;
    inputValue?: string;
    uploadImageLoading?: boolean;
    uploadFileLoading?: boolean;
    setInputValue: (value: string) => void;
    onSendText: (value: string, ext?: Record<string, unknown>) => void;
    onSendFile: (file: File) => void;
    onSendImg: (file: File) => void;
    onRemoveReplyMsg?: () => void;
}
export interface ChatMessageInputRef {
    onAtMemberSelectHandler: (member: MentionedMember) => void;
    setSelectedAtMembers: React.Dispatch<React.SetStateAction<MentionedMember[]>>;
    input?: HTMLTextAreaElement;
}
declare const ChatMessageInput: React.ForwardRefExoticComponent<ChatMessageInputProps & {
    children?: React.ReactNode;
} & React.RefAttributes<ChatMessageInputRef>>;
export default ChatMessageInput;
