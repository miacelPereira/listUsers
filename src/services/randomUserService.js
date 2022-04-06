import axios from "axios"

export const randomUserService = {
  getAll: async () => {
    const { data } = await axios.get('https://randomuser.me/api?results=7'); 
    return data;
  }
}
