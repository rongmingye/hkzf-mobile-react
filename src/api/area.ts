import http from '../config/http'

export default {
  // 根据城市层级获取城市列表
  getCity(params: {level: string | number}) {
    return http.get(`area/city?level=${params.level}`)
  },
  getHotCity() {
    return http.get(`area/hot`)
  },
  getAreaMap(id) {
    return http.get(`area/map?id=${id}`)
  },
  getAreaInfo(name: string) {
    return http.get(`area/info?name=${name}`)
  }
  
} 