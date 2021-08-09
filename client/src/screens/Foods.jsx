import React, { useEffect, useState } from 'react'
import { getAllFoods } from '../services/foods'

export default function Foods() {

  const [foods, setFoods] = useState([])

  useEffect(() => {
    const fetchFoods = async () => {
      const allFoods = await getAllFoods()
      setFoods(allFoods)
    }
    fetchFoods()
  },[])

  return (
    <div>
      {foods.map(food => {
        return (
          <p key={food.id}>{food.name}</p>
        )
      })}
    </div>
  )
}
