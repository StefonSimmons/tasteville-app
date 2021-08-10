import React, { useEffect, useState } from 'react'
import { getAllFlavors } from '../services/flavors'

export default function Flavors() {

  const [flavors, setFlavors] = useState([])
  
  useEffect(() => {
    const fetchFlavors = async () => {
      const flavors = await getAllFlavors()
      setFlavors(flavors)
    }
    fetchFlavors()
  }, [])

  return (
    <div>
      <h1>Flavors</h1>
      {flavors.map(flavor => {
        return (
          <p>{flavor.name}</p>
        )
      })}
    </div>
  )
}
