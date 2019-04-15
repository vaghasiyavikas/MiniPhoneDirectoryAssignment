const mix = require('laravel-mix');


mix.setPublicPath(path.normalize('public/build'))
  .react('src/index.js', 'js')
  .setResourceRoot('/build/')
  .extract(['react'], 'js/vendor');

