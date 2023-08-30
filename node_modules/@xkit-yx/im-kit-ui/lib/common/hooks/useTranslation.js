"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useTranslation = void 0;
var react_1 = require("react");
var Provider_1 = require("../contextManager/Provider");
var useTranslation = function () {
    var t = (0, react_1.useContext)(Provider_1.Context).t;
    if (!t) {
        throw new Error('Please use Provider to wrap UI Kit.');
    }
    return { t: t };
};
exports.useTranslation = useTranslation;
