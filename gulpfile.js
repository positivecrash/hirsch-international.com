//load plugins
var gulp             = require('gulp'),
    compass          = require('gulp-compass'),
    pug              = require('gulp-pug'),
    autoprefixer     = require('gulp-autoprefixer'),
    cleancss         = require('gulp-clean-css'),
    uglify           = require('gulp-uglify'),
    merge            = require('merge-stream'),
    rename           = require('gulp-rename'),
    concat           = require('gulp-concat'),
    
    ttf2eot          = require('gulp-ttf2eot'),
    ttf2woff         = require('gulp-ttf2woff'),

    iconfont         = require('gulp-iconfont'),
    
    jimp             = require('gulp-jimp');


var path = {

    file:{
        csscompile: 'app/css/compile.scss',
        cssall: 'app/css/**/*.scss',
        jsall: 'app/js/**/*.js',
        layoutscompile: 'app/layouts/*.pug',
        layoutsall: 'app/layouts/**/*.pug',
        fonticons: 'app/fonticons/*.svg'
    },

    folder:{
        css: 'dist/assets/css/',
        fonts: 'dist/assets/fonts/',
        sass: 'app/css/',
        image: 'dist/assets/i/',
        js: 'dist/assets/js/',
        layouts: 'dist/',
        csstemplates: 'app/css/templates/'
    },

    filename:{
        css: 'website_styles',
        js: 'website_plugins.js',
        imgcrop: '-thumbnail'
    },

    settings: {
        imgcrop: { scale: 0.2, gaussian: 4 }
    }

}


gulp.task('css', function() {
    return gulp.src([path.file.csscompile])
        .pipe(compass({
            css: path.folder.css,
            sass: path.folder.sass,
            image: path.folder.image,
            font: path.folder.fonts
        }))
        .pipe(gulp.dest(path.folder.css))
        .pipe(cleancss({
          compatibility: 'ie8'
        }))
        .pipe(rename({
            basename: path.filename.css,
            suffix: '.min'
        }))
        .pipe(gulp.dest(path.folder.css));
});




gulp.task('js', function() {
	return gulp.src([path.file.jsall])
		.pipe(concat(path.filename.js))
		.pipe(gulp.dest(path.folder.js))
		.pipe(rename({ suffix: '.min' }))
		// .pipe(uglify())
		.pipe(gulp.dest(path.folder.js));
});


gulp.task('layouts', function() {
  return gulp.src([path.file.layoutscompile])
    .pipe(pug({
      pretty: true
    }))
    .pipe(gulp.dest(path.folder.layouts));
});



gulp.task('cropimg', function () {
    gulp
    .src(path.folder.image + 'Hirsch-Social.png')
    .pipe(jimp({ [path.filename.imgcrop]: path.settings.imgcrop })).pipe(gulp.dest(path.folder.image));

    gulp
    .src(path.folder.image + 'Hirsch-Logo.png')
    .pipe(jimp({ [path.filename.imgcrop]: path.settings.imgcrop })).pipe(gulp.dest(path.folder.image));

    gulp
    .src(path.folder.image + 'Hirsch-Logo-Small.png')
    .pipe(jimp({ [path.filename.imgcrop]: path.settings.imgcrop })).pipe(gulp.dest(path.folder.image));

    gulp
    .src(path.folder.image + 'Hirsch-Logo-Green.png')
    .pipe(jimp({ [path.filename.imgcrop]: path.settings.imgcrop })).pipe(gulp.dest(path.folder.image));

    gulp
    .src(path.folder.image + 'Hirsch-Logo-Red.png')
    .pipe(jimp({ [path.filename.imgcrop]: path.settings.imgcrop })).pipe(gulp.dest(path.folder.image));

    gulp
    .src(path.folder.image + 'Hirsch-Logo-Head.png')
    .pipe(jimp({ [path.filename.imgcrop]: path.settings.imgcrop })).pipe(gulp.dest(path.folder.image));

    gulp
    .src(path.folder.image + 'Hirsch-Logo-Social.png')
    .pipe(jimp({ [path.filename.imgcrop]: path.settings.imgcrop })).pipe(gulp.dest(path.folder.image));

    gulp
    .src(path.folder.image + 'Hirsch-Logo-Katowice.png')
    .pipe(jimp({ [path.filename.imgcrop]: path.settings.imgcrop })).pipe(gulp.dest(path.folder.image));

    gulp
    .src(path.folder.image + 'Hirsch-Logo-Warshaw.png')
    .pipe(jimp({ [path.filename.imgcrop]: path.settings.imgcrop })).pipe(gulp.dest(path.folder.image));

    gulp
    .src(path.folder.image + 'map.png')
    .pipe(jimp({ [path.filename.imgcrop]: path.settings.imgcrop })).pipe(gulp.dest(path.folder.image));

    gulp
    .src(path.folder.image + 'specialization-1.png')
    .pipe(jimp({ [path.filename.imgcrop]: path.settings.imgcrop })).pipe(gulp.dest(path.folder.image));

    gulp
    .src(path.folder.image + 'specialization-2.png')
    .pipe(jimp({ [path.filename.imgcrop]: path.settings.imgcrop })).pipe(gulp.dest(path.folder.image));

    gulp
    .src(path.folder.image + 'specialization-3.png')
    .pipe(jimp({ [path.filename.imgcrop]: path.settings.imgcrop })).pipe(gulp.dest(path.folder.image));

    gulp
    .src(path.folder.image + '404.png')
    .pipe(jimp({ [path.filename.imgcrop]: path.settings.imgcrop })).pipe(gulp.dest(path.folder.image));

    gulp
    .src(path.folder.image + 'Hirsch-Logo-Gorizontal.png')
    .pipe(jimp({ [path.filename.imgcrop]: path.settings.imgcrop })).pipe(gulp.dest(path.folder.image));

     gulp
    .src(path.folder.image + 'Hirsch-Logo-White.png')
    .pipe(jimp({ [path.filename.imgcrop]: path.settings.imgcrop })).pipe(gulp.dest(path.folder.image));

});


// Watch
gulp.task('watch', function() {

	//watch .scss files
	gulp.watch(path.file.cssall, ['css']);

	//watch .js files
	gulp.watch(path.file.jsall, ['js']);

	// //watch .pug files
	gulp.watch(path.file.layoutsall, ['layouts']);

});


//default
gulp.task('default', [
    'css',
    'js',
    'layouts',
    // 'cropimg',
    'watch'
]);
