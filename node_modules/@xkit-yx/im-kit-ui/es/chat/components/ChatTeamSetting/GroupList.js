var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __read = (this && this.__read) || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
};
import React, { useMemo, useState } from 'react';
import { GroupItem } from './GroupItem';
import { Input } from 'antd';
import { SearchOutlined } from '@ant-design/icons';
import { useStateContext, useTranslation } from '../../../common';
var GroupList = function (_a) {
    var myMemberInfo = _a.myMemberInfo, members = _a.members, onRemoveTeamMemberClick = _a.onRemoveTeamMemberClick, afterSendMsgClick = _a.afterSendMsgClick, renderTeamMemberItem = _a.renderTeamMemberItem, _b = _a.prefix, prefix = _b === void 0 ? 'chat' : _b, _c = _a.commonPrefix, commonPrefix = _c === void 0 ? 'common' : _c;
    var _prefix = "".concat(prefix, "-group-list");
    var t = useTranslation().t;
    var store = useStateContext().store;
    var _d = __read(useState(''), 2), groupSearchText = _d[0], setGroupSearchText = _d[1];
    var handleSearch = function (searchText) {
        setGroupSearchText(searchText);
    };
    var showMembers = useMemo(function () {
        var _sortedMembers = members;
        if (groupSearchText) {
            _sortedMembers = members.filter(function (item) {
                return store.uiStore
                    .getAppellation({ account: item.account, teamId: item.teamId })
                    .includes(groupSearchText);
            });
        }
        return _sortedMembers;
    }, [members, groupSearchText]);
    return (React.createElement("div", { className: "".concat(_prefix, "-wrap") },
        React.createElement(Input, { prefix: React.createElement(SearchOutlined, { style: { color: '#b3b7bc' } }), allowClear: true, className: "".concat(_prefix, "-input"), value: groupSearchText, placeholder: t('searchTeamMemberPlaceholder'), onChange: function (e) { return handleSearch(e.target.value); } }),
        showMembers.length ? (showMembers.map(function (item) {
            var _a;
            var itemProps = {
                member: item,
                onRemoveTeamMemberClick: onRemoveTeamMemberClick,
                afterSendMsgClick: afterSendMsgClick,
                myMemberInfo: myMemberInfo,
                prefix: prefix,
                commonPrefix: commonPrefix,
            };
            return ((_a = renderTeamMemberItem === null || renderTeamMemberItem === void 0 ? void 0 : renderTeamMemberItem(itemProps)) !== null && _a !== void 0 ? _a : (React.createElement(GroupItem, __assign({ key: item.account }, itemProps))));
        })) : (React.createElement("div", { className: "".concat(_prefix, "-no-result") }, t('searchNoResText')))));
};
export default GroupList;
