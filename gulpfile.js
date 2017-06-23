var gulp = require('gulp');
var webserver = require('gulp-webserver');

var postcss = require('gulp-postcss');

 
gulp.task('webserver', function() {
  gulp.src('src')
    .pipe(webserver({
      livereload: true,
      fallback: 'index.html',
      open: true
    }));
});

gulp.task('css', function () {
    var processors = [
      require("import-postcss"),
      require('postcss-advanced-variables'),
      require('postcss-nested')
    ];
    return gulp.src('./src/postcss/styles.css')
        .pipe(postcss(processors))
        .pipe(gulp.dest('./src/css'));
});

// Watch
gulp.task('watch', function(){
  gulp.watch('./src/postcss/*.css', ['css']);
});
