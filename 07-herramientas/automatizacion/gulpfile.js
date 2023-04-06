const gulp = require('gulp')
const server = require('gulp-server-livereload')

gulp.task('build', (callback) => {
    console.log('Constuyendo el sitio');
    callback();
    setTimeout(callback,1000);
})


gulp.task('serve',(callback) => {
    gulp.src('www')
        .pipe(server({
            livereload:true,
            open:true
        }))
})