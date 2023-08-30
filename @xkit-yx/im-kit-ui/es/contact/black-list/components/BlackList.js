import React from 'react';
import { BlackItem } from './BlackItem';
import { useTranslation } from '../../../common';
import { Spin, Empty } from 'antd';
export var BlackList = function (_a) {
    var list = _a.list, _b = _a.loading, loading = _b === void 0 ? false : _b, onItemClick = _a.onItemClick, afterSendMsgClick = _a.afterSendMsgClick, renderBlackListEmpty = _a.renderBlackListEmpty, renderBlackListHeader = _a.renderBlackListHeader, _c = _a.prefix, prefix = _c === void 0 ? 'contact' : _c, _d = _a.commonPrefix, commonPrefix = _d === void 0 ? 'common' : _d;
    var _prefix = "".concat(prefix, "-black");
    var t = useTranslation().t;
    return (React.createElement("div", { className: "".concat(_prefix, "-wrapper") },
        React.createElement("div", { className: "".concat(_prefix, "-title") }, renderBlackListHeader ? (renderBlackListHeader()) : (React.createElement(React.Fragment, null,
            t('blackListTitle'),
            React.createElement("span", { className: "".concat(_prefix, "-title-remark") }, t('blackListDesc'))))),
        React.createElement("div", { className: "".concat(_prefix, "-content") }, loading ? (React.createElement(Spin, null)) : !list.length ? (renderBlackListEmpty ? (renderBlackListEmpty()) : (React.createElement(Empty, { style: { marginTop: 10 } }))) : (list.map(function (item) { return (React.createElement(BlackItem, { account: item, key: item, prefix: prefix, commonPrefix: commonPrefix, onItemClick: onItemClick, afterSendMsgClick: afterSendMsgClick })); })))));
};
