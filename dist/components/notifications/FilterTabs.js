"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = FilterTabs;
require("./filterTabs.css");
var _jsxRuntime = require("react/jsx-runtime");
var tabs = [{
  key: 'all',
  label: 'Toutes'
}, {
  key: 'critical',
  label: 'Critique'
}, {
  key: 'warning',
  label: 'Avertissement'
}, {
  key: 'info',
  label: 'Info'
}];
function FilterTabs(_ref) {
  var activeTab = _ref.activeTab,
    onChange = _ref.onChange,
    counts = _ref.counts;
  return /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
    className: "filter-tabs",
    children: tabs.map(function (tab) {
      return /*#__PURE__*/(0, _jsxRuntime.jsxs)("button", {
        type: "button",
        className: "filter-tab ".concat(activeTab === tab.key ? 'filter-tab-active' : ''),
        onClick: function onClick() {
          return onChange(tab.key);
        },
        children: [tab.label, /*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
          className: "filter-tab-count",
          children: counts[tab.key]
        })]
      }, tab.key);
    })
  });
}