const path = require('path')

module.exports = () => ({
  resolve: {
    alias: {
      './html/ProductCard.html': path.resolve(__dirname, 'template/js/custom-js/html/ProductCard.html'),
      './html/TheProduct.html': path.resolve(__dirname, 'template/js/custom-js/html/TheProduct.html')
    }
  }
})