"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = Profile;
var _react = require("react");
var _reactRouterDom = require("react-router-dom");
var _fa = require("react-icons/fa");
var _client = require("../../api/client");
require("./profilePage.css");
var _jsxRuntime = require("react/jsx-runtime");
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
function Profile() {
  var _useState = (0, _react.useState)(null),
    _useState2 = _slicedToArray(_useState, 2),
    user = _useState2[0],
    setUser = _useState2[1];
  var _useState3 = (0, _react.useState)(0),
    _useState4 = _slicedToArray(_useState3, 2),
    vehicleCount = _useState4[0],
    setVehicleCount = _useState4[1];
  var _useState5 = (0, _react.useState)(0),
    _useState6 = _slicedToArray(_useState5, 2),
    activeAlerts = _useState6[0],
    setActiveAlerts = _useState6[1];
  var _useState7 = (0, _react.useState)(true),
    _useState8 = _slicedToArray(_useState7, 2),
    isLoading = _useState8[0],
    setIsLoading = _useState8[1];
  var _useState9 = (0, _react.useState)(''),
    _useState0 = _slicedToArray(_useState9, 2),
    error = _useState0[0],
    setError = _useState0[1];
  (0, _react.useEffect)(function () {
    var cancelled = false;
    Promise.all([(0, _client.apiFetch)('/auth/me'), (0, _client.apiFetch)('/vehicles'), (0, _client.apiFetch)('/notifications')]).then(function (_ref) {
      var _ref2 = _slicedToArray(_ref, 3),
        meData = _ref2[0],
        vehiclesData = _ref2[1],
        notifData = _ref2[2];
      if (cancelled) return;
      setUser(meData.user);
      setVehicleCount((vehiclesData.vehicles || []).length);
      setActiveAlerts((notifData.notifications || []).filter(function (n) {
        return !n.is_read;
      }).length);
    })["catch"](function (err) {
      if (!cancelled) setError(err instanceof _client.ApiError ? err.message : 'Erreur de chargement.');
    })["finally"](function () {
      if (!cancelled) setIsLoading(false);
    });
    return function () {
      cancelled = true;
    };
  }, []);
  if (isLoading) {
    return /*#__PURE__*/(0, _jsxRuntime.jsx)("main", {
      className: "profile-page",
      children: /*#__PURE__*/(0, _jsxRuntime.jsx)("p", {
        className: "dashboard-loading",
        children: "Chargement..."
      })
    });
  }
  if (error || !user) {
    return /*#__PURE__*/(0, _jsxRuntime.jsx)("main", {
      className: "profile-page",
      children: /*#__PURE__*/(0, _jsxRuntime.jsx)("p", {
        className: "dashboard-error",
        children: error || 'Profil introuvable.'
      })
    });
  }
  var memberSince = new Date(user.created_at).toLocaleDateString('fr-FR', {
    month: 'long',
    year: 'numeric'
  });
  return /*#__PURE__*/(0, _jsxRuntime.jsxs)("main", {
    className: "profile-page",
    children: [/*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
      className: "profile-card",
      children: [/*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
        className: "profile-avatar-section",
        children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
          className: "profile-avatar",
          children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_fa.FaUserCircle, {
            className: "profile-avatar-icon"
          })
        }), /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
          className: "profile-identity",
          children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("h1", {
            className: "profile-name",
            children: user.name
          }), /*#__PURE__*/(0, _jsxRuntime.jsx)("p", {
            className: "profile-email",
            children: user.email
          }), /*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
            className: "profile-role-badge",
            children: user.role === 'admin' ? 'Administrateur' : 'Utilisateur standard'
          })]
        }), /*#__PURE__*/(0, _jsxRuntime.jsxs)(_reactRouterDom.Link, {
          to: "/settings",
          className: "profile-edit-btn",
          children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_fa.FaEdit, {}), " Modifier le profil"]
        })]
      }), /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
        className: "profile-meta",
        children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_fa.FaCalendarAlt, {
          className: "profile-meta-icon"
        }), "Membre depuis ", memberSince]
      })]
    }), /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
      className: "profile-stats-grid",
      children: [/*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
        className: "profile-stat-card",
        children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_fa.FaCar, {
          className: "profile-stat-icon"
        }), /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
          className: "profile-stat-text",
          children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
            className: "profile-stat-value",
            children: vehicleCount
          }), /*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
            className: "profile-stat-label",
            children: "V\xE9hicules suivis"
          })]
        })]
      }), /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
        className: "profile-stat-card",
        children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_fa.FaExclamationTriangle, {
          className: "profile-stat-icon profile-stat-icon-warning"
        }), /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
          className: "profile-stat-text",
          children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
            className: "profile-stat-value",
            children: activeAlerts
          }), /*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
            className: "profile-stat-label",
            children: "Alertes actives"
          })]
        })]
      })]
    })]
  });
}