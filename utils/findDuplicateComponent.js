const fs = require('fs');
const path = require('path');
const typeDirectoryMap = require('../types/typeDirectoryMap.js')
const detectSrcPath = require('../utils/detectSrcPath.js');

module.exports = function findDuplicateComponent(name) {
    const srcPath = detectSrcPath();

    const baseFolders = Object.values(typeDirectoryMap);

    for (const folder of baseFolders) {
        const dirPath = path.join(srcPath, folder);

        if (!fs.existsSync(dirPath)) continue;

        const componentPath = path.join(dirPath, name);

        if (fs.existsSync(componentPath)) {
            return componentPath;
        }
    }

    return null;
}
