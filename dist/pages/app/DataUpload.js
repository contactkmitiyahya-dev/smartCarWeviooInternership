"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = DataUpload;
var _react = require("react");
var _reactRouterDom = require("react-router-dom");
var _fa = require("react-icons/fa");
var _testData = require("../../data/testData");
var _FileDropzone = _interopRequireDefault(require("../../components/upload/FileDropzone"));
var _UploadProgressBar = _interopRequireDefault(require("../../components/upload/UploadProgressBar"));
var _UploadHistory = _interopRequireDefault(require("../../components/upload/UploadHistory"));
require("./dataUpload.css");
var _jsxRuntime = require("react/jsx-runtime");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
function DataUpload() {
  var _useParams = (0, _reactRouterDom.useParams)(),
    id = _useParams.id;
  var vehicle = (0, _testData.getVehicleById)(id);
  var history = (0, _testData.getUploadHistory)(id);
  var _useState = (0, _react.useState)([]),
    _useState2 = _slicedToArray(_useState, 2),
    files = _useState2[0],
    setFiles = _useState2[1];
  var _useState3 = (0, _react.useState)([]),
    _useState4 = _slicedToArray(_useState3, 2),
    uploadingFiles = _useState4[0],
    setUploadingFiles = _useState4[1];
  if (!vehicle) {
    return /*#__PURE__*/(0, _jsxRuntime.jsx)("main", {
      className: "upload-page",
      children: /*#__PURE__*/(0, _jsxRuntime.jsxs)("p", {
        className: "vehicle-not-found",
        children: ["V\xE9hicule introuvable. ", /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactRouterDom.Link, {
          to: "/userDashboard",
          children: "Retour au tableau de bord"
        })]
      })
    });
  }
  var simulateUpload = function simulateUpload() {
    var validFiles = files.filter(function (f) {
      return !f.error;
    });
    if (validFiles.length === 0) return;
    var simulated = validFiles.map(function (f) {
      return {
        id: f.id,
        fileName: f.file.name,
        progress: 0,
        status: 'uploading'
      };
    });
    setUploadingFiles(simulated);
    simulated.forEach(function (item, index) {
      var progress = 0;
      var interval = setInterval(function () {
        progress += 20;
        setUploadingFiles(function (prev) {
          return prev.map(function (p) {
            return p.id === item.id ? _objectSpread(_objectSpread({}, p), {}, {
              progress: Math.min(progress, 100),
              status: progress >= 100 ? 'success' : 'uploading'
            }) : p;
          });
        });
        if (progress >= 100) clearInterval(interval);
      }, 300 + index * 100);
    });
  };
  return /*#__PURE__*/(0, _jsxRuntime.jsxs)("main", {
    className: "upload-page",
    children: [/*#__PURE__*/(0, _jsxRuntime.jsxs)(_reactRouterDom.Link, {
      to: "/vehicles/".concat(id),
      className: "upload-back-link",
      children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_fa.FaArrowLeft, {}), " Retour au v\xE9hicule"]
    }), /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
      className: "upload-header",
      children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("h1", {
        className: "upload-title",
        children: "Importer des donn\xE9es"
      }), /*#__PURE__*/(0, _jsxRuntime.jsxs)("p", {
        className: "upload-subtitle",
        children: [vehicle.make, " ", vehicle.model, " \u2014 ", vehicle.plate]
      })]
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_FileDropzone["default"], {
      onFilesSelected: setFiles
    }), files.some(function (f) {
      return !f.error;
    }) && uploadingFiles.length === 0 && /*#__PURE__*/(0, _jsxRuntime.jsx)("button", {
      type: "button",
      className: "upload-submit-btn",
      onClick: simulateUpload,
      children: "Lancer l'import"
    }), uploadingFiles.length > 0 && /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
      className: "upload-progress-section",
      children: uploadingFiles.map(function (item) {
        return /*#__PURE__*/(0, _jsxRuntime.jsx)(_UploadProgressBar["default"], {
          fileName: item.fileName,
          progress: item.progress,
          status: item.status
        }, item.id);
      })
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
      className: "upload-history-section",
      children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_UploadHistory["default"], {
        history: history
      })
    })]
  });
}