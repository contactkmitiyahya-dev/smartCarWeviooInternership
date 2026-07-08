"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = RecentAlerts;
var _reactRouterDom = require("react-router-dom");
var _fa = require("react-icons/fa");
var _ElectricBorder = _interopRequireDefault(require("../stylingComposants/ElectricBorder.js"));
require("./recentAlerts.css");
var _jsxRuntime = require("react/jsx-runtime");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
function RecentAlerts(_ref) {
  var alerts = _ref.alerts;
  return /*#__PURE__*/(0, _jsxRuntime.jsx)(_ElectricBorder["default"], {
    color: "#03b3c3",
    speed: 1,
    chaos: 0.12,
    borderRadius: 16,
    children: /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
      className: "recent-alerts",
      children: [/*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
        className: "recent-alerts-header",
        children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("h3", {
          className: "recent-alerts-title",
          children: "Alertes r\xE9centes"
        }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactRouterDom.Link, {
          to: "/notifications",
          className: "recent-alerts-viewall",
          children: "Voir tout"
        })]
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
        className: "recent-alerts-list",
        children: alerts.map(function (alert) {
          return /*#__PURE__*/(0, _jsxRuntime.jsxs)(_reactRouterDom.Link, {
            to: "/vehicles/".concat(alert.vehicleId),
            className: "alert-item",
            children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
              className: "alert-severity-dot alert-severity-".concat(alert.severity)
            }), /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
              className: "alert-item-text",
              children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("p", {
                className: "alert-item-message",
                children: alert.message
              }), /*#__PURE__*/(0, _jsxRuntime.jsxs)("span", {
                className: "alert-item-meta",
                children: [alert.vehicleName, " \u2022 ", alert.date]
              })]
            }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_fa.FaExclamationCircle, {
              className: "alert-item-icon alert-severity-".concat(alert.severity)
            })]
          }, alert.id);
        })
      })]
    })
  });
}