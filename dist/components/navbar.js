"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = Navbar;
var _reactRouterDom = require("react-router-dom");
var _fa = require("react-icons/fa");
require("./navbar.css");
var _jsxRuntime = require("react/jsx-runtime");
function Navbar() {
  var location = (0, _reactRouterDom.useLocation)();
  var isAuthentificated = true;
  var isActive = function isActive(path) {
    return location.pathname === path ? 'active' : '';
  };
  var appNavItems = [{
    path: '/userDashboard',
    label: 'Accueil',
    icon: _fa.FaHome
  }, {
    path: '/vehicles',
    label: 'Véhicules',
    icon: _fa.FaCar
  }, {
    path: '/maintenance',
    label: 'Maintenance',
    icon: _fa.FaWrench
  }, {
    path: '/analytics',
    label: 'Analytics',
    icon: _fa.FaChartLine
  }];
  var landingNavItems = [{
    path: '/features',
    label: 'Fonctionnalités',
    icon: _fa.FaInfoCircle
  }, {
    path: '/pricing',
    label: 'Tarifs',
    icon: _fa.FaDollarSign
  }, {
    path: '/contact',
    label: 'Contact',
    icon: _fa.FaEnvelope
  }];
  var navItems = isAuthentificated ? appNavItems : landingNavItems;
  return /*#__PURE__*/(0, _jsxRuntime.jsxs)("header", {
    className: "glass-header",
    children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
      className: "header-brand",
      children: /*#__PURE__*/(0, _jsxRuntime.jsxs)(_reactRouterDom.Link, {
        to: isAuthentificated ? '/userDashboard' : '/',
        className: "logo-link",
        children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_fa.FaCar, {
          className: "logo-icon"
        }), /*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
          className: "logo-text",
          children: "SmartCar"
        })]
      })
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)("nav", {
      className: "glass-nav",
      children: navItems.map(function (item) {
        var Icon = item.icon;
        return /*#__PURE__*/(0, _jsxRuntime.jsxs)(_reactRouterDom.Link, {
          to: item.path,
          className: "nav-item ".concat(isActive(item.path)),
          children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(Icon, {
            className: "nav-icon"
          }), /*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
            className: "nav-label",
            children: item.label
          })]
        }, item.path);
      })
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
      className: "header-auth",
      children: isAuthentificated ? /*#__PURE__*/(0, _jsxRuntime.jsxs)(_jsxRuntime.Fragment, {
        children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_reactRouterDom.Link, {
          to: "/notifications",
          className: "icon-btn ".concat(isActive('/notifications')),
          children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_fa.FaBell, {
            className: "notif-icon"
          })
        }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactRouterDom.Link, {
          to: "/settings",
          className: "icon-btn ".concat(isActive('/settings')),
          children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_fa.FaCog, {
            className: "notif-icon"
          })
        }), /*#__PURE__*/(0, _jsxRuntime.jsxs)(_reactRouterDom.Link, {
          to: "/profile",
          className: "profile-btn ".concat(isActive('/profile')),
          children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_fa.FaUserCircle, {
            className: "profile-icon"
          }), /*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
            className: "profile-label",
            children: "Profil"
          })]
        })]
      }) : /*#__PURE__*/(0, _jsxRuntime.jsxs)(_jsxRuntime.Fragment, {
        children: [/*#__PURE__*/(0, _jsxRuntime.jsxs)(_reactRouterDom.Link, {
          to: "/auth/login",
          className: "signin-btn",
          children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_fa.FaSignInAlt, {
            className: "signin-icon"
          }), /*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
            className: "signin-label",
            children: "Se connecter"
          })]
        }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactRouterDom.Link, {
          to: "/auth/register",
          className: "cta-btn",
          children: /*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
            children: "Commencer"
          })
        })]
      })
    })]
  });
}