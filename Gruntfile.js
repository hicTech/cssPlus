
module.exports = function(grunt) {

    // Project configuration.
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        uglify: {
            options: {
                banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
            },
            build: {
                src: 'src/source.js',
                dest: 'build/dest.js'
            }
        },

        less: {
            development: {
                options: {
                    compress: true,
                    yuicompress: true,
                    optimization: 2
                },
                files: {
                    "css/cssPlus-v.1.0.0.css": "css/less.less" // destination file and source file
                }
            }
        },

        favicons: {
            options: {
                html: 'index.html',
                HTMLPrefix: "assets/favicons/"
            },
            icons: {
                src:    'assets/favicons/baseIcon.png',
                dest:   'assets/favicons'
            }
        },

        watch: {
            styles: {
                files: ['css/**/*.less'], // which files to watch
                tasks: ['less'],
                options: {
                    nospawn: true
                }
            }
        }
    });


    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-favicons');

    grunt.registerTask('default', ['watch']);

};