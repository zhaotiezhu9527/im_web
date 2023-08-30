"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var common_1 = require("../../../../common");
var AddItem = function (_a) {
    var scene = _a.scene, icon = _a.icon, content = _a.content, onClick = _a.onClick, prefix = _a.prefix;
    var _prefix = "".concat(prefix, "-add-item");
    return (react_1.default.createElement("div", { className: _prefix, onClick: function () { return onClick(scene); } },
        react_1.default.createElement(common_1.CommonIcon, { className: "".concat(_prefix, "-icon"), type: icon }),
        react_1.default.createElement("div", { className: "".concat(_prefix, "-content") }, content)));
};
exports.default = AddItem;
