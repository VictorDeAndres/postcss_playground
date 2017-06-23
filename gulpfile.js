var gulp = require('gulp');
var webserver = require('gulp-webserver');

var postcss = require('gulp-postcss');
var atImport = require("import-postcss");
 
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
      atImport
    ];
    //Aquí la ruta de donde coge nuestros css
    return gulp.src('./src/postcss/styles.css')
        .pipe(postcss(processors))
        //Aqui la ruta de destino
        .pipe(gulp.dest('./src/css'));
});

// Watch
gulp.task('watch', function(){
  gulp.watch('./src/postcss/*.css', ['css']);
});
