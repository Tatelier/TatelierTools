var gulp = require("gulp"); 

const typescript = require('gulp-typescript');
const pug = require('gulp-pug');

gulp.task('ts',  () => {
    return gulp
        .src('./src/*/*.ts')
        .pipe(typescript())
        .js
        .pipe(gulp.dest('./dist'));
});

gulp.task('pug', () => {
    return gulp
        .src('./src/*/*.pug')
        .pipe(pug())
        .pipe(gulp.dest('./dist'));
});

gulp.task('compile',
    gulp.series(
        'ts',
        'pug'
    )
);