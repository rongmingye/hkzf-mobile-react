import http from '../config/http'

export default {
  getUserInfo(userId: string | number) {
    return http.get(`/user/${userId}`)
  },
} 