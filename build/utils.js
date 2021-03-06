var path = require('path')
var config = require('../config')
var ExtractTextPlugin = require('extract-text-webpack-plugin')

exports.assetsPath = function (_path) {
	var assetsSubDirectory = process.env.NODE_ENV === 'production'
		? config.build.assetsSubDirectory
		: config.dev.assetsSubDirectory
	return path.posix.join(assetsSubDirectory, _path)
}

exports.cssLoaders = function (options) {
	options = options || {}
	// generate loader string to be used with extract text plugin
	function generateLoaders (loaders) {
		var sourceLoader = loaders.map(function (loader) {
			var extraParamChar
			if (/\?/.test(loader)) {
				loader = loader.replace(/\?/, '-loader?')
				extraParamChar = '&'
			} else {
				loader = loader + '-loader'
				extraParamChar = '?'
			}
			return loader + (options.sourceMap ? extraParamChar + 'sourceMap' : '')
		}).join('!')

		if (options.extract) {
			return ExtractTextPlugin.extract('vue-style-loader', sourceLoader)
		} else {
			return ['vue-style-loader', sourceLoader].join('!')
		}
	}

	// http://vuejs.github.io/vue-loader/configurations/extract-css.html
	return {
		// 原来的
		css: generateLoaders(['css']),
		postcss: generateLoaders(['css']),
		less: generateLoaders(['css', 'autoprefixer', 'px2rem', 'less?outputStyle=expanded']),
		sass: generateLoaders(['css', 'sass?indentedSyntax']),
		scss: generateLoaders(['css', 'sass']),
		stylus: generateLoaders(['css', 'stylus']),
		styl: generateLoaders(['css', 'stylus'])

		// 根据网上修改的
		// css: generateLoaders(['css?-autoprefixer']),
		// postcss: generateLoaders(['css?-autoprefixer']),
		// less: generateLoaders(['css?-autoprefixer', 'less?outputStyle=expanded']),
		// sass: generateLoaders(['css?-autoprefixer', 'sass?indentedSyntax']),
		// scss: generateLoaders(['css?-autoprefixer', 'sass?outputStyle=expanded']),
		// stylus: generateLoaders(['css?-autoprefixer', 'stylus']),
		// styl: generateLoaders(['css?-autoprefixer', 'stylus']),
	}
}

// Generate loaders for standalone style files (outside of .vue)
exports.styleLoaders = function (options) {
	var output = []
	var loaders = exports.cssLoaders(options)
	for (var extension in loaders) {
		var loader = loaders[extension]
		output.push({
			test: new RegExp('\\.' + extension + '$'),
			loader: loader
		})
	}
	return output
}
