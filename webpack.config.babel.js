import path from 'path'
import ExtractTextPlugin from 'extract-text-webpack-plugin'

const extractSass = new ExtractTextPlugin({
    filename: 'style/bundle.css',
    disable: process.env.NODE_ENV === 'development'

})

const rules = {
  imagem:{
    test:/\.(png|jpg|gif|svg)$/,
    loader: 'file-loader',
    options: {
      name: '[name].[ext]?[hash]'
    }
  },
  vue:{
    test:/\.vue$/,
    loader: 'vue-loader',
    exclude: /(node_modules)/
  },
  sass: {
    test:/\.css$/,
    use:extractSass.extract({
      use:[
        {
          loader: 'css-loader'

        },
        {
          loader: 'sass-loader'

        }

      ],
      fallback: 'style-loader'
    })
  },
  fonts: {
    test: /\.(ttf|otf|eot|svg|woff(2)?)(\?[a-z0-9]+)?$/,
        loader: 'file-loader?name=fonts/[name].[ext]'


  },
  jsTranspile: {
        test: /\.js$/,
    exclude: /(node_modules|bower_components)/,
    use: {
            loader: 'babel-loader',
      options: {
                babelrc: false,
                presets: ['es2015', 'stage-0']

      }

    }

  }
}

module.exports = {
  entry: "./src/main.js",
  output: {
    path:path.resolve( __dirname,'dist'),
    filename: "bundle.js",
    library:['VueMqtt']
  },
  module: {
    rules: [
      rules.imagem,
      rules.vue,
      rules.sass,
      rules.jsTranspile
    ]
  },
  plugins: [
    extractSass
  ]

}
