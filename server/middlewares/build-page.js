const env = require('../lib/env');
const isProd = env === 'production';

module.exports = (req, res) => {
    const pageNames = {
        '/': 'main'
    };
    const name = pageNames[req.path] || pageNames['/'];

    res.render(name, {
        meta: {
            title: name
        },
        res: {
            bundles: {
                styles: formPath(name, 'css'),
                scripts: formPath(name, 'js')
            },
            fonts: {}
        },
        global: {
            data: JSON.stringify({})
        }
    });
};

function formPath(name, format) {
    return `/build/client/${name}.bundle.${isProd ? 'min.' : ''}${format}`;
}
