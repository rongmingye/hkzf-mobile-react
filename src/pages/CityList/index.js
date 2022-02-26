import { useState, useEffect, useRef } from 'react'
import api from '../../api'
import { useNavigate } from 'react-router-dom'
import { Toast } from 'antd-mobile'
import { List, AutoSizer } from 'react-virtualized'
import { getCurrentCity } from '../../utils'
import NavHeader from '../../components/NavHeader'

import './index.scss'

// 格式化城市数据
const formatData = (lists) => {
  const cityList = {}

  // 遍历lists
  lists.forEach((item) => {
    // 获取城市首字母
    const firstLetter = item.short.substr(0, 1)
    if (cityList[firstLetter]) {
      cityList[firstLetter].push(item)
    } else {
      cityList[firstLetter] = [item]
    }
  })

  const cityIndex =  Object.keys(cityList).sort()

  return {
    cityList,
    cityIndex
  }
}

const formartCityIndex = (letter) => {
  switch (letter) {
    case '#': return '当前定位'
    case 'hot': return '热门城市'
    default: return letter.toUpperCase()
  }
}

export default function CityList() {

  // 长列表性能优化
  // 大型列表和表格数据， 如城市列表，通讯录，微博等
  // 大量dom节点的重排和重绘
  // 懒渲染：每次只加载一部分数据(如10条)，但依然存在大量dom节点
  // 可视区域渲染(react-virtualized)：只渲染可视区域，且预加载可视外一点区域避免白屏，不可视区域不渲染。场景：一次性展示大量数据，如：大表格，微博，聊天应用。

  const navigate = useNavigate()
  let [cityList, setCityList] = useState({})
  let [cityIndex, setCityIndex] = useState([])
  const [activeIndex, setActiveIndex] = useState(0)
  
  const cityListRef = useRef(null)

  useEffect(async () => {
    // 获取城市列表数据
    await getCityList()
    // 注意：List组件要有数据之后执行
    cityListRef.current.mwasureAllRows()
  }, [])

  // 获取城市数据
  const getCityList = async () => {
    // 普通城市
    const res = await api.getCity({level: 1})
    let {cityList, cityIndex} = formatData(res.body || [])

    // 获取热门城市
    const hotRes = await api.getHotCity()
    cityList['hot'] = hotRes.body
    cityIndex = ['hot', ...cityIndex] 
    console.log('cityList', cityList);

    // 获取当前定位城市
    const localCity = await getCurrentCity()
    cityList['#'] = [localCity]
    cityIndex = ['#', ...cityIndex] 

    setCityList(cityList)
    setCityIndex(cityIndex)
    console.log(cityList, cityIndex)
  }

  // 渲染行内容
  const rowRenderer = ({
    key, // Unique key within array of rows
    index, // Index of row within collection
    isScrolling, // The List is currently being scrolled
    isVisible, // This row is visible within the List (eg it is not an overscanned row)
    style, // Style object to be applied to row (to position it)
  }) => {
    const letter = cityIndex[index]
    const letterCityList = cityList[letter] || []
    return (
      <div key={key} className='city' style={style}>
        <div className='title'>{ formartCityIndex(letter)}</div>
       {letterCityList.map((item) => {
          return <div key={item.value} className='name' onClick={() => changeCity(item)}>{item.label}</div>
       })}
      </div>
    );
  }

  // 计算行高度
  const getRowHeight = ({index}) => {
    const letter = cityIndex[index]
    const letterCityList = cityList[letter] || []
    return letterCityList.length * 30 + 40
  }

  // 选择城市
  const HOUSE_CITY = ['北京', '上海', '广州', '深圳'] // 有房源城市
  const changeCity = ({label, value}) => {
    if(HOUSE_CITY.indexOf(label) > -1) {
      localStorage.setItem('localCity', JSON.stringify({label, value}))
      navigate('/home')
    } else {
      Toast.info('该城市暂无房源信息', 1, null, false);
    }
  }

   // 监听可视区域的渲染信息
   const onRowsRendered = ({startIndex}) =>{
    if (startIndex !== activeIndex) {
      setActiveIndex(startIndex)
    }
  }

  // 渲染右侧索引列表
  const renderCityIndex = () => {
    return cityIndex.map((item, index) => {
      return <div key={item} className='city-index-item' onClick={() => selectCityIndex(index)}>
        <span className={activeIndex === index ? 'index-active' : ''}>
          {item === 'hot' ? '热' : item.toUpperCase()}
        </span>
      </div>
    })
  }

   // 选择右侧字母
   const selectCityIndex = (index) => {
    // scrollToRow 滚动到指定行
    // scrollToAlignment 滚动位置
    // mwasureAllRows 提前计算所有行
    cityListRef.current.scrollToRow(index)
  }

  return ( 
    <div className='cityList nav-page'> 
      <NavHeader onLeftClick={()=>navigate('/home')}>地图找房</NavHeader>
      <div className='page-content'>
        <AutoSizer>
          {({width, height}) => 
            <List
              ref={cityListRef}
              width={width}
              height={height}
              rowCount={cityIndex.length}
              scrollToAlignment='start'
              rowHeight={getRowHeight}
              rowRenderer={rowRenderer}
              onRowsRendered={onRowsRendered}
            />
          }
        </AutoSizer>
        {/* 右侧索引列表 */}
        <ul className='city-index'>{renderCityIndex()}</ul>
      </div>
    </div>
  )
}