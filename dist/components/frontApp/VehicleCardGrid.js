"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = VehicleCardGrid;
var _reactRouterDom = require("react-router-dom");
var _fa = require("react-icons/fa");
require("./vehicleCardGrid.css");
var _jsxRuntime = require("react/jsx-runtime");
function VehicleCardGrid(_ref) {
  var vehicles = _ref.vehicles;
  var statusLabel = {
    healthy: 'Sain',
    warning: 'À surveiller',
    critical: 'Critique'
  };
  return /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
    className: "vehicle-grid",
    children: vehicles.map(function (vehicle) {
      return /*#__PURE__*/(0, _jsxRuntime.jsxs)(_reactRouterDom.Link, {
        to: "/vehicles/".concat(vehicle.id),
        className: "vehicle-card",
        children: [/*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
          className: "vehicle-card-header",
          children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
            className: "vehicle-card-icon-wrap",
            children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_fa.FaCar, {
              className: "vehicle-card-icon"
            })
          }), /*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
            className: "vehicle-status-badge vehicle-status-".concat(vehicle.status),
            children: statusLabel[vehicle.status]
          })]
        }), /*#__PURE__*/(0, _jsxRuntime.jsxs)("h3", {
          className: "vehicle-card-title",
          children: [vehicle.make, " ", vehicle.model]
        }), /*#__PURE__*/(0, _jsxRuntime.jsxs)("p", {
          className: "vehicle-card-subtitle",
          children: [vehicle.year, " \u2022 ", vehicle.mileage.toLocaleString('fr-FR'), " km"]
        }), /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
          className: "vehicle-card-score",
          children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
            className: "vehicle-score-bar-track",
            children: /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
              className: "vehicle-score-bar-fill vehicle-score-".concat(vehicle.status),
              style: {
                width: "".concat(vehicle.healthScore, "%")
              }
            })
          }), /*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
            className: "vehicle-score-value",
            children: vehicle.healthScore
          })]
        })]
      }, vehicle.id);
    })
  });
}