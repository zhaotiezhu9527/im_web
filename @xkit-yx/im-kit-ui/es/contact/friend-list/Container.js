import React, { useEffect } from 'react';
import { FriendList } from './components/FriendList';
import { useEventTracking, useStateContext } from '../../common';
import packageJson from '../../../package.json';
import { observer } from 'mobx-react';
export var FriendListContainer = observer(function (_a) {
    var onItemClick = _a.onItemClick, afterSendMsgClick = _a.afterSendMsgClick, renderFriendListEmpty = _a.renderFriendListEmpty, renderFriendListHeader = _a.renderFriendListHeader, _b = _a.prefix, prefix = _b === void 0 ? 'contact' : _b, _c = _a.commonPrefix, commonPrefix = _c === void 0 ? 'common' : _c;
    var _d = useStateContext(), nim = _d.nim, store = _d.store, initOptions = _d.initOptions;
    useEventTracking({
        appkey: initOptions.appkey,
        version: packageJson.version,
        component: 'ContactUIKit',
        imVersion: nim.version,
    });
    useEffect(function () {
        // 订阅好友列表
        var accounts = store.uiStore.friendsWithoutBlacklist.map(function (item) { return item.account; });
        store.eventStore.subscribeLoginStateActive(accounts).catch(function (err) {
            // 忽略报错
        });
    }, [store.uiStore.friendsWithoutBlacklist, store.eventStore]);
    return (React.createElement(FriendList, { list: store.uiStore.friendsWithoutBlacklist, 
        // loading={loading}
        onItemClick: onItemClick, afterSendMsgClick: afterSendMsgClick, renderFriendListHeader: renderFriendListHeader, renderFriendListEmpty: renderFriendListEmpty, prefix: prefix, commonPrefix: commonPrefix }));
});
