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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.GroupItem = void 0;
var react_1 = __importDefault(require("react"));
var common_1 = require("../../../common");
var GroupItem = function (_a) {
    var name = _a.name, teamId = _a.teamId, avatar = _a.avatar, onItemClick = _a.onItemClick, _b = _a.prefix, prefix = _b === void 0 ? 'contact' : _b, props = __rest(_a, ["name", "teamId", "avatar", "onItemClick", "prefix"]);
    var _prefix = "".concat(prefix, "-group-item");
    return (react_1.default.createElement("div", { className: _prefix, onClick: function (e) {
            e.stopPropagation();
            onItemClick === null || onItemClick === void 0 ? void 0 : onItemClick(__assign(__assign({}, props), { name: name, teamId: teamId, avatar: avatar }));
        } },
        react_1.default.createElement(common_1.CrudeAvatar, { size: 36, account: teamId, nick: name, avatar: avatar }),
        react_1.default.createElement("span", { className: "".concat(_prefix, "-label") }, name || teamId || '')));
};
exports.GroupItem = GroupItem;
