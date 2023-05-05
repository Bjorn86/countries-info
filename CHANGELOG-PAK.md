# Изменение внесённые в пакет

## Добавление SCSS файлов миксинов и переменных

Сами файлы ```_mixins.scss``` и ```_variables.scss``` помещены в директорию ```src/components/Common/```.
Для того чтобы переменные и миксины нормально импортировались в и применялись в ```webpack.config.js``` добавлена следующая запись в обработчик SCSS файлов расширяющая ```sass-loader```:

```javascript
{
  loader: 'sass-loader',
  options: {
    additionalData: `
      @import "src/components/Common/_mixins.scss";
      @import "src/components/Common/_variables.scss";
    `,
  },
},
```

## Именование дочерних SCSS файлов

Принято решение именовать дочерние SCSS файлы в PascalCase.

## Настройки для нормального отображения роутов

Для нормального отображения динамических роутов ```<BrowserRouter>``` в ```index.jsx``` изменён на ```HashRouter``` (это же решает вопрос деплоя на GH Pages). Также добавлены следующие настройки в ```webpack.config.js```:

```javascript
output: {
  ...
  publicPath: '/',
},
...
devServer: {
  ...
  historyApiFallback: true,
},
```

## Изменения файловой структуры

- `src/fonts` -> `src/fonts/assets/fonts`
- `src/images` -> `src/assets/images`
- `src/vendor/_font.scss` -> `src/components/Common/_font.scss`

## Изменения .prettierignore

```plaintext
/dist
/public
/node_modules
/src/lib
**/*.md
```

## Изменения .gitignore

```plaintext
# LOGS
logs
*.log
npm-debug.log*

# DEPENDENCY DIRECTORY
node_modules

# OPTIONAL NPM CACHE DIRECTORY
.npm

# OPTIONAL REPL HISTORY
.DS_Store
.idea
.vscode

# ENV VARIABLES
*.env

# OTHER DIRECTORY
dist
public
```

## Прочие изменения

- Добавлена директория `src/assets/icons` для хранения иконок проекта. Также добавлена директория `src/assets/icons/favicons/` для хранения альтернативных favicon.
- Добавить `.gitkeep` в пустые директории
