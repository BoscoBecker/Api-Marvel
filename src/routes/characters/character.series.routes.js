const router = require('express-promise-router')();
const CharacterSeriesController = require('../../controllers/characters/character.series.controller');

router.get('/characters/:id/series', CharacterSeriesController.getCharacterSeriesById);

module.exports = router;