"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = QuickActions;
var _reactRouterDom = require("react-router-dom");
var _fa = require("react-icons/fa");
require("./quickActions.css");
var _jsxRuntime = require("react/jsx-runtime");
function QuickActions() {
  return /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
    className: "quick-actions",
    children: [/*#__PURE__*/(0, _jsxRuntime.jsxs)(_reactRouterDom.Link, {
      to: "/vehicles/new",
      className: "quick-action-btn quick-action-primary",
      children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_fa.FaPlus, {
        className: "quick-action-icon"
      }), "Ajouter un v\xE9hicule"]
    }), /*#__PURE__*/(0, _jsxRuntime.jsxs)(_reactRouterDom.Link, {
      to: "/dashboard",
      className: "quick-action-btn",
      children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_fa.FaCloudUploadAlt, {
        className: "quick-action-icon"
      }), "Uploader des donn\xE9es"]
    })]
  });
}