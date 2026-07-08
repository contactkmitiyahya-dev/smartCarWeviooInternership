"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = Profile;
var _reactRouterDom = require("react-router-dom");
var _fa = require("react-icons/fa");
var _testData = require("../../data/testData.js");
require("./profilePage.css");
var _jsxRuntime = require("react/jsx-runtime");
var currentUser = {
  name: 'Jean Dupont',
  email: 'jean.dupont@exemple.com',
  memberSince: 'Janvier 2026',
  role: 'Utilisateur standard'
};
function Profile() {
  var activeAlerts = _testData.allNotifications.filter(function (n) {
    return !n.acknowledged;
  }).length;
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
            children: currentUser.name
          }), /*#__PURE__*/(0, _jsxRuntime.jsx)("p", {
            className: "profile-email",
            children: currentUser.email
          }), /*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
            className: "profile-role-badge",
            children: currentUser.role
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
        }), "Membre depuis ", currentUser.memberSince]
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
            children: _testData.vehicles.length
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