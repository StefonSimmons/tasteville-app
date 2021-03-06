import { useState } from 'react'
import {useHistory} from 'react-router-dom'
import { createFood } from '../services/foods'

export default function CreateFood({user}) {

  const [formData, setFormData] = useState({
    name: '',
    user_id: ''
  })

  const history = useHistory()

  const handleChange = (e) => {
    const {value} = e.target
    setFormData({
      name: value,
      user_id: user.id
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    const newFood = await createFood(formData)
    history.push(`/foods/${newFood.id}`)
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
          disabled={!user}
          placeholder={!user && "must log in to add"}
        />
        
        <button disabled={!user} type="submit">Submit</button>
      </form>
    </div>
  )
}
