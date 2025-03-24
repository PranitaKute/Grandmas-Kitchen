import React from 'react'
import './Recipes.css'
import recipes_1 from '../../Assets/recipes-1.png'
import recipes_2 from '../../Assets/recipes-2.png'
import recipes_3 from '../../Assets/recipe-3.png'

const Recipes = () => {
  return (
    <div className='Recipes'>
      <h2>EVERYONE'S FAVOURITE</h2>
      <h1>Recipes Liked By Everyone In The Family</h1>
        <div className="Card">
            <img src={recipes_1} alt='cheese cake'></img>
            <h2>Cheese Cake</h2>
            <p>The rich, creamy, and irresistibly smooth, our classic cheesecake sits on a buttery crust, making every bite pure bliss!</p>
        </div>

        <div className="Card">
            <img src={recipes_2} alt='cheese cake'></img>
            <h2>Sandwiches</h2>
            <p>Fresh, flavorful, and perfectly layered—our sandwiches are packed with delicious ingredients, making every bite a satisfying delight!</p>
        </div>

        <div className="Card">
            <img src={recipes_3} alt='cheese cake'></img>
            <h2>Salad</h2>
            <p>The crisp, fresh, and bursting with flavor—our salads are a perfect blend of greens, veggies, and zesty dressings for a healthy delight!</p>
        </div>

        <div className="Card">
            <img src={recipes_3} alt='cheese cake'></img>
            <h2>Salad</h2>
            <p>The crisp, fresh, and bursting with flavor—our salads are a perfect blend of greens, veggies, and zesty dressings for a healthy delight!</p>
        </div>
         
    </div>
  )
}

export default Recipes
