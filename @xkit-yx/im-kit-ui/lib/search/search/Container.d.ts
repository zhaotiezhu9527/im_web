import React from 'react';
export interface SearchContainerProps {
    /**
     点击去聊天回调
     */
    onClickChat?: () => void;
    /**
      样式前缀
      */
    prefix?: string;
    /**
     公共样式前缀
     */
    commonPrefix?: string;
    /**
     没有好友和群组时的状态展示
     */
    renderEmpty?: () => JSX.Element;
    /**
     没有搜索结果时的自定义渲染
     */
    renderSearchResultEmpty?: () => JSX.Element;
}
export declare const SearchContainer: React.FC<SearchContainerProps>;
