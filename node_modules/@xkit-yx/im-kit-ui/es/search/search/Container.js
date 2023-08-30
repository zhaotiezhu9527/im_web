var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
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
import React, { useState } from 'react';
import { useTranslation, useEventTracking, useStateContext } from '../../common';
import { SearchOutlined } from '@ant-design/icons';
import SearchModal from './components/SearchModal';
import packageJson from '../../../package.json';
import { observer } from 'mobx-react';
export var SearchContainer = observer(function (_a) {
    var onClickChat = _a.onClickChat, _b = _a.prefix, prefix = _b === void 0 ? 'search' : _b, _c = _a.commonPrefix, commonPrefix = _c === void 0 ? 'common' : _c, renderEmpty = _a.renderEmpty, renderSearchResultEmpty = _a.renderSearchResultEmpty;
    var _d = useStateContext(), nim = _d.nim, store = _d.store, initOptions = _d.initOptions;
    var t = useTranslation().t;
    useEventTracking({
        appkey: initOptions.appkey,
        version: packageJson.version,
        component: 'SearchUIKit',
        imVersion: nim.version,
    });
    var _e = __read(useState(false), 2), visible = _e[0], setVisible = _e[1];
    var handleChat = function (item) { return __awaiter(void 0, void 0, void 0, function () {
        var scene, to;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    to = '';
                    if (item.account) {
                        scene = 'p2p';
                        to = item.account;
                    }
                    else if (item.teamId) {
                        scene = 'team';
                        to = item.teamId;
                    }
                    else {
                        throw Error('unknow scene');
                    }
                    return [4 /*yield*/, store.sessionStore.insertSessionActive(scene, to)];
                case 1:
                    _a.sent();
                    setVisible(false);
                    onClickChat === null || onClickChat === void 0 ? void 0 : onClickChat();
                    return [2 /*return*/];
            }
        });
    }); };
    var handleOpenModal = function () { return __awaiter(void 0, void 0, void 0, function () {
        return __generator(this, function (_a) {
            setVisible(true);
            return [2 /*return*/];
        });
    }); };
    var _prefix = "".concat(prefix, "-search");
    return (React.createElement("div", { className: "".concat(_prefix, "-wrapper") },
        React.createElement("div", { className: "".concat(_prefix, "-wrapper-button"), onClick: handleOpenModal },
            React.createElement(SearchOutlined, null),
            React.createElement("span", { className: "".concat(_prefix, "-wrapper-text") }, t('searchInputPlaceholder'))),
        React.createElement(SearchModal, { visible: visible, friends: store.uiStore.friendsWithoutBlacklist, teams: store.uiStore.teamList, onCancel: function () { return setVisible(false); }, prefix: prefix, onResultItemClick: handleChat, renderEmpty: renderEmpty, renderSearchResultEmpty: renderSearchResultEmpty, commonPrefix: commonPrefix })));
});
