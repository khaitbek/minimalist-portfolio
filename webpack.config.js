const path = require("path")
const CopyPlugin = require("copy-webpack-plugin")
const HtmlTemplatePlugin = require("html-webpack-plugin")
const MiniCssExtractPlugin = require("mini-css-extract-plugin")

module.exports = {
    mode: "production",
    entry: {
        index: [
            path.resolve(__dirname, "src/js/app.js"),
        ]
    },
    output: {
        path: path.resolve(__dirname, "dist"),
        clean: true,
        filename: "[name][fullhash].js",
        // assetModuleFilename: "[name][ext]",
        chunkFilename: "[id].[fullhash].js"
    },
    module: {
        rules: [
            {
                test: /\.scss$/,
                use: ["style-loader", "css-loader", "sass-loader"]
            },
            {
                test: /\.html$/,
                loader: "html-loader"
            }
        ]
    },
    plugins: [
        new HtmlTemplatePlugin({
            minify: true,
            filename: "index.html",
            template: path.resolve(__dirname, "src/views/index.html")
        }),
        new CopyPlugin({
            patterns: [
                { from: __dirname + "/src/views", to: __dirname + "/dist" }
            ]
        })
    ],
    devtool: "inline-source-map",
    devServer: {
        static: "./dist"
    },
    resolve: {
        extensions: [".js", ".html", ".scss"]
    },
    optimization: {
        runtimeChunk: "single"
    }
}