(function () {
  'use strict';

  module.exports = function (gulp, plugins, config) {
    return function () {
      return gulp.src(config.buildPath + '/**/*.html', { read: false })
        .pipe(plugins.sitemap({ siteUrl: 'http://flex-grow.github.io/a11y-exercises' }))
        .pipe(gulp.dest(config.buildPath))
      ;
    };
  };
})();
