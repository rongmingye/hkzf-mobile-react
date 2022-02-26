<<<<<<< HEAD
import Api from '../utils/api'
=======
import api from '../api'
>>>>>>> feat-ts

/**
 * 获取当前定位城市s
 * @returns 
 */
export async function getCurrentCity() {
  let localCity = localStorage.localCity ? JSON.parse(localStorage.localCity) : '';

  if (!localCity) {
    // 百度地图api 获取当前位置 
    if (window.BMapGL) {
      const localCity = new window.BMapGL.LocalCity()
      return new Promise((resolve, reject) => {
        try {
          localCity.get(async res => {
<<<<<<< HEAD
            const result = await Api.get(`http://localhost:8080/area/info?name=${res.name}`)
            localStorage.setItem('localCity', JSON.stringify(result.data.body))
            resolve(result.data.body)
=======
            const result = await api.getAreaInfo(res.name)
            localStorage.setItem('localCity', JSON.stringify(result.body))
            resolve(result.body)
>>>>>>> feat-ts
          })
        } catch (error) {
          reject(error)
        }
      })
    }
    localCity = {label: '广州', value: '1111'}
    localStorage.setItem('localCity', JSON.stringify(localCity))
    return Promise.resolve(localCity)
  } 
  return Promise.resolve(localCity)
}