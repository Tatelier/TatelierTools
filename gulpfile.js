var gulp = require("gulp"); 

const typescript = require('gulp-typescript');
const pug = require('gulp-pug');
const sass = require('gulp-sass')(require('sass'));

gulp.task('ts',  () => {
    return gulp
        .src('./src/**/*.ts')
        .pipe(typescript())
        .js
        .pipe(gulp.dest('./dist'));
});

gulp.task('sass', () => {
    return gulp
        .src('./src/**/*.sass')
        .pipe(sass())
        .pipe(gulp.dest('./dist'));
});

gulp.task('pug', () => {
    return gulp
        .src('./src/**/*.pug')
        .pipe(pug())
        .pipe(gulp.dest('./dist'));
});

gulp.task('js', function() {
    return gulp.src('./src/**/*.js')
        .pipe(gulp.dest('./dist'));
});

gulp.task('compile',
    gulp.series(
        'ts',
        'js',
        'sass',
        'pug'
    )
);