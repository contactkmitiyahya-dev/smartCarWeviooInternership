"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = Predictions;
var _reactRouterDom = require("react-router-dom");
var _fa = require("react-icons/fa");
var _testData = require("../../data/testData");
var _RiskGauge = _interopRequireDefault(require("../../components/predictions/RiskGauge"));
var _ComponentRiskCards = _interopRequireDefault(require("../../components/predictions/ComponentRiskCards"));
var _RecommendationList = _interopRequireDefault(require("../../components/predictions/RecommendationList"));
var _ForecastChart = _interopRequireDefault(require("../../components/predictions/ForecastChart"));
require("./Predictions.css");
var _jsxRuntime = require("react/jsx-runtime");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
function Predictions() {
  var _useParams = (0, _reactRouterDom.useParams)(),
    id = _useParams.id;
  var vehicle = (0, _testData.getVehicleById)(id);
  var data = (0, _testData.getPredictions)(id);
  if (!vehicle || !data) {
    return /*#__PURE__*/(0, _jsxRuntime.jsx)("main", {
      className: "predictions-page",
      children: /*#__PURE__*/(0, _jsxRuntime.jsxs)("p", {
        className: "vehicle-not-found",
        children: ["Donn\xE9es de pr\xE9diction indisponibles. ", /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactRouterDom.Link, {
          to: "/userDashboard",
          children: "Retour au tableau de bord"
        })]
      })
    });
  }
  return /*#__PURE__*/(0, _jsxRuntime.jsxs)("main", {
    className: "predictions-page",
    children: [/*#__PURE__*/(0, _jsxRuntime.jsxs)(_reactRouterDom.Link, {
      to: "/vehicles/".concat(id),
      className: "predictions-back-link",
      children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_fa.FaArrowLeft, {}), " Retour au v\xE9hicule"]
    }), /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
      className: "predictions-header",
      children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("h1", {
        className: "predictions-title",
        children: "Pr\xE9dictions IA"
      }), /*#__PURE__*/(0, _jsxRuntime.jsxs)("p", {
        className: "predictions-subtitle",
        children: [vehicle.make, " ", vehicle.model, " \u2014 ", vehicle.plate]
      })]
    }), /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
      className: "predictions-top-grid",
      children: [/*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
        className: "predictions-gauge-card",
        children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
          className: "predictions-gauge-label",
          children: "Risque global de panne"
        }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_RiskGauge["default"], {
          riskPercentage: data.globalRisk
        })]
      }), /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
        className: "predictions-components-card",
        children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("h3", {
          className: "predictions-components-title",
          children: "Risque par composant"
        }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_ComponentRiskCards["default"], {
          components: data.componentRisks
        })]
      })]
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_ForecastChart["default"], {
      data: data.forecast
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_RecommendationList["default"], {
      recommendations: data.recommendations
    })]
  });
}