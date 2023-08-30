import React from 'react';
import { IMMessage } from 'nim-web-sdk-ng/dist/NIM_BROWSER_SDK/MsgServiceInterface';
export interface IParseSessionProps {
    prefix?: string;
    msg: IMMessage;
    replyMsg?: IMMessage;
}
export declare const pauseAllAudio: () => HTMLAudioElement;
export declare const pauseOtherVideo: (idClient: string) => void;
export declare const pauseAllVideo: () => void;
export declare const ParseSession: React.FC<IParseSessionProps>;
export declare const getMsgContentTipByType: (msg: Pick<IMMessage, 'type' | 'body'>, t: any) => string;
