import {Request, Response} from 'express';
import env from 'server/lib/env';
const isProd = env === 'production';

enum Format {
    JS = 'js',
    CSS = 'css'
}

enum PageName {
    MAIN = 'main'
}

export enum PageUrls {
    MAIN = '/'
}

const pageNames: Map<PageUrls, PageName> = new Map([
    [PageUrls.MAIN, PageName.MAIN]
]);

export default (req: Request, res: Response) => {
    const name = pageNames.get(req.path as PageUrls) || PageName.MAIN;
    res.render(name, {
        meta: {
            title: name
        },
        res: {
            bundles: {
                styles: formPath(name, Format.CSS),
                scripts: formPath(name, Format.JS)
            },
            fonts: {}
        },
        global: {
            data: JSON.stringify({})
        }
    });
};

const formPath = (name: string, format: Format) => {
    return `/build/client/${name}.bundle.${isProd ? 'min.' : ''}${format}`;
};
