module.exports = function(grunt) {
  grunt.loadNpmTasks('grunt-eslint');
  grunt.loadNpmTasks('grunt-nodemon');
  grunt.loadNpmTasks('grunt-githooks');

  grunt.initConfig({
    eslint: {
      options: {
        config: '.eslintrc'
      },
      target: [
        'server.js',
        'app/**/*.js',
        'config/**/*.js'
      ]
    },
    nodemon: {
      dev: {
        script: 'server.js'
      }
    },
    githooks: {
      all: {
        'pre-commit': 'eslint',
      }
    }
  });

  grunt.registerTask('default', ['nodemon']);
};
