"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = GlobalMaintenance;
var _react = require("react");
var _client = require("../../api/client");
var _MaintenanceTimeline = _interopRequireDefault(require("../../components/maintenance/MaintenanceTimeline"));
var _ServiceDueReminders = _interopRequireDefault(require("../../components/maintenance/ServiceDueReminders"));
require("./maintenance.css");
var _jsxRuntime = require("react/jsx-runtime");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
function computeUrgency(dueDateStr) {
  var daysLeft = (new Date(dueDateStr) - new Date()) / (1000 * 60 * 60 * 24);
  if (daysLeft <= 14) return 'high';
  if (daysLeft <= 45) return 'medium';
  return 'low';
}
function GlobalMaintenance() {
  var _useState = (0, _react.useState)([]),
    _useState2 = _slicedToArray(_useState, 2),
    records = _useState2[0],
    setRecords = _useState2[1];
  var _useState3 = (0, _react.useState)(true),
    _useState4 = _slicedToArray(_useState3, 2),
    isLoading = _useState4[0],
    setIsLoading = _useState4[1];
  var _useState5 = (0, _react.useState)(''),
    _useState6 = _slicedToArray(_useState5, 2),
    error = _useState6[0],
    setError = _useState6[1];
  (0, _react.useEffect)(function () {
    var cancelled = false;
    (0, _client.apiFetch)('/maintenance').then(function (data) {
      if (!cancelled) setRecords(data.records || []);
    })["catch"](function (err) {
      if (!cancelled) setError(err instanceof _client.ApiError ? err.message : 'Erreur de chargement.');
    })["finally"](function () {
      if (!cancelled) setIsLoading(false);
    });
    return function () {
      cancelled = true;
    };
  }, []);
  var history = records.map(function (r) {
    return {
      id: r.id,
      type: r.service_type,
      date: r.service_date,
      mileage: r.mileage_at_service_km,
      cost: r.cost,
      notes: r.notes,
      vehicleId: r.vehicle_id,
      vehicleName: r.make ? "".concat(r.make, " ").concat(r.model) : 'Véhicule'
    };
  });
  var upcoming = records.filter(function (r) {
    return r.next_due_date;
  }).map(function (r) {
    return {
      id: "due-".concat(r.id),
      type: r.service_type,
      dueDate: r.next_due_date,
      dueMileage: r.next_due_km,
      urgency: computeUrgency(r.next_due_date),
      vehicleId: r.vehicle_id,
      vehicleName: r.make ? "".concat(r.make, " ").concat(r.model) : 'Véhicule'
    };
  }).sort(function (a, b) {
    return new Date(a.dueDate) - new Date(b.dueDate);
  });
  if (isLoading) {
    return /*#__PURE__*/(0, _jsxRuntime.jsx)("main", {
      className: "maintenance-page",
      children: /*#__PURE__*/(0, _jsxRuntime.jsx)("p", {
        className: "dashboard-loading",
        children: "Chargement..."
      })
    });
  }
  if (error) {
    return /*#__PURE__*/(0, _jsxRuntime.jsx)("main", {
      className: "maintenance-page",
      children: /*#__PURE__*/(0, _jsxRuntime.jsx)("p", {
        className: "dashboard-error",
        children: error
      })
    });
  }
  return /*#__PURE__*/(0, _jsxRuntime.jsxs)("main", {
    className: "maintenance-page",
    children: [/*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
      className: "maintenance-header",
      children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("h1", {
        className: "maintenance-title",
        children: "Maintenance"
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)("p", {
        className: "maintenance-subtitle",
        children: "Vue d'ensemble de l'entretien pour tous vos v\xE9hicules"
      })]
    }), /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
      className: "maintenance-grid",
      children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
        className: "maintenance-main",
        children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_MaintenanceTimeline["default"], {
          history: history,
          showVehicle: true
        })
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
        className: "maintenance-side",
        children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_ServiceDueReminders["default"], {
          upcoming: upcoming,
          showVehicle: true
        })
      })]
    })]
  });
}