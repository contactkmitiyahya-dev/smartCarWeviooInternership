"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = Notifications;
var _react = require("react");
var _testData = require("../../data/testData.js");
var _FilterTabs = _interopRequireDefault(require("../../components/notifications/FilterTabs"));
var _AlertList = _interopRequireDefault(require("../../components/notifications/AlertList"));
require("./Notificationstyle.css");
var _jsxRuntime = require("react/jsx-runtime");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
function Notifications() {
  var _useState = (0, _react.useState)(_testData.allNotifications),
    _useState2 = _slicedToArray(_useState, 2),
    notifications = _useState2[0],
    setNotifications = _useState2[1];
  var _useState3 = (0, _react.useState)('all'),
    _useState4 = _slicedToArray(_useState3, 2),
    activeTab = _useState4[0],
    setActiveTab = _useState4[1];
  var counts = {
    all: notifications.length,
    critical: notifications.filter(function (n) {
      return n.severity === 'critical';
    }).length,
    warning: notifications.filter(function (n) {
      return n.severity === 'warning';
    }).length,
    info: notifications.filter(function (n) {
      return n.severity === 'info';
    }).length
  };
  var filtered = activeTab === 'all' ? notifications : notifications.filter(function (n) {
    return n.severity === activeTab;
  });
  var handleAcknowledge = function handleAcknowledge(id) {
    setNotifications(notifications.map(function (n) {
      return n.id === id ? _objectSpread(_objectSpread({}, n), {}, {
        acknowledged: true
      }) : n;
    }));
  };
  return /*#__PURE__*/(0, _jsxRuntime.jsxs)("main", {
    className: "notifications-page",
    children: [/*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
      className: "notifications-header",
      children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("h1", {
        className: "notifications-title",
        children: "Notifications"
      }), /*#__PURE__*/(0, _jsxRuntime.jsxs)("p", {
        className: "notifications-subtitle",
        children: [notifications.filter(function (n) {
          return !n.acknowledged;
        }).length, " non trait\xE9e(s)"]
      })]
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_FilterTabs["default"], {
      activeTab: activeTab,
      onChange: setActiveTab,
      counts: counts
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_AlertList["default"], {
      notifications: filtered,
      onAcknowledge: handleAcknowledge
    })]
  });
}