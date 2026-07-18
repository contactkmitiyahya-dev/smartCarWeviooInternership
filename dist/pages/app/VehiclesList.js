"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = VehiclesList;
var _react = require("react");
var _reactRouterDom = require("react-router-dom");
var _fa = require("react-icons/fa");
var _client = require("../../api/client");
var _VehicleCardGrid = _interopRequireDefault(require("../../components/frontApp/VehicleCardGrid"));
require("./vehiclesListPage.css");
var _jsxRuntime = require("react/jsx-runtime");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
function VehiclesList() {
  var _useState = (0, _react.useState)([]),
    _useState2 = _slicedToArray(_useState, 2),
    vehicles = _useState2[0],
    setVehicles = _useState2[1];
  var _useState3 = (0, _react.useState)(true),
    _useState4 = _slicedToArray(_useState3, 2),
    isLoading = _useState4[0],
    setIsLoading = _useState4[1];
  var _useState5 = (0, _react.useState)(''),
    _useState6 = _slicedToArray(_useState5, 2),
    error = _useState6[0],
    setError = _useState6[1];
  var _useState7 = (0, _react.useState)(''),
    _useState8 = _slicedToArray(_useState7, 2),
    search = _useState8[0],
    setSearch = _useState8[1];
  var _useState9 = (0, _react.useState)('all'),
    _useState0 = _slicedToArray(_useState9, 2),
    statusFilter = _useState0[0],
    setStatusFilter = _useState0[1];
  (0, _react.useEffect)(function () {
    var cancelled = false;
    (0, _client.apiFetch)('/vehicles').then(function (data) {
      if (!cancelled) setVehicles(data.vehicles || []);
    })["catch"](function (err) {
      if (!cancelled) setError(err instanceof _client.ApiError ? err.message : 'Erreur de chargement.');
    })["finally"](function () {
      if (!cancelled) setIsLoading(false);
    });
    return function () {
      cancelled = true;
    };
  }, []);
  var mappedVehicles = vehicles.map(function (v) {
    var _v$health_score, _v$health_score2, _v$health_score3;
    return {
      id: v.id,
      make: v.make,
      model: v.model,
      year: v.year,
      mileage: v.current_mileage_km,
      healthScore: (_v$health_score = v.health_score) !== null && _v$health_score !== void 0 ? _v$health_score : 100,
      status: ((_v$health_score2 = v.health_score) !== null && _v$health_score2 !== void 0 ? _v$health_score2 : 100) >= 70 ? 'healthy' : ((_v$health_score3 = v.health_score) !== null && _v$health_score3 !== void 0 ? _v$health_score3 : 100) >= 40 ? 'warning' : 'critical'
    };
  });
  var filtered = mappedVehicles.filter(function (v) {
    var matchesSearch = "".concat(v.make, " ").concat(v.model).toLowerCase().includes(search.toLowerCase());
    var matchesStatus = statusFilter === 'all' || v.status === statusFilter;
    return matchesSearch && matchesStatus;
  });
  if (isLoading) {
    return /*#__PURE__*/(0, _jsxRuntime.jsx)("main", {
      className: "vehicles-list-page",
      children: /*#__PURE__*/(0, _jsxRuntime.jsx)("p", {
        className: "dashboard-loading",
        children: "Chargement..."
      })
    });
  }
  if (error) {
    return /*#__PURE__*/(0, _jsxRuntime.jsx)("main", {
      className: "vehicles-list-page",
      children: /*#__PURE__*/(0, _jsxRuntime.jsx)("p", {
        className: "dashboard-error",
        children: error
      })
    });
  }
  return /*#__PURE__*/(0, _jsxRuntime.jsxs)("main", {
    className: "vehicles-list-page",
    children: [/*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
      className: "vehicles-list-header",
      children: [/*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
        children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("h1", {
          className: "vehicles-list-title",
          children: "V\xE9hicules"
        }), /*#__PURE__*/(0, _jsxRuntime.jsxs)("p", {
          className: "vehicles-list-subtitle",
          children: [vehicles.length, " v\xE9hicule(s) enregistr\xE9(s)"]
        })]
      }), /*#__PURE__*/(0, _jsxRuntime.jsxs)(_reactRouterDom.Link, {
        to: "/vehicles/new",
        className: "vehicles-list-add-btn",
        children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_fa.FaPlus, {}), " Ajouter un v\xE9hicule"]
      })]
    }), /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
      className: "vehicles-list-controls",
      children: [/*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
        className: "vehicles-list-search",
        children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_fa.FaSearch, {
          className: "vehicles-list-search-icon"
        }), /*#__PURE__*/(0, _jsxRuntime.jsx)("input", {
          type: "text",
          placeholder: "Rechercher un v\xE9hicule...",
          value: search,
          onChange: function onChange(e) {
            return setSearch(e.target.value);
          },
          className: "vehicles-list-search-input"
        })]
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
        className: "vehicles-list-filters",
        children: ['all', 'healthy', 'warning', 'critical'].map(function (status) {
          return /*#__PURE__*/(0, _jsxRuntime.jsx)("button", {
            type: "button",
            className: "vehicles-list-filter ".concat(statusFilter === status ? 'vehicles-list-filter-active' : ''),
            onClick: function onClick() {
              return setStatusFilter(status);
            },
            children: status === 'all' ? 'Tous' : status === 'healthy' ? 'Sains' : status === 'warning' ? 'À surveiller' : 'Critiques'
          }, status);
        })
      })]
    }), filtered.length > 0 ? /*#__PURE__*/(0, _jsxRuntime.jsx)(_VehicleCardGrid["default"], {
      vehicles: filtered
    }) : vehicles.length === 0 ? /*#__PURE__*/(0, _jsxRuntime.jsx)("p", {
      className: "vehicles-list-empty",
      children: "Aucun v\xE9hicule enregistr\xE9. Ajoutez-en un pour commencer."
    }) : /*#__PURE__*/(0, _jsxRuntime.jsx)("p", {
      className: "vehicles-list-empty",
      children: "Aucun v\xE9hicule ne correspond \xE0 ta recherche."
    })]
  });
}