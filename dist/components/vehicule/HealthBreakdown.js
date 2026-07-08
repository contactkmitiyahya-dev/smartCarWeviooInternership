"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = HealthBreakdown;
require("./healthBreakdown.css");
var _jsxRuntime = require("react/jsx-runtime");
function HealthBreakdown(_ref) {
  var components = _ref.components;
  return /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
    className: "health-breakdown",
    children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("h3", {
      className: "health-breakdown-title",
      children: "D\xE9tail par composant"
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
      className: "health-breakdown-list",
      children: components.map(function (comp, index) {
        return /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
          className: "health-breakdown-item",
          children: [/*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
            className: "health-breakdown-item-header",
            children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
              className: "health-breakdown-name",
              children: comp.name
            }), /*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
              className: "health-breakdown-risk health-risk-".concat(comp.risk),
              children: comp.risk === 'low' ? 'Faible risque' : comp.risk === 'medium' ? 'Risque moyen' : 'Risque élevé'
            })]
          }), /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
            className: "health-breakdown-bar-track",
            children: /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
              className: "health-breakdown-bar-fill health-risk-bar-".concat(comp.risk),
              style: {
                width: "".concat(comp.score, "%")
              }
            })
          })]
        }, index);
      })
    })]
  });
}