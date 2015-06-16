/*global require:true*/
var gutil = require('gulp-util');
var Grunticon = require( 'grunticon-lib' );

module.exports = function( files, config ) {
  "use strict";

  return function(callback) {

    // get the config
    config.logger = {
      verbose: function() {} || config.verbose,
      fatal: function() {},
      ok: function() {}
    };

    // just a quick starting message
    gutil.log( "Look, it's a gulpicon!" );

    files = files.filter( function( file ){
      return file.match( /png|svg/ );
    });

    if( files.length === 0 ){
      gutil.log( "Grunticon has no files to read!" );
      callback( false );
      return;
    }

    var output = config.dest;

    if( !output || output && output === "" ){
      gutil.log("The destination must be a directory");
      callback( false );
    }

    var gicon = new Grunticon(files, config.dest, config);

    gicon.process( callback );
  };
};
