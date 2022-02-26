import http from '../config/http'

export default {
  getHouses(id: string | number) {
    return http.get(`houses?cityId=${id}`)
  }
} 