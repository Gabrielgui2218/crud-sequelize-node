const db = require('../models')

const Product = db.products
const Review = db.review

// Cria produto

const addProduct = async (req, res) => {
    let info = {
        title: req.body.title,
        price: req.body.price,
        description: req.body.description,
        published: req.body.published ? req.body.published: false
    }

    const product = await Product.create(info)
    res.status(200).send(product)
}

const getAllProducts = async (req, res) => {
    let products = await Product.findAll({})
    res.status(200).send(products)
}

const getOneProduct = async( req, res) => {
    let id = req.params.id
    let products = await Product.findOne({ where: {id: id}})
    console.log(products);
}

const updateProduct = async( req, res) => {
    let id = req.params.id
    
    const product = await Product.update(req.body, {where : { id: id }})

    res.status(200).send(product)
}

const deleteProduct = async (req, res) => {
    let id = req.params.id

    await Product.destroy({ where: {id : id}})

    res.status(200).send(`produto com the id = ${id} foi deletado`)
}

const getPublishedProduct = async(req, res) => {

    const products = await Product.findAll({where: { published: true}})

    res.status(200).send(products)
}
module.exports = {
    addProduct,
    getAllProducts,
    updateProduct,
    deleteProduct,
    getOneProduct,
    getPublishedProduct
}

