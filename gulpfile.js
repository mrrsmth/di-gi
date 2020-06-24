"use strict";

let gulp = require('gulp');
let sass = require('gulp-sass');
let plumber = require('gulp-plumber');
let postcss = require('gulp-postcss');
let autoprefixer = require('autoprefixer');
let server = require('browser-sync').create();


gulp.task('sass', function(done) {
	gulp.src('scss/**/*.scss')
	.pipe(plumber({
		errorHandler : function(err) {
		  console.log(err);
		  this.emit('end');
		}
	  }))
	.pipe(sass({errLogToConsole: true}))
    .pipe(sass({outputStyle: 'compact'}))
	.pipe(postcss([
		autoprefixer()
	]))
	.pipe(gulp.dest('css'))
	.pipe(server.stream());
	
	done();
});

gulp.task('serve', function(done) {
	server.init({
		server: '.',
		notify: false,
		open: true,
		cors: true,
		ui:false
	});
	
	gulp.watch('scss/**/*.scss', gulp.series('sass'));
	gulp.watch('*.html').on('change', () => {
		server.reload();
		done();
	});
	
	done();
});

gulp.task('default', gulp.series('sass', 'serve'));