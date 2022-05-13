const router = require('express-promise-router')();
const CharacterEventsController = require('../../controllers/characters/character.events.controller');

router.get('/characters/:id/events', CharacterEventsController.getCharacterEventsById);

module.exports = router;