
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
                    "css/build/core.css": ['css/source/core/**/*.less'] ,
                    "css/build/plugins.css": ['css/source/plugins/**/*.less'],
                    "css/build/demos.css": ['css/demos/**/*.less']
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
        }



    });




    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-watch');

    grunt.registerTask('default', ['watch']);

};




/*
 files:{
 "css/build/cssPlus-v.0.2-build.css": "css/less.less" // destination file and source file
 }
 */