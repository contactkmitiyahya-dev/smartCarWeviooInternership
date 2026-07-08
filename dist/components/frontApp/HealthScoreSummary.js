"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = HealthScoreSummary;
var _fa = require("react-icons/fa");
require("./healthScoreSummary.css");
var _jsxRuntime = require("react/jsx-runtime");
function HealthScoreSummary(_ref) {
  var summary = _ref.summary;
  var items = [{
    icon: _fa.FaCar,
    value: summary.total,
    label: 'Véhicules suivis',
    tone: 'neutral'
  }, {
    icon: _fa.FaCheckCircle,
    value: summary.healthy,
    label: 'Sains',
    tone: 'healthy'
  }, {
    icon: _fa.FaExclamationTriangle,
    value: summary.warning,
    label: 'À surveiller',
    tone: 'warning'
  }, {
    icon: _fa.FaTimesCircle,
    value: summary.critical,
    label: 'Critiques',
    tone: 'critical'
  }];
  return /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
    className: "health-summary",
    children: items.map(function (item, index) {
      var Icon = item.icon;
      return /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
        className: "health-summary-item health-summary-".concat(item.tone),
        children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(Icon, {
          className: "health-summary-icon"
        }), /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
          className: "health-summary-text",
          children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
            className: "health-summary-value",
            children: item.value
          }), /*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
            className: "health-summary-label",
            children: item.label
          })]
        })]
      }, index);
    })
  });
}