#!/usr/bin/env node
const fs = require('fs');
const path = require('path');
const normalizeComponentName = require('./utils/normalizeName.js');
const findPackage = require('./utils/findPackage.js');
const findDuplicateComponent = require('./utils/findDuplicateComponent.js');
const ensureDirectoryExists = require('./utils/ensureDirExists.js');
const detectSrcPath = require('./utils/detectSrcPath.js');
const typeDirectoryMap = require('./types/typeDirectoryMap.js');

const templates = {
    tsx: path.join(__dirname, './templates/TemplateTSX.txt'),
    jsx: path.join(__dirname, './templates/TemplateJSX.txt'),
    css: path.join(__dirname, './templates/TemplateCSS.txt'),
    cssModuleTsx: path.join(__dirname, './templates/TemplateModuleTSX.txt')
};

const args = process.argv.slice(2);
const [typeOperation, typeComponent, nameComponent] = args;

let styleType = 'css';
let isModuleStyle = false;

args.forEach(arg => {
    if (arg === '--module') isModuleStyle = true;
    else if (arg === '--scss') styleType = 'scss';
    else if (arg === '--sass') styleType = 'sass';
});

const isTS = !!findPackage("typescript");

function validateComponentType(type) {
    return Object.keys(typeDirectoryMap).includes(type);
}

function getBasePathByType(type) {
    const srcPath = detectSrcPath();
    return path.join(srcPath, typeDirectoryMap[type]);
}

function createComponent(type, name) {
    if (!validateComponentType(type)) {
        console.error(`Тип "${type}" вказаний невірно.
Можливі типи: ${Object.keys(typeDirectoryMap).join(', ')}`);
        process.exit(1);
    }

    const correctName = normalizeComponentName(name);

    const duplicatePath = findDuplicateComponent(correctName);
    if (duplicatePath) {
        console.error(`Компонент "${correctName}" вже існує: ${duplicatePath}`);
        process.exit(1);
    }

    const basePath = getBasePathByType(type);
    ensureDirectoryExists(basePath);

    const componentPath = path.join(basePath, correctName);
    ensureDirectoryExists(componentPath);

    if (!isTS) {
        const templatePath = isModuleStyle ? templates.cssModuleTsx : templates.tsx;
        const jsxTemplate = fs.readFileSync(templatePath, 'utf-8')
            .replace(/{{ComponentName}}/g, correctName);
        fs.writeFileSync(path.join(componentPath, `${correctName}.jsx`), jsxTemplate);
    } else {
        const templatePath = isModuleStyle ? templates.cssModuleTsx : templates.tsx;
        const tsxTemplate = fs.readFileSync(templatePath, 'utf-8')
            .replace(/{{ComponentName}}/g, correctName);
        fs.writeFileSync(path.join(componentPath, `${correctName}.tsx`), tsxTemplate);
    }

    const cssTemplate = fs.readFileSync(templates.css, 'utf-8')
        .replace(/{{ComponentName}}/g, correctName);

    let styleFileName = `${correctName}.${styleType}`;
    if (isModuleStyle) styleFileName = `${correctName}.module.${styleType}`;
    fs.writeFileSync(path.join(componentPath, styleFileName), cssTemplate);

    console.log(`Компонент "${correctName}" успішно створено: ${componentPath}`);
}

if (typeOperation === 'create') {
    if (!nameComponent) {
        console.error('Помилка: не вказано назву компонента');
        process.exit(1);
    }
    createComponent(typeComponent, nameComponent);
} else {
    console.error('Помилка: Неправильно введено операцію');
    process.exit(1);
}