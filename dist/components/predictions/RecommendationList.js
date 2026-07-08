"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = RecommendationList;
var _fa = require("react-icons/fa");
require("./recommendationList.css");
var _jsxRuntime = require("react/jsx-runtime");
var urgencyConfig = {
  high: {
    label: 'Urgent',
    color: '#f87171'
  },
  medium: {
    label: 'Modéré',
    color: '#fbbf24'
  },
  low: {
    label: 'Faible',
    color: '#4ade80'
  }
};
function RecommendationList(_ref) {
  var recommendations = _ref.recommendations;
  return /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
    className: "recommendation-list",
    children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("h3", {
      className: "recommendation-list-title",
      children: "Recommandations"
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
      className: "recommendation-items",
      children: recommendations.map(function (rec) {
        var config = urgencyConfig[rec.urgency];
        return /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
          className: "recommendation-item",
          children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
            className: "recommendation-icon",
            children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_fa.FaLightbulb, {})
          }), /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
            className: "recommendation-text",
            children: [/*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
              className: "recommendation-header",
              children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
                className: "recommendation-action",
                children: rec.action
              }), /*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
                className: "recommendation-urgency",
                style: {
                  color: config.color
                },
                children: config.label
              })]
            }), /*#__PURE__*/(0, _jsxRuntime.jsx)("p", {
              className: "recommendation-reasoning",
              children: rec.reasoning
            }), /*#__PURE__*/(0, _jsxRuntime.jsxs)("span", {
              className: "recommendation-cost",
              children: ["Co\xFBt estim\xE9 : ", rec.estimatedCost]
            })]
          })]
        }, rec.id);
      })
    })]
  });
}