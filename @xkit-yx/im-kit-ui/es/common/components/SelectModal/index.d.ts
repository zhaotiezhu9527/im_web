import React from 'react';
export interface SelectModalItemProps {
    key: string;
    label: string;
    disabled?: boolean;
}
export interface SelectModalProps {
    datasource: SelectModalItemProps[];
    visible: boolean;
    onSearchChange?: (value: string) => void;
    onSelectChange?: (value: SelectModalItemProps[]) => void;
    onDelete?: (value: SelectModalItemProps) => void;
    onOk: (data: SelectModalItemProps[]) => Promise<void>;
    onCancel: () => void;
    okText?: string;
    title?: string;
    defaultValue?: string[];
    bottomRenderer?: React.ReactNode;
    itemAvatarRender?: (data: SelectModalItemProps) => React.ReactNode;
    type?: 'radio' | 'checkbox';
    max?: number;
    min?: number;
    searchPlaceholder?: string;
    leftTitle?: string;
    rightTitle?: string;
    closable?: boolean;
    width?: number;
    prefix?: string;
}
export declare const SelectModal: React.FC<SelectModalProps>;
