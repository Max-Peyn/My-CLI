# My-CLI

## 🔧 Мета інструмента

**My-CLI** — це CLI-утиліта, яка дозволяє швидко створювати React-компоненти з базовою структурою в один рядок.

Ідея натхненна **Angular CLI**, але адаптована під React-проєкти.

---

## 🚀 Можливості

### 1. Генерація різних типів компонентів

* **component** — маленька частина інтерфейсу
* **layout** — секція сторінки
* **page** — повноцінна сторінка

### 2. Гнучка конфігурація стилів

* Підтримка:

  * `.css`
  * `.scss`
  * `.sass`

* Модульні стилі:

  * `.module.css`
  * `.module.scss`
  * `.module.sass`

### 3. Підтримка TypeScript

* Якщо в проєкті є TypeScript → створюється `.tsx`
* Якщо немає → `.jsx`

---

## 📦 Встановлення

1. Клонуйте репозиторій:

```bash
git clone <your-repo-url>
cd my-cli
```

2. Встановіть CLI глобально:

```bash
npm install -g .
```

---

## 🧪 Використання

```bash
mycli create component MyButton
mycli create layout MyHeader --module
mycli create page MyHome --sass
```

---

## 📁 Результат

```
src
├── components
│   └── MyButton
│       ├── MyButton.tsx
│       └── MyButton.css
├── layout
│   └── MyHeader
│       ├── MyHeader.tsx
│       └── MyHeader.module.css
└── pages
    └── MyHome
        ├── MyHome.tsx
        └── MyHome.sass
```

---

## 🗑 Видалення

Якщо інструмент більше не потрібен:

```bash
npm uninstall -g mycli
```

Після цього можна видалити репозиторій.

---

## 💡 Примітки

* CLI працює в межах папки `src`
* Якщо папка `src` відсутня — вона буде створена автоматично
* Назви компонентів нормалізуються до PascalCase
