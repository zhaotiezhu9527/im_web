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
import React, { useMemo } from 'react';
import { Utils, useTranslation } from '../../../common';
import { FriendItem } from './FriendItem';
import { Spin, Empty } from 'antd';
export var FriendList = function (_a) {
    var list = _a.list, _b = _a.loading, loading = _b === void 0 ? false : _b, onItemClick = _a.onItemClick, afterSendMsgClick = _a.afterSendMsgClick, renderFriendListHeader = _a.renderFriendListHeader, renderFriendListEmpty = _a.renderFriendListEmpty, _c = _a.prefix, prefix = _c === void 0 ? 'contact' : _c, _d = _a.commonPrefix, commonPrefix = _d === void 0 ? 'common' : _d;
    var _prefix = "".concat(prefix, "-friend");
    var t = useTranslation().t;
    var dataSource = useMemo(function () {
        var group = Utils.groupByPy(list, {
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
    return (React.createElement("div", { className: "".concat(_prefix, "-wrapper") },
        React.createElement("div", { className: "".concat(_prefix, "-title") }, renderFriendListHeader
            ? renderFriendListHeader()
            : t('friendListTitle')),
        React.createElement("div", { className: "".concat(_prefix, "-list") }, loading ? (React.createElement(Spin, null)) : !list.length ? (renderFriendListEmpty ? (renderFriendListEmpty()) : (React.createElement(Empty, { style: { marginTop: 10 } }))) : (
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
                return (React.createElement("div", { className: "".concat(_prefix, "-subtitle"), key: item }, item));
            }
            return (React.createElement(FriendItem, { key: item.account, account: item.account, onItemClick: onItemClick, afterSendMsgClick: afterSendMsgClick, prefix: prefix, commonPrefix: commonPrefix }));
        })))));
};
