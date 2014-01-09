module.exports = function(grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    // Sass
    sass: {
      dist: {
        files: {
          'assets/css/style.css': '_assets/scss/style.scss'
        }
      }
    },

    // Minify CSS
    csso: {
      dist: {
        files: {
          'assets/css/style.min.css': ['assets/css/style.css']
        }
      }
    },

    // Optimise images
    imagemin: {
      all: {
        files: [{
          expand: true,
          cwd: '_assets/images/',
          src: ['**/*.{png,jpg}'],
          dest: 'assets/images/'
        }]
      }
    },

    // Watch files for changes
    watch: {
      options: {
        spawn: false
      },
      css: {
        files: [
          '_assets/scss/**/*'
        ],
        tasks: ['sass', 'csso']
      },
      images: {
        files: [
          '_assets/images/**/*'
        ],
        tasks: ['imagemin']
      }
    }
  });

  // Load tasks
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-csso');
  grunt.loadNpmTasks('grunt-contrib-imagemin');
  grunt.loadNpmTasks('grunt-contrib-watch');

  // Register tasks
  grunt.registerTask('default', ['sass', 'csso', 'imagemin']);
  grunt.registerTask('watch-all', ['watch']);
};
