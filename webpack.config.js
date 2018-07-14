module.exports = {
	entry: "./src/app.js",
	output: {
		filename: 'public/bundle.js',
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
