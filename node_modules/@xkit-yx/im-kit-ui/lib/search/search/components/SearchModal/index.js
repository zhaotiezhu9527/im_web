"use strict";
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
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
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
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importStar(require("react"));
var antd_1 = require("antd");
var common_1 = require("../../../../common");
var SearchItem = function (_a) {
    var onClick = _a.onClick, _b = _a.prefix, prefix = _b === void 0 ? 'search' : _b, props = __rest(_a, ["onClick", "prefix"]);
    var _prefix = "".concat(prefix, "-search-modal");
    return (react_1.default.createElement("div", { className: "".concat(_prefix, "-content-section-item"), onClick: onClick },
        react_1.default.createElement(common_1.CrudeAvatar, __assign({}, props)),
        react_1.default.createElement("span", { className: "".concat(_prefix, "-content-section-item-name") }, props.alias || props.nick || props.account)));
};
var SearchModal = function (_a) {
    var visible = _a.visible, friends = _a.friends, teams = _a.teams, onCancel = _a.onCancel, onResultItemClick = _a.onResultItemClick, renderEmpty = _a.renderEmpty, renderSearchResultEmpty = _a.renderSearchResultEmpty, _b = _a.prefix, prefix = _b === void 0 ? 'search' : _b, _c = _a.commonPrefix, commonPrefix = _c === void 0 ? 'common' : _c;
    var _prefix = "".concat(prefix, "-search-modal");
    var t = (0, common_1.useTranslation)().t;
    var _d = __read((0, react_1.useState)(''), 2), searchText = _d[0], setSearchText = _d[1];
    var sections = (0, react_1.useMemo)(function () {
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
    var searchedSections = (0, react_1.useMemo)(function () {
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
    return (react_1.default.createElement(antd_1.Modal, { className: _prefix, title: react_1.default.createElement(common_1.SearchInput, { value: searchText, prefix: commonPrefix, onChange: handleSearchChange }), onCancel: handleCancel, visible: visible, width: 630, footer: null, destroyOnClose: true }, !sections.length ? (renderEmpty ? (renderEmpty()) : (react_1.default.createElement("div", { className: "".concat(_prefix, "-empty") }, t('searchEmptyText')))) : !searchedSections.length ? (renderSearchResultEmpty ? (renderSearchResultEmpty()) : (react_1.default.createElement("div", { className: "".concat(_prefix, "-empty") }, t('searchNoResText')))) : (react_1.default.createElement("div", { className: "".concat(_prefix, "-content") }, searchedSections.map(function (section) { return (react_1.default.createElement("div", { className: "".concat(_prefix, "-content-section"), key: section.id },
        react_1.default.createElement("div", { className: "".concat(_prefix, "-content-section-title") }, section.title),
        section.list.map(function (item) { return (react_1.default.createElement(SearchItem
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
exports.default = SearchModal;
