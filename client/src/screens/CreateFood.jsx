import { useState } from 'react'
import {useHistory} from 'react-router-dom'
import { createFood } from '../services/foods'

export default function CreateFood() {

  const [formData, setFormData] = useState({
    name: '',
    user_id: ''
  })

  const history = useHistory()

  const handleChange = (e) => {
    const {value} = e.target
    setFormData({
      name: value,
      user_id: 3
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    const newFood = await createFood(formData)
    history.push('/foods')
  }


  return (
    <div>
      <h1>Add Food</h1>
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
