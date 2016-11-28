import gulp from 'gulp';
import gulpLoadPlugins from 'gulp-load-plugins';
import lazypipe from 'lazypipe';
import runSequence from 'run-sequence';

import paths from './paths';

const $ = gulpLoadPlugins();
let lintScriptServer = lazypipe()
  .pipe($.eslint, { 'useEslintrc': true })
  .pipe($.eslint.format)
  .pipe($.eslint.failAfterError);

gulp.task('lint:scripts:client', () => {
  return gulp.src(paths.client.scripts)
    .pipe($.tslint({
      configuration: './tslint.json',
    }))
    .pipe($.tslint.report());
});
gulp.task('lint:scripts:server', () => {
  return gulp.src([paths.server.scripts])
    .pipe(lintScriptServer());
});
gulp.task('lint:scripts', cb => runSequence(['lint:scripts:client', 'lint:scripts:server'], cb));