const path = require('path')
// const CopyPlugin = require('copy-webpack-plugin')
const ESLintPlugin = require('eslint-webpack-plugin')
// const FaviconsWebpackPlugin = require('favicons-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

const PRODUCTION_PUBLIC_PATH = '/'
const isProduction = process.env.NODE_ENV === 'production'

const APP_DESCRIPTION = '<APP_DESCRIPTION>'
const APP_NAME = '<APP_NAME>'
const APP_URL = '<APP_URL>'
const GOOGLE_ANALYTICS_MEASUREMENT_ID = undefined

module.exports = {
  devServer: {
    devMiddleware: {
      publicPath: isProduction ? PRODUCTION_PUBLIC_PATH : '/',
    },
    headers: {
      'Access-Control-Allow-Headers':
        'X-Requested-With, content-type, Authorization',
      'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, PATCH, OPTIONS',
      'Access-Control-Allow-Origin': '*',
    },
    historyApiFallback: true,
    static: {
      directory: path.resolve(__dirname, 'dist/'),
    },
  },
  devtool: isProduction ? undefined : 'source-map',
  entry: { index: path.resolve(__dirname, 'src/web/index.ts') },
  mode: 'production',
  module: {
    rules: [
      {
        enforce: 'pre',
        test: /\.js$/,
        use: ['source-map-loader'],
      },
      {
        include: [path.resolve(__dirname, 'src/')],
        test: /\.(t|j)s(x?)$/i,
        use: [
          {
            loader: 'ts-loader',
            options: {
              configFile: 'tsconfig.build.json',
              transpileOnly: process.env.NODE_ENV !== 'production',
            },
          },
        ],
      },
      {
        test: /\.css$/i,
        use: [
          { loader: MiniCssExtractPlugin.loader },
          {
            loader: 'css-loader',
            options: {
              importLoaders: 1,
            },
          },
          {
            loader: 'postcss-loader',
            options: {
              postcssOptions: {
                plugins: [
                  'tailwindcss',
                  'postcss-custom-properties',
                  'autoprefixer',
                ],
              },
            },
          },
        ],
      },
      {
        test: /\.(png|jpg|gif)$/,
        type: 'asset/resource',
      },
    ],
  },
  optimization: {
    moduleIds: 'deterministic',
    runtimeChunk: 'single',
    splitChunks: {
      cacheGroups: {
        vendor: {
          chunks: 'all',
          name: 'vendors',
          test: /[\\/]node_modules[\\/]/,
        },
      },
    },
  },
  output: {
    assetModuleFilename: 'static/[hash][ext][query]',
    clean: true,
    filename: 'artifacts/[name].js',
    path: path.resolve(__dirname, 'dist/'),
    publicPath: isProduction ? PRODUCTION_PUBLIC_PATH : '/',
  },
  plugins: [
    new ESLintPlugin({
      context: 'src/',
      failOnError: process.env.NODE_ENV === 'production',
    }),
    new MiniCssExtractPlugin({
      chunkFilename: '[id].css',
      filename: 'artifacts/[name].css',
    }),
    new HtmlWebpackPlugin({
      appMountId: 'app-root',
      filename: 'index.html',
      inject: false,
      links: [
        { href: 'https://fonts.googleapis.com', rel: 'preconnect' },
        {
          crossOrigin: '',
          href: 'https://fonts.gstatic.com',
          rel: 'preconnect',
        },
        'https://fonts.googleapis.com/css2?family=Fira+Mono&family=Montserrat+Alternates:wght@500;600&family=Montserrat:wght@400;500;600;700&family=Noto+Sans+Symbols+2&display=swap',
      ],
      meta: {
        'application-name': APP_NAME,
        'color-scheme': 'only light',
        'description': APP_DESCRIPTION,
        'og:description': {
          content: APP_DESCRIPTION,
          property: 'og:description',
        },
        // 'og:image': {
        //   content: '',
        //   property: 'og:image',
        // },
        'og:title': { content: APP_NAME, property: 'og:title' },
        'og:type': { content: 'website', property: 'og:type' },
        'og:url': {
          content: APP_URL,
          property: 'og:url',
        },
      },
      mobile: true,
      template: '!!ts-loader!src/web/index.template.tsx',
      title: APP_NAME,
      ...(GOOGLE_ANALYTICS_MEASUREMENT_ID
        ? {
            googleAnalytics: {
              measurementId: GOOGLE_ANALYTICS_MEASUREMENT_ID,
            },
          }
        : {}),
    }),
    // new FaviconsWebpackPlugin({
    //   favicons: {
    //     appDescription: null,
    //     background: '#022702',
    //     developerURL: null,
    //     icons: {
    //       android: false,
    //       appleIcon: false,
    //       appleStartup: false,
    //       coast: false,
    //       favicons: true,
    //       firefox: false,
    //       windows: false,
    //       yandex: false,
    //     },
    //     theme_color: '#FF92DA',
    //   },
    //   inject: true,
    //   logo: './src/static/logo.svg',
    //   mode: 'webapp',
    //   prefix: 'static/',
    // }),
    // new CopyPlugin({
    //   patterns: [
    //     { from: 'src/.nojekyll' },
    //     { from: 'src/static/', to: 'static/' },
    //   ],
    // }),
  ],
  resolve: {
    extensions: ['.ts', '.js', '.tsx', '.jsx', '.json', '.mjs', '.wasm'],
  },
  target: 'web',
}
