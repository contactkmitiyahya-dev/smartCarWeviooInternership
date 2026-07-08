"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = RiskOverviewList;
var _reactRouterDom = require("react-router-dom");
require("./riskOverviewList.css");
var _jsxRuntime = require("react/jsx-runtime");
function getRiskConfig(val) {
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
}
function RiskOverviewList(_ref) {
  var overview = _ref.overview;
  return /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
    className: "risk-overview",
    children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("h3", {
      className: "risk-overview-title",
      children: "Risque par v\xE9hicule"
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
      className: "risk-overview-list",
      children: overview.map(function (item) {
        var config = getRiskConfig(item.globalRisk);
        return /*#__PURE__*/(0, _jsxRuntime.jsxs)(_reactRouterDom.Link, {
          to: "/vehicles/".concat(item.vehicleId, "/predictions"),
          className: "risk-overview-item",
          children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
            className: "risk-overview-name",
            children: item.vehicleName
          }), /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
            className: "risk-overview-bar-track",
            children: /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
              className: "risk-overview-bar-fill",
              style: {
                width: "".concat(item.globalRisk, "%"),
                background: config.color
              }
            })
          }), /*#__PURE__*/(0, _jsxRuntime.jsxs)("span", {
            className: "risk-overview-value",
            style: {
              color: config.color
            },
            children: [item.globalRisk, "% \u2022 ", config.label]
          })]
        }, item.vehicleId);
      })
    })]
  });
}