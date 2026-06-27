const {dest, watch,series,src} = require("gulp");
const sass = require("gulp-sass") (require("sass"));


function css(){
    return src("src/scss/**/*.scss")
    .pipe(sass())
    .pipe(dest("build/css"));
}

function dev(){
    watch("src/scss/**/*.scss", css)
}

exports.default = series(css,dev)