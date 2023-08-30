import React from 'react';
import { Avatar, Badge } from 'antd';
export var ContactItem = function (_a) {
    var icon = _a.icon, label = _a.label, contactType = _a.contactType, _b = _a.isSelectd, isSelectd = _b === void 0 ? false : _b, backgroundColor = _a.backgroundColor, onItemClick = _a.onItemClick, _c = _a.prefix, prefix = _c === void 0 ? 'contact' : _c, _d = _a.unread, unread = _d === void 0 ? 0 : _d;
    var _prefix = "".concat(prefix, "-list-item");
    return (React.createElement("div", { className: "".concat(_prefix, " ").concat(isSelectd ? "".concat(_prefix, "-select") : ''), onClick: function (e) {
            e.stopPropagation();
            onItemClick(contactType);
        } },
        React.createElement(Badge, { count: unread },
            React.createElement(Avatar, { size: 36, icon: icon, style: { backgroundColor: backgroundColor, color: '#fff' } })),
        React.createElement("span", { className: "".concat(_prefix, "-label") }, label)));
};
