const router = require('express').Router();
const {getAllFoods,getOneFood,createFood,updateFood,deleteFood} = require('../controllers/foods.controllers')

//REST API
//CREATE  FOOD
router.post('/foods',createFood)

//READ FOODS
router.get('/foods',getAllFoods)

//READ FOOD (detail)
router.get('/foods/:id',getOneFood)

//UPDATE FOOD
router.patch('/foods/:id',updateFood)

//DELETE FOOD
router.delete('/foods/:id',deleteFood)


module.exports = router;
