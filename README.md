:warning: This project is archived and the repository is no longer maintained.

# Gulpicon

A [gulp](https://github.com/gulpjs/gulp) task wrapper for [grunticon-lib](https://github.com/filamentgroup/grunticon-lib).

## Install

To install to your project and save the dependency in `package.json`:

```
npm install -s gulpicon
```

## Usage

```javascript
var glob = require("glob");
var gulp = require("gulp");
var gulpicon = require("gulpicon/tasks/gulpicon");

// grab the config, tack on the output destination
var config = require("./example/config.js");
config.dest = "example/output";

// grab the file paths
var files = glob.sync("example/svg/*.svg");

// set up the gulp task
gulp.task("icons", gulpicon(files, config));
```

## Sample test

```
# Checkout the project
git clone git@github.com:filamentgroup/gulpicon.git
cd gulpicon

# Run the sample
npm install
npx gulp icons
```

Output will now be in `example/output/`.

## TODO

1. Move to plugin/operation on stream of files, requires alterations to `grunticon-lib`.
