"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = FileDropzone;
var _react = require("react");
var _fa = require("react-icons/fa");
require("./fileDropzone.css");
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
var ACCEPTED_TYPES = ['.csv', '.json'];
var MAX_SIZE_MB = 10;
var fileIdCounter = 0;
function FileDropzone(_ref) {
  var onFilesSelected = _ref.onFilesSelected;
  var _useState = (0, _react.useState)(false),
    _useState2 = _slicedToArray(_useState, 2),
    isDragging = _useState2[0],
    setIsDragging = _useState2[1];
  var _useState3 = (0, _react.useState)([]),
    _useState4 = _slicedToArray(_useState3, 2),
    selectedFiles = _useState4[0],
    setSelectedFiles = _useState4[1];
  var inputRef = (0, _react.useRef)(null);
  var validateFile = function validateFile(file) {
    var ext = '.' + file.name.split('.').pop().toLowerCase();
    if (!ACCEPTED_TYPES.includes(ext)) {
      return "Format non support\xE9 (".concat(ext, "). Utilisez .csv ou .json");
    }
    if (file.size > MAX_SIZE_MB * 1024 * 1024) {
      return "Fichier trop volumineux (max ".concat(MAX_SIZE_MB, " Mo)");
    }
    return null;
  };
  var processFiles = function processFiles(fileList) {
    var files = Array.from(fileList).map(function (file) {
      return {
        file: file,
        id: "file-".concat(fileIdCounter++, "-").concat(file.name),
        error: validateFile(file)
      };
    });
    var updated = [].concat(_toConsumableArray(selectedFiles), _toConsumableArray(files));
    setSelectedFiles(updated);
    onFilesSelected(updated);
  };
  var handleDrop = function handleDrop(e) {
    e.preventDefault();
    setIsDragging(false);
    processFiles(e.dataTransfer.files);
  };
  var handleInputChange = function handleInputChange(e) {
    processFiles(e.target.files);
    e.target.value = '';
  };
  var removeFile = function removeFile(id) {
    var updated = selectedFiles.filter(function (f) {
      return f.id !== id;
    });
    setSelectedFiles(updated);
    onFilesSelected(updated);
  };
  return /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
    className: "dropzone-wrapper",
    children: [/*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
      className: "dropzone ".concat(isDragging ? 'dropzone-active' : ''),
      onDragOver: function onDragOver(e) {
        e.preventDefault();
        setIsDragging(true);
      },
      onDragLeave: function onDragLeave() {
        return setIsDragging(false);
      },
      onDrop: handleDrop,
      onClick: function onClick() {
        return inputRef.current.click();
      },
      children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_fa.FaCloudUploadAlt, {
        className: "dropzone-icon"
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)("p", {
        className: "dropzone-text",
        children: "Glissez vos fichiers ici ou cliquez pour parcourir"
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)("p", {
        className: "dropzone-hint",
        children: "Formats accept\xE9s : CSV, JSON \u2014 10 Mo max par fichier"
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)("input", {
        ref: inputRef,
        type: "file",
        accept: ".csv,.json",
        multiple: true,
        onChange: handleInputChange,
        className: "dropzone-input"
      })]
    }), selectedFiles.length > 0 && /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
      className: "dropzone-file-list",
      children: selectedFiles.map(function (item) {
        return /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
          className: "dropzone-file-item ".concat(item.error ? 'dropzone-file-error' : ''),
          children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_fa.FaFileAlt, {
            className: "dropzone-file-icon"
          }), /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
            className: "dropzone-file-info",
            children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
              className: "dropzone-file-name",
              children: item.file.name
            }), /*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
              className: "dropzone-file-meta",
              children: item.error ? item.error : "".concat((item.file.size / 1024).toFixed(1), " Ko")
            })]
          }), /*#__PURE__*/(0, _jsxRuntime.jsx)("button", {
            type: "button",
            className: "dropzone-file-remove",
            onClick: function onClick() {
              return removeFile(item.id);
            },
            children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_fa.FaTimes, {})
          })]
        }, item.id);
      })
    })]
  });
}