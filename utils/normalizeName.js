module.exports = function normalizeComponentName(name) {
    let nameComponent = {}
    if (!name) {
        console.log(`Помилка: відсутня назва компонента.
Правила:
- Перша літера велика.
- Тільки літери A–Z, a–z.
- Без цифр та спецсимволів.`);
        process.exit(1);
    }

    const cleaned = name.replace(/[^A-Za-z]/g, '');

    if (!cleaned) {
        console.log(`Помилка: некоректна назва компонента.
Правила:
- Перша літера велика.
- Тільки літери A–Z, a–z.
- Без цифр та спецсимволів.`);
        process.exit(1);
    }
    nameComponent.upperCaseName = cleaned.charAt(0).toUpperCase() + cleaned.slice(1);
    nameComponent.lowerCaseName = cleaned.charAt(0).toLowerCase() + cleaned.slice(1);
    return nameComponent
}


