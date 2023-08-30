import React from 'react';
import { ComplexAvatarContainer, useStateContext } from '../../../common';
import { observer } from 'mobx-react';
export var BlackItem = observer(function (_a) {
    var account = _a.account, onItemClick = _a.onItemClick, afterSendMsgClick = _a.afterSendMsgClick, _b = _a.prefix, prefix = _b === void 0 ? 'contact' : _b, _c = _a.commonPrefix, commonPrefix = _c === void 0 ? 'common' : _c;
    var _prefix = "".concat(prefix, "-black-item");
    var store = useStateContext().store;
    return (React.createElement("div", { className: _prefix, onClick: function (e) {
            e.stopPropagation();
            onItemClick === null || onItemClick === void 0 ? void 0 : onItemClick(account);
        } },
        React.createElement(ComplexAvatarContainer, { account: account, prefix: commonPrefix, afterSendMsgClick: afterSendMsgClick }),
        React.createElement("span", { className: "".concat(_prefix, "-label") }, store.uiStore.getAppellation({ account: account }))));
});
