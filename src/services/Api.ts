import axios from 'axios'

const apiKey = import.meta.env.VITE_API_KEY
const baseURL = import.meta.env.PROD ? import.meta.env.VITE_API_URL : '/api'

const api = axios.create({
  baseURL,
  headers: {
    'X-Auth-Token': apiKey,
  },
})

export default api
