"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = Navbar;
var _react = require("react");
var _reactRouterDom = require("react-router-dom");
var _fa = require("react-icons/fa");
var _AuthContext = require("../context/AuthContext");
require("./navbar.css");
var _jsxRuntime = require("react/jsx-runtime");
function _regenerator() { /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */ var e, t, r = "function" == typeof Symbol ? Symbol : {}, n = r.iterator || "@@iterator", o = r.toStringTag || "@@toStringTag"; function i(r, n, o, i) { var c = n && n.prototype instanceof Generator ? n : Generator, u = Object.create(c.prototype); return _regeneratorDefine2(u, "_invoke", function (r, n, o) { var i, c, u, f = 0, p = o || [], y = !1, G = { p: 0, n: 0, v: e, a: d, f: d.bind(e, 4), d: function d(t, r) { return i = t, c = 0, u = e, G.n = r, a; } }; function d(r, n) { for (c = r, u = n, t = 0; !y && f && !o && t < p.length; t++) { var o, i = p[t], d = G.p, l = i[2]; r > 3 ? (o = l === n) && (u = i[(c = i[4]) ? 5 : (c = 3, 3)], i[4] = i[5] = e) : i[0] <= d && ((o = r < 2 && d < i[1]) ? (c = 0, G.v = n, G.n = i[1]) : d < l && (o = r < 3 || i[0] > n || n > l) && (i[4] = r, i[5] = n, G.n = l, c = 0)); } if (o || r > 1) return a; throw y = !0, n; } return function (o, p, l) { if (f > 1) throw TypeError("Generator is already running"); for (y && 1 === p && d(p, l), c = p, u = l; (t = c < 2 ? e : u) || !y;) { i || (c ? c < 3 ? (c > 1 && (G.n = -1), d(c, u)) : G.n = u : G.v = u); try { if (f = 2, i) { if (c || (o = "next"), t = i[o]) { if (!(t = t.call(i, u))) throw TypeError("iterator result is not an object"); if (!t.done) return t; u = t.value, c < 2 && (c = 0); } else 1 === c && (t = i["return"]) && t.call(i), c < 2 && (u = TypeError("The iterator does not provide a '" + o + "' method"), c = 1); i = e; } else if ((t = (y = G.n < 0) ? u : r.call(n, G)) !== a) break; } catch (t) { i = e, c = 1, u = t; } finally { f = 1; } } return { value: t, done: y }; }; }(r, o, i), !0), u; } var a = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} t = Object.getPrototypeOf; var c = [][n] ? t(t([][n]())) : (_regeneratorDefine2(t = {}, n, function () { return this; }), t), u = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(c); function f(e) { return Object.setPrototypeOf ? Object.setPrototypeOf(e, GeneratorFunctionPrototype) : (e.__proto__ = GeneratorFunctionPrototype, _regeneratorDefine2(e, o, "GeneratorFunction")), e.prototype = Object.create(u), e; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, _regeneratorDefine2(u, "constructor", GeneratorFunctionPrototype), _regeneratorDefine2(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = "GeneratorFunction", _regeneratorDefine2(GeneratorFunctionPrototype, o, "GeneratorFunction"), _regeneratorDefine2(u), _regeneratorDefine2(u, o, "Generator"), _regeneratorDefine2(u, n, function () { return this; }), _regeneratorDefine2(u, "toString", function () { return "[object Generator]"; }), (_regenerator = function _regenerator() { return { w: i, m: f }; })(); }
function _regeneratorDefine2(e, r, n, t) { var i = Object.defineProperty; try { i({}, "", {}); } catch (e) { i = 0; } _regeneratorDefine2 = function _regeneratorDefine(e, r, n, t) { function o(r, n) { _regeneratorDefine2(e, r, function (e) { return this._invoke(r, n, e); }); } r ? i ? i(e, r, { value: n, enumerable: !t, configurable: !t, writable: !t }) : e[r] = n : (o("next", 0), o("throw", 1), o("return", 2)); }, _regeneratorDefine2(e, r, n, t); }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
function Navbar() {
  var location = (0, _reactRouterDom.useLocation)();
  var navigate = (0, _reactRouterDom.useNavigate)();
  var _useAuth = (0, _AuthContext.useAuth)(),
    isAuthenticated = _useAuth.isAuthenticated,
    isLoading = _useAuth.isLoading,
    logout = _useAuth.logout;
  var _useState = (0, _react.useState)(false),
    _useState2 = _slicedToArray(_useState, 2),
    isOpen = _useState2[0],
    setIsOpen = _useState2[1];
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
  var navItems = isAuthenticated ? appNavItems : landingNavItems;
  var handleLogout = /*#__PURE__*/function () {
    var _ref = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee() {
      return _regenerator().w(function (_context) {
        while (1) switch (_context.n) {
          case 0:
            setIsOpen(false);
            _context.n = 1;
            return logout();
          case 1:
            navigate('/');
          case 2:
            return _context.a(2);
        }
      }, _callee);
    }));
    return function handleLogout() {
      return _ref.apply(this, arguments);
    };
  }();
  var toggleMenu = function toggleMenu() {
    return setIsOpen(!isOpen);
  };
  var closeMenu = function closeMenu() {
    return setIsOpen(false);
  };
  if (isLoading) {
    return /*#__PURE__*/(0, _jsxRuntime.jsx)("header", {
      className: "glass-header",
      children: /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
        className: "header-brand",
        children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactRouterDom.Link, {
          to: "/",
          className: "logo-link",
          children: /*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
            className: "logo-text",
            children: "SmartCar"
          })
        })
      })
    });
  }
  return /*#__PURE__*/(0, _jsxRuntime.jsxs)("header", {
    className: "glass-header ".concat(isOpen ? 'menu-open' : ''),
    children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
      className: "header-brand",
      children: /*#__PURE__*/(0, _jsxRuntime.jsxs)(_reactRouterDom.Link, {
        to: isAuthenticated ? '/userDashboard' : '/',
        className: "logo-link",
        onClick: closeMenu,
        children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_fa.FaCar, {
          className: "logo-icon-brand"
        }), /*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
          className: "logo-text",
          children: "SmartCar"
        })]
      })
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)("nav", {
      className: "glass-nav desktop-only",
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
      className: "header-auth desktop-only",
      children: isAuthenticated ? /*#__PURE__*/(0, _jsxRuntime.jsxs)(_jsxRuntime.Fragment, {
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
        }), /*#__PURE__*/(0, _jsxRuntime.jsx)("button", {
          type: "button",
          className: "icon-btn",
          onClick: handleLogout,
          title: "Se d\xE9connecter",
          children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_fa.FaSignOutAlt, {
            className: "notif-icon"
          })
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
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)("button", {
      className: "hamburger-btn",
      onClick: toggleMenu,
      "aria-label": "Toggle menu",
      children: isOpen ? /*#__PURE__*/(0, _jsxRuntime.jsx)(_fa.FaTimes, {}) : /*#__PURE__*/(0, _jsxRuntime.jsx)(_fa.FaBars, {})
    }), /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
      className: "mobile-menu-panel ".concat(isOpen ? 'show' : ''),
      children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("nav", {
        className: "mobile-nav",
        children: navItems.map(function (item) {
          var Icon = item.icon;
          return /*#__PURE__*/(0, _jsxRuntime.jsxs)(_reactRouterDom.Link, {
            to: item.path,
            className: "mobile-nav-item ".concat(isActive(item.path)),
            onClick: closeMenu,
            children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(Icon, {
              className: "mobile-nav-icon"
            }), /*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
              children: item.label
            })]
          }, item.path);
        })
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
        className: "mobile-auth",
        children: isAuthenticated ? /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
          className: "mobile-auth-grid",
          children: [/*#__PURE__*/(0, _jsxRuntime.jsxs)(_reactRouterDom.Link, {
            to: "/notifications",
            className: "mobile-nav-item ".concat(isActive('/notifications')),
            onClick: closeMenu,
            children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_fa.FaBell, {
              className: "mobile-nav-icon"
            }), /*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
              children: "Notifications"
            })]
          }), /*#__PURE__*/(0, _jsxRuntime.jsxs)(_reactRouterDom.Link, {
            to: "/settings",
            className: "mobile-nav-item ".concat(isActive('/settings')),
            onClick: closeMenu,
            children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_fa.FaCog, {
              className: "mobile-nav-icon"
            }), /*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
              children: "Param\xE8tres"
            })]
          }), /*#__PURE__*/(0, _jsxRuntime.jsxs)(_reactRouterDom.Link, {
            to: "/profile",
            className: "mobile-profile-btn ".concat(isActive('/profile')),
            onClick: closeMenu,
            children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_fa.FaUserCircle, {
              className: "mobile-nav-icon"
            }), /*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
              children: "Mon Profil"
            })]
          }), /*#__PURE__*/(0, _jsxRuntime.jsxs)("button", {
            type: "button",
            className: "mobile-logout-btn",
            onClick: handleLogout,
            children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_fa.FaSignOutAlt, {
              className: "mobile-nav-icon"
            }), /*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
              children: "Se d\xE9connecter"
            })]
          })]
        }) : /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
          className: "mobile-guest-actions",
          children: [/*#__PURE__*/(0, _jsxRuntime.jsxs)(_reactRouterDom.Link, {
            to: "/auth/login",
            className: "mobile-signin-btn",
            onClick: closeMenu,
            children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_fa.FaSignInAlt, {
              className: "signin-icon"
            }), /*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
              children: "Se connecter"
            })]
          }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactRouterDom.Link, {
            to: "/auth/register",
            className: "mobile-cta-btn",
            onClick: closeMenu,
            children: /*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
              children: "Commencer"
            })
          })]
        })
      })]
    })]
  });
}