import api from "./apiConfig"

export const register = async (userData) =>{
  const res = await api.post("/users", {user: userData})
  return res.data
}