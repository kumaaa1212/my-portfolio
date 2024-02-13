import axios from 'axios'

const createAxiosInstance = (baseURL: string) => {
  const apiClient = axios.create({
    baseURL: baseURL,
    headers: {
      'Content-Type': 'application/json',
    },
    paramsSerializer: { indexes: null },
  })
  return apiClient
}

export const apiClient = createAxiosInstance('http://localhost:3333')
