"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = CTASection;
var _reactRouterDom = require("react-router-dom");
var _fa = require("react-icons/fa");
require("./ctaSection.css");
var _jsxRuntime = require("react/jsx-runtime");
function CTASection() {
  return /*#__PURE__*/(0, _jsxRuntime.jsx)("section", {
    className: "cta-section",
    children: /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
      className: "cta-card",
      children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
        className: "cta-glow"
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)("h2", {
        className: "cta-title",
        children: "Pr\xEAt \xE0 surveiller vos v\xE9hicules intelligemment ?"
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)("p", {
        className: "cta-subtitle",
        children: "Cr\xE9ez votre compte gratuitement et ajoutez votre premier v\xE9hicule en quelques minutes."
      }), /*#__PURE__*/(0, _jsxRuntime.jsxs)(_reactRouterDom.Link, {
        to: "/auth/register",
        className: "cta-button",
        children: ["Commencer gratuitement", /*#__PURE__*/(0, _jsxRuntime.jsx)(_fa.FaArrowRight, {
          className: "cta-button-icon"
        })]
      })]
    })
  });
}