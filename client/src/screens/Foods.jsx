import React, { Fragment, useEffect, useState } from 'react'
import { Link } from "react-router-dom"
import { getAllFoods, deleteFood } from '../services/foods'
import "./styles/foods.css"
export default function Foods({user}) {

  const [foods, setFoods] = useState([])

  useEffect(() => {
    const fetchFoods = async () => {
      const allFoods = await getAllFoods()
      setFoods(allFoods)
    }
    fetchFoods()
  }, [])

  const handleDelete = async (foodID) => {
    await deleteFood(foodID)
    setFoods(prevFoods => (
      prevFoods.filter(food => food.id !== foodID)
    ))
  }

  return (
    <section className="screen-section">
      <h1>Foods</h1>
      <div className="food-list">
        {foods.map(food => {
          return (
            <Fragment key={food.id}>
              <Link to={`/foods/${food.id}`} className="food-list-name"><p>{food.name}</p></Link>
              <Link to={`/foods/${food.id}/edit`}><button className="food-list-edit">edit</button></Link>
              <button disabled={!user} onClick={() => handleDelete(food.id)} className="food-list-delete">delete</button>
            </Fragment>
          )
        })}
      </div>
      <Link to="/create-food"><button>Add Food</button></Link>
    </section>
  )
}
