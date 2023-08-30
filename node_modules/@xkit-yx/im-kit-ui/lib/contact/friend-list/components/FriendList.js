"use strict";
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
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FriendList = void 0;
var react_1 = __importStar(require("react"));
var common_1 = require("../../../common");
var FriendItem_1 = require("./FriendItem");
var antd_1 = require("antd");
var FriendList = function (_a) {
    var list = _a.list, _b = _a.loading, loading = _b === void 0 ? false : _b, onItemClick = _a.onItemClick, afterSendMsgClick = _a.afterSendMsgClick, renderFriendListHeader = _a.renderFriendListHeader, renderFriendListEmpty = _a.renderFriendListEmpty, _c = _a.prefix, prefix = _c === void 0 ? 'contact' : _c, _d = _a.commonPrefix, commonPrefix = _d === void 0 ? 'common' : _d;
    var _prefix = "".concat(prefix, "-friend");
    var t = (0, common_1.useTranslation)().t;
    var dataSource = (0, react_1.useMemo)(function () {
        var group = common_1.Utils.groupByPy(list, {
            firstKey: 'alias',
            secondKey: 'nick',
            thirdKey: 'account',
        }, false);
        var res = [];
        group.forEach(function (item) {
            if (!res.includes(item.key)) {
                res.push(item.key);
            }
            res.push.apply(res, __spreadArray([], __read(item.data), false));
        });
        return res;
    }, [list]);
    // const rowHeight = (index: number) => {
    //   if (typeof dataSource[index] === 'string') {
    //     return 57
    //   }
    //   return 46
    // }
    // const rowRenderer = (data: any) => {
    //   const item = dataSource[data.index]
    //   // console.log('rowRenderer:', key, index, item)
    //   if (typeof item === 'string') {
    //     return (
    //       <div className={`${_prefix}-subtitle`} key={item}>
    //         {item}
    //       </div>
    //     )
    //   }
    //   return (
    //     <FriendItem
    //       key={item.account}
    //       account={item.account}
    //       onItemClick={onItemClick}
    //       afterSendMsgClick={afterSendMsgClick}
    //       prefix={prefix}
    //       commonPrefix={commonPrefix}
    //     />
    //   )
    // }
    return (react_1.default.createElement("div", { className: "".concat(_prefix, "-wrapper") },
        react_1.default.createElement("div", { className: "".concat(_prefix, "-title") }, renderFriendListHeader
            ? renderFriendListHeader()
            : t('friendListTitle')),
        react_1.default.createElement("div", { className: "".concat(_prefix, "-list") }, loading ? (react_1.default.createElement(antd_1.Spin, null)) : !list.length ? (renderFriendListEmpty ? (renderFriendListEmpty()) : (react_1.default.createElement(antd_1.Empty, { style: { marginTop: 10 } }))) : (
        // <List
        //   width={810}
        //   height={469}
        //   rowCount={dataSource.length}
        //   rowHeight={rowHeight}
        //   rowRenderer={rowRenderer}
        //   containerStyle={{ position: 'static' }}
        // ></List>
        dataSource.map(function (item) {
            if (typeof item === 'string') {
                return (react_1.default.createElement("div", { className: "".concat(_prefix, "-subtitle"), key: item }, item));
            }
            return (react_1.default.createElement(FriendItem_1.FriendItem, { key: item.account, account: item.account, onItemClick: onItemClick, afterSendMsgClick: afterSendMsgClick, prefix: prefix, commonPrefix: commonPrefix }));
        })))));
};
exports.FriendList = FriendList;
