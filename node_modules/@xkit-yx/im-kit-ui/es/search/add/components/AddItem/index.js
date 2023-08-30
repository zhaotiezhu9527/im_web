import React from 'react';
import { CommonIcon } from '../../../../common';
var AddItem = function (_a) {
    var scene = _a.scene, icon = _a.icon, content = _a.content, onClick = _a.onClick, prefix = _a.prefix;
    var _prefix = "".concat(prefix, "-add-item");
    return (React.createElement("div", { className: _prefix, onClick: function () { return onClick(scene); } },
        React.createElement(CommonIcon, { className: "".concat(_prefix, "-icon"), type: icon }),
        React.createElement("div", { className: "".concat(_prefix, "-content") }, content)));
};
export default AddItem;
