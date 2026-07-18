"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = UserDashboard;
var _react = require("react");
var _client = require("../../api/client");
var _VehicleCardGrid = _interopRequireDefault(require("../../components/frontApp/VehicleCardGrid.js"));
var _HealthScoreSummary = _interopRequireDefault(require("../../components/frontApp/HealthScoreSummary"));
var _RecentAlerts = _interopRequireDefault(require("../../components/frontApp/RecentAlerts.js"));
var _QuickActions = _interopRequireDefault(require("../../components/frontApp/QuickActions.js"));
require("./userDashboard.css");
var _jsxRuntime = require("react/jsx-runtime");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
function _regenerator() { /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */ var e, t, r = "function" == typeof Symbol ? Symbol : {}, n = r.iterator || "@@iterator", o = r.toStringTag || "@@toStringTag"; function i(r, n, o, i) { var c = n && n.prototype instanceof Generator ? n : Generator, u = Object.create(c.prototype); return _regeneratorDefine2(u, "_invoke", function (r, n, o) { var i, c, u, f = 0, p = o || [], y = !1, G = { p: 0, n: 0, v: e, a: d, f: d.bind(e, 4), d: function d(t, r) { return i = t, c = 0, u = e, G.n = r, a; } }; function d(r, n) { for (c = r, u = n, t = 0; !y && f && !o && t < p.length; t++) { var o, i = p[t], d = G.p, l = i[2]; r > 3 ? (o = l === n) && (u = i[(c = i[4]) ? 5 : (c = 3, 3)], i[4] = i[5] = e) : i[0] <= d && ((o = r < 2 && d < i[1]) ? (c = 0, G.v = n, G.n = i[1]) : d < l && (o = r < 3 || i[0] > n || n > l) && (i[4] = r, i[5] = n, G.n = l, c = 0)); } if (o || r > 1) return a; throw y = !0, n; } return function (o, p, l) { if (f > 1) throw TypeError("Generator is already running"); for (y && 1 === p && d(p, l), c = p, u = l; (t = c < 2 ? e : u) || !y;) { i || (c ? c < 3 ? (c > 1 && (G.n = -1), d(c, u)) : G.n = u : G.v = u); try { if (f = 2, i) { if (c || (o = "next"), t = i[o]) { if (!(t = t.call(i, u))) throw TypeError("iterator result is not an object"); if (!t.done) return t; u = t.value, c < 2 && (c = 0); } else 1 === c && (t = i["return"]) && t.call(i), c < 2 && (u = TypeError("The iterator does not provide a '" + o + "' method"), c = 1); i = e; } else if ((t = (y = G.n < 0) ? u : r.call(n, G)) !== a) break; } catch (t) { i = e, c = 1, u = t; } finally { f = 1; } } return { value: t, done: y }; }; }(r, o, i), !0), u; } var a = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} t = Object.getPrototypeOf; var c = [][n] ? t(t([][n]())) : (_regeneratorDefine2(t = {}, n, function () { return this; }), t), u = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(c); function f(e) { return Object.setPrototypeOf ? Object.setPrototypeOf(e, GeneratorFunctionPrototype) : (e.__proto__ = GeneratorFunctionPrototype, _regeneratorDefine2(e, o, "GeneratorFunction")), e.prototype = Object.create(u), e; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, _regeneratorDefine2(u, "constructor", GeneratorFunctionPrototype), _regeneratorDefine2(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = "GeneratorFunction", _regeneratorDefine2(GeneratorFunctionPrototype, o, "GeneratorFunction"), _regeneratorDefine2(u), _regeneratorDefine2(u, o, "Generator"), _regeneratorDefine2(u, n, function () { return this; }), _regeneratorDefine2(u, "toString", function () { return "[object Generator]"; }), (_regenerator = function _regenerator() { return { w: i, m: f }; })(); }
function _regeneratorDefine2(e, r, n, t) { var i = Object.defineProperty; try { i({}, "", {}); } catch (e) { i = 0; } _regeneratorDefine2 = function _regeneratorDefine(e, r, n, t) { function o(r, n) { _regeneratorDefine2(e, r, function (e) { return this._invoke(r, n, e); }); } r ? i ? i(e, r, { value: n, enumerable: !t, configurable: !t, writable: !t }) : e[r] = n : (o("next", 0), o("throw", 1), o("return", 2)); }, _regeneratorDefine2(e, r, n, t); }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
function UserDashboard() {
  var _useState = (0, _react.useState)([]),
    _useState2 = _slicedToArray(_useState, 2),
    vehicles = _useState2[0],
    setVehicles = _useState2[1];
  var _useState3 = (0, _react.useState)([]),
    _useState4 = _slicedToArray(_useState3, 2),
    notifications = _useState4[0],
    setNotifications = _useState4[1];
  var _useState5 = (0, _react.useState)(true),
    _useState6 = _slicedToArray(_useState5, 2),
    isLoading = _useState6[0],
    setIsLoading = _useState6[1];
  var _useState7 = (0, _react.useState)(''),
    _useState8 = _slicedToArray(_useState7, 2),
    error = _useState8[0],
    setError = _useState8[1];
  (0, _react.useEffect)(function () {
    var cancelled = false;
    function loadData() {
      return _loadData.apply(this, arguments);
    }
    function _loadData() {
      _loadData = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee() {
        var _yield$Promise$all, _yield$Promise$all2, vehiclesData, notifData, _t;
        return _regenerator().w(function (_context) {
          while (1) switch (_context.p = _context.n) {
            case 0:
              _context.p = 0;
              _context.n = 1;
              return Promise.all([(0, _client.apiFetch)('/vehicles'), (0, _client.apiFetch)('/notifications')]);
            case 1:
              _yield$Promise$all = _context.v;
              _yield$Promise$all2 = _slicedToArray(_yield$Promise$all, 2);
              vehiclesData = _yield$Promise$all2[0];
              notifData = _yield$Promise$all2[1];
              if (!cancelled) {
                setVehicles(vehiclesData.vehicles || []);
                setNotifications(notifData.notifications || []);
              }
              _context.n = 3;
              break;
            case 2:
              _context.p = 2;
              _t = _context.v;
              if (!cancelled) {
                setError(_t instanceof _client.ApiError ? _t.message : 'Impossible de charger le tableau de bord.');
              }
            case 3:
              _context.p = 3;
              if (!cancelled) setIsLoading(false);
              return _context.f(3);
            case 4:
              return _context.a(2);
          }
        }, _callee, null, [[0, 2, 3, 4]]);
      }));
      return _loadData.apply(this, arguments);
    }
    loadData();
    return function () {
      cancelled = true;
    };
  }, []);
  var summary = {
    total: vehicles.length,
    healthy: vehicles.filter(function (v) {
      var _v$health_score;
      return ((_v$health_score = v.health_score) !== null && _v$health_score !== void 0 ? _v$health_score : 100) >= 70;
    }).length,
    warning: vehicles.filter(function (v) {
      var _v$health_score2, _v$health_score3;
      return ((_v$health_score2 = v.health_score) !== null && _v$health_score2 !== void 0 ? _v$health_score2 : 100) >= 40 && ((_v$health_score3 = v.health_score) !== null && _v$health_score3 !== void 0 ? _v$health_score3 : 100) < 70;
    }).length,
    critical: vehicles.filter(function (v) {
      var _v$health_score4;
      return ((_v$health_score4 = v.health_score) !== null && _v$health_score4 !== void 0 ? _v$health_score4 : 100) < 40;
    }).length
  };
  var mappedVehicles = vehicles.map(function (v) {
    var _v$health_score5, _v$health_score6, _v$health_score7;
    return {
      id: v.id,
      make: v.make,
      model: v.model,
      year: v.year,
      mileage: v.current_mileage_km,
      healthScore: (_v$health_score5 = v.health_score) !== null && _v$health_score5 !== void 0 ? _v$health_score5 : 100,
      status: ((_v$health_score6 = v.health_score) !== null && _v$health_score6 !== void 0 ? _v$health_score6 : 100) >= 70 ? 'healthy' : ((_v$health_score7 = v.health_score) !== null && _v$health_score7 !== void 0 ? _v$health_score7 : 100) >= 40 ? 'warning' : 'critical'
    };
  });
  var mappedAlerts = notifications.filter(function (n) {
    return !n.is_read;
  }).slice(0, 3).map(function (n) {
    return {
      id: n.id,
      vehicleId: n.vehicle_id,
      vehicleName: n.make ? "".concat(n.make, " ").concat(n.model) : 'Véhicule',
      severity: n.type,
      message: n.message,
      date: new Date(n.created_at).toLocaleDateString('fr-FR')
    };
  });
  if (isLoading) {
    return /*#__PURE__*/(0, _jsxRuntime.jsx)("main", {
      className: "app-dashboard",
      children: /*#__PURE__*/(0, _jsxRuntime.jsx)("p", {
        className: "dashboard-loading",
        children: "Chargement..."
      })
    });
  }
  if (error) {
    return /*#__PURE__*/(0, _jsxRuntime.jsx)("main", {
      className: "app-dashboard",
      children: /*#__PURE__*/(0, _jsxRuntime.jsx)("p", {
        className: "dashboard-error",
        children: error
      })
    });
  }
  return /*#__PURE__*/(0, _jsxRuntime.jsxs)("main", {
    className: "app-dashboard",
    children: [/*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
      className: "app-dashboard-header",
      children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("h1", {
        className: "app-dashboard-title",
        children: "Tableau de bord"
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)("p", {
        className: "app-dashboard-subtitle",
        children: "Vue d'ensemble de vos v\xE9hicules"
      })]
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_HealthScoreSummary["default"], {
      summary: summary
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_QuickActions["default"], {}), /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
      className: "app-dashboard-grid",
      children: [/*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
        className: "app-dashboard-main",
        children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("h2", {
          className: "app-dashboard-section-title",
          children: "Vos v\xE9hicules"
        }), mappedVehicles.length > 0 ? /*#__PURE__*/(0, _jsxRuntime.jsx)(_VehicleCardGrid["default"], {
          vehicles: mappedVehicles
        }) : /*#__PURE__*/(0, _jsxRuntime.jsx)("p", {
          className: "dashboard-empty",
          children: "Aucun v\xE9hicule pour l'instant. Ajoutez-en un pour commencer."
        })]
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
        className: "app-dashboard-side",
        children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_RecentAlerts["default"], {
          alerts: mappedAlerts
        })
      })]
    })]
  });
}