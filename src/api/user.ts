import http from '../config/http'

export default {
  getUserInfo<T>(userId: string | number) {
    return http.get<T>(`/user/${userId}`)
  },
} 