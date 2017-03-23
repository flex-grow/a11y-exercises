(function () {
  'use strict';

  module.exports = function (gulp, plugins, config) {
    return function () {
      var source = gulp.src(config.srcPath + '/**/*.scss')
        .pipe(plugins.changed(config.buildPath, { extension: '.css' }))
        .pipe(plugins.plumber({ errorHandler: plugins.notify.onError('Error: <%= error.message %>') }))
        .pipe(plugins.sourcemaps.init())
        .pipe(plugins.sass())
        .pipe(plugins.sourcemaps.write('.', { sourceRoot: null }))
        .pipe(gulp.dest(config.buildPath))
      ;
    };
  };
})();
