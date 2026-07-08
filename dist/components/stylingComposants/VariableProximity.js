"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = require("react");
require("./VariableProximity.css");
var _jsxRuntime = require("react/jsx-runtime");
var _excluded = ["label", "fromFontVariationSettings", "toFontVariationSettings", "containerRef", "radius", "falloff", "className", "onClick", "style"];
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
function _objectWithoutProperties(e, t) { if (null == e) return {}; var o, r, i = _objectWithoutPropertiesLoose(e, t); if (Object.getOwnPropertySymbols) { var n = Object.getOwnPropertySymbols(e); for (r = 0; r < n.length; r++) o = n[r], -1 === t.indexOf(o) && {}.propertyIsEnumerable.call(e, o) && (i[o] = e[o]); } return i; }
function _objectWithoutPropertiesLoose(r, e) { if (null == r) return {}; var t = {}; for (var n in r) if ({}.hasOwnProperty.call(r, n)) { if (-1 !== e.indexOf(n)) continue; t[n] = r[n]; } return t; }
function useAnimationFrame(callback) {
  (0, _react.useEffect)(function () {
    var frameId;
    var _loop = function loop() {
      callback();
      frameId = requestAnimationFrame(_loop);
    };
    frameId = requestAnimationFrame(_loop);
    return function () {
      return cancelAnimationFrame(frameId);
    };
  }, [callback]);
}
function useMousePositionRef(containerRef) {
  var positionRef = (0, _react.useRef)({
    x: 0,
    y: 0
  });
  (0, _react.useEffect)(function () {
    var updatePosition = function updatePosition(x, y) {
      if (containerRef !== null && containerRef !== void 0 && containerRef.current) {
        var rect = containerRef.current.getBoundingClientRect();
        positionRef.current = {
          x: x - rect.left,
          y: y - rect.top
        };
      } else {
        positionRef.current = {
          x: x,
          y: y
        };
      }
    };
    var handleMouseMove = function handleMouseMove(ev) {
      return updatePosition(ev.clientX, ev.clientY);
    };
    var handleTouchMove = function handleTouchMove(ev) {
      var touch = ev.touches[0];
      updatePosition(touch.clientX, touch.clientY);
    };
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('touchmove', handleTouchMove);
    return function () {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('touchmove', handleTouchMove);
    };
  }, [containerRef]);
  return positionRef;
}
var VariableProximity = /*#__PURE__*/(0, _react.forwardRef)(function (props, ref) {
  var label = props.label,
    fromFontVariationSettings = props.fromFontVariationSettings,
    toFontVariationSettings = props.toFontVariationSettings,
    containerRef = props.containerRef,
    _props$radius = props.radius,
    radius = _props$radius === void 0 ? 50 : _props$radius,
    _props$falloff = props.falloff,
    falloff = _props$falloff === void 0 ? 'linear' : _props$falloff,
    _props$className = props.className,
    className = _props$className === void 0 ? '' : _props$className,
    onClick = props.onClick,
    style = props.style,
    restProps = _objectWithoutProperties(props, _excluded);
  var letterRefs = (0, _react.useRef)([]);
  var interpolatedSettingsRef = (0, _react.useRef)([]);
  var mousePositionRef = useMousePositionRef(containerRef);
  var lastPositionRef = (0, _react.useRef)({
    x: null,
    y: null
  });
  var parsedSettings = (0, _react.useMemo)(function () {
    var parseSettings = function parseSettings(settingsStr) {
      return new Map(settingsStr.split(',').map(function (s) {
        return s.trim();
      }).map(function (s) {
        var _s$split = s.split(' '),
          _s$split2 = _slicedToArray(_s$split, 2),
          name = _s$split2[0],
          value = _s$split2[1];
        return [name.replace(/['"]/g, ''), parseFloat(value)];
      }));
    };
    var fromSettings = parseSettings(fromFontVariationSettings);
    var toSettings = parseSettings(toFontVariationSettings);
    return Array.from(fromSettings.entries()).map(function (_ref) {
      var _toSettings$get;
      var _ref2 = _slicedToArray(_ref, 2),
        axis = _ref2[0],
        fromValue = _ref2[1];
      return {
        axis: axis,
        fromValue: fromValue,
        toValue: (_toSettings$get = toSettings.get(axis)) !== null && _toSettings$get !== void 0 ? _toSettings$get : fromValue
      };
    });
  }, [fromFontVariationSettings, toFontVariationSettings]);
  var calculateDistance = function calculateDistance(x1, y1, x2, y2) {
    return Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));
  };
  var calculateFalloff = function calculateFalloff(distance) {
    var norm = Math.min(Math.max(1 - distance / radius, 0), 1);
    switch (falloff) {
      case 'exponential':
        return Math.pow(norm, 2);
      case 'gaussian':
        return Math.exp(-Math.pow(distance / (radius / 2), 2) / 2);
      case 'linear':
      default:
        return norm;
    }
  };
  var animationCallback = (0, _react.useCallback)(function () {
    if (!(containerRef !== null && containerRef !== void 0 && containerRef.current)) return;
    var containerRect = containerRef.current.getBoundingClientRect();
    var _mousePositionRef$cur = mousePositionRef.current,
      x = _mousePositionRef$cur.x,
      y = _mousePositionRef$cur.y;
    if (lastPositionRef.current.x === x && lastPositionRef.current.y === y) {
      return;
    }
    lastPositionRef.current = {
      x: x,
      y: y
    };
    letterRefs.current.forEach(function (letterRef, index) {
      if (!letterRef) return;
      var rect = letterRef.getBoundingClientRect();
      var letterCenterX = rect.left + rect.width / 2 - containerRect.left;
      var letterCenterY = rect.top + rect.height / 2 - containerRect.top;
      var distance = calculateDistance(mousePositionRef.current.x, mousePositionRef.current.y, letterCenterX, letterCenterY);
      if (distance >= radius) {
        letterRef.style.fontVariationSettings = fromFontVariationSettings;
        return;
      }
      var falloffValue = calculateFalloff(distance);
      var newSettings = parsedSettings.map(function (_ref3) {
        var axis = _ref3.axis,
          fromValue = _ref3.fromValue,
          toValue = _ref3.toValue;
        var interpolatedValue = fromValue + (toValue - fromValue) * falloffValue;
        return "'".concat(axis, "' ").concat(interpolatedValue);
      }).join(', ');
      interpolatedSettingsRef.current[index] = newSettings;
      letterRef.style.fontVariationSettings = newSettings;
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [containerRef, fromFontVariationSettings, radius, falloff, parsedSettings]);
  useAnimationFrame(animationCallback);
  var words = label.split(' ');
  var letterIndex = 0;
  return /*#__PURE__*/(0, _jsxRuntime.jsxs)("span", _objectSpread(_objectSpread({
    ref: ref,
    className: "".concat(className, " variable-proximity"),
    onClick: onClick,
    style: _objectSpread({
      display: 'inline'
    }, style)
  }, restProps), {}, {
    children: [words.map(function (word, wordIndex) {
      return /*#__PURE__*/(0, _jsxRuntime.jsxs)("span", {
        style: {
          display: 'inline-block',
          whiteSpace: 'nowrap'
        },
        children: [word.split('').map(function (letter) {
          var currentLetterIndex = letterIndex++;
          return /*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
            ref: function ref(el) {
              letterRefs.current[currentLetterIndex] = el;
            },
            style: {
              display: 'inline-block',
              fontVariationSettings: interpolatedSettingsRef.current[currentLetterIndex]
            },
            "aria-hidden": "true",
            children: letter
          }, currentLetterIndex);
        }), wordIndex < words.length - 1 && /*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
          style: {
            display: 'inline-block'
          },
          children: "\xA0"
        })]
      }, wordIndex);
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
      className: "sr-only",
      children: label
    })]
  }));
});
VariableProximity.displayName = 'VariableProximity';
var _default = exports["default"] = VariableProximity;