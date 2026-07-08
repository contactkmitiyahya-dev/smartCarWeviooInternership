"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = Dashboard;
var _navbar = _interopRequireDefault(require("../components/navbar.js"));
var _hero = _interopRequireDefault(require("../components/landing/hero.js"));
var _FeatureGrid = _interopRequireDefault(require("../components/landing/FeatureGrid.js"));
var _HowItWorks = _interopRequireDefault(require("../components/landing/HowItWorks.js"));
var _StatsBanner = _interopRequireDefault(require("../components/landing/StatsBanner.js"));
var _CTASection = _interopRequireDefault(require("../components/landing/CTASection.js"));
var _Footer = _interopRequireDefault(require("../components/landing/Footer.js"));
var _jsxRuntime = require("react/jsx-runtime");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
function Dashboard() {
  return /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
    children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_hero["default"], {}), /*#__PURE__*/(0, _jsxRuntime.jsx)(_FeatureGrid["default"], {}), /*#__PURE__*/(0, _jsxRuntime.jsx)(_HowItWorks["default"], {}), /*#__PURE__*/(0, _jsxRuntime.jsx)(_StatsBanner["default"], {}), /*#__PURE__*/(0, _jsxRuntime.jsx)(_CTASection["default"], {}), /*#__PURE__*/(0, _jsxRuntime.jsx)(_Footer["default"], {})]
  });
}