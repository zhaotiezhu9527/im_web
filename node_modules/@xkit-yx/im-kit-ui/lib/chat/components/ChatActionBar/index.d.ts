import React from 'react';
import { ChatAction } from '../../types';
export interface SettingActionItemProps {
    action: ChatAction;
    visible?: boolean;
    render?: () => JSX.Element;
}
export interface ChatActionBarProps {
    prefix?: string;
    action?: ChatAction;
    settingActions?: SettingActionItemProps[];
    onActionClick: (action: ChatAction) => void;
}
declare const ChatActionBar: React.FC<ChatActionBarProps>;
export default ChatActionBar;
