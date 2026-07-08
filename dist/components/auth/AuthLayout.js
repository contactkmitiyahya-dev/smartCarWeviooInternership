"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = AuthLayout;
var _react = require("react");
var _reactRouterDom = require("react-router-dom");
var _fa = require("react-icons/fa");
require("./AuthLayout.css");
var _jsxRuntime = require("react/jsx-runtime");
function _toConsumableArray(r) { return _arrayWithoutHoles(r) || _iterableToArray(r) || _unsupportedIterableToArray(r) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArray(r) { if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r); }
function _arrayWithoutHoles(r) { if (Array.isArray(r)) return _arrayLikeToArray(r); }
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
var TELEMETRY_MESSAGES = ["🛰️ Link: Connection established with Orbiter-X", "🔒 Security: End-to-end TLS 1.3 encryption enabled", "🔋 Battery cell temp: 34.5°C [Nominal]", "⚙️ Transmission: Torque Vectoring Active", "🧠 AI Core: Neural telemetry sync 100%", "📟 OBD-III: Diagnostic logs loaded successfully", "🛑 Radar: Anti-collision matrix calibrated", "⚡ Regen Braking: Efficiency at 94.2%", "📈 Analytics: Health Score updated (92/100)", "❄️ Coolant flow: 1.8 L/s [Optimal]", "🔥 ECU: Map 2 active (Sport Mode)", "📡 Telemetry: Baud rate 115200 bps secured"];
function AuthLayout(_ref) {
  var title = _ref.title,
    subtitle = _ref.subtitle,
    children = _ref.children,
    footerText = _ref.footerText,
    footerLinkText = _ref.footerLinkText,
    footerLinkPath = _ref.footerLinkPath;
  var _useState = (0, _react.useState)(["🛰️ Link: Connection established with Orbiter-X", "🔒 Security: End-to-end TLS 1.3 encryption enabled", "📟 OBD-III: Diagnostic logs loaded successfully", "🧠 AI Core: Neural telemetry sync 100%"]),
    _useState2 = _slicedToArray(_useState, 2),
    logs = _useState2[0],
    setLogs = _useState2[1];
  (0, _react.useEffect)(function () {
    var interval = setInterval(function () {
      setLogs(function (prev) {
        var nextMsg = TELEMETRY_MESSAGES[Math.floor(Math.random() * TELEMETRY_MESSAGES.length)];
        // Keep the last 6 logs
        return [].concat(_toConsumableArray(prev.slice(-5)), [nextMsg]);
      });
    }, 2500);
    return function () {
      return clearInterval(interval);
    };
  }, []);
  return /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
    className: "auth-page",
    children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
      className: "auth-mesh-grid"
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
      className: "auth-radial-glow"
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
      className: "auth-form-panel",
      children: /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
        className: "auth-form-inner",
        children: [/*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
          className: "auth-sec-badge",
          children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_fa.FaShieldAlt, {
            className: "auth-sec-icon"
          }), /*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
            className: "auth-sec-text",
            children: "SECURE LOGIN PROTOCOL"
          })]
        }), /*#__PURE__*/(0, _jsxRuntime.jsx)("h1", {
          className: "auth-title",
          children: title
        }), /*#__PURE__*/(0, _jsxRuntime.jsx)("p", {
          className: "auth-subtitle",
          children: subtitle
        }), children, /*#__PURE__*/(0, _jsxRuntime.jsxs)("p", {
          className: "auth-footer",
          children: [footerText, ' ', /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactRouterDom.Link, {
            to: footerLinkPath,
            className: "auth-footer-link",
            children: footerLinkText
          })]
        })]
      })
    }), /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
      className: "auth-visual-panel",
      children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
        className: "hud-corner hud-top-left"
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
        className: "hud-corner hud-top-right"
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
        className: "hud-corner hud-bottom-left"
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
        className: "hud-corner hud-bottom-right"
      }), /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
        className: "auth-visual-content",
        children: [/*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
          className: "auth-visual-header",
          children: [/*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
            className: "auth-status-pill",
            children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
              className: "status-indicator status-online"
            }), /*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
              className: "status-label",
              children: "SYS_STATUS: ONLINE"
            })]
          }), /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
            className: "auth-metric-pill",
            children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_fa.FaSignal, {
              className: "metric-icon"
            }), /*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
              children: "LATENCY: 14ms"
            })]
          }), /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
            className: "auth-metric-pill",
            children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_fa.FaMicrochip, {
              className: "metric-icon"
            }), /*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
              children: "CORE_LOAD: 24%"
            })]
          })]
        }), /*#__PURE__*/(0, _jsxRuntime.jsxs)("h2", {
          className: "auth-visual-title",
          children: ["Vos v\xE9hicules,", /*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
            className: "auth-visual-title-accent",
            children: " sous contr\xF4le total"
          })]
        }), /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
          className: "car-wireframe-container",
          children: /*#__PURE__*/(0, _jsxRuntime.jsxs)("svg", {
            viewBox: "0 0 400 165",
            className: "telemetry-car-svg",
            children: [/*#__PURE__*/(0, _jsxRuntime.jsxs)("defs", {
              children: [/*#__PURE__*/(0, _jsxRuntime.jsxs)("linearGradient", {
                id: "carGrad",
                x1: "0%",
                y1: "0%",
                x2: "100%",
                y2: "0%",
                children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("stop", {
                  offset: "0%",
                  stopColor: "#0ea5e9",
                  stopOpacity: "0.8"
                }), /*#__PURE__*/(0, _jsxRuntime.jsx)("stop", {
                  offset: "60%",
                  stopColor: "#6366f1",
                  stopOpacity: "0.8"
                }), /*#__PURE__*/(0, _jsxRuntime.jsx)("stop", {
                  offset: "100%",
                  stopColor: "#38bdf8",
                  stopOpacity: "0.1"
                })]
              }), /*#__PURE__*/(0, _jsxRuntime.jsxs)("linearGradient", {
                id: "gaugeGrad",
                x1: "0%",
                y1: "0%",
                x2: "100%",
                y2: "100%",
                children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("stop", {
                  offset: "0%",
                  stopColor: "#0ea5e9"
                }), /*#__PURE__*/(0, _jsxRuntime.jsx)("stop", {
                  offset: "100%",
                  stopColor: "#6366f1"
                })]
              }), /*#__PURE__*/(0, _jsxRuntime.jsxs)("filter", {
                id: "glow",
                x: "-20%",
                y: "-20%",
                width: "140%",
                height: "140%",
                children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("feGaussianBlur", {
                  stdDeviation: "3",
                  result: "blur"
                }), /*#__PURE__*/(0, _jsxRuntime.jsx)("feComposite", {
                  "in": "SourceGraphic",
                  in2: "blur",
                  operator: "over"
                })]
              })]
            }), /*#__PURE__*/(0, _jsxRuntime.jsx)("path", {
              d: "M 30,115  L 50,115  A 25,25 0 0,1 100,115  L 240,115  A 25,25 0 0,1 290,115  L 350,115  C 370,115 380,105 380,90  C 380,80 370,75 350,70 L 300,60 C 270,35 230,30 180,30 C 140,30 110,45 85,60 L 40,80 C 20,85 15,100 15,105 C 15,110 20,115 30,115 Z",
              fill: "none",
              stroke: "url(#carGrad)",
              strokeWidth: "1.8",
              strokeDasharray: "600",
              className: "car-wireframe-path"
            }), /*#__PURE__*/(0, _jsxRuntime.jsx)("rect", {
              x: "115",
              y: "90",
              width: "110",
              height: "12",
              rx: "3",
              fill: "none",
              stroke: "rgba(99, 102, 241, 0.4)",
              strokeWidth: "1",
              strokeDasharray: "3,3"
            }), /*#__PURE__*/(0, _jsxRuntime.jsx)("rect", {
              x: "120",
              y: "93",
              width: "100",
              height: "6",
              rx: "1",
              fill: "rgba(16, 185, 129, 0.15)"
            }), /*#__PURE__*/(0, _jsxRuntime.jsx)("circle", {
              cx: "75",
              cy: "115",
              r: "19",
              fill: "none",
              stroke: "#0ea5e9",
              strokeWidth: "1.5",
              strokeDasharray: "5,3",
              className: "wheel-spin"
            }), /*#__PURE__*/(0, _jsxRuntime.jsx)("circle", {
              cx: "75",
              cy: "115",
              r: "5",
              fill: "none",
              stroke: "#38bdf8",
              strokeWidth: "1"
            }), /*#__PURE__*/(0, _jsxRuntime.jsx)("circle", {
              cx: "265",
              cy: "115",
              r: "19",
              fill: "none",
              stroke: "#0ea5e9",
              strokeWidth: "1.5",
              strokeDasharray: "5,3",
              className: "wheel-spin"
            }), /*#__PURE__*/(0, _jsxRuntime.jsx)("circle", {
              cx: "265",
              cy: "115",
              r: "5",
              fill: "none",
              stroke: "#38bdf8",
              strokeWidth: "1"
            }), /*#__PURE__*/(0, _jsxRuntime.jsxs)("g", {
              className: "hotspot hotspot-engine",
              children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("circle", {
                cx: "50",
                cy: "90",
                r: "4.5",
                fill: "#ef4444",
                filter: "url(#glow)"
              }), /*#__PURE__*/(0, _jsxRuntime.jsx)("circle", {
                cx: "50",
                cy: "90",
                r: "9",
                fill: "none",
                stroke: "#ef4444",
                strokeWidth: "1",
                className: "ping"
              })]
            }), /*#__PURE__*/(0, _jsxRuntime.jsxs)("g", {
              className: "hotspot hotspot-battery",
              children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("circle", {
                cx: "170",
                cy: "96",
                r: "4.5",
                fill: "#10b981",
                filter: "url(#glow)"
              }), /*#__PURE__*/(0, _jsxRuntime.jsx)("circle", {
                cx: "170",
                cy: "96",
                r: "9",
                fill: "none",
                stroke: "#10b981",
                strokeWidth: "1",
                className: "ping"
              })]
            }), /*#__PURE__*/(0, _jsxRuntime.jsxs)("g", {
              className: "hotspot hotspot-cpu",
              children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("circle", {
                cx: "180",
                cy: "58",
                r: "4.5",
                fill: "#38bdf8",
                filter: "url(#glow)"
              }), /*#__PURE__*/(0, _jsxRuntime.jsx)("circle", {
                cx: "180",
                cy: "58",
                r: "9",
                fill: "none",
                stroke: "#38bdf8",
                strokeWidth: "1",
                className: "ping"
              })]
            }), /*#__PURE__*/(0, _jsxRuntime.jsx)("path", {
              d: "M 50,90 L 30,55 L 12,55",
              fill: "none",
              stroke: "#ef4444",
              strokeWidth: "0.8",
              opacity: "0.5"
            }), /*#__PURE__*/(0, _jsxRuntime.jsx)("text", {
              x: "10",
              y: "47",
              fill: "#ef4444",
              fontSize: "8",
              fontFamily: "monospace",
              fontWeight: "bold",
              children: "SYS_MOTOR: OK"
            }), /*#__PURE__*/(0, _jsxRuntime.jsx)("path", {
              d: "M 180,58 L 200,38 L 235,38",
              fill: "none",
              stroke: "#38bdf8",
              strokeWidth: "0.8",
              opacity: "0.5"
            }), /*#__PURE__*/(0, _jsxRuntime.jsx)("text", {
              x: "202",
              y: "31",
              fill: "#38bdf8",
              fontSize: "8",
              fontFamily: "monospace",
              fontWeight: "bold",
              children: "AI_CORE: SYNC"
            }), /*#__PURE__*/(0, _jsxRuntime.jsx)("path", {
              d: "M 170,96 L 190,138 L 225,138",
              fill: "none",
              stroke: "#10b981",
              strokeWidth: "0.8",
              opacity: "0.5"
            }), /*#__PURE__*/(0, _jsxRuntime.jsx)("text", {
              x: "192",
              y: "148",
              fill: "#10b981",
              fontSize: "8",
              fontFamily: "monospace",
              fontWeight: "bold",
              children: "BATT_HEALTH: 98%"
            })]
          })
        }), /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
          className: "telemetry-gauges-row",
          children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
            className: "telemetry-gauge-card",
            children: /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
              className: "gauge-ring-outer",
              children: [/*#__PURE__*/(0, _jsxRuntime.jsxs)("svg", {
                viewBox: "0 0 100 100",
                className: "gauge-svg",
                children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("circle", {
                  cx: "50",
                  cy: "50",
                  r: "42",
                  fill: "none",
                  stroke: "rgba(255, 255, 255, 0.02)",
                  strokeWidth: "5"
                }), /*#__PURE__*/(0, _jsxRuntime.jsx)("circle", {
                  cx: "50",
                  cy: "50",
                  r: "42",
                  fill: "none",
                  stroke: "url(#gaugeGrad)",
                  strokeWidth: "5",
                  strokeDasharray: "264",
                  strokeDashoffset: "70",
                  className: "gauge-progress-rpm"
                })]
              }), /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
                className: "gauge-content",
                children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_fa.FaTachometerAlt, {
                  className: "gauge-icon"
                }), /*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
                  className: "gauge-value",
                  children: "7.8K"
                }), /*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
                  className: "gauge-unit",
                  children: "RPM"
                })]
              })]
            })
          }), /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
            className: "telemetry-gauge-card",
            children: /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
              className: "gauge-ring-outer",
              children: [/*#__PURE__*/(0, _jsxRuntime.jsxs)("svg", {
                viewBox: "0 0 100 100",
                className: "gauge-svg",
                children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("circle", {
                  cx: "50",
                  cy: "50",
                  r: "42",
                  fill: "none",
                  stroke: "rgba(255, 255, 255, 0.02)",
                  strokeWidth: "5"
                }), /*#__PURE__*/(0, _jsxRuntime.jsx)("circle", {
                  cx: "50",
                  cy: "50",
                  r: "42",
                  fill: "none",
                  stroke: "#10b981",
                  strokeWidth: "5",
                  strokeDasharray: "264",
                  strokeDashoffset: "26",
                  className: "gauge-progress-battery"
                })]
              }), /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
                className: "gauge-content",
                children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
                  className: "gauge-value text-green",
                  children: "92%"
                }), /*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
                  className: "gauge-unit",
                  children: "BATTERY"
                })]
              })]
            })
          }), /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
            className: "telemetry-gauge-card",
            children: /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
              className: "gauge-ring-outer animate-pulse-slow",
              children: /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
                className: "gauge-radial-score",
                children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
                  className: "gauge-score-big",
                  children: "98"
                }), /*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
                  className: "gauge-score-label",
                  children: "HEALTH"
                })]
              })
            })
          })]
        }), /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
          className: "telemetry-terminal",
          children: [/*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
            className: "terminal-header",
            children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_fa.FaTerminal, {
              className: "terminal-icon"
            }), /*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
              children: "LIVE_DIAGNOSTICS_STREAM"
            }), /*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
              className: "terminal-pulse-dot"
            })]
          }), /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
            className: "terminal-body",
            children: logs.map(function (log, index) {
              return /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
                className: "terminal-line",
                children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
                  className: "terminal-prompt",
                  children: ">"
                }), " ", log]
              }, index);
            })
          })]
        })]
      })]
    })]
  });
}