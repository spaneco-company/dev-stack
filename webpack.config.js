const path = require("path");
const { VueLoaderPlugin } = require('vue-loader');

// This is main configuration object.
// Here you write different options and tell Webpack what to do
module.exports = {
	resolve: {
		alias: {
			'vue$': 'vue/dist/vue.esm-bundler.js',
			jquery: "jquery/src/jquery"
		}
	},
	// This will ensure that we have map file
	// devtool: 'source-map',
	// Path to your entry point. From this file Webpack will begin his work
	entry: {
		vendor: __dirname + "/assets/js/src/vendor.js",
		main: __dirname + "/assets/js/src/main.js",
	},
	// Path and filename of your result bundle.
	// Webpack will bundle all JavaScript into this file
	output: {
		path: path.join(__dirname, "assets/js/dist"),
		filename: "[name].js",
	},
	module: {
		rules: [
			{
				test: /\.js$/,
				exclude: /node_modules/,
				use: {
					loader: 'babel-loader',
					options: {
						presets: [
							'@babel/preset-env'
						]
					}
				}
			},
			{
				test: /\.s[ac]ss$/i,
				use: [
					'vue-style-loader',
					'css-loader',
					"sass-loader",
				]
			},
			{
				test: /\.vue$/,
				loader: 'vue-loader',
				options: {
					compilerOptions: {
						isCustomElement: (tag) => ['iron-dropdown'].includes(tag),
					},
				},
			},
		]
	},
	plugins: [
		new VueLoaderPlugin(),
	],

	// Default mode for Webpack is production.
	// Depending on mode Webpack will apply different things
	// on final bundle. For now we don't need production's JavaScript
	// minifying and other thing so let's set mode to development
	// mode: 'development'
	watchOptions: {
		aggregateTimeout: 200,
		poll: 1000
	}
};