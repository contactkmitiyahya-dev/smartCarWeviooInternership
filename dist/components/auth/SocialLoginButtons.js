"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = SocialLoginButtons;
var _fa = require("react-icons/fa");
require("./SocialLoginButtons.css");
var _jsxRuntime = require("react/jsx-runtime");
function SocialLoginButtons() {
  var handleGoogleLogin = function handleGoogleLogin() {
    window.location.href = '/api/v1/auth/google';
  };
  var handleGithubLogin = function handleGithubLogin() {
    window.location.href = '/api/v1/auth/github';
  };
  return /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
    className: "social-login",
    children: [/*#__PURE__*/(0, _jsxRuntime.jsxs)("button", {
      type: "button",
      className: "social-btn",
      onClick: handleGoogleLogin,
      children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_fa.FaGoogle, {
        className: "social-icon"
      }), "Google"]
    }), /*#__PURE__*/(0, _jsxRuntime.jsxs)("button", {
      type: "button",
      className: "social-btn",
      onClick: handleGithubLogin,
      children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_fa.FaGithub, {
        className: "social-icon"
      }), "GitHub"]
    })]
  });
}