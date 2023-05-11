var gulp = require('gulp')
var browserSync = require('browser-sync').create();
const sass = require('gulp-sass')(require('sass'));
var prefix = require('gulp-autoprefixer');

gulp.task('sass', function(done) {
    gulp.src('sass/*.sass')
        .pipe(sass())
        .pipe(prefix(prefixerOption))
        .pipe(gulp.dest("css"))
        .pipe(browserSync.stream())

    done();
});
var prefixerOption = {
    browsers: ['last 20 version']
}

gulp.task('serve', function(done) {
    browserSync.init({
        server:""
    });

    gulp.watch("sass/*.sass", gulp.series('sass'));
    gulp.watch("*.html").on('change', () => {
        browserSync.reload();
        done();
    });

    done();
});
gulp.task('default', gulp.series('sass', 'serve'));