const express = require('express');
const helmet = require('helmet');
const cors = require('cors');

const characterSeries = require('./routes/character.series.routes');
const characterEvents = require('./routes/character.events.routes');
const characterComics = require('./routes/character.comics.routes');
const character = require('./routes/character.routes');
const index = require('./routes/index');
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json({ type: 'application/vnd.api+json' }));
app.use(express.json());
app.use(helmet());
app.use(cors());

app.use(express.static('src/public'));
app.set('view engine', 'ejs');
app.set('views', 'src/views');

app.use('/api', characterEvents);
app.use('/api', characterComics);
app.use('/api', characterSeries);
app.use('/api', character);
app.use(index);

module.exports = app;