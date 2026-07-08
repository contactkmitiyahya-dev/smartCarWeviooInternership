"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = SettingsTabs;
var _fa = require("react-icons/fa");
require("./settingsTabs.css");
var _jsxRuntime = require("react/jsx-runtime");
var tabs = [{
  key: 'profile',
  label: 'Profil',
  icon: _fa.FaUser
}, {
  key: 'notifications',
  label: 'Notifications',
  icon: _fa.FaBell
}, {
  key: 'language',
  label: 'Langue',
  icon: _fa.FaGlobe
}, {
  key: 'theme',
  label: 'Apparence',
  icon: _fa.FaPalette
}];
function SettingsTabs(_ref) {
  var activeTab = _ref.activeTab,
    onChange = _ref.onChange;
  return /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
    className: "settings-tabs",
    children: tabs.map(function (tab) {
      var Icon = tab.icon;
      return /*#__PURE__*/(0, _jsxRuntime.jsxs)("button", {
        type: "button",
        className: "settings-tab ".concat(activeTab === tab.key ? 'settings-tab-active' : ''),
        onClick: function onClick() {
          return onChange(tab.key);
        },
        children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(Icon, {
          className: "settings-tab-icon"
        }), tab.label]
      }, tab.key);
    })
  });
}