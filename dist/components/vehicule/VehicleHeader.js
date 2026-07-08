"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = VehicleHeader;
var _reactRouterDom = require("react-router-dom");
var _fa = require("react-icons/fa");
require("./vehicleHeader.css");
require("../../pages/app/Maintenance.css");
var _jsxRuntime = require("react/jsx-runtime");
function VehicleHeader(_ref) {
  var vehicle = _ref.vehicle;
  return /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
    className: "vehicle-header",
    children: [/*#__PURE__*/(0, _jsxRuntime.jsxs)(_reactRouterDom.Link, {
      to: "/userDashboard",
      className: "vehicle-header-back",
      children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_fa.FaArrowLeft, {}), " Retour"]
    }), /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
      className: "vehicle-header-main",
      children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
        className: "vehicle-header-photo",
        children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_fa.FaCar, {
          className: "vehicle-header-photo-icon"
        })
      }), /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
        className: "vehicle-header-info",
        children: [/*#__PURE__*/(0, _jsxRuntime.jsxs)("h1", {
          className: "vehicle-header-title",
          children: [vehicle.make, " ", vehicle.model]
        }), /*#__PURE__*/(0, _jsxRuntime.jsxs)("p", {
          className: "vehicle-header-meta",
          children: [vehicle.year, " \u2022 ", vehicle.mileage.toLocaleString('fr-FR'), " km \u2022 ", vehicle.plate]
        }), /*#__PURE__*/(0, _jsxRuntime.jsxs)("p", {
          className: "vehicle-header-vin",
          children: ["VIN : ", vehicle.vin]
        })]
      }), /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
        className: "vehicle-header-score",
        children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
          className: "vehicle-header-score-value",
          children: vehicle.healthScore
        }), /*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
          className: "vehicle-header-score-label",
          children: "Health score"
        })]
      }), /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
        className: "vehicle-header-actions",
        children: [/*#__PURE__*/(0, _jsxRuntime.jsxs)(_reactRouterDom.Link, {
          to: "/vehicles/".concat(vehicle.id, "/upload"),
          className: "vehicle-header-upload",
          children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_fa.FaCloudUploadAlt, {}), " Importer des donn\xE9es"]
        }), /*#__PURE__*/(0, _jsxRuntime.jsxs)(_reactRouterDom.Link, {
          to: "/vehicles/".concat(vehicle.id, "/edit"),
          className: "vehicle-header-edit",
          children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_fa.FaEdit, {}), " Modifier"]
        }), /*#__PURE__*/(0, _jsxRuntime.jsxs)(_reactRouterDom.Link, {
          to: "/vehicles/".concat(vehicle.id, "/predictions"),
          className: "vehicle-header-edit",
          children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_fa.FaChartLine, {}), " Pr\xE9dictions"]
        }), /*#__PURE__*/(0, _jsxRuntime.jsxs)(_reactRouterDom.Link, {
          to: "/vehicles/".concat(vehicle.id, "/maintenance"),
          className: "vehicle-header-edit",
          children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_fa.FaWrench, {}), " Entretien"]
        })]
      })]
    })]
  });
}