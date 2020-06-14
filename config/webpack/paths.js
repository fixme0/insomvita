import { resolve } from 'path';

const PAGES = {
  'INDEX': {
    name: 'index'
  },
  'INDEX2': {
    name: 'index2'
  }
};

export default {
  root: resolve(__dirname, '../', '../'),
  outputPath: resolve(__dirname, '../', '../', 'public'),
  // entryPath: [
  //   resolve(__dirname, '../', '../', 'src/app.js'),
  //   resolve(__dirname, '../', '../', 'src/app.sass'),
  // ],
  entryPath: {
    index: resolve(__dirname, '../', '../', 'src', 'js', 'pages', `${PAGES.INDEX.name}.js`),
    index2: resolve(__dirname, '../', '../', 'src', 'js', 'pages', `${PAGES.INDEX2.name}.js`),
  },
  templatePaths: Object.values(PAGES).map(({ name }) => ({
    filename: `${name}.html`,
    template: resolve(__dirname, '../../', 'src', 'templates', 'pages', `${name}.pug`),
    chunks: ['vendor', name]
  })),
  imagesFolder: 'images',
  fontsFolder: 'fonts',
  styleFolder: 'style',
  jsFolder: 'js',
  svgFolder: 'sprite'
};