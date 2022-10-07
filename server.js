require('@babel/register');
require('dotenv').config({ path: 'variables.env' });

const express = require('express');

const path = require('path');
const logger = require('morgan');
const { checkConnect } = require('./src/controllers/helpers');

const login = require('./src/routes/login.router');
const route = require('./src/routes/router');

const app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', login);
app.use('/', route);

app.set('port', process.env.PORT || 7776);

const server = app.listen(app.get('port'), () => {
  checkConnect();
  console.log(`Express running → PORT ${server.address().port}`);
});

module.exports = app;
