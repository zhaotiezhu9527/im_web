"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useEventTracking = void 0;
var react_1 = require("react");
var utils_1 = require("@xkit-yx/utils");
var useEventTracking = function (_a) {
    var appkey = _a.appkey, version = _a.version, component = _a.component, imVersion = _a.imVersion;
    (0, react_1.useEffect)(function () {
        var eventTracking = new utils_1.EventTracking({
            appKey: appkey,
            version: version,
            component: component,
            imVersion: imVersion,
        });
        eventTracking.track('init', '');
    }, [appkey, version, component, imVersion]);
};
exports.useEventTracking = useEventTracking;
