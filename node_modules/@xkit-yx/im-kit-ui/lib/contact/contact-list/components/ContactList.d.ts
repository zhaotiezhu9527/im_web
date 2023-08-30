import { FC } from 'react';
import { ContactType } from '@xkit-yx/im-store';
export interface ContactListProps {
    selectedContactType: ContactType | '';
    onItemClick: (contactType: ContactType) => void;
    renderCustomContact?: (contactType: ContactType) => JSX.Element | null | undefined;
    systemMsgUnread: number;
    prefix?: string;
}
export declare const ContactList: FC<ContactListProps>;
