"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = RiskGauge;
require("./riskGauge.css");
var _jsxRuntime = require("react/jsx-runtime");
function RiskGauge(_ref) {
  var riskPercentage = _ref.riskPercentage;
  var getRiskLevel = function getRiskLevel(val) {
    if (val < 30) return {
      label: 'Faible',
      color: '#4ade80'
    };
    if (val < 60) return {
      label: 'Modéré',
      color: '#fbbf24'
    };
    return {
      label: 'Élevé',
      color: '#f87171'
    };
  };
  var level = getRiskLevel(riskPercentage);
  var circumference = 2 * Math.PI * 70;
  var offset = circumference - riskPercentage / 100 * circumference;
  return /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
    className: "risk-gauge",
    children: [/*#__PURE__*/(0, _jsxRuntime.jsxs)("svg", {
      viewBox: "0 0 180 180",
      className: "risk-gauge-svg",
      children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("circle", {
        cx: "90",
        cy: "90",
        r: "70",
        fill: "none",
        stroke: "rgba(255,255,255,0.06)",
        strokeWidth: "14"
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)("circle", {
        cx: "90",
        cy: "90",
        r: "70",
        fill: "none",
        stroke: level.color,
        strokeWidth: "14",
        strokeLinecap: "round",
        strokeDasharray: circumference,
        strokeDashoffset: offset,
        transform: "rotate(-90 90 90)",
        className: "risk-gauge-arc"
      })]
    }), /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
      className: "risk-gauge-center",
      children: [/*#__PURE__*/(0, _jsxRuntime.jsxs)("span", {
        className: "risk-gauge-value",
        children: [riskPercentage, "%"]
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
        className: "risk-gauge-label",
        style: {
          color: level.color
        },
        children: level.label
      })]
    })]
  });
}