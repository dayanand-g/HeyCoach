const db = require('../models')

// create main Model
const Product = db.hotels


// 1. --- create ---

const createR = async (req, res) => {
    let info = {
        name: req.body.name,
        address: req.body.address,
        contact: req.body.contact,
    }
    const product = await Product.create(info)
    res.status(200).send(product)
    console.log(product)
    // try {
    //     const product = await Product.create(req.body)
    //     return res.json(product)
    // } catch (error) {
    //     return res.json(error)
    // }
}


// 2.  --- Read ---

const readR = async (req, res) => {
    let products = await Product.findAll({})
    res.status(200).send(products)
}


// 3.  -- update --

const updateR = async (req, res) => {
    let id = req.params.id
    const product = await Product.update(req.body, { where: { id: id }})
    res.status(200).send(product)
}


// 4. -- Delete --

const deleteR = async (req, res) => {
    let id = req.params.id
    await Product.destroy({ where: { id: id }} )
    res.status(200).send('Resturant of heycoach is deleted !')
}

module.exports = {
    createR,
    readR,
    updateR,
    deleteR
}