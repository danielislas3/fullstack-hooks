import React from 'react'
import {Link} from 'react-router-dom'

const Home = () => {
  return (
    <div className="home">
      <img src="https://i.ytimg.com/vi/qG6s6Bk3nMU/maxresdefault.jpg" alt="logo"/>
      <h1>IronFoods</h1>
      <Link to="/foods">
      <button>See all the foods</button>
      </Link>
    </div>
  )
}

export default Home
