import React from 'react';
import { IMMessage, TMsgScene } from 'nim-web-sdk-ng/dist/NIM_BROWSER_SDK/MsgServiceInterface';
export interface ChatForwardModalProps {
    msg: IMMessage;
    visible: boolean;
    onSend: () => void;
    onCancel: () => void;
    prefix?: string;
    commonPrefix?: string;
}
export interface ChatForwardModalItemProps {
    scene: TMsgScene;
    to: string;
}
declare const ChatForwardModal: React.FC<ChatForwardModalProps>;
export default ChatForwardModal;
