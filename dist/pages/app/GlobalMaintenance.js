"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = GlobalMaintenance;
var _testData = require("../../data/testData.js");
var _MaintenanceTimeline = _interopRequireDefault(require("../../components/maintenance/MaintenanceTimeline"));
var _ServiceDueReminders = _interopRequireDefault(require("../../components/maintenance/ServiceDueReminders"));
require("./Maintenance.css");
var _jsxRuntime = require("react/jsx-runtime");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
function GlobalMaintenance() {
  var history = (0, _testData.getAllMaintenanceHistory)();
  var upcoming = (0, _testData.getAllUpcomingMaintenance)();
  return /*#__PURE__*/(0, _jsxRuntime.jsxs)("main", {
    className: "maintenance-page",
    children: [/*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
      className: "maintenance-header",
      children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("h1", {
        className: "maintenance-title",
        children: "Maintenance"
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)("p", {
        className: "maintenance-subtitle",
        children: "Vue d'ensemble de l'entretien pour tous vos v\xE9hicules"
      })]
    }), /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
      className: "maintenance-grid",
      children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
        className: "maintenance-main",
        children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_MaintenanceTimeline["default"], {
          history: history,
          showVehicle: true
        })
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
        className: "maintenance-side",
        children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_ServiceDueReminders["default"], {
          upcoming: upcoming,
          showVehicle: true
        })
      })]
    })]
  });
}