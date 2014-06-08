/*global module:false*/
module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    jekyll: {
        build : {
          dest: '_site'
        }
    },
    watch: {
      jekyll: {
          files: ['_layouts/*.html', '_posts/*.md', 'assets/css/style.css'],
          tasks: ['jekyll']
      },
      css: {
        files: ['assets/sass/**/*.scss'],
        tasks: ['sass']
      }
    },
    sass: {
      dist: {
          options: {
              style: 'compact'
          },
          files: {
              'assets/css/style.css': 'assets/sass/style.scss'
          }
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-jekyll');
  grunt.loadNpmTasks('grunt-contrib-sass');

  grunt.registerTask('build', ['sass', 'jekyll']);
  grunt.registerTask('default', ['build', 'watch']);
};
