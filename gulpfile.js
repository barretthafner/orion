'use strict';

var gulp = require('gulp'),
  gulpif = require('gulp-if'),
  minify = require('gulp-minify-html'),
  uglify = require('gulp-uglify'),
  imagemin = require('gulp-imagemin'),
  cleanCSS = require('gulp-clean-css'),
  autoprefixer = require('gulp-autoprefixer'),
  sass = require('gulp-sass'),
  livereload = require('gulp-livereload'),
  plumber = require('gulp-plumber'),
  del = require('del'),
  path = require('path');

var webpack = require('webpack'),
  webpackStream = require('webpack-stream'),
  webpackConfig = require('./webpack.config.js');

// Configure environment -------------------------------------------------------------------

var env = process.env.NODE_ENV || 'development';

var i = process.argv.indexOf("--production");
if (i > -1) {
  env = 'production';
}

var productionEnv = env === 'production';

// Configure source paths -------------------------------------------------------------------


const paths = {
  src: {
    index: './client/src/index.html',
    sass: './client/src/sass/**/*.scss',
    img: './client/src/img/**/*',
    app: './client/src/app/**/*',
    js: './client/src/js/**/*'
  },
  dist: {
    index: './client/dist/',
    sass: './client/dist/sass/',
    img: './client/dist/img/',
    app: './client/dist/js/',
    js: './client/dist/js/'
  }
}

// Basic Tasks -------------------------------------------------------------------

// Default task
gulp.task('default', ['build', 'watch']);

// Build task
gulp.task('build', ['clean', 'html', 'styles', 'images', 'webpack', 'js']);

// Watch task
gulp.task('watch', function () {
  livereload.listen();
  gulp.watch(paths.src.index, ['html']);
  gulp.watch(paths.src.sass, ['styles']);
  gulp.watch(paths.src.img, ['images']);
  gulp.watch(paths.src.app, ['webpack']);
  gulp.watch(paths.src.js, ['js']);
});

gulp.task('clean', function () {
  del.sync(['client/dist']);
});

// Build tasks  -------------------------------------------------------------------

// Minify index
gulp.task('html', function () {
  return gulp.src(paths.src.index)
    .pipe(plumber())
    .pipe(gulpif(productionEnv, minify()))
    .pipe(gulp.dest(paths.dist.index))
    .pipe(livereload());
});

// Compile Sass task
gulp.task('styles', function () {
  return gulp.src(paths.src.sass)
    .pipe(plumber())
    .pipe(sass().on('error', sass.logError))
    .pipe(autoprefixer({
      browsers: ['last 2 versions'],
      cascade: false
    }))
    .pipe(gulpif(productionEnv, cleanCSS()))
    .pipe(gulp.dest(paths.dist.sass))
    .pipe(livereload());
});


// Move Images task
gulp.task('images', function () {
  return gulp.src(paths.src.img)
    .pipe(plumber())
    .pipe(gulpif(productionEnv, imagemin({
      optimizationLevel: 5
    })))
    .pipe(gulp.dest(paths.dist.img))
    .pipe(livereload());
});




// Webpack -------------------------------------------------------------------

gulp.task('webpack', function () {

  var myConfig = Object.create(webpackConfig);
  if (productionEnv) {
    myConfig.plugins = myConfig.plugins.concat(
      new webpack.DefinePlugin({
        "process.env": {
          // This reduces the react lib size
          "NODE_ENV": JSON.stringify("production")
        }
      }),
      new webpack.optimize.DedupePlugin(),
      new webpack.optimize.UglifyJsPlugin()
    );
  } else {
    myConfig.devtool = "sourcemap";
    myConfig.debug = true;
  }

  return gulp.src(paths.src.app)
    .pipe(plumber())
    .pipe(webpackStream(myConfig))
    .pipe(gulp.dest(paths.dist.app))
    .pipe(livereload());
});


// Other Javascript -------------------------------------------------------------------

gulp.task('js', function () {
  return gulp.src(paths.src.js)
    .pipe(plumber())
    .pipe(gulpif(productionEnv, uglify()))
    .pipe(gulp.dest(paths.dist.js))
    .pipe(livereload());

});
