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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FriendSelectContainer = void 0;
var react_1 = __importDefault(require("react"));
var FriendSelectUI_1 = require("./FriendSelectUI");
var useStateContext_1 = require("../../hooks/useStateContext");
var mobx_react_1 = require("mobx-react");
exports.FriendSelectContainer = (0, mobx_react_1.observer)(function (props) {
    var store = (0, useStateContext_1.useStateContext)().store;
    // const [loading, setLoading] = useState(false)
    // useEffect(() => {
    //   setLoading(true)
    //   store.uiStore
    //     .getFriendsWithoutBlacklist()
    //     .then(() => {
    //       setLoading(false)
    //     })
    //     .catch(() => {
    //       setLoading(false)
    //     })
    // }, [store.uiStore])
    return (react_1.default.createElement(FriendSelectUI_1.FriendSelectUI, __assign({ list: store.uiStore.friendsWithoutBlacklist }, props)));
});
