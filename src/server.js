import express from 'express';
import React from 'react';
import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom/server';
import App from './App';

const app = express();
app.set('etag', false);
const PORT = process.env.PORT || 3000;
require('../config/passport.js');
const passport = require('passport');
app.use(passport.initialize())
const { AuthProvider } = require('./context/AuthContext');

const authRoutes         = require('../routes/auth.routes');
const vehicleRoutes      = require('../routes/vehicles.routes');
const maintenanceRoutes  = require('../routes/maintenance.routes');
const notificationRoutes = require('../routes/notification.routes');
const uploadsRoutes      = require('../routes/uploads.routes');
const dtcRoutes          = require('../routes/dtc.routes');

app.use(express.json());
app.use('/api/v1/auth',          authRoutes);
app.use('/api/v1/vehicles',      vehicleRoutes);
app.use('/api/v1/maintenance',   maintenanceRoutes);
app.use('/api/v1/notifications', notificationRoutes);
app.use('/api/v1',               uploadsRoutes);
app.use('/api/v1',               dtcRoutes);

app.use(express.static('public'));

app.get('/{*splat}', (req, res) => {
  const html = renderToString(
    React.createElement(StaticRouter, { location: req.url },
      React.createElement(AuthProvider, null, React.createElement(App))
    )
  );

  res.send(`
    <!DOCTYPE html>
    <html>
      <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Smart Car Monitoring</title>
        <style>*,*::before,*::after{box-sizing:border-box;margin:0;padding:0}html,body{margin:0;padding:0;width:100%;overflow-x:hidden}</style>
        <link rel="stylesheet" href="/styles.css">
        <link rel="preconnect" href="https://fonts.googleapis.com">
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Roboto+Flex:opsz,wght@8..144,100..1000&display=swap">
        </head>
      <body>
        <div id="root">${html}</div>
        <script src="/bundle.js"></script>
      </body>
    </html>
  `);
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});