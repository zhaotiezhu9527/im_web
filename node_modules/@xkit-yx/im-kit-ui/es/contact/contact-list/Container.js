import React from 'react';
import { ContactList } from './components/ContactList';
import { logger } from '../../utils';
import { useEventTracking, useStateContext } from '../../common';
import packageJson from '../../../package.json';
import { observer } from 'mobx-react';
export var ContactListContainer = observer(function (_a) {
    var _b = _a.prefix, prefix = _b === void 0 ? 'contact' : _b, onItemClick = _a.onItemClick, renderCustomContact = _a.renderCustomContact;
    var _c = useStateContext(), nim = _c.nim, store = _c.store, initOptions = _c.initOptions;
    useEventTracking({
        appkey: initOptions.appkey,
        version: packageJson.version,
        component: 'ContactUIKit',
        imVersion: nim.version,
    });
    var handleItemClick = function (contactType) {
        logger.log('选中通讯录导航：', contactType);
        store.uiStore.selectContactType(contactType);
        if (contactType === 'msgList') {
            store.sysMsgStore.resetSystemMsgUnread();
        }
        onItemClick === null || onItemClick === void 0 ? void 0 : onItemClick(contactType);
    };
    return (React.createElement(ContactList, { selectedContactType: store.uiStore.selectedContactType, onItemClick: handleItemClick, renderCustomContact: renderCustomContact, systemMsgUnread: store.uiStore.systemMsgUnread, prefix: prefix }));
});
