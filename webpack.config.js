const path = require('path');
const DIST_DIR = path.resolve(__dirname, "./src/app.js")
const DIST_SRC = path.resolve(__dirname, "public")

module.exports = {
	entry: DIST_DIR,
	output: {
		path: DIST_SRC,
		filename: 'bundle.js',
		publicPath: "/"
	},
	module: {
		loaders: [
			{
				test: /\.js$/,
				loader: "babel-loader",
				query: {
					presets: ["es2015", "react", "stage-0"],
					plugins: ["transform-decorators-legacy"],

				}
			},
			{
				test: /\.(mp4)$/,
				loader: "url-loader?limit=8192",
				query: {
					presets: ["es2015", "react"]
				}
			},
			{
				test: /\.(jpe?g|png|gif|svg)$/i,
				loader: 'url?limit=10000!img?progressive=true'
			}
		]
	},
	devtool: "eval-source-map"
}
