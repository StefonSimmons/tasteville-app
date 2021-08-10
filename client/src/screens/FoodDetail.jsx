import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { getOneFood } from '../services/foods'

export default function FoodDetail() {

  const [food, setFood] = useState({})

  const { id } = useParams()

  useEffect(() => {
    const fetchFood = async () => {
      const food = await getOneFood(id)
      setFood(food)
    }
    fetchFood()
  }, [])

  return (
    <div>
      <h1>{food.name}</h1>
      {food.flavors?.map(flavor => {
        return (
          <p>{flavor.name}</p>
        )
      }) }
    </div>
  )
}
