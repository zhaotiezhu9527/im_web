'use strict';
var __assign =
  (this && this.__assign) ||
  function () {
    __assign =
      Object.assign ||
      function (t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
          s = arguments[i];
          for (var p in s)
            if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
      };
    return __assign.apply(this, arguments);
  };
var __createBinding =
  (this && this.__createBinding) ||
  (Object.create
    ? function (o, m, k, k2) {
        if (k2 === undefined) k2 = k;
        var desc = Object.getOwnPropertyDescriptor(m, k);
        if (
          !desc ||
          ('get' in desc ? !m.__esModule : desc.writable || desc.configurable)
        ) {
          desc = {
            enumerable: true,
            get: function () {
              return m[k];
            },
          };
        }
        Object.defineProperty(o, k2, desc);
      }
    : function (o, m, k, k2) {
        if (k2 === undefined) k2 = k;
        o[k2] = m[k];
      });
var __setModuleDefault =
  (this && this.__setModuleDefault) ||
  (Object.create
    ? function (o, v) {
        Object.defineProperty(o, 'default', { enumerable: true, value: v });
      }
    : function (o, v) {
        o['default'] = v;
      });
var __importStar =
  (this && this.__importStar) ||
  function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null)
      for (var k in mod)
        if (k !== 'default' && Object.prototype.hasOwnProperty.call(mod, k))
          __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
  };
var __read =
  (this && this.__read) ||
  function (o, n) {
    var m = typeof Symbol === 'function' && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o),
      r,
      ar = [],
      e;
    try {
      while ((n === void 0 || n-- > 0) && !(r = i.next()).done)
        ar.push(r.value);
    } catch (error) {
      e = { error: error };
    } finally {
      try {
        if (r && !r.done && (m = i['return'])) m.call(i);
      } finally {
        if (e) throw e.error;
      }
    }
    return ar;
  };
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, '__esModule', { value: true });
var antd_1 = require('antd');
var react_1 = __importStar(require('react'));
var AddList_1 = __importDefault(require('../AddList'));
var common_1 = require('../../../../common');
var AddPanel = function (_a) {
  var trigger = _a.trigger,
    onClick = _a.onClick,
    _b = _a.prefix,
    prefix = _b === void 0 ? 'search' : _b;
  var _prefix = ''.concat(prefix, '-add-panel');
  var t = (0, common_1.useTranslation)().t;
  var _c = __read((0, react_1.useState)(false), 2),
    visible = _c[0],
    setVisible = _c[1];
  var handleVisibleChange = function (newVisible) {
    setVisible(newVisible);
  };
  var props = {
    list: [
      {
        scene: 'addFriend',
        icon: 'icon-tianjiahaoyou',
        content: t('addFriendText'),
        onClick: onClick,
      },
      // {
      //     scene: 'createTeam',
      //     icon: 'icon-chuangjianqunzu',
      //     content: t('createTeamText'),
      //     onClick: onClick,
      // },
      // {
      //     scene: 'joinTeam',
      //     icon: 'icon-jiaruqunzu',
      //     content: t('joinTeamText'),
      //     onClick: onClick,
      // },
    ],
    prefix: prefix,
  };
  var content = react_1.default.createElement(
    'div',
    {
      onClick: function () {
        return setVisible(false);
      },
    },
    react_1.default.createElement(AddList_1.default, __assign({}, props)),
  );
  return react_1.default.createElement(
    'div',
    { className: _prefix },
    react_1.default.createElement(
      antd_1.Popover,
      {
        content: content,
        trigger: trigger,
        visible: visible,
        onVisibleChange: handleVisibleChange,
        placement: 'bottom',
      },
      react_1.default.createElement(
        'div',
        { className: ''.concat(_prefix, '-btn') },
        react_1.default.createElement(common_1.CommonIcon, {
          className: ''.concat(_prefix, '-btn-img'),
          type: 'icon-tianjiaanniu',
        }),
      ),
    ),
  );
};
exports.default = AddPanel;
