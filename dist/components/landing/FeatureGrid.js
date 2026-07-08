"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = FeatureGrid;
var _fa = require("react-icons/fa");
require("./featureGrid.css");
var _jsxRuntime = require("react/jsx-runtime");
var features = [{
  icon: _fa.FaCar,
  title: 'Gestion multi-véhicules',
  description: "Ajoutez et suivez tous vos véhicules depuis un seul tableau de bord, avec l'historique complet de chacun."
}, {
  icon: _fa.FaChartLine,
  title: 'Analytics en temps réel',
  description: 'Visualisez les données de vos capteurs OBD-II sous forme de graphiques clairs et exploitables.'
}, {
  icon: _fa.FaBrain,
  title: 'Prédictions par IA',
  description: "Notre modèle prédit les risques de panne par composant avant qu'ils ne deviennent critiques."
}, {
  icon: _fa.FaBell,
  title: 'Alertes intelligentes',
  description: 'Recevez des notifications dès qu\'une anomalie ou un besoin de maintenance est détecté.'
}];
function FeatureGrid() {
  return /*#__PURE__*/(0, _jsxRuntime.jsxs)("section", {
    className: "feature-section",
    children: [/*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
      className: "feature-header",
      children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
        className: "feature-eyebrow",
        children: "Fonctionnalit\xE9s"
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)("h2", {
        className: "feature-title",
        children: "Tout ce qu'il faut pour veiller sur vos v\xE9hicules"
      })]
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
      className: "feature-grid",
      children: features.map(function (feature, index) {
        var Icon = feature.icon;
        return /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
          className: "feature-card",
          children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
            className: "feature-icon-wrap",
            children: /*#__PURE__*/(0, _jsxRuntime.jsx)(Icon, {
              className: "feature-icon"
            })
          }), /*#__PURE__*/(0, _jsxRuntime.jsx)("h3", {
            className: "feature-card-title",
            children: feature.title
          }), /*#__PURE__*/(0, _jsxRuntime.jsx)("p", {
            className: "feature-card-desc",
            children: feature.description
          })]
        }, index);
      })
    })]
  });
}