import React from 'react';
import { AddItemProps } from '../AddItem';
export interface AddListProps {
    list: Omit<AddItemProps, 'prefix'>[];
    prefix: string;
}
declare const AddList: React.FC<AddListProps>;
export default AddList;
