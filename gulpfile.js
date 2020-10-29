let gulp = require('gulp');
let cleanCSS = require('gulp-clean-css');
let rename = require('gulp-rename');
let sass = require ('gulp-sass')

// SASS task
gulp.task('sass', function () {
	return gulp.src('./scss/style.scss')
		.pipe(sass())
		.pipe(rename('style.css'))
		.pipe(gulp.dest('./css/'));
});

// Define a new task minify-css:
gulp.task('minify-css', () => {
  return gulp.src('css/style.css')
    .pipe(cleanCSS({compatibility: 'ie8'}))
    .pipe(rename({suffix: '.min'}))
    .pipe(gulp.dest('./css/'));
});

// Both gulp tasks in one
// gulp.task('{task name}', gulp.series('{task1}', '{task2}'));
gulp.task ('minify-sass', gulp.series('sass', 'minify-css'))

//return gulp.watch('customisations.scss', gulp.series('minify-sass'));
gulp.task('watch', function () {
return gulp.watch('scss/**/*.scss',
  gulp.task('minify-sass'));
} 
);