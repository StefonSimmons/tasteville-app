import React from 'react'

export default function Register({handleSubmit, setFormData, formData}) {


  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prevFormData => (
      {
        ...prevFormData,
        [name]: value
      }
    ))
  }


  return (
    <div>
      <h1>Register</h1>
      <form onSubmit={(e) => handleSubmit(e)}>
        <label htmlFor="">username</label>
        <input
          onChange={(e) => handleChange(e)}
          type="text"
          name="username"
          value={formData.username}
        />
        <label htmlFor="">email</label>
        <input
          onChange={(e) => handleChange(e)}
          type="text"
          name="email"
          value={formData.email}
        />
        <label htmlFor="">password</label>
        <input
          onChange={(e) => handleChange(e)}
          type="password"
          name="password"
          value={formData.password}
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  )
}
