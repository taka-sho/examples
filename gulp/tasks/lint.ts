/// <reference path='../../typings/index.d.ts' />
import gulp = require('gulp')

gulp.task('lint', function () {
  const config: any = require('../config.ts')
  const path: any = require('path')
  const puglint: any = require('gulp-pug-lint')
  const gulpIf: any = require('gulp-if')

  return gulp.src(path.join(config.root, 'src/**'))
    .pipe(gulpIf('*.pug', puglint()))
});
