const gulp = require('gulp');
const browserSync = require('browser-sync').create();
const sass = require('gulp-sass');
const plumber = require('gulp-plumber');
const notify = require('gulp-notify');

function customPlumber(errTitle) {
    return plumber({
        errorHandler: notify.onError({
            // Customizing error title
            title: errTitle || 'Error running Gulp',
            message: 'Error: <%= error.message %>',
            sound: true,
        })
    });
}

// Compile sass into CSS & auto-inject into browsers
/*GLOBAL SCSS AND CSS*/
gulp.task('sass', function () {
    return gulp.src(['node_modules/bootstrap/scss/bootstrap.scss', 'src/scss/**/*.scss'])
        .pipe(customPlumber('Error Running Sass'))
        .pipe(sass())
        .pipe(gulp.dest("src/css"))
        .pipe(browserSync.stream());
});

// Move the javascript files into our /src/js folder
gulp.task('js', function () {
    return gulp.src(['node_modules/bootstrap/dist/js/bootstrap.min.js', 'node_modules/jquery/dist/jquery.min.js', 'node_modules/popper.js/dist/umd/popper.min.js'])
        .pipe(gulp.dest("src/js"))
        .pipe(browserSync.stream());
});

// Static Server + watching scss/html files
gulp.task('serve', ['sass'], function () {

    browserSync.init({
        server: "./src"
    });

    gulp.watch(['node_modules/bootstrap/scss/bootstrap.scss', 'src/scss/**/*.scss'], ['sass']);
    gulp.watch("src/*.html").on('change', browserSync.reload);
});

gulp.task('default', ['js', 'serve']);