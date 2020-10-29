# Welcome to Team Alpha
- [Welcome to Team Alpha](#welcome-to-team-alpha)
  - [Website-outline](#website-outline)
  - [Getting-set-up](#getting-set-up)
    - [To-pull-site](#to-pull-site)
  - [Gulp-tasks](#gulp-tasks)
- [Best-practice](#best-practice)

## Website-outline
Basic clothing website, consisting of 4 pages:
- index(home)
- mens clothes
- ladies clothes
- contact form

## Getting-set-up
1. Created GitHub repository for your project
2. Add npm and gulp to your project
3. Install the packages from our previous example
4. Add the appropriate files to GitHub using git add, git commit etc., include the package.json as your team can use this to install the same dependencies

### To-pull-site
1. GitHub repository locally, use git clone {repo URL} {optional folder name}
2. Install dependencies from package.json with npm install -  in terminal run `npm i`

## Gulp-tasks 
The below code is contaiend in gulpfile.js. It can be used to code css using sass files and is programmed to auto watch for changes, and aut update them via each task.

Forms part of the script needed when working on a remote repo as a team. 
```js
// Variables required
let gulp = require('gulp');
let cleanCSS = require('gulp-clean-css');
let rename = require('gulp-rename');
let sass = require ('gulp-sass')

// SASS task - duplicates scss into css
gulp.task('sass', function () {
	return gulp.src('./scss/styles.scss')
		.pipe(sass())
		.pipe(rename('styles.css'))
		.pipe(gulp.dest('./css/'));
});

// minify-css - outputs a new .min.css file to linked to HTML
gulp.task('minify-css', () => {
  return gulp.src('css/styles.css')
    .pipe(cleanCSS({compatibility: 'ie8'}))
    .pipe(rename({suffix: '.min'}))
    .pipe(gulp.dest('./css/'));
});

// Both gulp tasks in one
// Combo of the above tasks
gulp.task ('minify-sass', gulp.series('sass', 'minify-css'))

// This task watches for any of the above changes and implements automatically. 
//return gulp.watch('customisations.scss', gulp.series('minify-sass'));
gulp.task('watch', function () {
return gulp.watch('scss/**/*.scss',
  gulp.task('minify-sass'));
} 
);
```
The following are the packages required when running the above that are to be installed via npm > gulp.
```json
{
  "name": "project",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "keywords": [],
  "author": "",
  "license": "ISC",
  "dependencies": {
    "gulp": "^4.0.2",
    "gulp-clean-css": "^4.3.0",
    "gulp-rename": "^2.0.0",
    "gulp-sass": "^4.1.0"
  }
}
```
# Best-practice
- No excess files
- Files and folders logically named and arranged
- Tab indent