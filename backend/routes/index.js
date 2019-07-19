const router = require('express').Router();

//REST API
//CREATE  FOOD
router.post('/foods')

//READ FOODS
router.get('/foods')

//READ FOOD (detail)
router.get('/foods/:id')

//UPDATE FOOD
router.patch('/foods/:id')

//DELETE FOOD
router.delete('/foods/:id')


module.exports = router;
