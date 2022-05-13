const router = require('express-promise-router')();
const CharacterStoriesController = require('../../controllers/characters/character.stories.controller');

router.get('/characters/:id/stories', CharacterStoriesController.getCharacterStoriesById);

module.exports = router;