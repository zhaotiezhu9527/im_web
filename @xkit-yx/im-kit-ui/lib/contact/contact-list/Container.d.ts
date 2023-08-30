import { FC } from 'react';
import { ContactType } from '@xkit-yx/im-store';
export interface ContactListContainerProps {
    /**
     样式前缀
     */
    prefix?: string;
    /**
     通讯录导航点击事件
     */
    onItemClick?: (contactType: ContactType) => void;
    /**
     自定义渲染通讯录导航
     */
    renderCustomContact?: (contactType: ContactType) => JSX.Element | null | undefined;
}
export declare const ContactListContainer: FC<ContactListContainerProps>;
