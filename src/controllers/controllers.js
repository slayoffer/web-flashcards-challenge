const renderTemplate = require('./renderTemplate');

const {
  User, Deck, Card, Round,
} = require('../../db/models');

const Main = require('../views/Main');
const Login = require('../views/Login');
const SignUp = require('../views/SignUp');
const Questions = require('../views/Questions');
const Stats = require('../views/Stats');

let userID = null;

const renderMain = async (req, res) => {
  try {
    const decks = await Deck.findAll({ raw: true });
    renderTemplate(Main, { decks, userID }, res);
  } catch (error) {
    res.send(`Error -----> ${error}`);
  }
};

const renderLogin = (req, res) => {
  renderTemplate(Login, {}, res);
};

const renderSignup = (req, res) => {
  renderTemplate(SignUp, {}, res);
};

const signUp = async (req, res) => {
  try {
    const { newName, newPassword } = req.body;
    const user = await User.findOne({ raw: true, where: { name: newName, password: newPassword } });
    if (user !== null) {
      const alreadyExists = 'Такой пользователь уже зарегистрирован';
      renderTemplate(SignUp, { alreadyExists }, res);
    } else {
      await User.create({ name: newName, password: newPassword });
      res.redirect('/');
    }
  } catch (error) {
    res.send(`Error -----> ${error}`);
  }
};

const checkSignUp = async (req, res) => {
  try {
    const { inputName, inputPassword } = req.body;
    const user = await User.findOne({
      where: {
        name: inputName,
        password: inputPassword,
      },
      raw: true,
    });
    if (user === null) {
      const tryAgain = 'Такого пользователя не существует';
      renderTemplate(Login, { tryAgain }, res);
    } else {
      const { id } = user;
      userID = id;
      res.redirect(`/home/${userID}`);
    }
  } catch (error) {
    res.send(`Error -----> ${error}`);
  }
};

const showQuestions = async (req, res) => {
  const { id } = req.params;
  const questions = await Card.findAll({ raw: true, where: { deck_id: id } });
  renderTemplate(Questions, { questions, userID }, res);
};

const getQuestion = async (req, res) => {
  const { cardID } = req.body;
  const user = await User.findOne({ raw: true, where: { id: userID } });
  const card = await Card.findOne({ raw: true, where: { id: cardID } });
  res.json({
    user,
    card,
  });
};

const writeResult = async (req, res) => {
  const { deck_id, user_id, score } = req.body;
  await Round.create({ deck_id, user_id, score });
  res.end();
};

const showStats = async (req, res) => {
  const { id } = req.params;
  const rounds = await Round.findAll({
    raw: true,
    where: { user_id: id },
    include: {
      model: Deck,
    },
    order: [['id', 'DESC']],
  });
  renderTemplate(Stats, { rounds, userID }, res);
};

module.exports = {
  renderMain,
  renderLogin,
  showQuestions,
  signUp,
  checkSignUp,
  renderSignup,
  getQuestion,
  writeResult,
  showStats,
};
