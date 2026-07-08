"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = StatsBanner;
require("./statsBanner.css");
var _jsxRuntime = require("react/jsx-runtime");
var stats = [{
  value: '0-100',
  label: 'Health score par véhicule'
}, {
  value: 'Illimité',
  label: 'Nombre de véhicules suivis'
}, {
  value: 'Temps réel',
  label: 'Traitement des données capteurs'
}, {
  value: '24/7',
  label: 'Surveillance continue'
}];
function StatsBanner() {
  return /*#__PURE__*/(0, _jsxRuntime.jsx)("section", {
    className: "stats-section",
    children: /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
      className: "stats-grid",
      children: stats.map(function (stat, index) {
        return /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
          className: "stats-item",
          children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
            className: "stats-value",
            children: stat.value
          }), /*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
            className: "stats-label",
            children: stat.label
          })]
        }, index);
      })
    })
  });
}