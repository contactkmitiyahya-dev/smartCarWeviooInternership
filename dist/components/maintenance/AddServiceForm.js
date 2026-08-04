"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = AddServiceForm;
var _react = require("react");
var _fa = require("react-icons/fa");
var _testData = require("../../data/testData");
require("./addServiceForm.css");
var _jsxRuntime = require("react/jsx-runtime");
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
var serviceTypes = Object.keys(_testData.serviceCostCatalog);
function AddServiceForm(_ref) {
  var onAdd = _ref.onAdd;
  var _useState = (0, _react.useState)(false),
    _useState2 = _slicedToArray(_useState, 2),
    isOpen = _useState2[0],
    setIsOpen = _useState2[1];
  var _useState3 = (0, _react.useState)({
      type: '',
      date: '',
      mileage: '',
      cost: '',
      notes: '',
      nextDueDate: '',
      nextDueMileage: ''
    }),
    _useState4 = _slicedToArray(_useState3, 2),
    formData = _useState4[0],
    setFormData = _useState4[1];
  var handleTypeChange = function handleTypeChange(e) {
    var _serviceCostCatalog$s;
    var selectedType = e.target.value;
    setFormData(_objectSpread(_objectSpread({}, formData), {}, {
      type: selectedType,
      cost: (_serviceCostCatalog$s = _testData.serviceCostCatalog[selectedType]) !== null && _serviceCostCatalog$s !== void 0 ? _serviceCostCatalog$s : ''
    }));
  };
  var handleChange = function handleChange(e) {
    setFormData(_objectSpread(_objectSpread({}, formData), {}, _defineProperty({}, e.target.name, e.target.value)));
  };
  var handleSubmit = function handleSubmit(e) {
    e.preventDefault();
    onAdd({
      id: "m-".concat(Date.now()),
      type: formData.type,
      date: formData.date,
      mileage: Number(formData.mileage),
      cost: Number(formData.cost),
      notes: formData.notes,
      nextDueDate: formData.nextDueDate || null,
      nextDueMileage: formData.nextDueMileage ? Number(formData.nextDueMileage) : null
    });
    setFormData({
      type: '',
      date: '',
      mileage: '',
      cost: '',
      notes: '',
      nextDueDate: '',
      nextDueMileage: ''
    });
    setIsOpen(false);
  };
  if (!isOpen) {
    return /*#__PURE__*/(0, _jsxRuntime.jsxs)("button", {
      type: "button",
      className: "add-service-toggle",
      onClick: function onClick() {
        return setIsOpen(true);
      },
      children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_fa.FaPlus, {}), " Ajouter un entretien"]
    });
  }
  return /*#__PURE__*/(0, _jsxRuntime.jsxs)("form", {
    className: "add-service-form",
    onSubmit: handleSubmit,
    children: [/*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
      className: "add-service-grid",
      children: [/*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
        className: "add-service-field",
        children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("label", {
          className: "add-service-label",
          children: "Type d'entretien"
        }), /*#__PURE__*/(0, _jsxRuntime.jsxs)("select", {
          name: "type",
          className: "add-service-input",
          value: formData.type,
          onChange: handleTypeChange,
          required: true,
          children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("option", {
            value: "",
            disabled: true,
            children: "S\xE9lectionner un type"
          }), serviceTypes.map(function (type) {
            return /*#__PURE__*/(0, _jsxRuntime.jsx)("option", {
              value: type,
              children: type
            }, type);
          })]
        })]
      }), /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
        className: "add-service-field",
        children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("label", {
          className: "add-service-label",
          children: "Date"
        }), /*#__PURE__*/(0, _jsxRuntime.jsx)("input", {
          type: "date",
          name: "date",
          className: "add-service-input",
          value: formData.date,
          onChange: handleChange,
          required: true
        })]
      }), /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
        className: "add-service-field",
        children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("label", {
          className: "add-service-label",
          children: "Kilom\xE9trage"
        }), /*#__PURE__*/(0, _jsxRuntime.jsx)("input", {
          type: "number",
          name: "mileage",
          className: "add-service-input",
          placeholder: "ex : 45000",
          value: formData.mileage,
          onChange: handleChange,
          required: true
        })]
      }), /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
        className: "add-service-field",
        children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("label", {
          className: "add-service-label",
          children: "Co\xFBt estim\xE9 (\u20AC)"
        }), /*#__PURE__*/(0, _jsxRuntime.jsx)("input", {
          type: "number",
          name: "cost",
          className: "add-service-input add-service-cost-auto",
          value: formData.cost,
          onChange: handleChange,
          disabled: formData.type !== 'Autre',
          required: true
        }), formData.type && formData.type !== 'Autre' && /*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
          className: "add-service-cost-hint",
          children: "Prix estim\xE9 automatiquement selon le type s\xE9lectionn\xE9"
        })]
      })]
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
      className: "add-service-divider",
      children: /*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
        children: "Prochaine \xE9ch\xE9ance (optionnel)"
      })
    }), /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
      className: "add-service-grid",
      children: [/*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
        className: "add-service-field",
        children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("label", {
          className: "add-service-label",
          children: "Date d'\xE9ch\xE9ance"
        }), /*#__PURE__*/(0, _jsxRuntime.jsx)("input", {
          type: "date",
          name: "nextDueDate",
          className: "add-service-input",
          value: formData.nextDueDate,
          onChange: handleChange
        })]
      }), /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
        className: "add-service-field",
        children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("label", {
          className: "add-service-label",
          children: "Kilom\xE9trage d'\xE9ch\xE9ance"
        }), /*#__PURE__*/(0, _jsxRuntime.jsx)("input", {
          type: "number",
          name: "nextDueMileage",
          className: "add-service-input",
          placeholder: "ex : 50000",
          value: formData.nextDueMileage,
          onChange: handleChange
        })]
      })]
    }), /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
      className: "add-service-field",
      children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("label", {
        className: "add-service-label",
        children: "Notes (optionnel)"
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)("input", {
        type: "text",
        name: "notes",
        className: "add-service-input",
        placeholder: "ex : Huile 5W30 + filtre",
        value: formData.notes,
        onChange: handleChange
      })]
    }), /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
      className: "add-service-actions",
      children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("button", {
        type: "button",
        className: "add-service-cancel",
        onClick: function onClick() {
          return setIsOpen(false);
        },
        children: "Annuler"
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)("button", {
        type: "submit",
        className: "add-service-submit",
        children: "Enregistrer"
      })]
    })]
  });
}