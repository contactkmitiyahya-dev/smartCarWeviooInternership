"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = AlertList;
var _reactRouterDom = require("react-router-dom");
var _fa = require("react-icons/fa");
require("./alertList.css");
var _jsxRuntime = require("react/jsx-runtime");
var severityConfig = {
  critical: {
    icon: _fa.FaExclamationTriangle,
    color: '#f87171',
    label: 'Critique'
  },
  warning: {
    icon: _fa.FaExclamationCircle,
    color: '#fbbf24',
    label: 'Avertissement'
  },
  info: {
    icon: _fa.FaInfoCircle,
    color: '#38bdf8',
    label: 'Info'
  }
};
function AlertList(_ref) {
  var notifications = _ref.notifications,
    onAcknowledge = _ref.onAcknowledge;
  if (notifications.length === 0) {
    return /*#__PURE__*/(0, _jsxRuntime.jsx)("p", {
      className: "alert-list-empty",
      children: "Aucune notification dans cette cat\xE9gorie."
    });
  }
  return /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
    className: "alert-list",
    children: notifications.map(function (notif) {
      var config = severityConfig[notif.severity];
      var Icon = config.icon;
      return /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
        className: "alert-list-item ".concat(notif.acknowledged ? 'alert-list-item-read' : ''),
        children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
          className: "alert-list-icon",
          style: {
            color: config.color
          },
          children: /*#__PURE__*/(0, _jsxRuntime.jsx)(Icon, {})
        }), /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
          className: "alert-list-content",
          children: [/*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
            className: "alert-list-top",
            children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
              className: "alert-list-severity",
              style: {
                color: config.color
              },
              children: config.label
            }), /*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
              className: "alert-list-date",
              children: notif.date
            })]
          }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactRouterDom.Link, {
            to: "/vehicles/".concat(notif.vehicleId),
            className: "alert-list-message",
            children: notif.message
          }), /*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
            className: "alert-list-vehicle",
            children: notif.vehicleName
          })]
        }), !notif.acknowledged && /*#__PURE__*/(0, _jsxRuntime.jsx)("button", {
          type: "button",
          className: "alert-acknowledge-btn",
          onClick: function onClick() {
            return onAcknowledge(notif.id);
          },
          title: "Marquer comme trait\xE9",
          children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_fa.FaCheck, {})
        })]
      }, notif.id);
    })
  });
}