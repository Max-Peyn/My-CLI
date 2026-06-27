#!/usr/bin/env node
const fs = require('fs');
const path = require('path');
const createComponent = require('./commands/createComponent.js')


const args = process.argv.slice(2);
const [typeOperation, typeComponent, nameComponent] = args;

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