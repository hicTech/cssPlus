
module.exports = function(grunt) {

    // Project configuration.
    grunt.initConfig({

        pkg: grunt.file.readJSON('package.json'),


        less: {
            development: {
                options: {
                    compress: true,
                    yuicompress: true,
                    optimization: 2
                },
                files: {
                    "css/build/core.css": ['css/sources/core/**/*.less'] ,
                    "css/build/plugins.css": ['css/sources/plugins/**/*.less'],
                    "css/build/customs.css": ['css/sources/customs/**/*.less']
                }
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
        },

        clean: ["css/build/cssPlus-v.0.2-build.css"],

        cssmin: {
            options: {
                shorthandCompacting: false,
                roundingPrecision: -1
            },
            target: {
                files: {
                    'css/build/cssPlus-v.0.2-build.css': 'css/build/*.css'
                }
            }
        }



    });




    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-clean');



    grunt.registerTask('minifyBuild', ['less','clean','cssmin']);

};



