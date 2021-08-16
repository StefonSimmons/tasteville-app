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
    <section className="screen-section">
      <h1>Flavors</h1>
      {flavors.map(flavor => {
        return (
          <p key={flavor.id}>{flavor.name}</p>
        )
      })}
    </section>
  )
}
