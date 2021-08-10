import React, { useEffect, useState } from 'react'
import { Link } from "react-router-dom"
import { getAllFoods, deleteFood } from '../services/foods'

export default function Foods() {

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
    <div>
      <h1>Foods</h1>
      {foods.map(food => {
        return (
          <section key={food.id}>
            <p>{food.name}</p>
            <Link to={`/foods/${food.id}/edit`}><button>edit</button></Link>
            <button onClick={() => handleDelete(food.id)}>delete</button>
          </section>
        )
      })}
      <Link to="/foods/create"><button>Add Food</button></Link>
    </div>
  )
}
