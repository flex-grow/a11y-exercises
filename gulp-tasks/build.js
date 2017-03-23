(function () {
  'use strict';

  module.exports = function (gulp, plugins, config) {
    return function (done) {
      return plugins.runSequence(['styles', 'views'], 'sitemap', done);
    };
  };
})();
