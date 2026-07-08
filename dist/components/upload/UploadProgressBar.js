"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = UploadProgressBar;
var _fa = require("react-icons/fa");
require("./uploadProgressBar.css");
var _jsxRuntime = require("react/jsx-runtime");
function UploadProgressBar(_ref) {
  var fileName = _ref.fileName,
    progress = _ref.progress,
    status = _ref.status;
  return /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
    className: "upload-progress-item",
    children: [/*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
      className: "upload-progress-header",
      children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
        className: "upload-progress-name",
        children: fileName
      }), status === 'uploading' && /*#__PURE__*/(0, _jsxRuntime.jsx)(_fa.FaSpinner, {
        className: "upload-progress-icon upload-progress-spinning"
      }), status === 'success' && /*#__PURE__*/(0, _jsxRuntime.jsx)(_fa.FaCheckCircle, {
        className: "upload-progress-icon upload-progress-success"
      }), status === 'error' && /*#__PURE__*/(0, _jsxRuntime.jsx)(_fa.FaTimesCircle, {
        className: "upload-progress-icon upload-progress-error"
      })]
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
      className: "upload-progress-track",
      children: /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
        className: "upload-progress-fill upload-progress-".concat(status),
        style: {
          width: "".concat(progress, "%")
        }
      })
    })]
  });
}