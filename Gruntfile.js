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
                remove: true/*,
                 map: {
                 inline: false
                 }*/
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

};
/*

module.exports = function(grunt) {

    grunt.loadNpmTasks('grunt-contrib-compass');
    grunt.loadNpmTasks('grunt-autoprefixer');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-watch');

    grunt.initConfig({

        // Reference package.json
        pkg: grunt.file.readJSON('package.json'),

        // Compass
        compass: {
            dist: {
                options: {config: 'config.rb'}
            }
        },

        // Auto Prefixer
        autoprefixer: {
            dist: {
                options: {
                    browsers: ['last 3 version', '> 1%', 'ie 8']
                },
                files: {
                    'css/style-prefixed.css': ['css/styles.css']
                }
            }
        },

        // Minify CSS
        cssmin: {
            combine: {
                files: {
                    'css/styles.min.css': ['css/style-prefixed.css']
                }
            }
        },

        // Minify JS
        uglify: {
            my_target: {
                files: {
                    'js/scripts-min.js': ['js/src/theme.js']
                }
            }
        },

        // Watch
        watch: {
            compass: {
                files: 'sass/!*.scss',
                tasks: ['compass']
            },

            csspostprocess: {
                files: 'css/styles.css',
                tasks: ['autoprefixer', 'cssmin']
            },

            jsminify: {
                files: 'script/!*.js',
                tasks: ['uglify']
            },

            livereload: {
                options: {livereload: true},
                files: ['css/!*.css', 'js/!*.js', '*.html', 'img/!*']
            }
        }

    });

    grunt.registerTask('default', ['watch']);
};*/
