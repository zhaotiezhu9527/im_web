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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AddContainer = void 0;
var react_1 = __importStar(require("react"));
var common_1 = require("../../common");
var AddPanel_1 = __importDefault(require("./components/AddPanel"));
var AddFriendModal_1 = __importDefault(require("./components/AddFriendModal"));
var JoinTeamModal_1 = __importDefault(require("./components/JoinTeamModal"));
var CreateModal_1 = __importDefault(require("./components/CreateModal"));
var package_json_1 = __importDefault(require("../../../package.json"));
var mobx_react_1 = require("mobx-react");
exports.AddContainer = (0, mobx_react_1.observer)(function (_a) {
    var onClickChat = _a.onClickChat, _b = _a.prefix, prefix = _b === void 0 ? 'search' : _b, _c = _a.commonPrefix, commonPrefix = _c === void 0 ? 'common' : _c;
    var _d = (0, common_1.useStateContext)(), nim = _d.nim, initOptions = _d.initOptions;
    (0, common_1.useEventTracking)({
        appkey: initOptions.appkey,
        version: package_json_1.default.version,
        component: 'SearchUIKit',
        imVersion: nim.version,
    });
    var _e = __read((0, react_1.useState)(false), 2), addFriendModalVisible = _e[0], setAddFriendModalVisible = _e[1];
    var _f = __read((0, react_1.useState)(false), 2), joinTeamModalVisible = _f[0], setJoinTeamModalVisible = _f[1];
    var _g = __read((0, react_1.useState)(false), 2), createModalVisible = _g[0], setCreateModalVisible = _g[1];
    var handleChangeScene = function (scene, visible) {
        switch (scene) {
            case 'addFriend':
                setAddFriendModalVisible(visible);
                break;
            case 'createTeam':
                setCreateModalVisible(visible);
                break;
            case 'joinTeam':
                setJoinTeamModalVisible(visible);
            default:
                break;
        }
    };
    var handleChat = function (scene, id) {
        handleChangeScene(scene, false);
        onClickChat === null || onClickChat === void 0 ? void 0 : onClickChat(id);
    };
    return (react_1.default.createElement("div", null,
        react_1.default.createElement(AddPanel_1.default, { trigger: "click", onClick: function (scene) {
                handleChangeScene(scene, true);
            }, prefix: prefix }),
        react_1.default.createElement(AddFriendModal_1.default, { visible: addFriendModalVisible, onCancel: function () {
                setAddFriendModalVisible(false);
            }, onChat: handleChat.bind(null, 'addFriend'), prefix: prefix, commonPrefix: commonPrefix }),
        react_1.default.createElement(JoinTeamModal_1.default, { visible: joinTeamModalVisible, onCancel: function () {
                setJoinTeamModalVisible(false);
            }, onChat: handleChat.bind(null, 'joinTeam'), prefix: prefix, commonPrefix: commonPrefix }),
        react_1.default.createElement(CreateModal_1.default, { visible: createModalVisible, onCancel: function () {
                setCreateModalVisible(false);
            }, onChat: handleChat.bind(null, 'createTeam'), prefix: prefix, commonPrefix: commonPrefix })));
});
