"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var icons_1 = require("@ant-design/icons");
var classnames_1 = __importDefault(require("classnames"));
var utils_1 = require("../../../utils");
var ChatActionBar = function (_a) {
    var _b = _a.prefix, prefix = _b === void 0 ? 'chat' : _b, _c = _a.action, action = _c === void 0 ? '' : _c, settingActions = _a.settingActions, onActionClick = _a.onActionClick;
    var _prefix = "".concat(prefix, "-action");
    var defaultChatActions = [
        {
            action: 'chatSetting',
            visible: true,
            render: function () { return (react_1.default.createElement(icons_1.SettingOutlined, { className: "".concat(_prefix, "-icon"), style: { fontSize: 18 } })
            // <Icon
            //   className={`${_prefix}-icon`}
            //   width={18}
            //   height={18}
            //   color={currentActionIndex === 0 ? '#2a6bf2' : ''}
            //   type="icon-shezhi"
            // />
            ); },
        },
        // {
        //   action: 'chatRecord',
        //   content: (
        //     <CommentOutlined
        //       className={`${_prefix}-icon`}
        //       style={{ fontSize: 18 }}
        //     />
        //     // <Icon
        //     //   className={`${_prefix}-icon`}
        //     //   width={18}
        //     //   height={18}
        //     //   color="#2a6bf2"
        //     //   fill="#999999"
        //     //   type="icon-lishixiaoxi"
        //     // />
        //   ),
        // },
    ];
    var finalChatActions = settingActions
        ? (0, utils_1.mergeActions)(defaultChatActions, settingActions, 'action')
        : defaultChatActions;
    return (react_1.default.createElement("div", { className: "".concat(_prefix, "-wrap") }, finalChatActions.map(function (item) {
        var _a;
        return item.visible &&
            item.render && (react_1.default.createElement("div", { key: item.action, onClick: function () {
                onActionClick(item.action);
            }, className: (0, classnames_1.default)("".concat(_prefix, "-setting"), "".concat(action === item.action ? "".concat(_prefix, "-setting-active") : '')) }, (_a = item.render) === null || _a === void 0 ? void 0 : _a.call(item)));
    })));
};
exports.default = ChatActionBar;
