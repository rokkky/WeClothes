const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
  mode: "development",
  entry: {
    main: path.resolve(__dirname, './src/js/index.js'),
  },
  output: { 
    path: path.resolve(__dirname, './dist'),
    filename: 'js/[name].bundle.js',
  },
  plugins: [
    new CleanWebpackPlugin(), //очистка dist папки от старых файлов
    new HtmlWebpackPlugin({ //рендер html в dist
        title: 'WeClothes',
        template: path.resolve(__dirname, './src/index.html'), // шаблон
        filename: 'index.html', // название выходного файла
    }),
    new MiniCssExtractPlugin({ //Компилятор нового css файла
      filename: 'css/[name].bundle.css' //Скомпилированный css файл
    }),
    new CopyWebpackPlugin({ patterns: [{ 
      from: path.resolve(__dirname, './src/img'),
      to: path.resolve(__dirname, 'dist/img')
     }] 
    }),
  ],
  module: {
    rules: [
        // изображения
        {
            test: /\.(?:ico|gif|png|jpg|jpeg)$/i, //какие расширения цеплять
            type: 'asset/resource',
             //как обрабатывать (иморт в js файле)
        },
        //Стили
        {
          test: /\.css$/,
          use: [MiniCssExtractPlugin.loader, 'css-loader'] //Обработка справа налево. Сначала css, потом style loader. Minicss создает новый css и подключает к index.html
        },
        {
          test: /\.scss$/,
          use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader'] //Обработка справа налево. Сначала scss,потом css, потом style loader. Minicss создает новый css и подключает к index.html
        },
        {
          test: /\.js$/,
          exclude: /node_modules/,
          loader: 'babel-loader'
        }
    ],
  },
}