const path = require('path');

module.exports = {
    entry: "./src/index.js",
    output: {
        path: path.join(__dirname, "dist/"),
        filename: "app.js",
        publicPath: "/dist/"
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                use: {
                    loader: "babel-loader"
                },
                exclude: /node_modules/
            }
        ]
    },
    devServer: {
        hot: true,
        overlay: true,
        port: 9000
    }
}