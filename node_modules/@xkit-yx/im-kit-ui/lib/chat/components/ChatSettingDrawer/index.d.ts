import React, { ReactNode } from 'react';
export interface ChatSettingDrawerProps {
    title: ReactNode;
    visible: boolean;
    onClose: () => void;
    drawerContainer: any;
    prefix?: string;
}
declare const ChatSettingDrawer: React.FC<ChatSettingDrawerProps>;
export default ChatSettingDrawer;
