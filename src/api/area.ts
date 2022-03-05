import http from '../config/http'

export default {
  // 根据城市层级获取城市列表
  getCity<T>(params: {level: string | number}) {
    return http.get<T>(`area/city?level=${params.level}`)
  },
  getHotCity<T>() {
    return http.get(`area/hot`)
  },
  getAreaMap<T>(id: string | number) {
    return http.get<T>(`area/map?id=${id}`)
  },
  getAreaInfo<T>(name: string) {
    return http.get<T>(`area/info?name=${name}`)
  }
} 