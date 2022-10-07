const express = require('express');

const router = express.Router();

const { catchErrors } = require('../controllers/helpers');

const {
  renderMain,
  showQuestions,
  getQuestion,
  writeResult,
  showStats,
} = require('../controllers/controllers');

router.get('/home/:id', catchErrors(renderMain));
router.get('/decks/:id', catchErrors(showQuestions));
router.post('/check', catchErrors(getQuestion));
router.post('/result', catchErrors(writeResult));
router.get('/stats/:id', catchErrors(showStats));

module.exports = router;
