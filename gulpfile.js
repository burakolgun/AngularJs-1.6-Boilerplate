    const gulp  = require('gulp');



//  npm init edilir ve ardindan alttaki pakatler yuklenir ornek olarak -> npm install gulp-uglify --save-dev
    const uglify = require('gulp-uglify');
    const minifyCSS = require('gulp-csso');
    const concat = require('gulp-concat');
    const sass = require('gulp-sass');

    var sassDir = 'Css/scss'; //directory tanimladik
    var cssDir = 'Css/css'; // css directory tanimladik
    var JSDir = 'js'; // js directory tanimladik veya gosterdik

    var JSFiles = [
        JSDir + "/index.js"
    ];
    var sassFiles = [
        sassDir + "/index.scss"
    ];


    // sayfanin degisiklik oldugunda yenilenmesi icin bunun icin serve addli fonksiyonu ekledik
    var browserSync = require('browser-sync').create(); // bu da npm ile yuklenmeli oncelikle eklemek icin npm install browser-sync gulp --save-dev
    var reload      = browserSync.reload;



    gulp.task('css', function () {
        return gulp.src(sassFiles)
            .pipe(sass()) //
            .pipe(minifyCSS()) // compress ediyor
            .pipe(concat('all.css')) // butun cssler tek file
            .pipe(gulp.dest(cssDir)) // cikti dosyasinin hangi klasorde olacagi

    });
    gulp.task('js', function () {
        return gulp.src(JSFiles)
            .pipe(concat('all.js'))
            .pipe(gulp.dest(JSDir))


    });
    gulp.task('serve', function () {
        browserSync.init({
            server: {
                baseDir: "./"
            }
        });

        // degisiklik oldugunda tekrar yukle
        gulp.watch('*.html').on('change', reload);
        gulp.watch('js/*.js').on('change', reload);
        gulp.watch('Css/css/*.css').on('change', reload);
    });


    gulp.task('watch', function () {
        gulp.watch(JSDir + "/**/*.js", ['js']);
        gulp.watch(sassDir + "/**/*.scss", ['css']);
    });

    gulp.task('default',['css','js', 'watch', 'serve']); // gukp calistirildiginda ne yapsin

