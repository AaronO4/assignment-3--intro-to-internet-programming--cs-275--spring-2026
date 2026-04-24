const { dest, src, series, watch } = require(`gulp`),
    cssValidator = require(`css-validator`),
    cssLinter = require(`stylelint`),
    jsValidator = require(`gulp-jsvalidate`),
    jsLinter = require(`gulp-eslint`),
    babel = require(`gulp-babel`),
    cssCompressor = require(`gulp-minify-css`),
    jsCompressor = require(`gulp-uglify`),
    htmlCompressor = require(`gulp-htmlmin`),
    browserSync = require(`browser-sync`);

// Development Track
let validateCSS = () => {
    return src(`styles/*.css`)
        .pipe(cssValidator());
};
let lintCSS = () => {
    return src(`styles/*.css`)
        .pipe(cssLinter());
};
let validateJS = () => {
    return src(`scripts/*.js`)
        .pipe(jsValidator());
};
let lintJS = () => {
    return src(`scripts/*.js`)
        .pipe(jsLinter());
};
let transpileJS = () => {
    return src(`scripts/*.js`)
        .pipe(babel());
};

// The development, or dev, track must validate CSS and JavaScript each time you save a .css or .js file.
// The development track must also refresh the browser when any of these files have changed.
// gulp triggers the dev track.

// Production Track
let compressCSS = () => {
    return src(`styles/*.css`)
        .pipe(cssCompressor())
        .pipe(dest(`prod`));
};
let compressJS = () => {
    return src(`scripts/*.js`)
        .pipe(jsCompressor())
        .pipe(dest(`prod`));
};
let compressHTML = () => {
    return src(`assignment-3--intro-to-internet-programming--cs-275--spring-2026/*.html`)
        .pipe(htmlCompressor({ collapseWhitespace: true }))
        .pipe(dest(`prod`));
};

//gulp build should load the entire production environment into a folder called prod,
//which must be fully self-sufficient and contain all the required files--compressed and linted--of the web page.
// Note: Check that your entire project works as a standalone web app in the prod folder.
// You can do so by moving the prod folder elsewhere in your file system before submitting, then launching index.html.

exports.validateCSS = validateCSS;
exports.lintCSS = lintCSS;
exports.validateJS = validateJS;
exports.lintJS = lintJS;
exports.transpileJS = transpileJS;
exports.compressCSS = compressCSS;
exports.compressJS = compressJS;
exports.compressHTML = compressHTML;

let serve = () => {
    browserSync({
        reloadDelay: 15,
        server: {
            baseDir: `./`
        }
    });

    watch([
        `styles/*.css`,
        `scripts/*.js`,
        `*.html`
    ]).on(`change`, browserSync.reload);
};

exports.default = serve;
exports.serve = series(
    validateCSS,
    lintCSS,
    validateJS,
    lintJS,
    transpileJS,
    serve
);
exports.build = series(
    compressCSS,
    compressJS,
    compressHTML
);
