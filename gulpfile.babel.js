'use strict';

import gulp from 'gulp'
import sourcemaps from 'gulp-sourcemaps'
import concat from 'gulp-concat'

import { join } from 'path'
import { readFileSync } from 'fs'

let babelrc = JSON.parse(readFileSync(join(__dirname, '.babelrc'), 'utf-8'));
let build_path = {
    sources: [
        'src/**/*.js',
        '!src/test/**/*.js'
    ]
};

gulp.task('build', () => {
   return gulp.src(build_path.sources)
        .pipe(sourcemaps.init())
        .pipe(babel({ babelrc }))
        .pipe(concat('all.js'))
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest('dist')); 
});

