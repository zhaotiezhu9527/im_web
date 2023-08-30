import React from 'react';
import { Drawer } from 'antd';
import { CloseOutlined } from '@ant-design/icons';
var ChatSettingDrawer = function (_a) {
    var visible = _a.visible, onClose = _a.onClose, drawerContainer = _a.drawerContainer, title = _a.title, children = _a.children, _b = _a.prefix, prefix = _b === void 0 ? 'chat' : _b;
    var _prefix = "".concat(prefix, "-setting-draw");
    // const SETTING_NAV_TITLE_MAP = {
    //   [CHAT_ACTION.chatSetting]: t('setText'),
    //   [CHAT_ACTION.chatRecord]: t('chatHistoryText'),
    // }
    // const initTitle =
    //   SETTING_NAV_TITLE_MAP[action] ||
    //   SETTING_NAV_TITLE_MAP[CHAT_ACTION.chatSetting]
    // const [titleText, setTitleText] = useState<string>(initTitle)
    // const [navHistoryStack, setNavHistoryStack] = useState<string[]>([])
    // const title = useMemo(() => {
    //   if (navHistoryStack.length > 1) {
    //     return (
    //       <span
    //         onClick={() => {
    //           const arrs = [...navHistoryStack]
    //           setNavHistoryStack(arrs.slice(0, arrs.length - 1))
    //         }}
    //       >
    //         <LeftOutlined
    //           style={{ cursor: 'pointer', marginRight: 10, fontSize: 14 }}
    //         />
    //         {titleText}
    //       </span>
    //     )
    //   }
    //   return initTitle
    // }, [navHistoryStack, initTitle, titleText])
    // const scene = useMemo(() => {
    //   return selectedSession.scene === 'team'
    //     ? CHAT_SETTING_TYPE.group
    //     : CHAT_SETTING_TYPE.person
    // }, [selectedSession])
    // const renderChatSetting = () => {
    //   if (scene === CHAT_SETTING_TYPE.person) {
    //     return (
    //       <ChatP2pSetting
    //         prefix={prefix}
    //         account={}
    //         nick={}
    //         onCreateGroupClick={onCreateGroupClick}
    //       />
    //     )
    //   }
    //   if (scene === CHAT_SETTING_TYPE.group) {
    //     return (
    //       <ChatTeamSetting
    //         prefix={prefix}
    //         commonPrefix={commonPrefix}
    //         memberList={memberList}
    //         isGroupOwner={isGroupOwner}
    //         isGroupManager={isGroupManager}
    //         onDismissTeam={onDismissTeam}
    //         onLeaveTeam={onLeaveTeam}
    //         onAddMembersClick={onAddMembersClick}
    //         onRemoveTeamMemberClick={onRemoveTeamMemberClick}
    //         afterSendMsgClick={afterSendMsgClick}
    //         onUpdateTeamInfoSubmit={onUpdateTeamInfoSubmit}
    //         onUpdateTeamPowerInfo={onUpdateTeamPowerInfo}
    //         navHistoryStack={navHistoryStack}
    //         setNavHistoryStack={setNavHistoryStack}
    //         teamInfo={teamInfo}
    //         initOptions={initOptions}
    //         setTitleText={setTitleText}
    //       />
    //     )
    //   }
    //   return null
    // }
    // const renderChatRecord = () => {
    //   return <></>
    // }
    return (React.createElement(Drawer, { width: 357, getContainer: false, className: "".concat(_prefix, "-wrap"), title: title, placement: "right", closable: false, maskClosable: true, open: visible, keyboard: true, onClose: onClose, extra: React.createElement(CloseOutlined, { onClick: onClose, type: "primary" }) }, children));
};
export default ChatSettingDrawer;
