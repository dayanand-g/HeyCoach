// import controllers review, products
const controller = require('../controllers/hotelControllers.js')

// router
const router = require('express').Router()

// use routers
router.post('/add', controller.createR)
router.get('/read', controller.readR)
router.put('/update/:id', controller.updateR)
router.delete('/delete/:id', controller.deleteR)

module.exports = router

