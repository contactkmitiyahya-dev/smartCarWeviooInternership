"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = MaintenanceTimeline;
var _reactRouterDom = require("react-router-dom");
var _fa = require("react-icons/fa");
require("./maintenanceTimeline.css");
var _jsxRuntime = require("react/jsx-runtime");
function MaintenanceTimeline(_ref) {
  var history = _ref.history,
    _ref$showVehicle = _ref.showVehicle,
    showVehicle = _ref$showVehicle === void 0 ? false : _ref$showVehicle;
  var totalCost = history.reduce(function (sum, entry) {
    return sum + entry.cost;
  }, 0);
  if (history.length === 0) {
    return /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
      className: "maintenance-timeline",
      children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("h3", {
        className: "maintenance-timeline-title",
        children: "Historique d'entretien"
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)("p", {
        className: "maintenance-timeline-empty",
        children: "Aucun entretien enregistr\xE9."
      })]
    });
  }
  return /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
    className: "maintenance-timeline",
    children: [/*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
      className: "maintenance-timeline-header",
      children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("h3", {
        className: "maintenance-timeline-title",
        children: "Historique d'entretien"
      }), /*#__PURE__*/(0, _jsxRuntime.jsxs)("span", {
        className: "maintenance-timeline-total",
        children: ["Total : ", totalCost, " \u20AC"]
      })]
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
      className: "timeline-track",
      children: history.map(function (entry, index) {
        return /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
          className: "timeline-entry",
          children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
            className: "timeline-marker",
            children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_fa.FaWrench, {
              className: "timeline-marker-icon"
            })
          }), index < history.length - 1 && /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
            className: "timeline-line"
          }), /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
            className: "timeline-content",
            children: [/*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
              className: "timeline-content-header",
              children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
                className: "timeline-type",
                children: entry.type
              }), /*#__PURE__*/(0, _jsxRuntime.jsxs)("span", {
                className: "timeline-cost",
                children: [entry.cost, " \u20AC"]
              })]
            }), /*#__PURE__*/(0, _jsxRuntime.jsxs)("span", {
              className: "timeline-meta",
              children: [showVehicle && /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactRouterDom.Link, {
                to: "/vehicles/".concat(entry.vehicleId),
                className: "timeline-vehicle-link",
                children: entry.vehicleName
              }), showVehicle ? ' • ' : '', entry.date, " \u2022 ", entry.mileage.toLocaleString('fr-FR'), " km"]
            }), entry.notes && /*#__PURE__*/(0, _jsxRuntime.jsx)("p", {
              className: "timeline-notes",
              children: entry.notes
            })]
          })]
        }, entry.id);
      })
    })]
  });
}