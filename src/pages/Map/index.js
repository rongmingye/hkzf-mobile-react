import axios from 'axios'
import { useState, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import NavHeader from '../../components/NavHeader'
import { getCurrentCity } from '../../utils'
import HouseItem from '../../components/HouseItem'
import { BASE_URL } from '../../utils/url'

import './index.scss'
import { Toast } from 'antd-mobile'

// 覆盖物样式
const labelStyle = {
  cursor: 'pointer',
  border: '0px solid rgb(255, 0, 0)',
  padding: '0px',
  whiteSpace: 'nowrap',
  fontSize: '12px',
  color: 'rgb(255, 255, 255)',
  textAlign: 'center'
}

export default function Map() {

  let map = ''
  const navigate = useNavigate()
  const [houseList, setHouseList] = useState([])
  const [isShowList, setIsShowList] = useState(false)

  useEffect(() => {
    initMap()
  }, [])

   // 初始化地图
  const initMap = async () => {
    const {label, value} = await getCurrentCity()

    map = new window.BMapGL.Map("container")

    // 根据城市名字解析为坐标
    const myGeo = new window.BMapGL.Geocoder()
    myGeo.getPoint(label, function(point){
      if(point){
        // 初始化地图
          map.centerAndZoom(point, 11)
          // 添加常用控件
          map.addControl(new window.BMapGL.ScaleControl()) // 缩放控件
          map.addControl(new window.BMapGL.ZoomControl()) // 平移控件

          // 添加文本覆盖物到地图中
          // map.addOverlay(createCircle(point, '文本覆盖物', 10))
          renderOverlays(value)
      }
    }, label)

    map.addEventListener('movestart', (e) => {
        setIsShowList(false)
    })
  }

  // 渲染覆盖物入口
  // 1 接收区域id, 获取该区域下的房源数据
  // 2 获取房源类型以及缩放级别
  const renderOverlays = async (id) => {
    try {
      Toast.loading('加载中...', 0, null, false)
      const res = await axios.get(`http://localhost:8080/area/map?id=${id}`)
      Toast.hide()
      const { nextZoom, type } = getTypeAndZoom()
      res.data.body.forEach(item => {
        const label = createOverlays(item, nextZoom, type)
        map.addOverlay(label)
      })
    } catch (error) {
      Toast.hide()
    }
  }

  // 计算类型和缩放级别
  const getTypeAndZoom = () => {
    const zoom = map.getZoom()
    let type, nextZoom
    if(zoom >= 10 && zoom < 12) {
      // 区
      type = 'circle'
      nextZoom = 13
    } else if (zoom >= 12 && zoom < 14) {
      // 镇
      type = 'circle'
      nextZoom = 15
    } else if (zoom >= 14 && zoom < 16) {
      // 小区
      type = 'rect'
      nextZoom = 15
    }

    return { type, nextZoom }
  }

  // 创建覆盖物，中转
  const createOverlays = (data, nextZoom, type) => {
    const point = new window.BMapGL.Point(data.coord.longitude, data.coord.latitude)
    if(type === 'circle') {
      return createCircle(point, data.label, data.count, data.value, nextZoom)
    } else if(type === 'rect') {
      return createRect(point, data.label, data.count, data.value)
    }
  } 

  // 小区覆盖物，
  // 点击：移动地图，渲染房屋列表，不清除覆盖物
  const createRect = (point, name, count, value) => {
    const opts = {
      position: point,
      offset: new window.BMapGL.Size(-50, -20)
    }

     // 设置房源覆盖物
    const content = 
     `<div class="rect">
       <p class="housename">${name}</p>
       <p class="housenum">${count}</p>
       <i class="arrow"></i>
     </div>`
     
    // 创建实例
    const label = new window.BMapGL.Label(content, opts)
   
    // 设置样式
    label.setStyle(labelStyle)

    // 添加监听事件
    label.addEventListener("click", (e) => {   
      getHousesList(value)

      // 设置中心点, 调用地图panBy
      const target = e.domEvent.changedTouches[0]
      map.panBy(window.innerWidth / 2 - target.clientX, 
        (window.innerHeight - 330) / 2 - target.clientY)
    })

    return label
  }

  // 获取小区房源数据
  const getHousesList = async (id) => {
    try {
      Toast.loading('加载中...', 0, null, false)
      const res = await axios.get(`http://localhost:8080/houses?cityId=${id}`) 
      Toast.hide()
      setHouseList(res.data.body.list)
      setIsShowList(true)
    } catch (error) {
      Toast.hide()
    }
  }

  // 区域覆盖物，区/镇
  // 点击：获取下一级数据，清除覆盖物
  const createCircle = (point, name, count, value, nextZoom) => {
    const opts = {
      position: point,
      offset: new window.BMapGL.Size(-35, -35)
    }

     // 设置房源覆盖物
    const content = 
     `<div class="bubble">
       <p class="name">${name}</p>
       <p class="count">${count}</p>
     </div>`
     
    // 创建实例
    const label = new window.BMapGL.Label(content, opts)
   
    // 设置样式
    label.setStyle(labelStyle)

    // 添加监听事件
    label.addEventListener("click", function() {  
      renderOverlays(value) // 获取下一级的数据
      map.centerAndZoom(point, nextZoom)  // 放大地图

      // 清楚覆盖物，定时器解决报错问题
      setTimeout(()=> {
        map.clearOverlays()
      }, 0)
    })

    return label
  }

  // 封装渲染房屋列表的方法
  const renderHousesList = () => {
    return houseList.map(item => (
      <HouseItem
        onClick={() => navigate(`/detail/${item.houseCode}`)}
        key={item.houseCode}
        src={BASE_URL + item.houseImg}
        title={item.title}
        desc={item.desc}
        tags={item.tags}
        price={item.price}
      />
    ))
  }

  return (
    <div className='map nav-page'>
       <NavHeader>地图找房</NavHeader>
      <div id="container" className='page-content'></div>

      {/* 房源列表 */}
      <div
          className={[
            'houseList', isShowList ? 'show' : ''
          ].join(' ')}
        >
          <div className='titleWrap'>
            <h1 className='listTitle'>房屋列表</h1>
            <Link className='titleMore' to="/home/list">
              更多房源
            </Link>
          </div>

          <div className='houseItems'>
            {/* 房屋结构 */}
            {renderHousesList()}
          </div>
        </div>
    </div>
  )
}