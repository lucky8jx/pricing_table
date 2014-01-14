module.exports = function(grunt) {
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		jade: {
			compile: {
				options: {
					data: {
						debug: false
					}
				},
				files: {
					"./index.html": ["./index.jade"]
				}
			}
		},
		stylus: {
			compile: {
				options: {
					banner: '/*<%= grunt.template.today("yyyy-mm-dd") %>*/\n'
				},
				files: {
					"css/style.css": ['css/style.styl']
				}
			}
		}
	});

	grunt.loadNpmTasks('grunt-contrib-jade');
	grunt.loadNpmTasks('grunt-contrib-stylus');

	grunt.registerTask('default', ['jade', 'stylus']);
};