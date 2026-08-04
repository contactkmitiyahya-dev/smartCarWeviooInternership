"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = Maintenance;
var _react = require("react");
var _reactRouterDom = require("react-router-dom");
var _fa = require("react-icons/fa");
var _client = require("../../api/client");
var _MaintenanceTimeline = _interopRequireDefault(require("../../components/maintenance/MaintenanceTimeline"));
var _ServiceDueReminders = _interopRequireDefault(require("../../components/maintenance/ServiceDueReminders"));
var _AddServiceForm = _interopRequireDefault(require("../../components/maintenance/AddServiceForm"));
require("./maintenance.css");
var _jsxRuntime = require("react/jsx-runtime");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
function _toConsumableArray(r) { return _arrayWithoutHoles(r) || _iterableToArray(r) || _unsupportedIterableToArray(r) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArray(r) { if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r); }
function _arrayWithoutHoles(r) { if (Array.isArray(r)) return _arrayLikeToArray(r); }
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
function computeUrgency(dueDateStr) {
  var daysLeft = (new Date(dueDateStr) - new Date()) / (1000 * 60 * 60 * 24);
  if (daysLeft <= 14) return 'high';
  if (daysLeft <= 45) return 'medium';
  return 'low';
}
function Maintenance() {
  var _useParams = (0, _reactRouterDom.useParams)(),
    id = _useParams.id;
  var navigate = (0, _reactRouterDom.useNavigate)();
  var _useState = (0, _react.useState)(null),
    _useState2 = _slicedToArray(_useState, 2),
    vehicle = _useState2[0],
    setVehicle = _useState2[1];
  var _useState3 = (0, _react.useState)([]),
    _useState4 = _slicedToArray(_useState3, 2),
    history = _useState4[0],
    setHistory = _useState4[1];
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
    function load() {
      return _load.apply(this, arguments);
    }
    function _load() {
      _load = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee() {
        var _yield$Promise$all, _yield$Promise$all2, vehicleData, maintenanceData, _t;
        return _regenerator().w(function (_context) {
          while (1) switch (_context.p = _context.n) {
            case 0:
              _context.p = 0;
              _context.n = 1;
              return Promise.all([(0, _client.apiFetch)("/vehicles/".concat(id)), (0, _client.apiFetch)("/maintenance/vehicles/".concat(id))]);
            case 1:
              _yield$Promise$all = _context.v;
              _yield$Promise$all2 = _slicedToArray(_yield$Promise$all, 2);
              vehicleData = _yield$Promise$all2[0];
              maintenanceData = _yield$Promise$all2[1];
              if (!cancelled) {
                _context.n = 2;
                break;
              }
              return _context.a(2);
            case 2:
              setVehicle(vehicleData.vehicle);
              setHistory(maintenanceData.records || []);
              _context.n = 4;
              break;
            case 3:
              _context.p = 3;
              _t = _context.v;
              if (!cancelled) setError(_t instanceof _client.ApiError ? _t.message : 'Véhicule introuvable.');
            case 4:
              _context.p = 4;
              if (!cancelled) setIsLoading(false);
              return _context.f(4);
            case 5:
              return _context.a(2);
          }
        }, _callee, null, [[0, 3, 4, 5]]);
      }));
      return _load.apply(this, arguments);
    }
    load();
    return function () {
      cancelled = true;
    };
  }, [id]);
  var handleAddService = /*#__PURE__*/function () {
    var _ref = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee2(formData) {
      var result, _t2;
      return _regenerator().w(function (_context2) {
        while (1) switch (_context2.p = _context2.n) {
          case 0:
            _context2.p = 0;
            _context2.n = 1;
            return (0, _client.apiFetch)("/maintenance/vehicles/".concat(id), {
              method: 'POST',
              body: JSON.stringify({
                service_date: formData.date,
                service_type: formData.type,
                mileage_at_service_km: Number(formData.mileage),
                cost: formData.cost !== '' ? Number(formData.cost) : null,
                notes: formData.notes || null,
                next_due_date: formData.nextDueDate || null,
                next_due_km: formData.nextDueMileage || null
              })
            });
          case 1:
            result = _context2.v;
            setHistory([result.record].concat(_toConsumableArray(history)));
            _context2.n = 3;
            break;
          case 2:
            _context2.p = 2;
            _t2 = _context2.v;
            setError(_t2 instanceof _client.ApiError ? _t2.message : 'Erreur lors de l\'ajout de l\'entretien.');
          case 3:
            return _context2.a(2);
        }
      }, _callee2, null, [[0, 2]]);
    }));
    return function handleAddService(_x) {
      return _ref.apply(this, arguments);
    };
  }();
  var mappedHistory = history.map(function (r) {
    return {
      id: r.id,
      type: r.service_type,
      date: r.service_date,
      mileage: r.mileage_at_service_km,
      cost: r.cost,
      notes: r.notes
    };
  });
  var upcoming = history.filter(function (r) {
    return r.next_due_date;
  }).map(function (r) {
    return {
      id: "due-".concat(r.id),
      type: r.service_type,
      dueDate: r.next_due_date,
      dueMileage: r.next_due_km,
      urgency: computeUrgency(r.next_due_date)
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
  if (error && !vehicle) {
    return /*#__PURE__*/(0, _jsxRuntime.jsx)("main", {
      className: "maintenance-page",
      children: /*#__PURE__*/(0, _jsxRuntime.jsxs)("p", {
        className: "vehicle-not-found",
        children: [error, " ", /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactRouterDom.Link, {
          to: "/dashboard",
          children: "Retour au tableau de bord"
        })]
      })
    });
  }
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
        children: [vehicle.make, " ", vehicle.model, " \u2014 ", vehicle.plate_number]
      })]
    }), error && /*#__PURE__*/(0, _jsxRuntime.jsx)("p", {
      className: "auth-error",
      style: {
        marginBottom: '16px'
      },
      children: error
    }), /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
      className: "maintenance-grid",
      children: [/*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
        className: "maintenance-main",
        children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_AddServiceForm["default"], {
          onAdd: handleAddService
        }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_MaintenanceTimeline["default"], {
          history: mappedHistory
        })]
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
        className: "maintenance-side",
        children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_ServiceDueReminders["default"], {
          upcoming: upcoming
        })
      })]
    })]
  });
}