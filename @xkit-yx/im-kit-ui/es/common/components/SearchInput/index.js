import React from 'react';
import { Input } from 'antd';
import { SearchOutlined } from '@ant-design/icons';
import { useTranslation } from '../../hooks/useTranslation';
var SearchInput = function (_a) {
    var placeholder = _a.placeholder, value = _a.value, _b = _a.disabled, disabled = _b === void 0 ? false : _b, onChange = _a.onChange, onClick = _a.onClick, _c = _a.prefix, prefix = _c === void 0 ? 'common' : _c;
    var _prefix = "".concat(prefix, "-searchinput");
    var t = useTranslation().t;
    placeholder = placeholder || t('searchInputPlaceholder');
    return (React.createElement("div", { className: "".concat(_prefix, "-wrap"), onClick: function (e) { return onClick === null || onClick === void 0 ? void 0 : onClick(e); } },
        React.createElement(Input, { prefix: React.createElement(SearchOutlined, { className: "".concat(_prefix, "-icon") }), placeholder: placeholder, value: value, onChange: function (e) { return onChange === null || onChange === void 0 ? void 0 : onChange(e.target.value); }, disabled: disabled })));
};
export default SearchInput;
