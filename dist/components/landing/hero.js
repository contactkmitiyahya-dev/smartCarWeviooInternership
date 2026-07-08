"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = Hero;
var _react = require("react");
var _reactRouterDom = require("react-router-dom");
var _fa = require("react-icons/fa");
var _VariableProximity = _interopRequireDefault(require("../stylingComposants/VariableProximity"));
require("./hero.css");
var _jsxRuntime = require("react/jsx-runtime");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
function Hero() {
  var containerRef = (0, _react.useRef)(null);
  return /*#__PURE__*/(0, _jsxRuntime.jsxs)("section", {
    className: "hero",
    ref: containerRef,
    children: [/*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
      className: "hero-badge",
      children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
        className: "hero-badge-dot"
      }), "Surveillance intelligente en temps r\xE9el"]
    }), /*#__PURE__*/(0, _jsxRuntime.jsxs)("h1", {
      className: "hero-title",
      children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_VariableProximity["default"], {
        label: "Anticipez les pannes de vos v\xE9hicules ",
        className: "hero-title-proximity",
        fromFontVariationSettings: "'wght' 400, 'opsz' 9",
        toFontVariationSettings: "'wght' 900, 'opsz' 40",
        containerRef: containerRef,
        radius: 140,
        falloff: "linear"
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_VariableProximity["default"], {
        label: "avant qu'elles n'arrivent",
        className: "hero-title-proximity hero-title-accent",
        fromFontVariationSettings: "'wght' 400, 'opsz' 9",
        toFontVariationSettings: "'wght' 900, 'opsz' 40",
        containerRef: containerRef,
        radius: 140,
        falloff: "linear"
      })]
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)("p", {
      className: "hero-subtitle",
      children: "SmartCar analyse en continu l'\xE9tat de vos v\xE9hicules, d\xE9tecte les anomalies et pr\xE9dit les besoins de maintenance gr\xE2ce \xE0 l'intelligence artificielle."
    }), /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
      className: "hero-actions",
      children: [/*#__PURE__*/(0, _jsxRuntime.jsxs)(_reactRouterDom.Link, {
        to: "/auth/register",
        className: "hero-cta-primary",
        children: ["Commencer gratuitement", /*#__PURE__*/(0, _jsxRuntime.jsx)(_fa.FaArrowRight, {
          className: "hero-cta-icon"
        })]
      }), /*#__PURE__*/(0, _jsxRuntime.jsxs)(_reactRouterDom.Link, {
        to: "/demo",
        className: "hero-cta-secondary",
        children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_fa.FaPlay, {
          className: "hero-cta-icon-play"
        }), "Voir la d\xE9mo"]
      })]
    }), /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
      className: "hero-visual",
      children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
        className: "hero-visual-glow"
      }), /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
        className: "hero-visual-card",
        children: [/*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
          className: "hero-visual-header",
          children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
            className: "hero-visual-dot hero-visual-dot-red"
          }), /*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
            className: "hero-visual-dot hero-visual-dot-yellow"
          }), /*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
            className: "hero-visual-dot hero-visual-dot-green"
          })]
        }), /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
          className: "hero-visual-body",
          children: [/*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
            className: "hero-visual-score",
            children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
              className: "hero-visual-score-label",
              children: "Health score"
            }), /*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
              className: "hero-visual-score-value",
              children: "87"
            })]
          }), /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
            className: "hero-visual-bars",
            children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
              className: "hero-visual-bar",
              style: {
                height: '60%'
              }
            }), /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
              className: "hero-visual-bar",
              style: {
                height: '85%'
              }
            }), /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
              className: "hero-visual-bar",
              style: {
                height: '45%'
              }
            }), /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
              className: "hero-visual-bar",
              style: {
                height: '95%'
              }
            }), /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
              className: "hero-visual-bar",
              style: {
                height: '70%'
              }
            })]
          })]
        })]
      })]
    })]
  });
}