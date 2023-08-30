import { FC, ReactNode } from 'react';
import { ContactType } from '@xkit-yx/im-store';
export interface ContactItemProps {
    icon: ReactNode;
    label: string;
    contactType: ContactType;
    isSelectd?: boolean;
    backgroundColor: string;
    onItemClick: (contactType: ContactType) => void;
    prefix?: string;
    unread?: number;
}
export declare const ContactItem: FC<ContactItemProps>;
