const express = require('express');

const router = express.Router();

const {
  renderLogin, checkSignUp, renderSignup, signUp,
} = require('../controllers/controllers');

router.get('/', renderLogin);
router.post('/', checkSignUp);
router.get('/signup', renderSignup);
router.post('/signup', signUp);

module.exports = router;
