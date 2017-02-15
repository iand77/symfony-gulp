//php bin/console assets:install --symlink --relative

// npm install browser-sync --save-dev
// npm install gulp-uglify --save-dev
// npm install gulp-sass --save-dev
// npm install gulp-cssnano --save-dev
// npm install gulp-imagemin --save-dev
// npm install gulp-cache --save-dev

var gulp = require('gulp');
var sass = sass = require('gulp-sass');
var browserSync = require('browser-sync').create();
var cssnano = require('gulp-cssnano');
var imagemin = require('gulp-imagemin');
var cache = require('gulp-cache');

gulp.task('sass', function () {
    gulp.src('./web/bundles/**/*.scss')
        .pipe(sass({sourceComments: 'map'}))
        .pipe(gulp.dest('./web/css/'))
        .pipe(browserSync.reload({
      stream: true
    }));
});

gulp.task('images', function() {
  return gulp.src('./web/bundles/**/*.+(png|jpg|gif|svg)')
  .pipe(cache(imagemin({
      // Setting interlaced to true
      interlaced: true
    })))
  .pipe(gulp.dest('dist/images'))
});

gulp.task('browserSync', function() {
  browserSync.init({
    server: {
      baseDir: 'app'
    },
  })
})

gulp.task('watch', ['browserSync', 'sass'], function(){
  gulp.watch('./web/bundles/**/*.scss', ['sass']);
  // Reloads the browser whenever HTML or JS files change
  gulp.watch('./app/Resources/views/**/*.html', browserSync.reload);
  gulp.watch('./web/bundles/**/*.js', browserSync.reload);
  // Other watchers
})

gulp.task('default', function() {
  gulp.run('sass', 'images', 'browserSync', 'watch');
});
