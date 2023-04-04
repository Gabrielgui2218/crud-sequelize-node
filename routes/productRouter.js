const productController = require('../controllers/productController')
const reviewController = require('../controllers/reviewController')

const router = require('express').Router()

router.post('/addProduct', productController.addProduct)

router.get('/products', productController.getAllProducts)

router.put('/products/:id', productController.updateProduct)

router.delete('/products/:id', productController.deleteProduct)

router.get('/getOneProduct/:id', productController.getOneProduct)

router.get('/produtosPublicados', productController.getPublishedProduct)

module.exports = router



