require('ignore-styles');
require('@babel/register')({
  presets: [
    '@babel/preset-env',
    ['@babel/preset-react', { runtime: 'automatic' }]
  ]
});

const express = require('express');
const webpack = require('webpack');
const middleware = require('webpack-dev-middleware');

const React = require('react');
const { renderToString } = require('react-dom/server');
const { StaticRouter } = require('react-router-dom/server');
const app = express();
const compiler = webpack(require('../webpack.config'));

app.use(middleware(compiler, { publicPath: '/' }));

app.get('/{*splat}', (req, res) => {
  delete require.cache[require.resolve('./App')];
  const FreshApp = require('./App').default;
  const html = renderToString(
    React.createElement(StaticRouter, { location: req.url },
      React.createElement(FreshApp)
    )
  );
  
  res.send(`
    <!DOCTYPE html>
    <html>
      <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>My App</title>
        <link rel="preconnect" href="https://fonts.googleapis.com">
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Roboto+Flex:opsz,wght@8..144,100..1000&display=swap">
        <link rel="stylesheet" href="/styles.css">
        <style>*,*::before,*::after{box-sizing:border-box;margin:0;padding:0}html,body{margin:0;padding:0;width:100%;overflow-x:hidden}</style>
      </head>
      <body>
        <div id="root">${html}</div>
        <script src="/bundle.js"></script>
      </body>
    </html>
  `);
});

app.listen(3000, () => {
  console.log('Dev server: http://localhost:3000');
});