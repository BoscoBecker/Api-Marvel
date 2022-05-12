const router = require('express-promise-router')();
const CharacterSeriesController = require('../controllers/character.series.controller');

router.get('/characters/:id/series', CharacterSeriesController.getCharacterSeriesById);

module.exports = router;