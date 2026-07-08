"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = Register;
var _react = require("react");
var _fa = require("react-icons/fa");
var _AuthLayout = _interopRequireDefault(require("./AuthLayout"));
var _SocialLoginButtons = _interopRequireDefault(require("./SocialLoginButtons"));
require("./Login.css");
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
function Register() {
  var _useState = (0, _react.useState)({
      name: '',
      email: '',
      password: '',
      confirmPassword: ''
    }),
    _useState2 = _slicedToArray(_useState, 2),
    formData = _useState2[0],
    setFormData = _useState2[1];
  var _useState3 = (0, _react.useState)(''),
    _useState4 = _slicedToArray(_useState3, 2),
    error = _useState4[0],
    setError = _useState4[1];
  var handleChange = function handleChange(e) {
    setFormData(_objectSpread(_objectSpread({}, formData), {}, _defineProperty({}, e.target.name, e.target.value)));
    setError('');
  };
  var handleSubmit = function handleSubmit(e) {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      setError('Les mots de passe ne correspondent pas.');
      return;
    }
    if (formData.password.length < 8) {
      setError('Le mot de passe doit contenir au moins 8 caractères.');
      return;
    }
    console.log('Register submit', formData);
  };
  return /*#__PURE__*/(0, _jsxRuntime.jsxs)(_AuthLayout["default"], {
    title: "Cr\xE9er votre compte",
    subtitle: "Commencez \xE0 surveiller vos v\xE9hicules gratuitement",
    footerText: "Vous avez d\xE9j\xE0 un compte ?",
    footerLinkText: "Se connecter",
    footerLinkPath: "/auth/login",
    children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_SocialLoginButtons["default"], {}), /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
      className: "auth-divider",
      children: /*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
        children: "ou"
      })
    }), /*#__PURE__*/(0, _jsxRuntime.jsxs)("form", {
      className: "auth-form",
      onSubmit: handleSubmit,
      children: [/*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
        className: "auth-field",
        children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("label", {
          className: "auth-label",
          children: "Nom complet"
        }), /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
          className: "auth-input-wrap",
          children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_fa.FaUser, {
            className: "auth-input-icon"
          }), /*#__PURE__*/(0, _jsxRuntime.jsx)("input", {
            type: "text",
            name: "name",
            className: "auth-input",
            placeholder: "Jean Dupont",
            value: formData.name,
            onChange: handleChange,
            required: true
          })]
        })]
      }), /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
        className: "auth-field",
        children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("label", {
          className: "auth-label",
          children: "Email"
        }), /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
          className: "auth-input-wrap",
          children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_fa.FaEnvelope, {
            className: "auth-input-icon"
          }), /*#__PURE__*/(0, _jsxRuntime.jsx)("input", {
            type: "email",
            name: "email",
            className: "auth-input",
            placeholder: "vous@exemple.com",
            value: formData.email,
            onChange: handleChange,
            required: true
          })]
        })]
      }), /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
        className: "auth-field",
        children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("label", {
          className: "auth-label",
          children: "Mot de passe"
        }), /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
          className: "auth-input-wrap",
          children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_fa.FaLock, {
            className: "auth-input-icon"
          }), /*#__PURE__*/(0, _jsxRuntime.jsx)("input", {
            type: "password",
            name: "password",
            className: "auth-input",
            placeholder: "8 caract\xE8res minimum",
            value: formData.password,
            onChange: handleChange,
            required: true
          })]
        })]
      }), /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
        className: "auth-field",
        children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("label", {
          className: "auth-label",
          children: "Confirmer le mot de passe"
        }), /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
          className: "auth-input-wrap",
          children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_fa.FaLock, {
            className: "auth-input-icon"
          }), /*#__PURE__*/(0, _jsxRuntime.jsx)("input", {
            type: "password",
            name: "confirmPassword",
            className: "auth-input",
            placeholder: "\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022",
            value: formData.confirmPassword,
            onChange: handleChange,
            required: true
          })]
        })]
      }), error && /*#__PURE__*/(0, _jsxRuntime.jsx)("p", {
        className: "auth-error",
        children: error
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)("button", {
        type: "submit",
        className: "auth-submit",
        children: "Cr\xE9er mon compte"
      })]
    })]
  });
}