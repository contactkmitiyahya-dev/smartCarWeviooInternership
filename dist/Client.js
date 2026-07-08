"use strict";

var _client = require("react-dom/client");
var _App = _interopRequireDefault(require("./App"));
var _reactRouterDom = require("react-router-dom");
require("../src/index.css");
var _jsxRuntime = require("react/jsx-runtime");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
(0, _client.hydrateRoot)(document.getElementById('root'), /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactRouterDom.BrowserRouter, {
  future: {
    v7_startTransition: true,
    v7_relativeSplatPath: true
  },
  children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_App["default"], {})
}));