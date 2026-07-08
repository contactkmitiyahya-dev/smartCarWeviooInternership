"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = ServiceDueReminders;
var _reactRouterDom = require("react-router-dom");
var _fa = require("react-icons/fa");
require("./serviceDueReminders.css");
var _jsxRuntime = require("react/jsx-runtime");
var urgencyConfig = {
  high: {
    label: 'Urgent',
    color: '#f87171'
  },
  medium: {
    label: 'À prévoir',
    color: '#fbbf24'
  },
  low: {
    label: 'Planifié',
    color: '#4ade80'
  }
};
function ServiceDueReminders(_ref) {
  var upcoming = _ref.upcoming,
    _ref$showVehicle = _ref.showVehicle,
    showVehicle = _ref$showVehicle === void 0 ? false : _ref$showVehicle;
  if (upcoming.length === 0) {
    return /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
      className: "service-due",
      children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("h3", {
        className: "service-due-title",
        children: "Prochaines \xE9ch\xE9ances"
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)("p", {
        className: "service-due-empty",
        children: "Aucune \xE9ch\xE9ance \xE0 venir."
      })]
    });
  }
  return /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
    className: "service-due",
    children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("h3", {
      className: "service-due-title",
      children: "Prochaines \xE9ch\xE9ances"
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
      className: "service-due-list",
      children: upcoming.map(function (item) {
        var config = urgencyConfig[item.urgency];
        return /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
          className: "service-due-item",
          children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
            className: "service-due-icon",
            style: {
              color: config.color
            },
            children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_fa.FaClock, {})
          }), /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
            className: "service-due-text",
            children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
              className: "service-due-type",
              children: item.type
            }), /*#__PURE__*/(0, _jsxRuntime.jsxs)("span", {
              className: "service-due-meta",
              children: [showVehicle && /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactRouterDom.Link, {
                to: "/vehicles/".concat(item.vehicleId),
                className: "timeline-vehicle-link",
                children: item.vehicleName
              }), showVehicle ? ' • ' : '', item.dueDate, item.dueMileage ? " \u2022 ".concat(item.dueMileage.toLocaleString('fr-FR'), " km") : '']
            })]
          }), /*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
            className: "service-due-badge",
            style: {
              color: config.color,
              borderColor: config.color + '40',
              background: config.color + '1A'
            },
            children: config.label
          })]
        }, item.id);
      })
    })]
  });
}