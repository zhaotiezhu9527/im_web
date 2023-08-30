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
import { Popover } from 'antd';
import React, { useState } from 'react';
import AddList from '../AddList';
import { CommonIcon, useTranslation } from '../../../../common';
var AddPanel = function (_a) {
  var trigger = _a.trigger,
    onClick = _a.onClick,
    _b = _a.prefix,
    prefix = _b === void 0 ? 'search' : _b;
  var _prefix = ''.concat(prefix, '-add-panel');
  var t = useTranslation().t;
  var _c = __read(useState(false), 2),
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
  var content = React.createElement(
    'div',
    {
      onClick: function () {
        return setVisible(false);
      },
    },
    React.createElement(AddList, __assign({}, props)),
  );
  return React.createElement(
    'div',
    { className: _prefix },
    React.createElement(
      Popover,
      {
        content: content,
        trigger: trigger,
        visible: visible,
        onVisibleChange: handleVisibleChange,
        placement: 'bottom',
      },
      React.createElement(
        'div',
        { className: ''.concat(_prefix, '-btn') },
        React.createElement(CommonIcon, {
          className: ''.concat(_prefix, '-btn-img'),
          type: 'icon-tianjiaanniu',
        }),
      ),
    ),
  );
};
export default AddPanel;
