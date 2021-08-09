import api from "./apiConfig"

export const getAllFoods = async () => {
  const res = await api.get("/foods")
  return res.data
}

export const getOneFood = async (foodID) => {
  const res = await api.get(`/foods/${foodID}`)
  return res.data
}