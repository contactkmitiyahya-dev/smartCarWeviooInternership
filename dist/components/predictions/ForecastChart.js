"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = ForecastChart;
var _recharts = require("recharts");
require("./forecastChart.css");
var _jsxRuntime = require("react/jsx-runtime");
function ForecastChart(_ref) {
  var data = _ref.data;
  return /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
    className: "forecast-chart",
    children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("h3", {
      className: "forecast-chart-title",
      children: "Pr\xE9vision \u2014 Tension batterie (30 jours)"
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_recharts.ResponsiveContainer, {
      width: "100%",
      height: 220,
      children: /*#__PURE__*/(0, _jsxRuntime.jsxs)(_recharts.AreaChart, {
        data: data,
        children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("defs", {
          children: /*#__PURE__*/(0, _jsxRuntime.jsxs)("linearGradient", {
            id: "forecastGradient",
            x1: "0",
            y1: "0",
            x2: "0",
            y2: "1",
            children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("stop", {
              offset: "0%",
              stopColor: "#818cf8",
              stopOpacity: 0.35
            }), /*#__PURE__*/(0, _jsxRuntime.jsx)("stop", {
              offset: "100%",
              stopColor: "#818cf8",
              stopOpacity: 0
            })]
          })
        }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_recharts.CartesianGrid, {
          stroke: "rgba(255,255,255,0.06)",
          vertical: false
        }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_recharts.XAxis, {
          dataKey: "date",
          stroke: "#64748b",
          fontSize: 11
        }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_recharts.YAxis, {
          stroke: "#64748b",
          fontSize: 11,
          width: 35,
          domain: ['auto', 'auto']
        }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_recharts.Tooltip, {
          contentStyle: {
            background: '#0a101e',
            border: '1px solid rgba(255,255,255,0.08)',
            borderRadius: 8
          }
        }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_recharts.Area, {
          type: "monotone",
          dataKey: "voltage",
          stroke: "#818cf8",
          strokeWidth: 2,
          fill: "url(#forecastGradient)"
        })]
      })
    })]
  });
}