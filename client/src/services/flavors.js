import api from "./apiConfig"


export const getAllFlavors = async () => {
  const res =  await api.get("/flavors")
  return res.data
}