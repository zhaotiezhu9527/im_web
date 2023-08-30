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
var GroupItem_1 = require("./GroupItem");
var antd_1 = require("antd");
var icons_1 = require("@ant-design/icons");
var common_1 = require("../../../common");
var GroupList = function (_a) {
    var myMemberInfo = _a.myMemberInfo, members = _a.members, onRemoveTeamMemberClick = _a.onRemoveTeamMemberClick, afterSendMsgClick = _a.afterSendMsgClick, renderTeamMemberItem = _a.renderTeamMemberItem, _b = _a.prefix, prefix = _b === void 0 ? 'chat' : _b, _c = _a.commonPrefix, commonPrefix = _c === void 0 ? 'common' : _c;
    var _prefix = "".concat(prefix, "-group-list");
    var t = (0, common_1.useTranslation)().t;
    var store = (0, common_1.useStateContext)().store;
    var _d = __read((0, react_1.useState)(''), 2), groupSearchText = _d[0], setGroupSearchText = _d[1];
    var handleSearch = function (searchText) {
        setGroupSearchText(searchText);
    };
    var showMembers = (0, react_1.useMemo)(function () {
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
    return (react_1.default.createElement("div", { className: "".concat(_prefix, "-wrap") },
        react_1.default.createElement(antd_1.Input, { prefix: react_1.default.createElement(icons_1.SearchOutlined, { style: { color: '#b3b7bc' } }), allowClear: true, className: "".concat(_prefix, "-input"), value: groupSearchText, placeholder: t('searchTeamMemberPlaceholder'), onChange: function (e) { return handleSearch(e.target.value); } }),
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
            return ((_a = renderTeamMemberItem === null || renderTeamMemberItem === void 0 ? void 0 : renderTeamMemberItem(itemProps)) !== null && _a !== void 0 ? _a : (react_1.default.createElement(GroupItem_1.GroupItem, __assign({ key: item.account }, itemProps))));
        })) : (react_1.default.createElement("div", { className: "".concat(_prefix, "-no-result") }, t('searchNoResText')))));
};
exports.default = GroupList;
