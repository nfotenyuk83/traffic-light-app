const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const autoprefixer = require('gulp-autoprefixer');
const cleanCSS = require('gulp-clean-css');

const paths = {
  styles: {
    src: 'src/styles/**/*.scss',
    dest: 'public/css'
  }
};

function styles() {
  return gulp.src('src/styles/main.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(autoprefixer())
    .pipe(cleanCSS())
    .pipe(gulp.dest(paths.styles.dest));
}

function watchFiles() {
  gulp.watch(paths.styles.src, styles);
}

exports.styles = styles;
exports.watch = watchFiles;
exports.build = styles;
exports.default = gulp.series(styles, watchFiles);
