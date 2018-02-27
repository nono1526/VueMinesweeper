var gulp   =   require('gulp'); //將 gulp 引入
var gulpSass = require('gulp-sass');

// 建立 default 工作
gulp.task('default', ['styles']); // 運行 task styles
// 建立 style 工作
gulp.task('styles', () => {

gulp.src('scss/**/*.scss') //編譯 scss 資料夾下所有 scss 檔案

    .pipe(gulpSass({
    }))

    .pipe(gulp.dest('css')); // 輸出至 css 資料夾

     console.log('start compass scss!');

});
gulp.task('watch', () => {
    gulp.watch('scss/**/*.scss', ['styles']); //監控 scss/**/*.scss 若有變更
                                              //會執行 styles task
});