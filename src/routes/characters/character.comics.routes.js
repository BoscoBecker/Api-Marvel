const router = require('express-promise-router')();
const CharacterComicsController = require('../../controllers/characters/character.comics.controller');

router.get('/characters/:id/comics', CharacterComicsController.getCharacterComicsById);

module.exports = router;