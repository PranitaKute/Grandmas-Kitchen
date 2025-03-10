import React from 'react'
import './About.css'
import about_img from "../../Assets/about.png"

const About = () => {
  return (
    <div className='about'>
      <div className="about-left">
        <img src= {about_img} alt="" className='about_img'/>
      </div>
      <div className="about-right">
        <h2>ABOUT GRANDMA'S KITCHEN</h2>
        <h1>Bringing Tradition to Your Table</h1>
        <p>Welcome to Grandma’s Kitchen, where every meal is more than just food—it’s a 
            heartfelt experience. Rooted in tradition, our kitchen is a tribute to the 
            warmth, love, and authenticity of home-cooked meals. Here, we celebrate the 
            art of slow cooking, where every ingredient is carefully chosen, and every recipe 
            is crafted with generations of love and wisdom.</p> 
        <p>At Grandma’s Kitchen, we believe that the best dishes are the ones that bring people 
            together, creating lasting memories around the table. Our meals are inspired by 
            timeless recipes passed down through the ages, each infused with care, passion, and 
            a touch of nostalgia. Whether it's the aroma of freshly baked bread, the comforting 
            taste of a hearty stew, or the joy of sharing a home-cooked dessert, every bite carries 
            the essence of tradition and family.</p> 
        <p>We take pride in using only the finest ingredients, ensuring that every dish not only 
            satisfies your taste buds but also nourishes your soul. From classic comfort foods to 
            forgotten culinary treasures, we embrace the beauty of homemade cooking while keeping 
            flavors rich, textures perfect, and experiences unforgettable. Our mission is to 
            preserve the legacy of home kitchens, bringing the warmth of Grandma’s love to every 
            plate we serve.</p> 
        <p>Whether you're here to relive childhood memories, explore time-honored flavors, or simply 
            enjoy a wholesome meal, Grandma’s Kitchen is a place where food tells a story, hearts are 
            full, and love is always the main ingredient. Come join us at our table, where every dish 
            is made with care, every recipe is a tradition, and every meal feels just like home.</p>
        <h2>The secret ingredient is always love!!..❤️</h2>
        
      </div>
    </div>
  )
}

export default About
