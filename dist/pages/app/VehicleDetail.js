"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = VehicleDetail;
var _reactRouterDom = require("react-router-dom");
var _testData = require("../../data/testData");
var _VehicleHeader = _interopRequireDefault(require("../../components/vehicule/VehicleHeader"));
var _SensorCharts = _interopRequireDefault(require("../../components/vehicule/SensorCharts"));
var _DTCTimeline = _interopRequireDefault(require("../../components/vehicule/DTCTimeline"));
var _MaintenanceLog = _interopRequireDefault(require("../../components/vehicule/MaintenanceLog"));
var _HealthBreakdown = _interopRequireDefault(require("../../components/vehicule/HealthBreakdown"));
require("./vehicleDetail.css");
var _jsxRuntime = require("react/jsx-runtime");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
function VehicleDetail() {
  var _useParams = (0, _reactRouterDom.useParams)(),
    id = _useParams.id;
  var vehicle = (0, _testData.getVehicleById)(id);
  if (!vehicle) {
    return /*#__PURE__*/(0, _jsxRuntime.jsx)("main", {
      className: "vehicle-detail-page",
      children: /*#__PURE__*/(0, _jsxRuntime.jsxs)("p", {
        className: "vehicle-not-found",
        children: ["V\xE9hicule introuvable. ", /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactRouterDom.Link, {
          to: "/userDashboard",
          children: "Retour au tableau de bord"
        })]
      })
    });
  }
  return /*#__PURE__*/(0, _jsxRuntime.jsxs)("main", {
    className: "vehicle-detail-page",
    children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_VehicleHeader["default"], {
      vehicle: vehicle
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_SensorCharts["default"], {
      data: vehicle.sensorData
    }), /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
      className: "vehicle-detail-grid",
      children: [/*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
        className: "vehicle-detail-main",
        children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_DTCTimeline["default"], {
          dtcs: vehicle.dtcs
        }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_MaintenanceLog["default"], {
          log: vehicle.maintenanceLog
        })]
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
        className: "vehicle-detail-side",
        children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_HealthBreakdown["default"], {
          components: vehicle.componentHealth
        })
      })]
    })]
  });
}