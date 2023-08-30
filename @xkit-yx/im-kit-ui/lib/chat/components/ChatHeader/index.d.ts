import React from 'react';
export interface ChatHeaderProps {
    avatar: React.ReactNode;
    title: string;
    subTitle?: string;
    prefix?: string;
}
declare const ChatHeader: React.FC<ChatHeaderProps>;
export default ChatHeader;
