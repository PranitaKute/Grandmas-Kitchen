import React from 'react'
import './index.css'
import Navbar from './Components/Navbar/Navbar'
import Home from './Components/Home/Home'
import About from './Components/About/About'
import Recipes from './Components/Recipes/Recipes'

const App = () => {
  return (
    <div>
      <Navbar/>
      <Home/>
      <About/>
      {/* <h2>Recipes</h2> */}
      <Recipes/>
    </div>
  )
}

export default App
