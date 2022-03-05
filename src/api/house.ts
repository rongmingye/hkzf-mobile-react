import http from '../config/http'

export default {
  getHouses<T>(id: string | number) {
    return http.get<T>(`houses?cityId=${id}`)
  }
} 