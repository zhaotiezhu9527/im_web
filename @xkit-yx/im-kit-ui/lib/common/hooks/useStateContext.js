"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useStateContext = void 0;
var react_1 = require("react");
var Provider_1 = require("../contextManager/Provider");
var useStateContext = function () {
    var _a = (0, react_1.useContext)(Provider_1.Context), store = _a.store, nim = _a.nim, initOptions = _a.initOptions, localOptions = _a.localOptions;
    if (!nim || !store || !initOptions || !localOptions) {
        throw new Error('Please use Provider to wrap UI Kit.');
    }
    return { nim: nim, store: store, initOptions: initOptions, localOptions: localOptions };
};
exports.useStateContext = useStateContext;
