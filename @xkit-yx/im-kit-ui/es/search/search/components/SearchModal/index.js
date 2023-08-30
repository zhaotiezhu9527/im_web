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
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
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
import React, { useState, useMemo } from 'react';
import { Modal } from 'antd';
import { SearchInput, CrudeAvatar, useTranslation } from '../../../../common';
var SearchItem = function (_a) {
    var onClick = _a.onClick, _b = _a.prefix, prefix = _b === void 0 ? 'search' : _b, props = __rest(_a, ["onClick", "prefix"]);
    var _prefix = "".concat(prefix, "-search-modal");
    return (React.createElement("div", { className: "".concat(_prefix, "-content-section-item"), onClick: onClick },
        React.createElement(CrudeAvatar, __assign({}, props)),
        React.createElement("span", { className: "".concat(_prefix, "-content-section-item-name") }, props.alias || props.nick || props.account)));
};
var SearchModal = function (_a) {
    var visible = _a.visible, friends = _a.friends, teams = _a.teams, onCancel = _a.onCancel, onResultItemClick = _a.onResultItemClick, renderEmpty = _a.renderEmpty, renderSearchResultEmpty = _a.renderSearchResultEmpty, _b = _a.prefix, prefix = _b === void 0 ? 'search' : _b, _c = _a.commonPrefix, commonPrefix = _c === void 0 ? 'common' : _c;
    var _prefix = "".concat(prefix, "-search-modal");
    var t = useTranslation().t;
    var _d = __read(useState(''), 2), searchText = _d[0], setSearchText = _d[1];
    var sections = useMemo(function () {
        return [
            {
                id: 'friends',
                title: t('searchFriendTitle'),
                list: friends,
            },
            {
                id: 'groups',
                title: t('searchTeamTitle'),
                list: teams,
            },
        ].filter(function (item) { return !!item.list.length; });
    }, [friends, teams, t]);
    var searchedSections = useMemo(function () {
        return sections
            .map(function (item) {
            if (item.id === 'friends') {
                return __assign(__assign({}, item), { list: item.list.filter(function (item) {
                        return (item.alias ||
                            item.nick ||
                            item.account).includes(searchText);
                    }) });
            }
            if (item.id === 'groups') {
                return __assign(__assign({}, item), { list: item.list.filter(function (item) {
                        return (item.name || item.teamId).includes(searchText);
                    }) });
            }
            return __assign({}, item);
        })
            .filter(function (item) { return !!item.list.length; });
    }, [sections, searchText]);
    var handleSearchChange = function (value) {
        setSearchText(value);
    };
    var handleItemClick = function (data) {
        onResultItemClick(data);
        resetState();
    };
    var handleCancel = function () {
        onCancel();
        resetState();
    };
    var resetState = function () {
        setSearchText('');
    };
    return (React.createElement(Modal, { className: _prefix, title: React.createElement(SearchInput, { value: searchText, prefix: commonPrefix, onChange: handleSearchChange }), onCancel: handleCancel, visible: visible, width: 630, footer: null, destroyOnClose: true }, !sections.length ? (renderEmpty ? (renderEmpty()) : (React.createElement("div", { className: "".concat(_prefix, "-empty") }, t('searchEmptyText')))) : !searchedSections.length ? (renderSearchResultEmpty ? (renderSearchResultEmpty()) : (React.createElement("div", { className: "".concat(_prefix, "-empty") }, t('searchNoResText')))) : (React.createElement("div", { className: "".concat(_prefix, "-content") }, searchedSections.map(function (section) { return (React.createElement("div", { className: "".concat(_prefix, "-content-section"), key: section.id },
        React.createElement("div", { className: "".concat(_prefix, "-content-section-title") }, section.title),
        section.list.map(function (item) { return (React.createElement(SearchItem
        // @ts-ignore
        , { 
            // @ts-ignore
            key: item.account || item.teamId, onClick: function () { return handleItemClick(item); }, prefix: prefix, 
            // @ts-ignore
            account: item.account || item.teamId, avatar: item.avatar, 
            // @ts-ignore
            nick: item.nick || item.name, 
            // @ts-ignore
            alias: item.alias || '' })); }))); })))));
};
export default SearchModal;
