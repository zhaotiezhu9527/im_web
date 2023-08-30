import React from 'react';
import { CrudeAvatarProps } from '../../../../common/components/CrudeAvatar';
import { NimKitCoreTypes } from '@xkit-yx/core-kit';
import { Team } from 'nim-web-sdk-ng/dist/NIM_BROWSER_SDK/TeamServiceInterface';
export interface SearchItemProps extends CrudeAvatarProps {
    onClick: () => void;
    prefix?: string;
    alias?: string;
}
export type SectionListItem = NimKitCoreTypes.IFriendInfo | Team;
export type Section = {
    id: string;
    title: string;
    list: SectionListItem[];
};
export interface SearchModalProps {
    visible: boolean;
    friends: NimKitCoreTypes.IFriendInfo[];
    teams: Team[];
    onCancel: () => void;
    onResultItemClick: (item: SectionListItem) => void;
    renderEmpty?: () => JSX.Element;
    renderSearchResultEmpty?: () => JSX.Element;
    prefix?: string;
    commonPrefix?: string;
}
declare const SearchModal: React.FC<SearchModalProps>;
export default SearchModal;
