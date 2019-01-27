const PORT = process.env.PORT || 8080;

const express = require('express');
const mustache = require('mustache');
const mustacheExpress = require('mustache-express');

const buildPageMiddleware = require('./middlewares/build-page')
const {getAbsolutePath} = require('./utils/fs');

const app = express()
    .get('/ping', (req, res) => res.end())
    .engine('mustache', mustacheExpress())
    .set('view engine', 'mustache')
    .set('views', getAbsolutePath('./client/pages-template'))
    .use('/build', express.static('build'));

app
    .get(['/'], [buildPageMiddleware])
    .use((req, res) => res.sendStatus(404))
    .use((err, req, res, next) => res.sendStatus(500));

const server = app.listen(PORT, () => {
    console.log(`Server listen ${PORT} port`);
});

module.exports = server;