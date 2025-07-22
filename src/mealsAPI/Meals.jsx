import React from 'react'
import './Meals.css'
import axios from 'axios'
import { useState,useEffect } from 'react'

const Meals = () => {

   const[recipe,setRecipe] =useState([]);

   useEffect(()=> {
        axios.get('https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood')
        .then((response)=>{
            console.log(response.data.meals);
            setRecipe(response.data.meals)
        })
        .catch((err)=>{
            console.log(err)
        })

   },[])

   const recipeList = recipe.map(({strMeal,strMealThumb,idMeal}) => {
    return(
        <section className="card">
            <img src={strMealThumb} alt={strMeal} />
            <div className="content">
                <p>{strMeal}</p>
                <p>#{idMeal}</p>
            </div>
        </section>
    )
   })
  return (
    <div className='items-container'>
        {recipeList}
    </div>
  )
}

export default Meals