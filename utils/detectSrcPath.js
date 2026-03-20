const fs = require('fs');
const {srcPath} = require('../config/paths.js')

module.exports = function detectSrcPath() {
    if (!fs.existsSync(srcPath)) {
        fs.mkdirSync(srcPath);
    }
    return srcPath;
}