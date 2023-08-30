import React from 'react';
var ChatHeader = function (_a) {
    var avatar = _a.avatar, title = _a.title, _b = _a.subTitle, subTitle = _b === void 0 ? '' : _b, _c = _a.prefix, prefix = _c === void 0 ? 'chat' : _c;
    var _prefix = "".concat(prefix, "-header");
    return (React.createElement("div", { className: "".concat(_prefix, "-wrap") },
        React.createElement("div", { className: "".concat(_prefix, "-avatar") }, avatar),
        React.createElement("div", { className: "".concat(_prefix, "-title") }, title),
        subTitle ? (React.createElement("div", { className: "".concat(_prefix, "-sub-title") }, subTitle)) : null));
};
export default ChatHeader;
