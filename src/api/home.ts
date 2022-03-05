import http from '../config/http'

export default {
  getHomeSwiper<T>() {
    return http.get<T>(`home/swiper`)
  },
  getHomeGroups<T>(params: HomeGroupsParams) {
    return http.get<T>(`home/groups`, {params})
  },
  getHomeNews<T>(params: HomeNewsParams) {
    return http.get<T>(`home/news`, {params})
  }
} 