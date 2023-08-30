import React from 'react';
import { ComplexAvatarContainer, useStateContext, useTranslation, } from '../../../common';
import { observer } from 'mobx-react';
export var FriendItem = observer(function (_a) {
    var account = _a.account, onItemClick = _a.onItemClick, afterSendMsgClick = _a.afterSendMsgClick, _b = _a.prefix, prefix = _b === void 0 ? 'contact' : _b, _c = _a.commonPrefix, commonPrefix = _c === void 0 ? 'common' : _c;
    var _prefix = "".concat(prefix, "-friend-item");
    var _d = useStateContext(), store = _d.store, localOptions = _d.localOptions;
    var t = useTranslation().t;
    var isOnline = store.eventStore.stateMap.get(account) === 'online';
    return (React.createElement("div", { className: _prefix, onClick: function (e) {
            e.stopPropagation();
            onItemClick === null || onItemClick === void 0 ? void 0 : onItemClick(account);
        } },
        React.createElement(ComplexAvatarContainer, { account: account, prefix: commonPrefix, afterSendMsgClick: afterSendMsgClick }),
        React.createElement("span", { className: "".concat(_prefix, "-label") }, store.uiStore.getAppellation({ account: account })),
        localOptions.loginStateVisible ? (React.createElement("span", { className: "".concat(_prefix, "-state-").concat(isOnline ? 'online' : 'offline') }, t(isOnline ? 'onlineText' : 'offlineText'))) : null));
});
