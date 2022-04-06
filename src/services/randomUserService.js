import axios from "axios"

export const randomUserService = {
  getAll: async () => {
    const { data } = await axios.get('https://randomuser.me/api?results=7'); 
    return data;
  },

  save: (user) => localStorage.setItem('colab.user', JSON.stringify(user)),

  getUser: async () => {
    const userStorage = localStorage.getItem('colab.user');
    
    if (userStorage) return JSON.parse(userStorage);

    const { data } = await axios.get('https://randomuser.me/api');
    return data.results[0];
  }
}
