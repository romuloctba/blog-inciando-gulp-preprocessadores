var gulp = require('gulp');

	gulp.task('teste', function(){
		console.log("teste de task do gulo");
		});
	var jade = require('gulp-jade');

	gulp.task('jade', function(){
	gulp.src('src/jade/**/**.jade')
		.pipe(jade())
		.pipe(gulp.dest('build'))
		.pipe(connect.reload());
	});

	var connect = require('gulp-connect-multi')();
  
	gulp.task('server', connect.server({
	  root: ['build'],
	  port: 1337,
	  livereload: true,
	  open: { browser: 'chrome' }
	}));

	var stylus = require('gulp-stylus');

	gulp.task('stylus', function(){
		gulp.src('src/stylus/**/**.styl')
			.pipe(stylus())
			.pipe(gulp.dest('build/css'))
			.pipe(connect.reload());
	})

	gulp.task('watch', function(){
 		gulp.watch(['src/jade/**/**.jade'], ['jade']);
 		gulp.watch(['src/stylus/**/**.styl'], ['stylus']);
 })

	gulp.task('default', ['jade', 'stylus', 'server', 'watch']);