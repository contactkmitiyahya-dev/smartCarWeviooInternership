"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = require("react");
require("./ElectricBorder.css");
var _jsxRuntime = require("react/jsx-runtime");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
var ElectricBorder = function ElectricBorder(_ref) {
  var children = _ref.children,
    _ref$color = _ref.color,
    color = _ref$color === void 0 ? '#5227FF' : _ref$color,
    _ref$speed = _ref.speed,
    speed = _ref$speed === void 0 ? 1 : _ref$speed,
    _ref$chaos = _ref.chaos,
    chaos = _ref$chaos === void 0 ? 0.12 : _ref$chaos,
    _ref$borderRadius = _ref.borderRadius,
    borderRadius = _ref$borderRadius === void 0 ? 24 : _ref$borderRadius,
    className = _ref.className,
    style = _ref.style;
  var canvasRef = (0, _react.useRef)(null);
  var containerRef = (0, _react.useRef)(null);
  var animationRef = (0, _react.useRef)(null);
  var timeRef = (0, _react.useRef)(0);
  var lastFrameTimeRef = (0, _react.useRef)(0);

  // Noise functions
  var random = (0, _react.useCallback)(function (x) {
    return Math.sin(x * 12.9898) * 43758.5453 % 1;
  }, []);
  var noise2D = (0, _react.useCallback)(function (x, y) {
    var i = Math.floor(x);
    var j = Math.floor(y);
    var fx = x - i;
    var fy = y - j;
    var a = random(i + j * 57);
    var b = random(i + 1 + j * 57);
    var c = random(i + (j + 1) * 57);
    var d = random(i + 1 + (j + 1) * 57);
    var ux = fx * fx * (3.0 - 2.0 * fx);
    var uy = fy * fy * (3.0 - 2.0 * fy);
    return a * (1 - ux) * (1 - uy) + b * ux * (1 - uy) + c * (1 - ux) * uy + d * ux * uy;
  }, [random]);
  var octavedNoise = (0, _react.useCallback)(function (x, octaves, lacunarity, gain, baseAmplitude, baseFrequency, time, seed, baseFlatness) {
    var y = 0;
    var amplitude = baseAmplitude;
    var frequency = baseFrequency;
    for (var i = 0; i < octaves; i++) {
      var octaveAmplitude = amplitude;
      if (i === 0) {
        octaveAmplitude *= baseFlatness;
      }
      y += octaveAmplitude * noise2D(frequency * x + seed * 100, time * frequency * 0.3);
      frequency *= lacunarity;
      amplitude *= gain;
    }
    return y;
  }, [noise2D]);
  var getCornerPoint = (0, _react.useCallback)(function (centerX, centerY, radius, startAngle, arcLength, progress) {
    var angle = startAngle + progress * arcLength;
    return {
      x: centerX + radius * Math.cos(angle),
      y: centerY + radius * Math.sin(angle)
    };
  }, []);
  var getRoundedRectPoint = (0, _react.useCallback)(function (t, left, top, width, height, radius) {
    var straightWidth = width - 2 * radius;
    var straightHeight = height - 2 * radius;
    var cornerArc = Math.PI * radius / 2;
    var totalPerimeter = 2 * straightWidth + 2 * straightHeight + 4 * cornerArc;
    var distance = t * totalPerimeter;
    var accumulated = 0;

    // Top edge
    if (distance <= accumulated + straightWidth) {
      var _progress = (distance - accumulated) / straightWidth;
      return {
        x: left + radius + _progress * straightWidth,
        y: top
      };
    }
    accumulated += straightWidth;

    // Top-right corner
    if (distance <= accumulated + cornerArc) {
      var _progress2 = (distance - accumulated) / cornerArc;
      return getCornerPoint(left + width - radius, top + radius, radius, -Math.PI / 2, Math.PI / 2, _progress2);
    }
    accumulated += cornerArc;

    // Right edge
    if (distance <= accumulated + straightHeight) {
      var _progress3 = (distance - accumulated) / straightHeight;
      return {
        x: left + width,
        y: top + radius + _progress3 * straightHeight
      };
    }
    accumulated += straightHeight;

    // Bottom-right corner
    if (distance <= accumulated + cornerArc) {
      var _progress4 = (distance - accumulated) / cornerArc;
      return getCornerPoint(left + width - radius, top + height - radius, radius, 0, Math.PI / 2, _progress4);
    }
    accumulated += cornerArc;

    // Bottom edge
    if (distance <= accumulated + straightWidth) {
      var _progress5 = (distance - accumulated) / straightWidth;
      return {
        x: left + width - radius - _progress5 * straightWidth,
        y: top + height
      };
    }
    accumulated += straightWidth;

    // Bottom-left corner
    if (distance <= accumulated + cornerArc) {
      var _progress6 = (distance - accumulated) / cornerArc;
      return getCornerPoint(left + radius, top + height - radius, radius, Math.PI / 2, Math.PI / 2, _progress6);
    }
    accumulated += cornerArc;

    // Left edge
    if (distance <= accumulated + straightHeight) {
      var _progress7 = (distance - accumulated) / straightHeight;
      return {
        x: left,
        y: top + height - radius - _progress7 * straightHeight
      };
    }
    accumulated += straightHeight;

    // Top-left corner
    var progress = (distance - accumulated) / cornerArc;
    return getCornerPoint(left + radius, top + radius, radius, Math.PI, Math.PI / 2, progress);
  }, [getCornerPoint]);
  (0, _react.useEffect)(function () {
    var canvas = canvasRef.current;
    var container = containerRef.current;
    if (!canvas || !container) return;
    var ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Configuration
    var octaves = 10;
    var lacunarity = 1.6;
    var gain = 0.7;
    var amplitude = chaos;
    var frequency = 10;
    var baseFlatness = 0;
    var displacement = 60;
    var borderOffset = 60;
    var updateSize = function updateSize() {
      var rect = container.getBoundingClientRect();
      var width = rect.width + borderOffset * 2;
      var height = rect.height + borderOffset * 2;

      // Use device pixel ratio for sharp rendering
      var dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      canvas.style.width = "".concat(width, "px");
      canvas.style.height = "".concat(height, "px");
      ctx.scale(dpr, dpr);
      return {
        width: width,
        height: height
      };
    };
    var _updateSize = updateSize(),
      width = _updateSize.width,
      height = _updateSize.height;
    var lastDpr = Math.min(window.devicePixelRatio || 1, 2);
    var _drawElectricBorder = function drawElectricBorder(currentTime) {
      if (!canvas || !ctx) return;
      var dpr = Math.min(window.devicePixelRatio || 1, 2);
      if (dpr !== lastDpr) {
        lastDpr = dpr;
        var newSize = updateSize();
        width = newSize.width;
        height = newSize.height;
      }
      var deltaTime = (currentTime - lastFrameTimeRef.current) / 1000;
      timeRef.current += deltaTime * speed;
      lastFrameTimeRef.current = currentTime;
      ctx.setTransform(1, 0, 0, 1, 0, 0);
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.scale(dpr, dpr);
      ctx.strokeStyle = color;
      ctx.lineWidth = 1;
      ctx.lineCap = 'round';
      ctx.lineJoin = 'round';
      var scale = displacement;
      var left = borderOffset;
      var top = borderOffset;
      var borderWidth = width - 2 * borderOffset;
      var borderHeight = height - 2 * borderOffset;
      var maxRadius = Math.min(borderWidth, borderHeight) / 2;
      var radius = Math.min(borderRadius, maxRadius);
      var approximatePerimeter = 2 * (borderWidth + borderHeight) + 2 * Math.PI * radius;
      var sampleCount = Math.floor(approximatePerimeter / 2);
      ctx.beginPath();
      for (var i = 0; i <= sampleCount; i++) {
        var progress = i / sampleCount;
        var point = getRoundedRectPoint(progress, left, top, borderWidth, borderHeight, radius);
        var xNoise = octavedNoise(progress * 8, octaves, lacunarity, gain, amplitude, frequency, timeRef.current, 0, baseFlatness);
        var yNoise = octavedNoise(progress * 8, octaves, lacunarity, gain, amplitude, frequency, timeRef.current, 1, baseFlatness);
        var displacedX = point.x + xNoise * scale;
        var displacedY = point.y + yNoise * scale;
        if (i === 0) {
          ctx.moveTo(displacedX, displacedY);
        } else {
          ctx.lineTo(displacedX, displacedY);
        }
      }
      ctx.closePath();
      ctx.stroke();
      animationRef.current = requestAnimationFrame(_drawElectricBorder);
    };

    // Handle resize
    var resizeObserver = new ResizeObserver(function () {
      var newSize = updateSize();
      width = newSize.width;
      height = newSize.height;
    });
    resizeObserver.observe(container);

    // Start animation
    animationRef.current = requestAnimationFrame(_drawElectricBorder);
    return function () {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
      resizeObserver.disconnect();
    };
  }, [color, speed, chaos, borderRadius, octavedNoise, getRoundedRectPoint]);
  var vars = {
    '--electric-border-color': color,
    borderRadius: borderRadius
  };
  return /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
    ref: containerRef,
    className: "electric-border ".concat(className !== null && className !== void 0 ? className : ''),
    style: _objectSpread(_objectSpread({}, vars), style),
    children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
      className: "eb-canvas-container",
      children: /*#__PURE__*/(0, _jsxRuntime.jsx)("canvas", {
        ref: canvasRef,
        className: "eb-canvas"
      })
    }), /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
      className: "eb-layers",
      children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
        className: "eb-glow-1"
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
        className: "eb-glow-2"
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
        className: "eb-background-glow"
      })]
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
      className: "eb-content",
      children: children
    })]
  });
};
var _default = exports["default"] = ElectricBorder;