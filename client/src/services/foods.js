import api from "./apiConfig"

export const getAllFoods = async () => {
  const res = await api.get("/foods")
  return res.data
}

export const getOneFood = async (foodID) => {
  const res = await api.get(`/foods/${foodID}`)
  return res.data
}

export const deleteFood = async (foodID) => {
  await api.delete(`/foods/${foodID}`)
}

export const createFood = async (foodData) => {
  const res = await api.post("/foods", { food: foodData })
  return res.data
}

export const updateFood = async (foodData, foodID) => {
  const res = await api.put(`/foods/${foodID}`, { food: foodData })
  return res.data
}

export const addFlavorToFood = async (flavorData, foodID) => {
  const res = await api.put(`/foods/${foodID}/add_flavor`, {flavor: flavorData})
  return res.data
}
