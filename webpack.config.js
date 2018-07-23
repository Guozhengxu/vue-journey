module.exports={
    devtool:'eval-source-map',
    entry: __dirname + '/js/index.js',
    output: {
        path: __dirname + '/public',
        filename: 'bundle.js'
    },
    devServer:{
        contentBase:"./",
        inline:true,
        historyApiFallback:true
    }
}