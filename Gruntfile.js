
'use strict';
var path = require('path');
function absolutePath(file) {
    return path.join(__dirname, file);
}
module.exports = function (grunt) {

    require('load-grunt-tasks')(grunt);
    grunt.loadNpmTasks('grunt-uncss');
var dest = 'css/animation';
    grunt.initConfig({

        pkg: grunt.file.readJSON('package.json'),

        uncss: {
            dist: {
                src: ['index.html'],
                dest: dest + '.css',
                options: {
                    ignore:  [/*/\w\.in/,
                        ".fade",
                        ".collapse",
                        ".collapsing",
                        /(#|\.)navbar(\-[a-zA-Z]+)?/,
                        /(#|\.)dropdown(\-[a-zA-Z]+)?/,
                        /(#|\.)(open)/,
                        ".modal",
                        ".modal.fade.in",
                        ".modal-dialog",
                        ".modal-document",
                        ".modal-scrollbar-measure",
                        ".modal-backdrop.fade",
                        ".modal-backdrop.in",
                        ".modal.fade.modal-dialog",
                        ".modal.in.modal-dialog",
                        ".modal-open",
                        ".in",
                        ".modal-backdrop",*/
                        "fadeInLeftBig",
                        "fadeInDownBig",
                        "fadeInRightBig",
                        "fadeIn",
                        "flash",
                        "rubberBand",
                        "shake",
                        "pulse",
                        "bounceIn"]
                }
            }
        },

        autoprefixer: { // https://github.com/nDmitry/grunt-autoprefixer
            options: {
                browsers: ['> 1%', 'bb 10', 'ie 8', 'ie 9'],
                remove: true,
                map: {
                    inline: false
                }
            },
            no_dest: {
                src: dest + '.css' // output file
            }

        },
        cssmin: {
            options: {},
            minify: {
                src: [dest+'.css'],
                dest: absolutePath(dest + '.min.css')
            }
        },
        watch: {
            css: {
                files: [dest + '.css'],
                tasks: ['default']
            }
        }

    });


    // register task
    grunt.registerTask('default', ['uncss', 'autoprefixer', 'cssmin']);
    grunt.registerTask('clear', 'uncss');
    grunt.registerTask('dev', ['watch']);

};
//<link rel="stylesheet" href="css/animate.min.css">
/*
'use strict';
var path = require('path');
function absolutePath(file) {
    return path.join(__dirname, file);
}
module.exports = function (grunt) {

    require('load-grunt-tasks')(grunt);


    grunt.initConfig({

        pkg: grunt.file.readJSON('package.json'),

        autoprefixer: { // https://github.com/nDmitry/grunt-autoprefixer
            options: {
                browsers: ['> 1%', 'bb 10', 'ie 8', 'ie 9'],
                remove: true/!*,
                 map: {
                 inline: false
                 }*!/
            },
            no_dest: {
                src: 'css/styles.css' // output file
            }

        },

        cssmin: {
            options: {},
            minify: {
                src: ['css/styles.css'],
                dest: absolutePath('css/styles.css')
            }
        },

        watch: {
            css: {
                files: ['css/styles.css'],
                tasks: ['default']
            }
        }

    });


    // register task
    grunt.registerTask('default', ['autoprefixer', 'cssmin']);
    grunt.registerTask('dev', ['watch']);

};*/
