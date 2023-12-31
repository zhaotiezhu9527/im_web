import React from 'react';
import { SettingOutlined } from '@ant-design/icons';
import classNames from 'classnames';
import { mergeActions } from '../../../utils';
var ChatActionBar = function (_a) {
  var _b = _a.prefix,
    prefix = _b === void 0 ? 'chat' : _b,
    _c = _a.action,
    action = _c === void 0 ? '' : _c,
    settingActions = _a.settingActions,
    onActionClick = _a.onActionClick;
  var _prefix = ''.concat(prefix, '-action');
  var defaultChatActions = [
    {
      action: 'chatSetting',
      visible: true,
      render: function () {
        return React.createElement(SettingOutlined, {
          className: ''.concat(_prefix, '-icon'),
          style: { fontSize: 18 },
        });
        // <Icon
        //   className={`${_prefix}-icon`}
        //   width={18}
        //   height={18}
        //   color={currentActionIndex === 0 ? '#2a6bf2' : ''}
        //   type="icon-shezhi"
        // />
      },
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
    ? mergeActions(defaultChatActions, settingActions, 'action')
    : defaultChatActions;
  //   return React.createElement(
  //     'div',
  //     { className: ''.concat(_prefix, '-wrap') },
  //     finalChatActions.map(function (item) {
  //       var _a;
  //       return (
  //         item.visible &&
  //         item.render &&
  //         React.createElement(
  //           'div',
  //           {
  //             key: item.action,
  //             onClick: function () {
  //               onActionClick(item.action);
  //             },
  //             className: classNames(
  //               ''.concat(_prefix, '-setting'),
  //               ''.concat(
  //                 action === item.action
  //                   ? ''.concat(_prefix, '-setting-active')
  //                   : '',
  //               ),
  //             ),
  //           },
  //           (_a = item.render) === null || _a === void 0 ? void 0 : _a.call(item),
  //         )
  //       );
  //     }),
  //   );
  return React.createElement(
    'div',
    { className: ''.concat(_prefix, '') },
    finalChatActions.map(function (item) {}),
  );
};
export default ChatActionBar;
