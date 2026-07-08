"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = DTCTimeline;
var _fa = require("react-icons/fa");
require("./dtcTimeline.css");
var _jsxRuntime = require("react/jsx-runtime");
function DTCTimeline(_ref) {
  var dtcs = _ref.dtcs;
  if (dtcs.length === 0) {
    return /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
      className: "dtc-timeline dtc-empty",
      children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("h3", {
        className: "dtc-timeline-title",
        children: "Codes d\xE9faut (DTC)"
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)("p", {
        className: "dtc-empty-text",
        children: "Aucun code d\xE9faut d\xE9tect\xE9 r\xE9cemment."
      })]
    });
  }
  return /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
    className: "dtc-timeline",
    children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("h3", {
      className: "dtc-timeline-title",
      children: "Codes d\xE9faut (DTC)"
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
      className: "dtc-list",
      children: dtcs.map(function (dtc) {
        return /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
          className: "dtc-item",
          children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
            className: "dtc-severity-icon dtc-severity-".concat(dtc.severity),
            children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_fa.FaExclamationTriangle, {})
          }), /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
            className: "dtc-item-text",
            children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
              className: "dtc-code",
              children: dtc.code
            }), /*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
              className: "dtc-description",
              children: dtc.description
            })]
          }), /*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
            className: "dtc-date",
            children: dtc.date
          })]
        }, dtc.id);
      })
    })]
  });
}