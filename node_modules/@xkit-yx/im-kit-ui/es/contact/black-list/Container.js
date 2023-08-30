import React from 'react';
import { BlackList } from './components/BlackList';
import { useEventTracking, useStateContext } from '../../common';
import packageJson from '../../../package.json';
import { observer } from 'mobx-react';
export var BlackListContainer = observer(function (_a) {
    var onItemClick = _a.onItemClick, afterSendMsgClick = _a.afterSendMsgClick, renderBlackListEmpty = _a.renderBlackListEmpty, renderBlackListHeader = _a.renderBlackListHeader, _b = _a.prefix, prefix = _b === void 0 ? 'contact' : _b, _c = _a.commonPrefix, commonPrefix = _c === void 0 ? 'common' : _c;
    var _d = useStateContext(), store = _d.store, initOptions = _d.initOptions, nim = _d.nim;
    useEventTracking({
        appkey: initOptions.appkey,
        version: packageJson.version,
        component: 'ContactUIKit',
        imVersion: nim.version,
    });
    return (React.createElement(BlackList, { list: store.relationStore.blacklist, 
        // loading={loading}
        onItemClick: onItemClick, afterSendMsgClick: afterSendMsgClick, renderBlackListHeader: renderBlackListHeader, renderBlackListEmpty: renderBlackListEmpty, prefix: prefix, commonPrefix: commonPrefix }));
});
