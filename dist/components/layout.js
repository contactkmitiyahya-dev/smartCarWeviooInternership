"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = Layout;
var _navbar = _interopRequireDefault(require("./navbar.js"));
var _Footer = _interopRequireDefault(require("./landing/Footer.js"));
var _Hyperspeed = _interopRequireDefault(require("./stylingComposants/Hyperspeed.js"));
require("./Layout.css");
var _jsxRuntime = require("react/jsx-runtime");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
var HYPERSPEED_OPTIONS = {
  distortion: 'turbulentDistortion',
  length: 400,
  roadWidth: 10,
  islandWidth: 2,
  lanesPerRoad: 4,
  fov: 90,
  fovSpeedUp: 150,
  speedUp: 2,
  carLightsFade: 0.4,
  totalSideLightSticks: 20,
  lightPairsPerRoadWay: 40,
  shoulderLinesWidthPercentage: 0.05,
  brokenLinesWidthPercentage: 0.1,
  brokenLinesLengthPercentage: 0.5,
  lightStickWidth: [0.12, 0.5],
  lightStickHeight: [1.3, 1.7],
  movingAwaySpeed: [60, 80],
  movingCloserSpeed: [-120, -160],
  carLightsLength: [400 * 0.03, 400 * 0.2],
  carLightsRadius: [0.05, 0.14],
  carWidthPercentage: [0.3, 0.5],
  carShiftX: [-0.8, 0.8],
  carFloorSeparation: [0, 5],
  colors: {
    roadColor: 0x080808,
    islandColor: 0x0a0a0a,
    background: 0x000000,
    shoulderLines: 0xffffff,
    brokenLines: 0xffffff,
    leftCars: [0xd856bf, 0x6750a2, 0xc247ac],
    rightCars: [0x03b3c3, 0x0e5ea5, 0x324555],
    sticks: 0x03b3c3
  }
};
function Layout(_ref) {
  var children = _ref.children;
  return /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
    className: "layout",
    children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_Hyperspeed["default"], {
      effectOptions: HYPERSPEED_OPTIONS
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_navbar["default"], {}), /*#__PURE__*/(0, _jsxRuntime.jsx)("main", {
      className: "main-content-with-header",
      children: children
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_Footer["default"], {})]
  });
}