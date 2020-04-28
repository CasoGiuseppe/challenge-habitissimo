var path = require('path')

module.exports = {
  css: {
    
    loaderOptions: {
      sass: {
        sassOptions: {
          includePaths: [
            path.resolve(__dirname, 'src/')
          ],
          indentedSyntax: true,
        },
        prependData: `@import '~@/styles/index.scss';`
      }
    }
  }
}
