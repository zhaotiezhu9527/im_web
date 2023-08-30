import { FC } from 'react';
import { SystemMessage } from 'nim-web-sdk-ng/dist/NIM_BROWSER_SDK/SystemMessageServiceInterface';
export interface MsgListProps {
    msgs: SystemMessage[];
    listLoading?: boolean;
    applyTeamLoaidng?: boolean;
    teamInviteLoading?: boolean;
    applyFriendLoading?: boolean;
    onAcceptApplyTeamClick?: (options: {
        teamId: string;
        from: string;
    }) => void;
    onRejectApplyTeamClick?: (options: {
        teamId: string;
        from: string;
    }) => void;
    onAcceptTeamInviteClick?: (options: {
        teamId: string;
        from: string;
    }) => void;
    onRejectTeamInviteClick?: (options: {
        teamId: string;
        from: string;
    }) => void;
    onAcceptApplyFriendClick?: (account: string) => void;
    onRejectApplyFriendClick?: (account: string) => void;
    afterSendMsgClick?: () => void;
    renderMsgListHeader?: () => JSX.Element;
    renderMsgListEmpty?: () => JSX.Element;
    prefix?: string;
    commonPrefix?: string;
}
export declare const MsgList: FC<MsgListProps>;
