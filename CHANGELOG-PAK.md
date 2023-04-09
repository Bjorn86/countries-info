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

Принято решение именовать дочерние SCSS файлы через ```_```.

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

## Прочие

Добавить .gitkeep в пустые директории
