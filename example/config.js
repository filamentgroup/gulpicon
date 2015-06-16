var path = require( "path" );

module.exports = {
  // CSS filenames
  datasvgcss: "icons.data.svg.css",
  datapngcss: "icons.data.png.css",
  urlpngcss: "icons.fallback.css",

  // preview HTML filename
  previewhtml: "preview.html",

  // grunticon loader code snippet filename
  loadersnippet: "grunticon.loader.js",

  // Include loader code for SVG markup embedding
  enhanceSVG: true,

  // Make markup embedding work across domains (if CSS hosted externally)
  corsEmbed: false,

  // folder name (within dest) for png output
  pngfolder: "png",

  // prefix for CSS classnames
  cssprefix: ".icon-",

  defaultWidth: "300px",
  defaultHeight: "200px",

  // define vars that can be used in filenames if desirable,
  // like foo.colors-primary-secondary.svg
  colors: {
    primary: "red",
    secondary: "#666"
  },

  dynamicColorOnly: true,

  // css file path prefix
  // this defaults to "/" and will be placed before the "dest" path
  // when stylesheets are loaded. It allows root-relative referencing
  // of the CSS. If you don't want a prefix path, set to to ""
  cssbasepath: "/",
  customselectors: {
    "cat" : ["#el-gato"],
    "gummy-bears-2" : ["nav li a.deadly-bears:before"]
  },

  template: path.join( __dirname, "default-css.hbs" ),
  previewTemplate: path.join( __dirname, "preview-custom.hbs" ),

  compressPNG: true
};
