import express, {Response} from 'express';
import mustacheExpress from 'mustache-express';

import buildPageMiddleware, {PageUrls} from 'server/middlewares/build-page';
import {getAbsolutePath} from 'server/utils/fs';

const PORT = process.env.PORT || '8080';
const app = express()
    .get('/ping', (_, res) => res.end())
    .engine('mustache', mustacheExpress())
    .set('view engine', 'mustache')
    .set('views', getAbsolutePath('./src/client/pages-template'))
    .use('/client', express.static('build/client'))
    .use('/res', express.static('build/resources'));

app
    .get([PageUrls.MAIN], [buildPageMiddleware])
    .use((_, res) => res.sendStatus(404))
    .use((_1: any, _2: any, res: Response, _3: any) => res.sendStatus(500));

const server = app.listen(PORT, () => {
    console.log(`Server listen ${PORT} port`);
});

module.exports = server;