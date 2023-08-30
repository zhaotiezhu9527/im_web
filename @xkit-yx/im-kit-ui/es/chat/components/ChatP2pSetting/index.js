import React from 'react';
import { Button } from 'antd';
import { PlusOutlined } from '@ant-design/icons';
import classnames from 'classnames';
import { ComplexAvatarContainer, useTranslation } from '../../../common';
var ChatP2pSetting = function (_a) {
    var onCreateGroupClick = _a.onCreateGroupClick, account = _a.account, _b = _a.alias, alias = _b === void 0 ? '' : _b, _c = _a.nick, nick = _c === void 0 ? '' : _c, _d = _a.prefix, prefix = _d === void 0 ? 'chat' : _d, _e = _a.commonPrefix, commonPrefix = _e === void 0 ? 'common' : _e;
    var _prefix = "".concat(prefix, "-person-setting");
    var t = useTranslation().t;
    return (React.createElement("div", { className: classnames("".concat(_prefix, "-wrap")), onClick: function (e) {
            e.stopPropagation();
        } },
        React.createElement("div", { className: classnames("".concat(_prefix, "-item")) },
            React.createElement(ComplexAvatarContainer, { account: account, canClick: false, prefix: commonPrefix }),
            React.createElement("span", { className: "".concat(_prefix, "-item-label") }, alias || nick || account)),
        React.createElement("div", { className: classnames("".concat(_prefix, "-item")) },
            React.createElement(Button, { type: "dashed", shape: "circle", className: "".concat(_prefix, "-add-btn"), onClick: onCreateGroupClick, icon: React.createElement(PlusOutlined, { className: "".concat(_prefix, "-add-icon") }) }),
            React.createElement("span", { className: "".concat(_prefix, "-item-label") }, t('addChatMemberText')))));
};
export default ChatP2pSetting;
