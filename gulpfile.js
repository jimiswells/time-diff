var gulp        = require('gulp');
var browserSync = require('browser-sync').create();
var sass        = require('gulp-sass');

// Static Server + watching scss/html files
gulp.task('serve', ['sass'], function() {

    browserSync.init({
	   server: {
            baseDir: "/Users/jimiswells/Desktop/WEB/time-diff"
        }
 
    });
    

    gulp.watch("/Users/jimiswells/Desktop/WEB/time-diff/assets/scss/*.scss", ['sass']);
    gulp.watch("/Users/jimiswells/Desktop/WEB/time-diff/*.html").on('change', browserSync.reload);
});

// Compile sass into CSS & auto-inject into browsers
gulp.task('sass', function() {
    return gulp.src("/Users/jimiswells/Desktop/WEB/time-diff/assets/scss/*.scss")
        .pipe(sass())
        .pipe(gulp.dest("/Users/jimiswells/Desktop/WEB/time-diff/assets/css"))
        .pipe(browserSync.stream())
        .on('change', browserSync.reload);
});

gulp.task('default', ['serve']);