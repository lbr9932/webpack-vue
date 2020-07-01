const path                   = require("path");
const HtmlWebPackPlugin      = require("html-webpack-plugin");
const MiniCssExtracktPlugin  = require("mini-css-extract-plugin");
const {CleanWebpackPlugin}   = require("clean-webpack-plugin");
const {VueLoaderPlugin}      = require("vue-loader");

module.exports = {
	entry: "./src/index.js",
	output :{
		filename : "main.js",
		path : path.resolve(__dirname + "/dist")
	},
	devServer : {
		contentBase : path.resolve("./dist"),
		index : "index.html",
		port:9000
	},
	mode : "none",
	module : {
		rules : [
			{
				test : /\.(js|jsx)$/,
				exclude:"/node_modules",
				use:['babel-loader'],
			},
			{
				test : /\.html$/,
				use : [
					{
						loader : "html-loader",
						options:{minimize: false}
					}
				]
			},
			{
				test: /\.css$/,
				use: [MiniCssExtracktPlugin.loader , "css-loader"]
			},
			{
				test: /\.scss$/,
				use: [MiniCssExtracktPlugin.loader , "css-loader", "sass-loader"]
            },
            {
                test: /\.vue$/,
                loader: "vue-loader"
            }
		]
    },
    resolve: {
        alias: {
            "vue$": "vue/dist/vue.esm.js"
        },
        extensions: ['*', '.js', '.vue', '.json']
    },
	plugins : [
		new HtmlWebPackPlugin({
			template : './public/index.html', 
			filename : 'index.html'
		}),
		new MiniCssExtracktPlugin({
			filename : 'style-test.css'
		}),
        new CleanWebpackPlugin(),
        new VueLoaderPlugin()
	]
};