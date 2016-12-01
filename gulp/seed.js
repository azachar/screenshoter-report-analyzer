'use strict';

var path = require('path');
var gulp = require('gulp');
var conf = require('./conf');

gulp.task('seed:e2e-dist', function () {
  return gulp.src([
    path.join(conf.paths.e2e, 'seed/**/*')
  ])
  .pipe(gulp.dest(path.join(conf.paths.dist, '/')));
});

gulp.task('seed', function () {
  return gulp.src([
    path.join(conf.paths.e2e, 'seed/**/*')
  ])
  .pipe(gulp.dest(path.join(conf.paths.tmp, '/serve')));
});
