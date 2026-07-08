"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = MaintenanceLog;
var _fa = require("react-icons/fa");
require("./maintenanceLog.css");
var _jsxRuntime = require("react/jsx-runtime");
function MaintenanceLog(_ref) {
  var log = _ref.log;
  return /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
    className: "maintenance-log",
    children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("h3", {
      className: "maintenance-log-title",
      children: "Historique entretien"
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
      className: "maintenance-log-list",
      children: log.map(function (entry) {
        return /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
          className: "maintenance-log-item",
          children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
            className: "maintenance-log-icon",
            children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_fa.FaWrench, {})
          }), /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
            className: "maintenance-log-text",
            children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
              className: "maintenance-log-type",
              children: entry.type
            }), /*#__PURE__*/(0, _jsxRuntime.jsxs)("span", {
              className: "maintenance-log-meta",
              children: [entry.date, " \u2022 ", entry.mileage.toLocaleString('fr-FR'), " km"]
            })]
          }), /*#__PURE__*/(0, _jsxRuntime.jsxs)("span", {
            className: "maintenance-log-cost",
            children: [entry.cost, " \u20AC"]
          })]
        }, entry.id);
      })
    })]
  });
}