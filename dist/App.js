"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = App;
var _reactRouterDom = require("react-router-dom");
var _dashboard = _interopRequireDefault(require("./pages/dashboard.js"));
var _layout = _interopRequireDefault(require("./components/layout.js"));
var _Login = _interopRequireDefault(require("./components/auth/Login.js"));
var _Register = _interopRequireDefault(require("./components/auth/Register.js"));
var _userDashboard = _interopRequireDefault(require("./pages/app/userDashboard.js"));
var _VehicleDetail = _interopRequireDefault(require("./pages/app/VehicleDetail.js"));
var _DataUpload = _interopRequireDefault(require("./pages/app/DataUpload.js"));
var _Predictions = _interopRequireDefault(require("./pages/app/Predictions.js"));
var _Maintenance = _interopRequireDefault(require("./pages/app/Maintenance.js"));
var _Notifications = _interopRequireDefault(require("./pages/app/Notifications.js"));
var _Settings = _interopRequireDefault(require("./pages/app/Settings.js"));
var _Profile = _interopRequireDefault(require("./pages/app/Profile.js"));
var _GlobalMaintenance = _interopRequireDefault(require("./pages/app/GlobalMaintenance.js"));
var _GlobalAnalytics = _interopRequireDefault(require("./pages/app/GlobalAnalytics.js"));
var _VehiclesList = _interopRequireDefault(require("./pages/app/VehiclesList.js"));
var _jsxRuntime = require("react/jsx-runtime");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
function App() {
  return /*#__PURE__*/(0, _jsxRuntime.jsx)(_layout["default"], {
    children: /*#__PURE__*/(0, _jsxRuntime.jsxs)(_reactRouterDom.Routes, {
      children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_reactRouterDom.Route, {
        path: "/",
        element: /*#__PURE__*/(0, _jsxRuntime.jsx)(_dashboard["default"], {})
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactRouterDom.Route, {
        path: "/auth/login",
        element: /*#__PURE__*/(0, _jsxRuntime.jsx)(_Login["default"], {})
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactRouterDom.Route, {
        path: "/auth/register",
        element: /*#__PURE__*/(0, _jsxRuntime.jsx)(_Register["default"], {})
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactRouterDom.Route, {
        path: "/userDashboard",
        element: /*#__PURE__*/(0, _jsxRuntime.jsx)(_userDashboard["default"], {})
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactRouterDom.Route, {
        path: "/vehicles",
        element: /*#__PURE__*/(0, _jsxRuntime.jsx)(_VehiclesList["default"], {})
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactRouterDom.Route, {
        path: "/vehicles/:id",
        element: /*#__PURE__*/(0, _jsxRuntime.jsx)(_VehicleDetail["default"], {})
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactRouterDom.Route, {
        path: "/vehicles/:id/upload",
        element: /*#__PURE__*/(0, _jsxRuntime.jsx)(_DataUpload["default"], {})
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactRouterDom.Route, {
        path: "/vehicles/:id/predictions",
        element: /*#__PURE__*/(0, _jsxRuntime.jsx)(_Predictions["default"], {})
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactRouterDom.Route, {
        path: "/vehicles/:id/maintenance",
        element: /*#__PURE__*/(0, _jsxRuntime.jsx)(_Maintenance["default"], {})
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactRouterDom.Route, {
        path: "/notifications",
        element: /*#__PURE__*/(0, _jsxRuntime.jsx)(_Notifications["default"], {})
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactRouterDom.Route, {
        path: "/settings",
        element: /*#__PURE__*/(0, _jsxRuntime.jsx)(_Settings["default"], {})
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactRouterDom.Route, {
        path: "/profile",
        element: /*#__PURE__*/(0, _jsxRuntime.jsx)(_Profile["default"], {})
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactRouterDom.Route, {
        path: "/maintenance",
        element: /*#__PURE__*/(0, _jsxRuntime.jsx)(_GlobalMaintenance["default"], {})
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactRouterDom.Route, {
        path: "/analytics",
        element: /*#__PURE__*/(0, _jsxRuntime.jsx)(_GlobalAnalytics["default"], {})
      })]
    })
  });
}