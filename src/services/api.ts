import axios from 'axios'

import Interceptors from '../configs/axiosInterceptors'

const api = axios.create({
  baseURL: `${process.env.API_URL}/api`
})

Interceptors(api)

export default api
