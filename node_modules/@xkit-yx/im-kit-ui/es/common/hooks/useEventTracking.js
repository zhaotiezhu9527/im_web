import { useEffect } from 'react';
import { EventTracking } from '@xkit-yx/utils';
export var useEventTracking = function (_a) {
    var appkey = _a.appkey, version = _a.version, component = _a.component, imVersion = _a.imVersion;
    useEffect(function () {
        var eventTracking = new EventTracking({
            appKey: appkey,
            version: version,
            component: component,
            imVersion: imVersion,
        });
        eventTracking.track('init', '');
    }, [appkey, version, component, imVersion]);
};
