/* jshint node: true */
'use strict';
/**
 * Dependencias
 */
var gulp = require('gulp'),
  browserSync = require('browser-sync'),
  sass = require('gulp-sass'),
  postcss = require('gulp-postcss'),
  autoprefixer = require('autoprefixer'),
  plumber = require('gulp-plumber'),
  nodemon = require('gulp-nodemon');

gulp.task('default', ['browser-sync'], function () {});

gulp.task('sass', function () {
     var processors = [
         autoprefixer({browsers: ['last 2 versions']})
     ];


     return gulp.src('./scss/*.scss')
         .pipe(sass({includePaths: ["node_modules"]})
         .on('error', sass.logError))
         .pipe(plumber())
         .pipe(postcss(processors))
         .pipe(gulp.dest('./public/stylesheets'))
         .pipe(browserSync.stream());
 });

gulp.task('browser-sync', ['nodemon'], function () {
  browserSync.init(null, {
    proxy: "http://localhost:3000",
    files: ["public/**/*.*","server/**/*.jade","routes/**/*.js","javascripts/**/*.js"],
    browser: "",
    port: 7000,
  });
  browserSync.watch('./scss/**/*.scss').on('change', function () {
    gulp.start('sass');
  });

});

gulp.task('nodemon', function (cb) {

  var started = false;

  return nodemon({
    script: 'bin/www'
  }).on('start', function () {
    // to avoid nodemon being started multiple times
    // thanks @matthisk
    if (!started) {
      cb();
      started = true;
    }
  });
});
