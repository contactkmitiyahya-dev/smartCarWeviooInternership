"use strict";

var _express = _interopRequireDefault(require("express"));
var _react = _interopRequireDefault(require("react"));
var _server = require("react-dom/server");
var _server2 = require("react-router-dom/server");
var _App = _interopRequireDefault(require("./App"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
var app = (0, _express["default"])();
app.set('etag', false);
var PORT = process.env.PORT || 3000;
var _require = require('./context/AuthContext'),
  AuthProvider = _require.AuthProvider;
app.use(_express["default"]["static"]('public'));
app.get('/{*splat}', function (req, res) {
  var html = (0, _server.renderToString)(/*#__PURE__*/_react["default"].createElement(_server2.StaticRouter, {
    location: req.url
  }, /*#__PURE__*/_react["default"].createElement(AuthProvider, null, /*#__PURE__*/_react["default"].createElement(_App["default"]))));
  res.send("\n    <!DOCTYPE html>\n    <html>\n      <head>\n        <meta charset=\"UTF-8\" />\n        <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\" />\n        <title>Smart Car Monitoring</title>\n        <style>*,*::before,*::after{box-sizing:border-box;margin:0;padding:0}html,body{margin:0;padding:0;width:100%;overflow-x:hidden}</style>\n        <link rel=\"stylesheet\" href=\"/styles.css\">\n        <link rel=\"preconnect\" href=\"https://fonts.googleapis.com\">\n        <link rel=\"preconnect\" href=\"https://fonts.gstatic.com\" crossorigin>\n  <link rel=\"stylesheet\" href=\"https://fonts.googleapis.com/css2?family=Roboto+Flex:opsz,wght@8..144,100..1000&display=swap\">\n        </head>\n      <body>\n        <div id=\"root\">".concat(html, "</div>\n        <script src=\"/bundle.js\"></script>\n      </body>\n    </html>\n  "));
});
app.listen(PORT, function () {
  console.log("Server running at http://localhost:".concat(PORT));
});