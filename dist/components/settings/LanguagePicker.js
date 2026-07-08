"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = LanguagePicker;
var _react = require("react");
require("./languagePicker.css");
var _jsxRuntime = require("react/jsx-runtime");
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
var languages = [{
  code: 'fr',
  label: 'Français',
  flag: '🇫🇷'
}, {
  code: 'en',
  label: 'English',
  flag: '🇬🇧'
}];
function LanguagePicker() {
  var _useState = (0, _react.useState)('fr'),
    _useState2 = _slicedToArray(_useState, 2),
    selected = _useState2[0],
    setSelected = _useState2[1];
  return /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
    className: "language-picker",
    children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("h2", {
      className: "settings-form-title",
      children: "Langue"
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)("p", {
      className: "settings-form-desc",
      children: "Choisissez la langue d'affichage de l'application."
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
      className: "language-options",
      children: languages.map(function (lang) {
        return /*#__PURE__*/(0, _jsxRuntime.jsxs)("button", {
          type: "button",
          className: "language-option ".concat(selected === lang.code ? 'language-option-active' : ''),
          onClick: function onClick() {
            return setSelected(lang.code);
          },
          children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
            className: "language-flag",
            children: lang.flag
          }), lang.label]
        }, lang.code);
      })
    })]
  });
}