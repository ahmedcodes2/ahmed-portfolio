const path = require('path')

exports.onCreateWebpackConfig = ({ stage, actions }) => {
  actions.setWebpackConfig({
    resolve: {
     alias: {
        '@fonts': path.resolve(__dirname, 'src/fonts')
     }
    },
  })
}