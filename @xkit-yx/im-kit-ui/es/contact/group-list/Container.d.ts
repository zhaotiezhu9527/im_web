import { FC } from 'react';
import { Team } from 'nim-web-sdk-ng/dist/NIM_BROWSER_SDK/TeamServiceInterface';
export interface GroupListContainerProps {
    /**
     群组点击事件
     */
    onItemClick?: (team: Team) => void;
    /**
     自定义渲染群组列表为空时内容
     */
    renderGroupListEmpty?: () => JSX.Element;
    /**
     自定义渲染群组列表头部内容
     */
    renderGroupListHeader?: () => JSX.Element;
    /**
     样式前缀
     */
    prefix?: string;
}
export declare const GroupListContainer: FC<GroupListContainerProps>;
