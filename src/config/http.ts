import axios from 'axios'
import { baseHeader } from './header'

const http = axios.create(baseHeader)

// 添加请求拦截器
http.interceptors.request.use(config => {
  return config
})

// 添加响应拦截器
http.interceptors.response.use(
  (response: AxiosResponse) => {
    const res = response.data
    const code = res.status
    if (code) {
      switch (code) {
        case 401:
          // 认证失败，请重新登录！
          break;
      }
    }
    return res;
  },
  error => {
    if (error.response) {
      switch (error.response.status) {
        case 401:
          break
      }
    }
    return Promise.reject(error)
  });

export default http