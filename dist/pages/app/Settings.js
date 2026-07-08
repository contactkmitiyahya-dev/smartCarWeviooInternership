"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = Settings;
var _react = require("react");
var _SettingsTabs = _interopRequireDefault(require("../../components/settings/SettingsTabs"));
var _ProfileForm = _interopRequireDefault(require("../../components/settings/ProfileForm"));
var _NotificationPreferences = _interopRequireDefault(require("../../components/settings/NotificationPreferences"));
var _LanguagePicker = _interopRequireDefault(require("../../components/settings/LanguagePicker"));
var _ThemeToggle = _interopRequireDefault(require("../../components/settings/ThemeToggle"));
require("./settingsPage.css");
var _jsxRuntime = require("react/jsx-runtime");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
function Settings() {
  var _useState = (0, _react.useState)('profile'),
    _useState2 = _slicedToArray(_useState, 2),
    activeTab = _useState2[0],
    setActiveTab = _useState2[1];
  return /*#__PURE__*/(0, _jsxRuntime.jsxs)("main", {
    className: "settings-page",
    children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("h1", {
      className: "settings-page-title",
      children: "Param\xE8tres"
    }), /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
      className: "settings-layout",
      children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_SettingsTabs["default"], {
        activeTab: activeTab,
        onChange: setActiveTab
      }), /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
        className: "settings-content",
        children: [activeTab === 'profile' && /*#__PURE__*/(0, _jsxRuntime.jsx)(_ProfileForm["default"], {}), activeTab === 'notifications' && /*#__PURE__*/(0, _jsxRuntime.jsx)(_NotificationPreferences["default"], {}), activeTab === 'language' && /*#__PURE__*/(0, _jsxRuntime.jsx)(_LanguagePicker["default"], {}), activeTab === 'theme' && /*#__PURE__*/(0, _jsxRuntime.jsx)(_ThemeToggle["default"], {})]
      })]
    })]
  });
}