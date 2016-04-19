/// <reference path="../../typings/main.d.ts" />
import gulp = require('gulp');

gulp.task('build', function (callback: Function) {
  const path: any = require('path');
  const config: any = require('../config');
  const jade: any = require('gulp-jade')

  return gulp.src(path.join(config.root, 'src/*/*.jade'))
    .pipe(jade({
      locales: 'en-us'
    }))
    .pipe(gulp.dest(config.dist));
});
