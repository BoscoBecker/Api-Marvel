const express = require('express');
const helmet = require('helmet');
const cors = require('cors');


const characterSeries = require('./routes/characters/character.series.routes');
const characterEvents = require('./routes/characters/character.events.routes');
const characterComics = require('./routes/characters/character.comics.routes');
const characterStories = require('./routes/characters/character.stories.routes');
const character = require('./routes/characters/character.routes');
const index = require('./routes/index');

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json({ type: 'application/vnd.api+json' }));
app.use(express.json());

app.use(cors());
app.use(helmet.contentSecurityPolicy(
  { useDefaults: true, 
    directives: { "img-src": ["'self'", "https: data:"] } 
   })
  )

app.use(express.static('src/public'));
app.set('view engine', 'ejs');
app.set('views', 'src/views');

app.use('/', characterEvents);
app.use('/', characterComics);
app.use('/', characterSeries);
app.use('/', characterStories);
app.use('/', character);
app.use(index);

module.exports = app;