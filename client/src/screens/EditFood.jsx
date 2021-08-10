import { useEffect, useState } from 'react'
import { useHistory, useParams } from 'react-router-dom'
import { getOneFood, updateFood } from '../services/foods'

export default function EditFood({user}) {

  const [formData, setFormData] = useState({
    name: '',
    user_id: ''
  })

  const history = useHistory()

  const { id } = useParams()

  useEffect(() => {
    const fetchFood = async () => {
      const food = await getOneFood(id)
      setFormData({
        name: food.name,
        user_id: food.user_id
      })
    }
    fetchFood()
  }, [])

  const handleChange = (e) => {
    const { value } = e.target
    setFormData({
      name: value,
      user_id: user?.id
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    const updatedFood = await updateFood(formData, id)
    history.push(`/foods/${updatedFood.id}`)
  }

  return (
    <div>
      <h1>Edit Food</h1>
      <form onSubmit={(e) => handleSubmit(e)}>
        <label htmlFor="name">name:</label>
        <input
          onChange={(e) => handleChange(e)}
          id="name"
          type="text"
          value={formData.name}
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  )
}
