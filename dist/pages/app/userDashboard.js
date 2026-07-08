"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = UserDashboard;
var _testData = require("../../data/testData");
var _VehicleCardGrid = _interopRequireDefault(require("../../components/frontApp/VehicleCardGrid"));
var _HealthScoreSummary = _interopRequireDefault(require("../../components/frontApp/HealthScoreSummary"));
var _RecentAlerts = _interopRequireDefault(require("../../components/frontApp/RecentAlerts"));
var _QuickActions = _interopRequireDefault(require("../../components/frontApp/QuickActions"));
require("./userDashboard.css");
var _jsxRuntime = require("react/jsx-runtime");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
function UserDashboard() {
  var summary = (0, _testData.getHealthSummary)();
  return /*#__PURE__*/(0, _jsxRuntime.jsxs)("main", {
    className: "app-dashboard",
    children: [/*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
      className: "app-dashboard-header",
      children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("h1", {
        className: "app-dashboard-title",
        children: "Tableau de bord"
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)("p", {
        className: "app-dashboard-subtitle",
        children: "Vue d'ensemble de vos v\xE9hicules"
      })]
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_HealthScoreSummary["default"], {
      summary: summary
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_QuickActions["default"], {}), /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
      className: "app-dashboard-grid",
      children: [/*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
        className: "app-dashboard-main",
        children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("h2", {
          className: "app-dashboard-section-title",
          children: "Vos v\xE9hicules"
        }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_VehicleCardGrid["default"], {
          vehicles: _testData.vehicles
        })]
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
        className: "app-dashboard-side",
        children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_RecentAlerts["default"], {
          alerts: _testData.alerts.slice(0, 3)
        })
      })]
    })]
  });
}