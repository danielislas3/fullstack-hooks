import React,{useState,useEffect} from 'react'
import axios from 'axios'

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
      
    </div>
  )
}
