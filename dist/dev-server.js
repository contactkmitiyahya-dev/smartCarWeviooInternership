"use strict";

require('ignore-styles');
require('dotenv').config();
var express = require('express');
require('@babel/register')({
  presets: ['@babel/preset-env', ['@babel/preset-react', {
    runtime: 'automatic'
  }]]
});
var webpack = require('webpack');
var middleware = require('webpack-dev-middleware');
var authRoutes = require('../routes/auth.routes');
var vehicleRoutes = require('../routes/vehicles.routes');
var maintenanceRoutes = require('../routes/maintenance.routes');
var notificationRoutes = require('../routes/notification.routes');
var uploadsRoutes = require('../routes/uploads.routes');
var dtcRoutes = require('../routes/dtc.routes');
var React = require('react');
var _require = require('react-dom/server'),
  renderToString = _require.renderToString;
var _require2 = require('react-router-dom/server'),
  StaticRouter = _require2.StaticRouter;
var _require3 = require('./context/AuthContext'),
  AuthProvider = _require3.AuthProvider;
var app = express();
app.set('etag', false);
var compiler = webpack(require('../webpack.config'));
app.use(express.json());
app.use('/api/v1/auth', authRoutes);
app.use('/api/v1/vehicles', vehicleRoutes);
app.use('/api/v1/maintenance', maintenanceRoutes);
app.use('/api/v1/notifications', notificationRoutes);
app.use('/api/v1', uploadsRoutes);
app.use('/api/v1', dtcRoutes);
app.use(middleware(compiler, {
  publicPath: '/'
}));
app.get('/{*splat}', function (req, res) {
  delete require.cache[require.resolve('./App')];
  var FreshApp = require('./App')["default"];
  var html = renderToString(React.createElement(StaticRouter, {
    location: req.url
  }, React.createElement(AuthProvider, null, React.createElement(FreshApp))));
  res.send("\n    <!DOCTYPE html>\n    <html>\n      <head>\n        <meta charset=\"UTF-8\" />\n        <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\" />\n        <title>My App</title>\n        <link rel=\"preconnect\" href=\"https://fonts.googleapis.com\">\n        <link rel=\"preconnect\" href=\"https://fonts.gstatic.com\" crossorigin>\n  <link rel=\"stylesheet\" href=\"https://fonts.googleapis.com/css2?family=Roboto+Flex:opsz,wght@8..144,100..1000&display=swap\">\n        <link rel=\"stylesheet\" href=\"/styles.css\">\n        <style>*,*::before,*::after{box-sizing:border-box;margin:0;padding:0}html,body{margin:0;padding:0;width:100%;overflow-x:hidden}</style>\n      </head>\n      <body>\n        <div id=\"root\">".concat(html, "</div>\n        <script src=\"/bundle.js\"></script>\n      </body>\n    </html>\n  "));
});
app.listen(3000, function () {
  console.log('Dev server: http://localhost:3000');
});