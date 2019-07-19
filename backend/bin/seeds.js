const mongoose = require('mongoose')
const Food = require ('../models/Food')

const foods =[
  {
    name: 'Pizza',
    dishType:'Fast food',
    flavor:'Cheezy',
    price:100
  },
  {
    name: 'Tlayudas',
    dishType:'Mexican food',
    flavor:'Cheezy',
    price:100
  },
  
  {
    name: 'Amvorgueza',
    dishType:'Fast food',
    flavor:'Greasyy',
    price:40
  },
  {
    name: 'Gyro',
    dishType:'Greek food',
    flavor:'Fresh',
    price:60
  },
  {
    name: 'Chilakillres',
    dishType:'Mexican food',
    flavor:'Spicy',
    price:60
  },
  {
    name: 'Lentejas',
    dishType:'Soup',
    flavor:'Comfort food',
    price:0
  },
  {
    name: 'Tacos de canasta',
    dishType:'Mexican food',
    flavor:'Greasy',
    price:3
  },
  {
    name: 'Pancita',
    dishType:'Mexican food',
    flavor:'Chewy',
    price:99
  },
  {
    name: 'Barbacoa c/Cerveza',
    dishType:'Mexican food',
    flavor:'Greasy!!',
    price:200
  },
  
  {
    name: 'Fettuccini',
    dishType:'Italian food',
    flavor:'Creamy!!',
    price:150
  },
  
  {
    name: 'Panuchos',
    dishType:'Mexican food',
    flavor:'Greasy!!',
    price:45
  },
  {
    name: 'shepards pie',
    dishType:'American food',
    flavor:'Buttery',
    price:300
  },
  {
    name: 'Jamon Iberico',
    dishType:'Spain food',
    flavor:'Godly',
    price:200
  },
  
  {
    name: 'Carnitas',
    dishType:'Mexican food',
    flavor:'Porky',
    price:20
  },
  
  {
    name: 'Pozole',
    dishType:'Mexican food',
    flavor:'Porky',
    price:100
  },
  {
    name: 'Brownie',
    dishType:'Dessert',
    flavor:'Sweet',
    price:50
  },
  {
    name: 'Tacos de tripa gorda, son albur',
    dishType:'Mexican Food',
    flavor:'Heavenly',
    price:15
  },

]

mongoose.connect('mongodb://localhost/backend')
.then(async ()=>{
  const results = await Food.create(foods)
  console.log(`${results.length} foods created`)
  mongoose.connection.close()
})
.catch(err=>console.log)