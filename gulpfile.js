var gulp = require('gulp')
var runSequence = require('run-sequence')
var connect = require('gulp-connect') //构建本地web服务器
var less = require('gulp-less') //less编译
var sourcemaps = require('gulp-sourcemaps')
var cssmin = require('gulp-clean-css') //css压缩
var uglify = require('gulp-uglify') //js压缩
var concat = require('gulp-concat') //文件合并
var rename = require('gulp-rename') //文件更名
var webpack = require("gulp-webpack")


var dir = 'front'
var dirin = './resources/' + dir + '/'
var out = './public/front/' + dir + '/'

var webpackConfig = require(dirin + 'webpack.config.js')

gulp.task("webpack", function() {
    return gulp.src(dirin + 'app.js')
        .pipe(webpack(webpackConfig))
        .pipe(gulp.dest(out + 'js'))
        .pipe(connect.reload())
})

gulp.task('min-css', function() {
    gulp.src([out + 'css/*.css', '!' + out + 'css/*.min.css'])
        .pipe(cssmin({
            compatibility: 'ie7' //兼容IE7及以下需设置compatibility属性
        }))
        .pipe(rename({
            suffix: ".min",
        }))
        .pipe(gulp.dest(out + 'css'))
})

gulp.task('min-js', function() {
    return gulp.src([out + 'js/*.js', '!' + out + 'js/*.min.js'])
        .pipe(rename({
            suffix: '.min'
        }))
        .pipe(uglify())
        .pipe(gulp.dest(out + 'js'))
})

gulp.task('less', function() {
    gulp.src(dirin + 'less/*.less')
        .pipe(less())
        .pipe(gulp.dest(out + 'css'))
        .pipe(connect.reload())
})

gulp.task('web', function(cb) {
    runSequence('webpack', 'less', ['min-css', 'min-js'], cb);
});

gulp.task('connect', function() {
    connect.server({
        port: 3000,
        livereload: true
    })
})

gulp.task('watch', function() {
    gulp.watch([dirin + 'less/*.less', dirin + 'components/forms/*.less'], ['less'])
        // gulp.watch(['app/html/*', 'app/layout/*.html'], ['html'])
    gulp.watch([
        dirin + 'app.js',
        dirin + 'global.js',
        dirin + '**/*.js',
        dirin + '**/**/*.js'
    ], ['webpack'])
})

gulp.task('default', ['connect', 'watch'])