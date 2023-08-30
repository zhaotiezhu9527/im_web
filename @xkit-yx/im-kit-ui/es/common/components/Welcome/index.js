import React from 'react';
import { useTranslation } from '../../hooks/useTranslation';
export var Welcome = function (_a) {
    var _b = _a.prefix, prefix = _b === void 0 ? 'common' : _b;
    var _prefix = "".concat(prefix, "-welcome");
    var t = useTranslation().t;
    return (React.createElement("div", { className: "".concat(_prefix, "-wrap") },
        React.createElement("img", { src: "https://yx-web-nosdn.netease.im/common/630b48dc545af0633aaaa53bbd65cbb0/\u6B22\u8FCE\u4F7F\u7528\u4E91\u4FE1.png" }),
        t('welcomeText')));
};
