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
import React, { useEffect, useState } from 'react';
import { Modal, Input, Radio, Button, Checkbox } from 'antd';
import { CloseOutlined, SearchOutlined } from '@ant-design/icons';
import { useTranslation } from '../../../common';
var emptyArr = [];
export var SelectModal = function (_a) {
    var datasource = _a.datasource, visible = _a.visible, onSearchChange = _a.onSearchChange, onSelectChange = _a.onSelectChange, onDelete = _a.onDelete, onOk = _a.onOk, onCancel = _a.onCancel, okText = _a.okText, title = _a.title, _b = _a.defaultValue, defaultValue = _b === void 0 ? emptyArr : _b, bottomRenderer = _a.bottomRenderer, itemAvatarRender = _a.itemAvatarRender, _c = _a.type, type = _c === void 0 ? 'radio' : _c, _d = _a.max, max = _d === void 0 ? Infinity : _d, _e = _a.min, min = _e === void 0 ? 0 : _e, searchPlaceholder = _a.searchPlaceholder, leftTitle = _a.leftTitle, rightTitle = _a.rightTitle, _f = _a.closable, closable = _f === void 0 ? true : _f, _g = _a.width, width = _g === void 0 ? 720 : _g, _h = _a.prefix, prefix = _h === void 0 ? 'common' : _h;
    var t = useTranslation().t;
    var _j = __read(useState(''), 2), searchText = _j[0], setSearchText = _j[1];
    var _k = __read(useState([]), 2), selected = _k[0], setSelected = _k[1];
    var _l = __read(useState(false), 2), sending = _l[0], setSending = _l[1];
    searchPlaceholder = searchPlaceholder !== null && searchPlaceholder !== void 0 ? searchPlaceholder : t('searchText');
    leftTitle = leftTitle !== null && leftTitle !== void 0 ? leftTitle : t('searchText');
    rightTitle =
        rightTitle !== null && rightTitle !== void 0 ? rightTitle : "".concat(t('selectedText'), ": ").concat(selected.length, " ").concat(t('personUnit'));
    useEffect(function () {
        // 打开时给默认状态
        if (visible) {
            setSelected(defaultValue);
        }
    }, [defaultValue, visible]);
    useEffect(function () {
        // 关闭时重置状态
        if (!visible) {
            resetState();
        }
    }, [visible]);
    // const finalDatasource = useMemo(() => {
    //   return datasource.filter((item) => item.label.includes(searchText))
    // }, [searchText, datasource])
    var _prefix = "".concat(prefix, "-select-modal");
    var getItemsFromKeys = function (keys) {
        return datasource.filter(function (item) { return keys.some(function (j) { return j === item.key; }); });
    };
    var handleSearchTextChange = function (e) {
        var value = e.target.value;
        setSearchText(value);
        onSearchChange === null || onSearchChange === void 0 ? void 0 : onSearchChange(value);
    };
    var handleSelect = function (e) {
        var value = [];
        if (type === 'radio') {
            value = [e.target.value];
        }
        else {
            value = e;
        }
        setSelected(value);
        onSelectChange === null || onSelectChange === void 0 ? void 0 : onSelectChange(getItemsFromKeys(value));
    };
    var handleSelectDelete = function (item) {
        setSelected(selected.filter(function (i) { return i !== item.key; }));
        onDelete === null || onDelete === void 0 ? void 0 : onDelete(item);
    };
    var resetState = function () {
        setSearchText('');
        setSelected([]);
        setSending(false);
    };
    var handleOk = function () { return __awaiter(void 0, void 0, void 0, function () {
        var error_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, 3, 4]);
                    setSending(true);
                    return [4 /*yield*/, onOk(getItemsFromKeys(selected))];
                case 1:
                    _a.sent();
                    return [3 /*break*/, 4];
                case 2:
                    error_1 = _a.sent();
                    return [3 /*break*/, 4];
                case 3:
                    setSending(false);
                    return [7 /*endfinally*/];
                case 4: return [2 /*return*/];
            }
        });
    }); };
    var renderRadio = function () {
        return (React.createElement(Radio.Group, { onChange: handleSelect, value: selected[0], style: { width: '100%' } }, datasource.map(function (item) {
            var isVisible = item.label.includes(searchText);
            return (React.createElement("div", { className: "".concat(_prefix, "-content-item ").concat(item.key === selected[0] ? "".concat(_prefix, "-content-item-focus") : ''), key: item.key, style: { display: isVisible ? 'flex' : 'none' } },
                React.createElement(Radio, { value: item.key, disabled: item.disabled }), itemAvatarRender === null || itemAvatarRender === void 0 ? void 0 :
                itemAvatarRender(item),
                React.createElement("span", { className: "".concat(_prefix, "-content-text") }, item.label)));
        })));
    };
    var renderCheckbox = function () {
        return (React.createElement(Checkbox.Group, { onChange: handleSelect, value: selected, style: { width: '100%' }, disabled: selected.length >= max }, datasource.map(function (item) {
            var isVisible = item.label.includes(searchText);
            return (React.createElement("div", { className: "".concat(_prefix, "-content-item ").concat(item.key === selected[0] ? "".concat(_prefix, "-content-item-focus") : ''), key: item.key, style: { display: isVisible ? 'flex' : 'none' } },
                React.createElement(Checkbox, { value: item.key, disabled: item.disabled }), itemAvatarRender === null || itemAvatarRender === void 0 ? void 0 :
                itemAvatarRender(item),
                React.createElement("span", { className: "".concat(_prefix, "-content-text") }, item.label)));
        })));
    };
    var renderSelected = function () {
        return selected.length
            ? selected.map(function (key) {
                var item = datasource.find(function (item) { return item.key === key; });
                if (!item) {
                    return null;
                }
                return (React.createElement("div", { className: "".concat(_prefix, "-content-chose"), key: key }, itemAvatarRender === null || itemAvatarRender === void 0 ? void 0 :
                    itemAvatarRender(item),
                    React.createElement("span", { className: "".concat(_prefix, "-content-text") }, item.label),
                    React.createElement(Button, { style: { marginLeft: 'auto' }, type: "text", icon: React.createElement(CloseOutlined, { className: "".concat(_prefix, "-content-close") }), onClick: function () {
                            handleSelectDelete(item);
                        } })));
            })
            : null;
    };
    return (React.createElement(Modal, { okText: okText, title: title, okButtonProps: { disabled: selected.length < min, loading: sending }, width: width, closable: closable, open: visible, onCancel: onCancel, onOk: handleOk },
        React.createElement("div", { className: "".concat(_prefix, "-content") },
            React.createElement("div", { className: "".concat(_prefix, "-content-left") },
                React.createElement(Input, { className: "".concat(_prefix, "-input"), value: searchText, prefix: React.createElement(SearchOutlined, { style: { color: '#b3b7bc' } }), allowClear: true, onChange: handleSearchTextChange, placeholder: searchPlaceholder }),
                React.createElement("div", { className: "".concat(_prefix, "-content-l-title") }, searchText ? t('searchText') : leftTitle),
                React.createElement("div", { className: "".concat(_prefix, "-content-l-list") }, !datasource.filter(function (item) { return item.label.includes(searchText); })
                    .length ? (React.createElement("div", { className: "".concat(_prefix, "-content-empty") }, t('searchNoResText'))) : type === 'radio' ? (renderRadio()) : (renderCheckbox()))),
            React.createElement("div", { className: "".concat(_prefix, "-content-right") },
                React.createElement("div", { className: "".concat(_prefix, "-content-r-title") }, rightTitle),
                React.createElement("div", { className: "".concat(_prefix, "-content-r-list") }, renderSelected()))),
        bottomRenderer));
};
