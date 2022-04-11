const path = require('path');

module.exports = {

    entry : "./src/index.js",
    output : {
        path: path.join(__dirname,"build"),
        filename: "happy.js"
    },
    module : {
        rules : [
            {
                test : /\.css$/,
                use : [ "style-loader", "css-loader"]
            },
            {
                test: /\.(jpe?g|png|gif|svg)$/i, 
                use: [{
                    loader: 'file-loader',
                    options: {}
                }]
            }
        ]
    },
    mode: "development"
}