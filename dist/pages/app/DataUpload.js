"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = DataUpload;
var _react = require("react");
var _reactRouterDom = require("react-router-dom");
var _fa = require("react-icons/fa");
var _client = require("../../api/client");
var _FileDropzone = _interopRequireDefault(require("../../components/upload/FileDropzone"));
var _UploadProgressBar = _interopRequireDefault(require("../../components/upload/UploadProgressBar"));
var _UploadHistory = _interopRequireDefault(require("../../components/upload/UploadHistory"));
require("./dataUpload.css");
var _jsxRuntime = require("react/jsx-runtime");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
function _regenerator() { /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */ var e, t, r = "function" == typeof Symbol ? Symbol : {}, n = r.iterator || "@@iterator", o = r.toStringTag || "@@toStringTag"; function i(r, n, o, i) { var c = n && n.prototype instanceof Generator ? n : Generator, u = Object.create(c.prototype); return _regeneratorDefine2(u, "_invoke", function (r, n, o) { var i, c, u, f = 0, p = o || [], y = !1, G = { p: 0, n: 0, v: e, a: d, f: d.bind(e, 4), d: function d(t, r) { return i = t, c = 0, u = e, G.n = r, a; } }; function d(r, n) { for (c = r, u = n, t = 0; !y && f && !o && t < p.length; t++) { var o, i = p[t], d = G.p, l = i[2]; r > 3 ? (o = l === n) && (u = i[(c = i[4]) ? 5 : (c = 3, 3)], i[4] = i[5] = e) : i[0] <= d && ((o = r < 2 && d < i[1]) ? (c = 0, G.v = n, G.n = i[1]) : d < l && (o = r < 3 || i[0] > n || n > l) && (i[4] = r, i[5] = n, G.n = l, c = 0)); } if (o || r > 1) return a; throw y = !0, n; } return function (o, p, l) { if (f > 1) throw TypeError("Generator is already running"); for (y && 1 === p && d(p, l), c = p, u = l; (t = c < 2 ? e : u) || !y;) { i || (c ? c < 3 ? (c > 1 && (G.n = -1), d(c, u)) : G.n = u : G.v = u); try { if (f = 2, i) { if (c || (o = "next"), t = i[o]) { if (!(t = t.call(i, u))) throw TypeError("iterator result is not an object"); if (!t.done) return t; u = t.value, c < 2 && (c = 0); } else 1 === c && (t = i["return"]) && t.call(i), c < 2 && (u = TypeError("The iterator does not provide a '" + o + "' method"), c = 1); i = e; } else if ((t = (y = G.n < 0) ? u : r.call(n, G)) !== a) break; } catch (t) { i = e, c = 1, u = t; } finally { f = 1; } } return { value: t, done: y }; }; }(r, o, i), !0), u; } var a = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} t = Object.getPrototypeOf; var c = [][n] ? t(t([][n]())) : (_regeneratorDefine2(t = {}, n, function () { return this; }), t), u = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(c); function f(e) { return Object.setPrototypeOf ? Object.setPrototypeOf(e, GeneratorFunctionPrototype) : (e.__proto__ = GeneratorFunctionPrototype, _regeneratorDefine2(e, o, "GeneratorFunction")), e.prototype = Object.create(u), e; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, _regeneratorDefine2(u, "constructor", GeneratorFunctionPrototype), _regeneratorDefine2(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = "GeneratorFunction", _regeneratorDefine2(GeneratorFunctionPrototype, o, "GeneratorFunction"), _regeneratorDefine2(u), _regeneratorDefine2(u, o, "Generator"), _regeneratorDefine2(u, n, function () { return this; }), _regeneratorDefine2(u, "toString", function () { return "[object Generator]"; }), (_regenerator = function _regenerator() { return { w: i, m: f }; })(); }
function _regeneratorDefine2(e, r, n, t) { var i = Object.defineProperty; try { i({}, "", {}); } catch (e) { i = 0; } _regeneratorDefine2 = function _regeneratorDefine(e, r, n, t) { function o(r, n) { _regeneratorDefine2(e, r, function (e) { return this._invoke(r, n, e); }); } r ? i ? i(e, r, { value: n, enumerable: !t, configurable: !t, writable: !t }) : e[r] = n : (o("next", 0), o("throw", 1), o("return", 2)); }, _regeneratorDefine2(e, r, n, t); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _toConsumableArray(r) { return _arrayWithoutHoles(r) || _iterableToArray(r) || _unsupportedIterableToArray(r) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArray(r) { if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r); }
function _arrayWithoutHoles(r) { if (Array.isArray(r)) return _arrayLikeToArray(r); }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
function DataUpload() {
  var _useParams = (0, _reactRouterDom.useParams)(),
    id = _useParams.id;
  var _useState = (0, _react.useState)(null),
    _useState2 = _slicedToArray(_useState, 2),
    vehicle = _useState2[0],
    setVehicle = _useState2[1];
  var _useState3 = (0, _react.useState)([]),
    _useState4 = _slicedToArray(_useState3, 2),
    history = _useState4[0],
    setHistory = _useState4[1];
  var _useState5 = (0, _react.useState)([]),
    _useState6 = _slicedToArray(_useState5, 2),
    files = _useState6[0],
    setFiles = _useState6[1];
  var _useState7 = (0, _react.useState)([]),
    _useState8 = _slicedToArray(_useState7, 2),
    uploadingFiles = _useState8[0],
    setUploadingFiles = _useState8[1];
  var _useState9 = (0, _react.useState)(true),
    _useState0 = _slicedToArray(_useState9, 2),
    isLoading = _useState0[0],
    setIsLoading = _useState0[1];
  var _useState1 = (0, _react.useState)(''),
    _useState10 = _slicedToArray(_useState1, 2),
    error = _useState10[0],
    setError = _useState10[1];
  (0, _react.useEffect)(function () {
    var cancelled = false;
    Promise.all([(0, _client.apiFetch)("/vehicles/".concat(id)), (0, _client.apiFetch)("/vehicles/".concat(id, "/uploads"))]).then(function (_ref) {
      var _ref2 = _slicedToArray(_ref, 2),
        vehicleData = _ref2[0],
        uploadsData = _ref2[1];
      if (cancelled) return;
      setVehicle(vehicleData.vehicle);
      setHistory(uploadsData.uploads || []);
    })["catch"](function (err) {
      if (!cancelled) setError(err instanceof _client.ApiError ? err.message : 'Véhicule introuvable.');
    })["finally"](function () {
      if (!cancelled) setIsLoading(false);
    });
    return function () {
      cancelled = true;
    };
  }, [id]);
  if (isLoading) {
    return /*#__PURE__*/(0, _jsxRuntime.jsx)("main", {
      className: "upload-page",
      children: /*#__PURE__*/(0, _jsxRuntime.jsx)("p", {
        className: "dashboard-loading",
        children: "Chargement..."
      })
    });
  }
  if (error && !vehicle) {
    return /*#__PURE__*/(0, _jsxRuntime.jsx)("main", {
      className: "upload-page",
      children: /*#__PURE__*/(0, _jsxRuntime.jsxs)("p", {
        className: "vehicle-not-found",
        children: [error, " ", /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactRouterDom.Link, {
          to: "/dashboard",
          children: "Retour au tableau de bord"
        })]
      })
    });
  }
  var uploadFile = /*#__PURE__*/function () {
    var _ref3 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee(fileItem) {
      var form, result, _t;
      return _regenerator().w(function (_context) {
        while (1) switch (_context.p = _context.n) {
          case 0:
            setUploadingFiles(function (prev) {
              return [].concat(_toConsumableArray(prev), [{
                id: fileItem.id,
                fileName: fileItem.file.name,
                progress: 30,
                status: 'uploading'
              }]);
            });
            form = new FormData();
            form.append('file', fileItem.file);
            _context.p = 1;
            _context.n = 2;
            return (0, _client.apiFetch)("/vehicles/".concat(id, "/upload"), {
              method: 'POST',
              body: form
            });
          case 2:
            result = _context.v;
            setUploadingFiles(function (prev) {
              return prev.map(function (u) {
                return u.id === fileItem.id ? _objectSpread(_objectSpread({}, u), {}, {
                  progress: 100,
                  status: 'success'
                }) : u;
              });
            });
            setHistory(function (prev) {
              return [{
                id: result.uploadId,
                filename: fileItem.file.name,
                status: result.status,
                row_count: result.rowCount,
                errors: result.errors,
                created_at: new Date().toISOString()
              }].concat(_toConsumableArray(prev));
            });
            _context.n = 4;
            break;
          case 3:
            _context.p = 3;
            _t = _context.v;
            setUploadingFiles(function (prev) {
              return prev.map(function (u) {
                return u.id === fileItem.id ? _objectSpread(_objectSpread({}, u), {}, {
                  progress: 100,
                  status: 'error'
                }) : u;
              });
            });
            setError(_t instanceof _client.ApiError ? _t.message : 'Erreur lors de l\'import.');
          case 4:
            return _context.a(2);
        }
      }, _callee, null, [[1, 3]]);
    }));
    return function uploadFile(_x) {
      return _ref3.apply(this, arguments);
    };
  }();
  var handleStartUpload = function handleStartUpload() {
    var validFiles = files.filter(function (f) {
      return !f.error;
    });
    validFiles.forEach(function (f) {
      return uploadFile(f);
    });
    setFiles([]);
  };
  var mappedHistory = history.map(function (u) {
    var _u$row_count;
    return {
      id: u.id,
      fileName: u.filename,
      date: new Date(u.created_at).toLocaleDateString('fr-FR'),
      rowCount: (_u$row_count = u.row_count) !== null && _u$row_count !== void 0 ? _u$row_count : 0,
      status: u.status === 'success' ? 'success' : u.status === 'failed' ? 'failed' : 'partial',
      errorDetails: Array.isArray(u.errors) ? "".concat(u.errors.length, " erreur(s)") : null
    };
  });
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
        children: [vehicle.make, " ", vehicle.model, " \u2014 ", vehicle.plate_number]
      })]
    }), error && /*#__PURE__*/(0, _jsxRuntime.jsx)("p", {
      className: "auth-error",
      style: {
        marginBottom: '16px'
      },
      children: error
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_FileDropzone["default"], {
      onFilesSelected: setFiles
    }), files.some(function (f) {
      return !f.error;
    }) && /*#__PURE__*/(0, _jsxRuntime.jsx)("button", {
      type: "button",
      className: "upload-submit-btn",
      onClick: handleStartUpload,
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
        history: mappedHistory
      })
    })]
  });
}