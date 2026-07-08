"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = Footer;
var _reactRouterDom = require("react-router-dom");
var _fa = require("react-icons/fa");
require("./footer.css");
var _jsxRuntime = require("react/jsx-runtime");
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
var footerLinks = {
  Produit: [{
    label: 'Fonctionnalités',
    path: '/features'
  }, {
    label: 'Tarifs',
    path: '/pricing'
  }, {
    label: 'Démo',
    path: '/demo'
  }],
  Entreprise: [{
    label: 'Contact',
    path: '/contact'
  }, {
    label: 'À propos',
    path: '/about'
  }],
  Légal: [{
    label: "Conditions d'utilisation",
    path: '/terms'
  }, {
    label: 'Confidentialité',
    path: '/privacy'
  }]
};
function Footer() {
  return /*#__PURE__*/(0, _jsxRuntime.jsxs)("footer", {
    className: "landing-footer",
    children: [/*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
      className: "footer-top",
      children: [/*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
        className: "footer-brand",
        children: [/*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
          className: "footer-logo",
          children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_fa.FaCar, {
            className: "footer-logo-icon"
          }), /*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
            className: "footer-logo-text",
            children: "SmartCar"
          })]
        }), /*#__PURE__*/(0, _jsxRuntime.jsx)("p", {
          className: "footer-tagline",
          children: "La surveillance intelligente de vos v\xE9hicules, propuls\xE9e par l'IA."
        }), /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
          className: "footer-socials",
          children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("a", {
            href: "https://github.com",
            className: "footer-social-link",
            "aria-label": "GitHub",
            children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_fa.FaGithub, {})
          }), /*#__PURE__*/(0, _jsxRuntime.jsx)("a", {
            href: "https://linkedin.com",
            className: "footer-social-link",
            "aria-label": "LinkedIn",
            children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_fa.FaLinkedin, {})
          }), /*#__PURE__*/(0, _jsxRuntime.jsx)("a", {
            href: "https://twitter.com",
            className: "footer-social-link",
            "aria-label": "Twitter",
            children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_fa.FaTwitter, {})
          })]
        })]
      }), Object.entries(footerLinks).map(function (_ref) {
        var _ref2 = _slicedToArray(_ref, 2),
          section = _ref2[0],
          links = _ref2[1];
        return /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
          className: "footer-column",
          children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("h4", {
            className: "footer-column-title",
            children: section
          }), links.map(function (link) {
            return /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactRouterDom.Link, {
              to: link.path,
              className: "footer-link",
              children: link.label
            }, link.path);
          })]
        }, section);
      })]
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
      className: "footer-bottom",
      children: /*#__PURE__*/(0, _jsxRuntime.jsx)("p", {
        className: "footer-copyright",
        children: "\xA9 2026 SmartCar. Tous droits r\xE9serv\xE9s."
      })
    })]
  });
}