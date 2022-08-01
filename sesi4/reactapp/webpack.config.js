const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    entry: path.join(__dirname, "src", "index.jsx"),
    output: { path: path.join(__dirname, "build"), __filename: "index.bundle.js"},
    mode: process.env.NODE_ENV || "development",
    resolve: {module: [path.resolve(__dirname, "src"), "node_modules"]},
    devServer: { static:path.join(__dirname, "src")},
    modulel: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: ["bable-loader"]
            },
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.join(__dirname, "src", "index.html"),
        }),
    ],
};