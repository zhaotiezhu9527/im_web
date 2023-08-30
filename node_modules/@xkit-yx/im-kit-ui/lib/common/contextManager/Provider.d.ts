import { NIMInitializeOptions, NIMOtherOptions } from 'nim-web-sdk-ng/dist/NIM_BROWSER_SDK/NIMInterface';
import React, { FC, ReactNode } from 'react';
import RootStore from '@xkit-yx/im-store';
import { LocalOptions } from '@xkit-yx/im-store';
import { NimKitCoreTypes } from '@xkit-yx/core-kit';
import zh from '../locales/zh';
export interface ContextProps {
    nim?: NimKitCoreTypes.INimKitCore;
    store?: RootStore;
    initOptions?: NIMInitializeOptions;
    localOptions?: Partial<LocalOptions>;
    t?: (str: keyof typeof zh) => string;
}
export interface ProviderProps {
    children: ReactNode;
    sdkVersion?: 1 | 2;
    initOptions: NIMInitializeOptions;
    otherOptions?: NIMOtherOptions;
    localOptions?: Partial<LocalOptions>;
    funcOptions?: {
        [key: string]: (...args: any) => void;
    };
    nimKitCore?: NimKitCoreTypes.INimKitCore;
    locale?: 'zh' | 'en';
    localeConfig?: {
        [key in keyof typeof zh]?: string;
    };
    renderImIdle?: () => JSX.Element;
    renderImDisConnected?: () => JSX.Element;
    renderImConnecting?: () => JSX.Element;
    singleton?: boolean;
}
export declare const Context: React.Context<ContextProps>;
export declare const Provider: FC<ProviderProps>;
export declare const App: FC<{
    renderImIdle?: () => JSX.Element;
    renderImDisConnected?: () => JSX.Element;
    renderImConnecting?: () => JSX.Element;
}>;
