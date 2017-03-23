'use strict';

var gulp = require('gulp');
var plugins = require('gulp-load-plugins')({ DEBUG: false, pattern: '*' });

var srcPath = './src';
var buildPath = './dist';
var buildCssPath = buildPath + '/css';
var tasksPath = './gulp-tasks';

var config = {
  srcPath: srcPath,
  buildPath: buildPath,
  buildCssPath: buildCssPath,
};

function getTask(task) {
  return require(tasksPath + '/' + task)(gulp, plugins, config);
}

gulp.task('default', getTask('default'));
gulp.task('build', getTask('build'));
gulp.task('server', getTask('server'));
gulp.task('sitemap', getTask('sitemap'));
gulp.task('styles', getTask('styles'));
gulp.task('views', getTask('views'));
gulp.task('watch', getTask('watch'));
