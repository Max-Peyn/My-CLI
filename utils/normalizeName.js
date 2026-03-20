module.exports = function normalizeComponentName(name) {
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

    return cleaned.charAt(0).toUpperCase() + cleaned.slice(1);
}
