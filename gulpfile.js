var glob = require("glob");
var gulp = require("gulp");
var gulpicon = require("./tasks/gulpicon");

// grab the config, tack on the output destination
var config = require("./example/config.js");
config.dest = "example/output";

// grab the file paths
var files = glob.sync("example/svg/*.svg");

// set up the gulp task
gulp.task("icons", gulpicon(files, config));
