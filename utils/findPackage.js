const fs = require('fs');
const path = require('path');
const { rootPath } = require('../config/paths.js')
const packageJsonPath = path.join(rootPath, 'package.json');
const packageJsonContent = fs.readFileSync(packageJsonPath, 'utf-8');
const packageJson = JSON.parse(packageJsonContent)
module.exports = function findPackage(packageName) {
    const allDeps = {
        ...packageJson.dependencies,
        ...packageJson.devDependencies,
        ...packageJson.peerDependencies
    };
    return !!allDeps[packageName];
}
