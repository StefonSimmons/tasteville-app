import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { getAllFlavors } from '../services/flavors'
import { addFlavorToFood, getOneFood } from '../services/foods'

export default function FoodDetail() {

  const [food, setFood] = useState({})
  const [flavors, setFlavors] = useState([])
  const [formData, setFormData] = useState({
    name: ''
  })
  const { id } = useParams()

  useEffect(() => {
    const fetchFood = async () => {
      const food = await getOneFood(id)
      setFood(food)
    }
    fetchFood()
  }, [id])

  useEffect(() => {
    const fetchFlavors = async () => {
      const flavors = await getAllFlavors()
      setFlavors(flavors)
    }
    fetchFlavors()
  }, [])

  const handleChange = (e) => {
    const { value } = e.target
    setFormData({name: value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    const updatedFood = await addFlavorToFood(formData, food.id)
    setFood(updatedFood)
  }


  return (
    <section className="screen-section">
      <h1>{food.name}</h1>
      {food.flavors?.map(flavor => {
        return (
          <p key={flavor.id}>{flavor.name}</p>
        )
      })}
      <form onSubmit={(e) => handleSubmit(e)} className="food-detail-form">
        <select onChange={(e) => handleChange(e)} defaultValue="default">
          <option disabled value="default">Select Flavor</option>
          {flavors.map(flavor => {
            return (
              <option key={flavor.id} value={flavor.name}>{flavor.name}</option>
            )
          })}
        </select>
        <button type="submit">Submit</button>
      </form>
    </section>
  )
}
