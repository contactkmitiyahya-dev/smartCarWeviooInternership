"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = UploadHistory;
var _fa = require("react-icons/fa");
require("./uploadHistory.css");
var _jsxRuntime = require("react/jsx-runtime");
var statusConfig = {
  success: {
    icon: _fa.FaCheckCircle,
    label: 'Succès',
    className: 'upload-history-success'
  },
  partial: {
    icon: _fa.FaExclamationCircle,
    label: 'Partiel',
    className: 'upload-history-partial'
  },
  failed: {
    icon: _fa.FaTimesCircle,
    label: 'Échoué',
    className: 'upload-history-failed'
  }
};
function UploadHistory(_ref) {
  var history = _ref.history;
  if (history.length === 0) {
    return /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
      className: "upload-history",
      children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("h3", {
        className: "upload-history-title",
        children: "Historique des imports"
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)("p", {
        className: "upload-history-empty",
        children: "Aucun import effectu\xE9 pour ce v\xE9hicule."
      })]
    });
  }
  return /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
    className: "upload-history",
    children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("h3", {
      className: "upload-history-title",
      children: "Historique des imports"
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
      className: "upload-history-list",
      children: history.map(function (entry) {
        var config = statusConfig[entry.status];
        var Icon = config.icon;
        return /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
          className: "upload-history-item",
          children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
            className: "upload-history-icon ".concat(config.className),
            children: /*#__PURE__*/(0, _jsxRuntime.jsx)(Icon, {})
          }), /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
            className: "upload-history-text",
            children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
              className: "upload-history-filename",
              children: entry.fileName
            }), /*#__PURE__*/(0, _jsxRuntime.jsxs)("span", {
              className: "upload-history-meta",
              children: [entry.date, " \u2022 ", entry.rowCount, " lignes", entry.errorDetails ? " \u2022 ".concat(entry.errorDetails) : '']
            })]
          }), /*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
            className: "upload-history-status ".concat(config.className),
            children: config.label
          })]
        }, entry.id);
      })
    })]
  });
}