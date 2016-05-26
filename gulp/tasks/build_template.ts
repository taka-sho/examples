/// <reference path='../../typings/index.d.ts' />
import gulp = require('gulp');

gulp.task('build_template', function (callback: Function) {
  const path: any = require('path');
  const config: any = require('../config');
  const jade: any = require('gulp-pug')

  return gulp.src(path.join(config.root, 'template/*/*.pug'))
    .pipe(jade({
      locales: 'en-us'
    }))
    .pipe(gulp.dest(config.dist));
});
