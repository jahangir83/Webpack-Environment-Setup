path = require('path');
const  {CleanWebpackPlugin}  = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const htmlWebpackPlugin = require('html-webpack-plugin');
 

module.exports = {
  mode: "development",
    entry: {
       app: './src/index.js',
       vendor: ['jquery','lodash']
          
    },
  
    output: {
        path: path.resolve(__dirname, 'jahangir'),
        filename: '[name].js'
 },
 optimization: {
    splitChunks: {
        chunks: 'all'
    }
 },
    devServer:{
        contentBase: './jahangir',
        compress: true
    },
     //devtool:'source-map',
  
    module: {
        rules: [
            {
                test: /\.js$/,
                use: "babel-loader",
                exclude: /node_modules/
                
            },
             
            {
                test: /\.css$/,
                exclude: /node_modules/,
                use: [
                   {
                      loader: MiniCssExtractPlugin.loader,
                   },
                   "css-loader"
                ]
            },
            {
                test: /\.(gif|png|jpe?g|jpg|svg)$/i,
                use:[
                     {
                         loader: 'file-loader',
                         options: {
                             outputPath: 'images',
                             limit: 500
                            
                         }
                     },
                     'image-webpack-loader'
                ]
            }
        ]
        
    
    },
    plugins: [ new MiniCssExtractPlugin({
        filename: 'jahangir.css'}),
    new htmlWebpackPlugin({
        template: './src/index.html'
    }),
new CleanWebpackPlugin()

]
}


















 