import logDebug from 'yunxin-log-debug';
export { logDebug };
export declare const logger: import("loglevel").RootLogger;
export declare function mergeArrs<T>(oldArr: T[], newArr: Partial<T>[], key: keyof T): T[];
export declare const mergeActions: <T>(defaultActions: T[], propsActions: T[], key: keyof T) => T[];
export declare const groupByPy: <T>(arr: T[], keys: {
    firstKey: string;
    secondKey?: string;
    thirdKey?: string;
}, isLowerCase?: boolean) => {
    key: string;
    data: T[];
}[];
export declare const frequencyControl: <P extends string, R extends {
    account: string;
}>(fn: (params: P[]) => Promise<R[]>, delay: number, limit: number) => (params: P) => Promise<R>;
/**
 * 解析 sessionId，形如 scene-accid
 */
export declare const parseSessionId: (sessionId: string) => {
    scene: string;
    to: string;
};
interface IKeyMap {
    [key: string]: string;
}
export declare const handleEmojiTranslate: (t: any) => {
    EMOJI_ICON_MAP_CONFIG: IKeyMap;
    INPUT_EMOJI_SYMBOL_REG: RegExp;
};
