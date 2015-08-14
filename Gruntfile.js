'use strict';

module.exports = function(grunt) {

	// load all tasks
	require('load-grunt-tasks')(grunt, {scope: 'devDependencies'});

    grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		watch: {
			all: {
			    files: [ 'scss/*.scss', 'export/js/init.js', 'jade/*.jade', 'jade/*/*.jade', 'config.json' ],
			    tasks: [ 'sass:dev', 'autoprefixer', 'csscomb', 'jade', 'jshint' ],
			    options: {
					livereload: true,
				}
			}
		},
		sass: {
			dev: {
				options : {
					style : 'expanded'
				},
				files: {
					'export/main.css':'scss/main.scss',
				}
			}
		},
		jshint: {
            files: ['Gruntfile.js', 'export/js/init.js'],
            options: {
                jshintrc: '.jshintrc'
            }
        },
        jade: {
            compile: {
                options: {
                    data: function() {
						return require('./config.json');
					},
                    pretty: true
                },
                files: [{
                    expand: true,
                    cwd: 'jade',
                    src: [ '**/*.jade', '!partials/*.jade', '!modules/*.jade' ],
                    dest: 'export',
                    ext: '.html'
                }]
            }
        },
		autoprefixer: {
            options: {
				browsers: ['> 1%', 'last 2 versions', 'Firefox ESR', 'Opera 12.1', 'ie 9']
			},
			single_file: {
				src: 'export/main.css',
				dest: 'export/main.css'
			}
		},
		csscomb: {
			options: {
                config: '.csscomb.json'
            },
            files: {
                'export/main.css': ['export/main.css'],
            }
		},
		cssmin: {
			release:{
				files: [{
					src: ['export/main.css'],
					dest: 'export/main.min.css'
				}]
			}
	
		},
		imagemin: {
            all: {
                options: {
                    optimizationLevel: 3,
                    progressive: true
                },
                files: [{
                    expand: true,
                    cwd: './export',
                    src: ['images/**/**/*.png', 'images/**/**/*.jpg', 'images/**/**/*.gif'],
                    dest: './export',
                }]
            }
        },
		concat: {
		    plugins: {
		        src: [
		        	'js/plugins/*.js'
		        ],
		        dest: 'export/js/plugins.js'
		    },
		    vendors: {
			    src: [
		        	'js/vendor/*.js'
		        ],
		        dest: 'export/js/vendors.js'
		    }
		},
		uglify: {
		    release: {
		        src: 'export/js/plugins.js',
		        dest: 'export/js/plugins.min.js'
		    },
		    init: {
		        src: 'export/js/init.js',
		        dest: 'export/js/init.min.js'
		    }
		}

	});

    grunt.registerTask( 'default', [
    	'jshint',
    	'concat:plugins',
    	'concat:vendors',
    	'sass:dev',
    	'autoprefixer',
    	'csscomb',
    	'jade',
    	'watch:all'
    ]);

};