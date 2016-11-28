import gulp from 'gulp';
import _ from 'lodash';
import gulpLoadPlugins from 'gulp-load-plugins';
import paths from './paths';

const $ = gulpLoadPlugins();

gulp.task('scripts:client', () => {
  const tsResult = gulp.src(paths.client.scripts)
    .pipe($.sourcemaps.init())
    .pipe($.typescript());

  return tsResult.js
    .pipe($.sourcemaps.write('.'))
    .pipe(gulp.dest('.tmp'));
});
gulp.task('scripts:server', () => {
  return gulp.src(_.union(paths.server.scripts, ['server/**/*.json']))
    .pipe($.sourcemaps.init())
    .pipe($.babel({
      plugins: [
        'transform-class-properties',
        'transform-runtime'
      ]
    }))
    .pipe($.sourcemaps.write('.'))
    .pipe(gulp.dest('dist/server'));
});