import React from 'react';
export interface SearchInputProps {
    placeholder?: string;
    value?: string;
    disabled?: boolean;
    onChange?: (val: string) => void;
    onClick?: (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
    prefix?: string;
}
declare const SearchInput: React.FC<SearchInputProps>;
export default SearchInput;
