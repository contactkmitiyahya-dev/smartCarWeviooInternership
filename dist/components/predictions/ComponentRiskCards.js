"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = ComponentRiskCards;
require("./componentRiskCards.css");
var _jsxRuntime = require("react/jsx-runtime");
var riskConfig = {
  low: {
    label: 'Faible risque',
    color: '#4ade80'
  },
  medium: {
    label: 'Risque modéré',
    color: '#fbbf24'
  },
  high: {
    label: 'Risque élevé',
    color: '#f87171'
  }
};
function ComponentRiskCards(_ref) {
  var components = _ref.components;
  return /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
    className: "component-risk-grid",
    children: components.map(function (comp, index) {
      var config = riskConfig[comp.risk];
      return /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
        className: "component-risk-card",
        children: [/*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
          className: "component-risk-header",
          children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
            className: "component-risk-name",
            children: comp.name
          }), /*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
            className: "component-risk-badge",
            style: {
              color: config.color,
              borderColor: config.color + '40',
              background: config.color + '1A'
            },
            children: config.label
          })]
        }), /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
          className: "component-risk-bar-track",
          children: /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
            className: "component-risk-bar-fill",
            style: {
              width: "".concat(comp.percentage, "%"),
              background: config.color
            }
          })
        }), /*#__PURE__*/(0, _jsxRuntime.jsxs)("span", {
          className: "component-risk-confidence",
          children: ["Confiance : ", comp.confidence, "%"]
        })]
      }, index);
    })
  });
}