import axios from 'axios'

const http = axios.create()

// 添加响应拦截器
http.interceptors.response.use(
  response => {
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