"use strict";
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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var antd_1 = require("antd");
var common_1 = require("../../../common");
var mobx_react_1 = require("mobx-react");
var ChatTeamMemberModal = (0, mobx_react_1.observer)(function (_a) {
    var visible = _a.visible, onCancel = _a.onCancel, teamId = _a.teamId, _b = _a.commonPrefix, commonPrefix = _b === void 0 ? 'common' : _b;
    var t = (0, common_1.useTranslation)().t;
    var _c = (0, common_1.useStateContext)(), store = _c.store, localOptions = _c.localOptions;
    var teamMembers = store.teamMemberStore
        .getTeamMember(teamId)
        .filter(function (item) { return item.account !== store.userStore.myUserInfo.account; });
    var datasource = teamMembers.map(function (item) { return ({
        key: item.account,
        label: store.uiStore.getAppellation({
            account: item.account,
            teamId: item.teamId,
        }),
    }); });
    var teamManagerAccounts = teamMembers
        .filter(function (item) { return item.type === 'manager'; })
        .map(function (item) { return item.account; });
    var itemAvatarRender = function (data) {
        return (react_1.default.createElement(common_1.ComplexAvatarContainer, { account: data.key, canClick: false, prefix: commonPrefix, size: 32 }));
    };
    var handleOk = function (data) { return __awaiter(void 0, void 0, void 0, function () {
        var add, remove, _a, _b, error_1;
        return __generator(this, function (_c) {
            switch (_c.label) {
                case 0:
                    _c.trys.push([0, 5, , 6]);
                    add = data
                        .filter(function (i) { return teamManagerAccounts.every(function (j) { return j !== i.key; }); })
                        .map(function (item) { return item.key; });
                    remove = teamManagerAccounts.filter(function (i) {
                        return data.every(function (j) { return j.key !== i; });
                    });
                    _a = add.length;
                    if (!_a) return [3 /*break*/, 2];
                    return [4 /*yield*/, store.teamStore.addTeamManagersActive({
                            teamId: teamId,
                            accounts: add,
                        })];
                case 1:
                    _a = (_c.sent());
                    _c.label = 2;
                case 2:
                    _a;
                    _b = remove.length;
                    if (!_b) return [3 /*break*/, 4];
                    return [4 /*yield*/, store.teamStore.removeTeamManagersActive({
                            teamId: teamId,
                            accounts: remove,
                        })];
                case 3:
                    _b = (_c.sent());
                    _c.label = 4;
                case 4:
                    _b;
                    antd_1.message.success(t('updateTeamManagerSuccessText'));
                    onCancel();
                    return [3 /*break*/, 6];
                case 5:
                    error_1 = _c.sent();
                    switch (error_1 === null || error_1 === void 0 ? void 0 : error_1.code) {
                        // 操作的人不在群中
                        case 804:
                            antd_1.message.error(t('userNotInTeam'));
                            break;
                        // 没权限
                        case 802:
                            antd_1.message.error(t('noPermission'));
                            break;
                        default:
                            antd_1.message.error(t('updateTeamManagerFailText'));
                            break;
                    }
                    return [3 /*break*/, 6];
                case 6: return [2 /*return*/];
            }
        });
    }); };
    return (react_1.default.createElement(common_1.SelectModal, { title: t('teamManagerEditText'), visible: visible, datasource: datasource, itemAvatarRender: itemAvatarRender, defaultValue: teamManagerAccounts, type: "checkbox", max: localOptions.teamManagerLimit, leftTitle: t('teamMemberText'), onOk: handleOk, onCancel: onCancel, prefix: commonPrefix }));
});
exports.default = ChatTeamMemberModal;