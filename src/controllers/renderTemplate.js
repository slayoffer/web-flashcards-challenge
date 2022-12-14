require('@babel/register');

const React = require('react');
const ReactDOMServer = require('react-dom/server');

const renderTemplate = (component, props, res) => {
  const el = React.createElement(component, props);
  const html = ReactDOMServer.renderToStaticMarkup(el);
  res.write('<!DOCTYPE html>');
  res.end(html);
};

module.exports = renderTemplate;
