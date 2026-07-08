"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = HowItWorks;
var _fa = require("react-icons/fa");
require("./howItWorks.css");
var _jsxRuntime = require("react/jsx-runtime");
var steps = [{
  number: '01',
  icon: _fa.FaCarSide,
  title: 'Ajoutez votre véhicule',
  description: 'Renseignez la marque, le modèle et le kilométrage pour créer un profil complet.'
}, {
  number: '02',
  icon: _fa.FaCloudUploadAlt,
  title: 'Envoyez vos données',
  description: "Importez vos fichiers OBD-II ou saisissez manuellement l'historique d'entretien."
}, {
  number: '03',
  icon: _fa.FaChartBar,
  title: 'Recevez vos insights',
  description: 'Consultez le health score, les prédictions IA et les alertes en temps réel.'
}];
function HowItWorks() {
  return /*#__PURE__*/(0, _jsxRuntime.jsxs)("section", {
    className: "howitworks-section",
    children: [/*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
      className: "howitworks-header",
      children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
        className: "howitworks-eyebrow",
        children: "Comment \xE7a marche"
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)("h2", {
        className: "howitworks-title",
        children: "Trois \xE9tapes pour garder le contr\xF4le"
      })]
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
      className: "howitworks-steps",
      children: steps.map(function (step, index) {
        var Icon = step.icon;
        return /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
          className: "howitworks-step",
          children: [/*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
            className: "howitworks-step-top",
            children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
              className: "howitworks-number",
              children: step.number
            }), /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
              className: "howitworks-icon-wrap",
              children: /*#__PURE__*/(0, _jsxRuntime.jsx)(Icon, {
                className: "howitworks-icon"
              })
            })]
          }), /*#__PURE__*/(0, _jsxRuntime.jsx)("h3", {
            className: "howitworks-step-title",
            children: step.title
          }), /*#__PURE__*/(0, _jsxRuntime.jsx)("p", {
            className: "howitworks-step-desc",
            children: step.description
          }), index < steps.length - 1 && /*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
            className: "howitworks-connector"
          })]
        }, index);
      })
    })]
  });
}