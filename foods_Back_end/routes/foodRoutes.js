const express = require('express')
const router = express.Router()
const {save,findAll,forUserCard,findFoodOfMounth,findOne} =require('../services/foodService')

router.post('/save',save)
router.get('/all',findAll)
router.get('/item/:id',findOne)
/* router.post('/save',save)
router.post('/save',save) */
module.exports = router