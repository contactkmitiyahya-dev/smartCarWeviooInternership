"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = GlobalAnalytics;
var _testData = require("../../data/testData.js");
var _RiskOverviewList = _interopRequireDefault(require("../../components/analytics/RiskOverviewList"));
var _RecommendationList = _interopRequireDefault(require("../../components/predictions/RecommendationList"));
require("./analyticsPage.css");
var _jsxRuntime = require("react/jsx-runtime");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
function GlobalAnalytics() {
  var overview = (0, _testData.getGlobalRiskOverview)();
  var recommendations = (0, _testData.getAllRecommendations)();
  return /*#__PURE__*/(0, _jsxRuntime.jsxs)("main", {
    className: "analytics-page",
    children: [/*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
      className: "analytics-header",
      children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("h1", {
        className: "analytics-title",
        children: "Analytics"
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)("p", {
        className: "analytics-subtitle",
        children: "Vue d'ensemble des pr\xE9dictions pour tous vos v\xE9hicules"
      })]
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_RiskOverviewList["default"], {
      overview: overview
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_RecommendationList["default"], {
      recommendations: recommendations
    })]
  });
}