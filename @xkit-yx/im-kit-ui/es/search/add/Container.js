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
import React, { useState } from 'react';
import { useStateContext, useEventTracking } from '../../common';
import AddPanel from './components/AddPanel';
import AddFriendModal from './components/AddFriendModal';
import JoinTeamModal from './components/JoinTeamModal';
import CreateModal from './components/CreateModal';
import packageJson from '../../../package.json';
import { observer } from 'mobx-react';
export var AddContainer = observer(function (_a) {
    var onClickChat = _a.onClickChat, _b = _a.prefix, prefix = _b === void 0 ? 'search' : _b, _c = _a.commonPrefix, commonPrefix = _c === void 0 ? 'common' : _c;
    var _d = useStateContext(), nim = _d.nim, initOptions = _d.initOptions;
    useEventTracking({
        appkey: initOptions.appkey,
        version: packageJson.version,
        component: 'SearchUIKit',
        imVersion: nim.version,
    });
    var _e = __read(useState(false), 2), addFriendModalVisible = _e[0], setAddFriendModalVisible = _e[1];
    var _f = __read(useState(false), 2), joinTeamModalVisible = _f[0], setJoinTeamModalVisible = _f[1];
    var _g = __read(useState(false), 2), createModalVisible = _g[0], setCreateModalVisible = _g[1];
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
    return (React.createElement("div", null,
        React.createElement(AddPanel, { trigger: "click", onClick: function (scene) {
                handleChangeScene(scene, true);
            }, prefix: prefix }),
        React.createElement(AddFriendModal, { visible: addFriendModalVisible, onCancel: function () {
                setAddFriendModalVisible(false);
            }, onChat: handleChat.bind(null, 'addFriend'), prefix: prefix, commonPrefix: commonPrefix }),
        React.createElement(JoinTeamModal, { visible: joinTeamModalVisible, onCancel: function () {
                setJoinTeamModalVisible(false);
            }, onChat: handleChat.bind(null, 'joinTeam'), prefix: prefix, commonPrefix: commonPrefix }),
        React.createElement(CreateModal, { visible: createModalVisible, onCancel: function () {
                setCreateModalVisible(false);
            }, onChat: handleChat.bind(null, 'createTeam'), prefix: prefix, commonPrefix: commonPrefix })));
});
