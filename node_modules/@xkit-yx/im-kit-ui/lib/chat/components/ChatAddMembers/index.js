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
var react_1 = __importStar(require("react"));
var antd_1 = require("antd");
var common_1 = require("../../../common");
var emptyArr = [];
var ChatAddMemebers = function (_a) {
    var _b = _a.defaultAccounts, defaultAccounts = _b === void 0 ? emptyArr : _b, visible = _a.visible, onCancel = _a.onCancel, onGroupAddMembers = _a.onGroupAddMembers, _c = _a.prefix, prefix = _c === void 0 ? 'chat' : _c, _d = _a.commonPrefix, commonPrefix = _d === void 0 ? 'common' : _d;
    var _e = __read((0, react_1.useState)([]), 2), selectedAccounts = _e[0], setSelectedAccounts = _e[1];
    // const [searchText, setSearchText] = useState('')
    (0, react_1.useEffect)(function () {
        if (visible) {
            setSelectedAccounts(__spreadArray([], __read(new Set(defaultAccounts)), false));
        }
    }, [defaultAccounts, visible]);
    (0, react_1.useEffect)(function () {
        if (!visible) {
            resetState();
        }
    }, [visible]);
    var t = (0, common_1.useTranslation)().t;
    var _prefix = "".concat(prefix, "-add-members");
    var handleOk = function () {
        if (!selectedAccounts.length) {
            antd_1.message.error(t('addTeamMemberConfirmText'));
            return;
        }
        onGroupAddMembers(selectedAccounts);
    };
    var handleCancel = function () {
        onCancel();
    };
    var resetState = function () {
        setSelectedAccounts([]);
    };
    return (react_1.default.createElement(antd_1.Modal, { className: "".concat(_prefix, "-wrap"), title: t('addTeamMemberText'), onOk: handleOk, onCancel: handleCancel, visible: visible, width: 630, cancelText: t('cancelText'), destroyOnClose: true, okText: t('addTeamMemberText') },
        react_1.default.createElement("div", { style: { height: 450 } },
            react_1.default.createElement(common_1.FriendSelectContainer, { prefix: commonPrefix, onSelect: function (selectedList) {
                    return setSelectedAccounts(selectedList.map(function (item) { return item.account; }));
                }, selectedAccounts: selectedAccounts }))));
};
exports.default = ChatAddMemebers;
