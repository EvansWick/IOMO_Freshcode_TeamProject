# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some Oxlint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is enabled on this template. See [this documentation](https://react.dev/learn/react-compiler) for more information.

Note: This will impact Vite dev & build performances.
You can also try [the experimental native React Compiler support in plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md#rust-react-compiler) by using `compiler: true` in the plugin options instead of using the Babel plugin.

## Expanding the Oxlint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and Oxlint's TypeScript related rules in your project.

## Локальний сервер (JSON Server)

Вихідні дані для мокового API розділені на окремі файли в папці `src/jsonServer/data/`:

- `movies.json` — фільми
- `persons.json` — актори та режисери
- `users.json` — користувачі

Сам `json-server` працює зі спільним файлом `src/jsonServer/db.json`, який генерується автоматично та доданий до `.gitignore`.

### Перший запуск (або після `git pull`)

1. Зберіть спільний файл бази даних `db.json`: ОБОВ'ЯЗКОВО при першому запуску серверу!

   Генерує src/jsonServer/db.json на основі файлів із src/jsonServer/data/

   ```bash
   npm run dbJsonServer:merge
   ```

2. Запустити эмулятор сервера`json-server`:
   ```bash
   npm run dbJsonServer
   ```

### Додатковий функціонал

3. Вивантажує дані з `db.json` назад у `src/jsonServer/data/`:
   ```bash
   npm run dbJsonServer:split
   ```
