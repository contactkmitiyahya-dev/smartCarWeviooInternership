"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = Maintenance;
var _react = require("react");
var _reactRouterDom = require("react-router-dom");
var _fa = require("react-icons/fa");
var _testData = require("../../data/testData.js");
var _MaintenanceTimeline = _interopRequireDefault(require("../../components/maintenance/MaintenanceTimeline"));
var _ServiceDueReminders = _interopRequireDefault(require("../../components/maintenance/ServiceDueReminders"));
var _AddServiceForm = _interopRequireDefault(require("../../components/maintenance/AddServiceForm"));
require("./Maintenance.css");
var _jsxRuntime = require("react/jsx-runtime");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
function _toConsumableArray(r) { return _arrayWithoutHoles(r) || _iterableToArray(r) || _unsupportedIterableToArray(r) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArray(r) { if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r); }
function _arrayWithoutHoles(r) { if (Array.isArray(r)) return _arrayLikeToArray(r); }
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
function Maintenance() {
  var _useParams = (0, _reactRouterDom.useParams)(),
    id = _useParams.id;
  var vehicle = (0, _testData.getVehicleById)(id);
  var schedule = (0, _testData.getMaintenanceSchedule)(id);
  var _useState = (0, _react.useState)(schedule.history),
    _useState2 = _slicedToArray(_useState, 2),
    history = _useState2[0],
    setHistory = _useState2[1];
  if (!vehicle) {
    return /*#__PURE__*/(0, _jsxRuntime.jsx)("main", {
      className: "maintenance-page",
      children: /*#__PURE__*/(0, _jsxRuntime.jsxs)("p", {
        className: "vehicle-not-found",
        children: ["V\xE9hicule introuvable. ", /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactRouterDom.Link, {
          to: "/dashboard",
          children: "Retour au tableau de bord"
        })]
      })
    });
  }
  var handleAddService = function handleAddService(newEntry) {
    setHistory([newEntry].concat(_toConsumableArray(history)));
  };
  return /*#__PURE__*/(0, _jsxRuntime.jsxs)("main", {
    className: "maintenance-page",
    children: [/*#__PURE__*/(0, _jsxRuntime.jsxs)(_reactRouterDom.Link, {
      to: "/vehicles/".concat(id),
      className: "maintenance-back-link",
      children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_fa.FaArrowLeft, {}), " Retour au v\xE9hicule"]
    }), /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
      className: "maintenance-header",
      children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("h1", {
        className: "maintenance-title",
        children: "Entretien"
      }), /*#__PURE__*/(0, _jsxRuntime.jsxs)("p", {
        className: "maintenance-subtitle",
        children: [vehicle.make, " ", vehicle.model, " \u2014 ", vehicle.plate]
      })]
    }), /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
      className: "maintenance-grid",
      children: [/*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
        className: "maintenance-main",
        children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_AddServiceForm["default"], {
          onAdd: handleAddService
        }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_MaintenanceTimeline["default"], {
          history: history
        })]
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
        className: "maintenance-side",
        children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_ServiceDueReminders["default"], {
          upcoming: schedule.upcoming
        })
      })]
    })]
  });
}