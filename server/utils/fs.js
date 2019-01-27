const path = require('path');

module.exports = {
    getAbsolutePath: (filePath) => {
        return path.resolve(process.cwd(), filePath);
    }
};