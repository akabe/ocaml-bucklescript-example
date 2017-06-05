var gulp = require('gulp');
var pug = require('gulp-pug');
var pleeease = require('gulp-pleeease');
var cleanCSS = require('gulp-clean-css');
var sass = require('gulp-sass');
var concat = require('gulp-concat');
var htmlmin = require('gulp-htmlmin');
var exec = require('child_process').exec;
var webpack = require('gulp-webpack');

gulp.task('pug', function () {
  return gulp
    .src(['frontend/src/*.pug'])
    .pipe(pug())
    .pipe(htmlmin())
    .pipe(gulp.dest('frontend/dist'));
});

gulp.task('sass', function () {
  return gulp
    .src(['frontend/src/styles/**/*.scss'])
    .pipe(sass({
      includePaths: ['node_modules']
    }))
    .pipe(concat('bundle.min.css'))
    .pipe(pleeease()) // autoprefixing
    .pipe(cleanCSS()) // minifying
    .pipe(gulp.dest('frontend/dist'));
});

gulp.task('ocaml', function (callback) {
  return exec('./node_modules/.bin/bsb', function (err, stdout, stderr) {
    console.log(stdout);
    console.log(stderr);
    callback(err);
  });
});

gulp.task('webpack', ['ocaml'], function () {
  return gulp
    .src([])
    .pipe(webpack(require('./webpack.config.js')))
    .pipe(gulp.dest('frontend/dist'));
});

gulp.task('default', ['pug', 'sass', 'webpack']);
