const path = require('path');
const rootPath = process.cwd();
const srcPath = path.join(rootPath, 'src');

const templates = {
    tsx: path.join(__dirname, '../templates/TemplateTSX.txt'),
    jsx: path.join(__dirname, '../templates/TemplateJSX.txt'),
    css: path.join(__dirname, '../templates/TemplateCSS.txt'),
    cssModuleJsx: path.join(__dirname, '../templates/TemplateModuleJSX.txt'),
    cssModuleTsx: path.join(__dirname, '../templates/TemplateModuleTSX.txt')
};

module.exports = {
    rootPath,
    srcPath,
    templates
}