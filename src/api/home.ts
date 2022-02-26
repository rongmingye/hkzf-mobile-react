import http from '../config/http'

export default {
  getHomeSwiper() {
    return http.get(`home/swiper`)
  },
  getHomeGroups(params) {
    return http.get(`home/groups`, {params})
  },
  getHomeNews(params) {
    return http.get(`home/news`, {params})
  }
} 