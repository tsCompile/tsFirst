let path = require('path');
let webpack = require('webpack');
let ExtractTextPlugin = require('extract-text-webpack-plugin');
module.exports = {
  entry: {
    app: "./src/index.ts"
  },
  output: {
    path: __dirname + "/dist",
    filename: "[name].bundle.js"
  },
  resolve: {
    extensions: [".ts",".tsx",".jsx",".js",".scss"],
    // alias: {
    //   SVG: path.resolve('./src/common/SVG'),
    //   Head: path.resolve('./src/common/head'),
    //   Foot: path.resolve('./src/common/foot'),
    // }
  },
  devtool: "source-map",
  // externals: {
  //   "react": "React",
  //   "react-dom": "ReactDOM",
  // },
  plugins:[
    new webpack.ProvidePlugin({
      React: '@types/react',
      ReactDom: '@types/react-dom',
      Route: '@types/react-router-dom'
    })
  ],
  module:{
    rules:[
      {
        test: /\.tsx?$/,
        loaders: ['babel-loader','awesome-typescript-loader']
      },
      {
        enforce: "pre",
        test: /\.js$/,
        loader: "source-map-loader"
      },
      {
          test: /\.svg$/,
          loader: 'svg-sprite-loader',
          options: {
              runtimeCompat: true,
          }
      },
      {
        test: /.scss$/,
        use: ExtractTextPlugin.extract({
            fallback: 'style-loader',
            use:[
                {loader: 'css-loader', options:{ sourceMap: true}},
                {loader: 'sass-loader', options: {sourceMap: true}},
            ]
        })
      }
    ]
  }
}
