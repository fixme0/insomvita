import { resolve } from 'path';

const PAGES = {
  'INDEX': {
    name: 'index'
  },
  'ME': {
    name: 'me'
  }
};

export default {
  root: resolve(__dirname, '../', '../'),
  outputPath: resolve(__dirname, '../', '../', 'public'),
  entryPath: Object.values(PAGES).reduce((results, { name }) => {
    return Object.assign(
      results,
      { [name]: resolve(__dirname, '../', '../', 'src', 'js', 'pages', `${name}.js`) }
    );
  }, { 'common': resolve(__dirname, '../', '../', 'src', 'style', 'common.sass') }),
  templatePaths: Object.values(PAGES).map(({ name }) => ({
    filename: `${name}.html`,
    template: resolve(__dirname, '../../', 'src', 'templates', 'pages', `${name}.pug`),
    chunks: ['vendor', 'common', name]
  })),
  imagesFolder: 'images',
  fontsFolder: 'fonts',
  styleFolder: 'style',
  jsFolder: 'js',
  svgFolder: 'sprite'
};