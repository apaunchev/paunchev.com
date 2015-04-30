var gulp       = require('gulp'),
    sass       = require('gulp-sass'),
    minifyCSS  = require('gulp-minify-css'),
    rename     = require('gulp-rename');

gulp.task('css', function() {
    return gulp.src('css/style.scss')
        .pipe(sass())
        .pipe(rename('style.css'))
        .pipe(gulp.dest('css/'))
        .pipe(minifyCSS())
        .pipe(rename({ suffix: '.min' }))
        .pipe(gulp.dest('css/'));
});

gulp.task('watch', function() {
    gulp.watch('css/*.scss', ['css']);
});

gulp.task('default', ['watch']);
