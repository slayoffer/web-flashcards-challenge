const { sequelize } = require('../../db/models');

async function checkConnect() {
  try {
    await sequelize.authenticate();
    console.log('Базу данных поднял!');
  } catch (error) {
    console.log('База данных не подключена', error);
  }
}

const catchErrors = (fn) => function (req, res, next) {
  return fn(req, res, next).catch(next);
};

module.exports = { checkConnect, catchErrors };
