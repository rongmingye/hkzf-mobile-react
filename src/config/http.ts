import axios, {AxiosInstance, AxiosRequestConfig, AxiosResponse} from 'axios'
import { baseHeader } from './header'
import { showMessage, handleResponseCode } from './status'

const http: AxiosInstance = axios.create(baseHeader)

// 添加请求拦截器
http.interceptors.request.use((request: AxiosRequestConfig) => {
  return request 
})

// 添加响应拦截器
http.interceptors.response.use(
  (response: AxiosResponse) => {
    const res = response.data
    const code = res.status
    if (response.status !== 200) {
      showMessage(response.status)
      handleResponseCode(response.status)
    } 
    if (code) {
      if (code !== 200) {
        showMessage(code)
        handleResponseCode(code)
      }
    }
    return res;
  },
  error => {
    const code = error.response.status
    showMessage(code)
    handleResponseCode(code)
    return Promise.reject(error)
  });

export default http