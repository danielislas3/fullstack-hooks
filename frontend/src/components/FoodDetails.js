import React,{useEffect,useState}from 'react'
import axios from 'axios'


const FoodDetails = (props) => {

  const [food,setFood] = useState({})
  
  useEffect(()=>{
    
    axios.get(`http://localhost:3000/api/foods/${props.match.params.id}`)
    .then(({data})=>{
        setFood(prevState=>{
          return{
            ...prevState,
            ...data.food
          }
          
        })
    })
    .catch(err=>console.log)
  },[props])

  return (
    <div>
      <h2>{food.name}</h2>
      <p>{food.dishType}</p>
      <p>{food.flavor}</p>
      <p>{food.price}</p>
      <button onClick={()=>props.history.goBack()}>Go back</button>

    </div>
  )
}

export default FoodDetails
