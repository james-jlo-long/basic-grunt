# basic-grunt

A basic grunt task for concatenating scripts and compiling LESS. It creates 2 tasks:

- `grunt update` Creates the CSS from the LESS files.
- `grunt scripts` Creates the JS files from the source JS files.

`grunt` or `grunt default` will start watching all LESS and JS files for changes, executing the appropriate tasks when necessary.

Modifying the "Gruntsetup.js" file will trigger the `grunt scripts` task. This allows more scripts to be added to the concatenation/minification without having to restart Grunt.
