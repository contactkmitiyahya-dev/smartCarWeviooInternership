"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = SensorCharts;
var _recharts = require("recharts");
require("./sensorCharts.css");
var _jsxRuntime = require("react/jsx-runtime");
function SensorCharts(_ref) {
  var data = _ref.data;
  return /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
    className: "sensor-charts",
    children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("h3", {
      className: "sensor-charts-title",
      children: "Donn\xE9es capteurs"
    }), /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
      className: "sensor-chart-grid",
      children: [/*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
        className: "sensor-chart-card",
        children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
          className: "sensor-chart-label",
          children: "RPM moteur"
        }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_recharts.ResponsiveContainer, {
          width: "100%",
          height: 160,
          children: /*#__PURE__*/(0, _jsxRuntime.jsxs)(_recharts.LineChart, {
            data: data,
            children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_recharts.CartesianGrid, {
              stroke: "rgba(255,255,255,0.06)",
              vertical: false
            }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_recharts.XAxis, {
              dataKey: "date",
              stroke: "#64748b",
              fontSize: 11
            }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_recharts.YAxis, {
              stroke: "#64748b",
              fontSize: 11,
              width: 35
            }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_recharts.Tooltip, {
              contentStyle: {
                background: '#0a101e',
                border: '1px solid rgba(255,255,255,0.08)',
                borderRadius: 8
              }
            }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_recharts.Line, {
              type: "monotone",
              dataKey: "rpm",
              stroke: "#38bdf8",
              strokeWidth: 2,
              dot: false
            })]
          })
        })]
      }), /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
        className: "sensor-chart-card",
        children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
          className: "sensor-chart-label",
          children: "Temp\xE9rature (\xB0C)"
        }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_recharts.ResponsiveContainer, {
          width: "100%",
          height: 160,
          children: /*#__PURE__*/(0, _jsxRuntime.jsxs)(_recharts.LineChart, {
            data: data,
            children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_recharts.CartesianGrid, {
              stroke: "rgba(255,255,255,0.06)",
              vertical: false
            }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_recharts.XAxis, {
              dataKey: "date",
              stroke: "#64748b",
              fontSize: 11
            }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_recharts.YAxis, {
              stroke: "#64748b",
              fontSize: 11,
              width: 35
            }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_recharts.Tooltip, {
              contentStyle: {
                background: '#0a101e',
                border: '1px solid rgba(255,255,255,0.08)',
                borderRadius: 8
              }
            }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_recharts.Line, {
              type: "monotone",
              dataKey: "temp",
              stroke: "#818cf8",
              strokeWidth: 2,
              dot: false
            })]
          })
        })]
      }), /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
        className: "sensor-chart-card",
        children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
          className: "sensor-chart-label",
          children: "Tension batterie (V)"
        }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_recharts.ResponsiveContainer, {
          width: "100%",
          height: 160,
          children: /*#__PURE__*/(0, _jsxRuntime.jsxs)(_recharts.LineChart, {
            data: data,
            children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_recharts.CartesianGrid, {
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
            }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_recharts.Line, {
              type: "monotone",
              dataKey: "voltage",
              stroke: "#4ade80",
              strokeWidth: 2,
              dot: false
            })]
          })
        })]
      })]
    })]
  });
}