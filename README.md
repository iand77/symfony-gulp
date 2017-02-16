# symfony-gulp
A gulpfile.js configured to use with Symfony PHP Framework.

## Installation & Setup ##

Node package manager is required to install gulp and its dependancies. 

Please check here for more information:
https://nodejs.org/en/download/package-manager/

Once Node Package Manager has been installed and configured for your machine execute the included bash script _install.sh _in your terminal.

## What's included? ##

Here are the node.js module dependancies for gulpfile.js, with a breif description of what each package does.

Node package      | Function
------------------|-------------------------------------------------------------------------------------------
browser-sync      | Automatically refresh browser once CSS, HTML twig view, or Javascript edit has been saved
gulp-uglify       | Obfuscates our Javascript code
gulp-sass         | Automatically compiles all SASS and configured to concatenate into a single CSS file
gulp-imagemin     | Optimizes all images for web, and configured to output interlaced GIFs for GIF files
gulp-cache        | Caches optimized images so that same files aren't replaced

