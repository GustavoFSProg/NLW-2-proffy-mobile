import axios from 'axios'

const api = axios.create({
  // baseURL: 'http://192.168.0.15:3333',

  baseURL: 'https://nlw2-proffy-api.herokuapp.com/',
})

export default api
