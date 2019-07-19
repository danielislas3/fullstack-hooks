import React,{useState,useEffect} from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'

export default function Foods() {
  const [foods,setFoots]= useState([])

  useEffect(()=>{
    axios.get('http://localhost:3000/api/foods')
    .then(({data})=>{
      setFoots(prevState=>{
        return [
          ...prevState,
          ...data.foods
        ]
      })
    })
    .catch(err=>{
      console.log(err);
      
    })
  },[])

  console.log(foods)
  return (
    <div>
      <h2>Iron Foods</h2>
      {
        foods.map(food=>{
          return(
            <div key={food.id}> 
              <p>{food.name}</p>
              <Link to={`/foods/${food.id}`}>

                <button>See details</button>
              </Link>
            </div> 

          )
        })


      }
    </div>
  )
}
