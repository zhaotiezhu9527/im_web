import React from 'react';
export interface ChatP2pSettingProps {
    onCreateGroupClick: () => void;
    account: string;
    alias?: string;
    nick?: string;
    prefix?: string;
    commonPrefix?: string;
}
declare const ChatP2pSetting: React.FC<ChatP2pSettingProps>;
export default ChatP2pSetting;
