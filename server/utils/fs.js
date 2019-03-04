const path = require('path');

module.exports = {
    getAbsolutePath: (filePath) => path.resolve(process.cwd(), filePath)
};
