import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { Carousel, Flex, Grid } from 'antd-mobile';
import api from '../../api'
import { BASE_URL } from '../../config/config'
import './index.scss'

import Search from './search'

import nav1 from '../../assets/images/nav-1.png'
import nav2 from '../../assets/images/nav-2.png'
import nav3 from '../../assets/images/nav-3.png'
import nav4 from '../../assets/images/nav-4.png'

export default function Index() {
  const navigate = useNavigate();

  //////////// 轮播图 ////////////

  const [swipers, setSwipers] = useState([])

  // 获取轮播图数据
  const getSwipers = async () => {
    const res = await api.getHomeSwiper()
    setSwipers(res.data.body)
  }

  useEffect(() => {
    getSwipers()
  }, []) 

  // 渲染轮播图结构
  const renderSwipers = () => {
    return swipers.map(item => (
      <a
        key={item.id}
        href="http://www.alipay.com"
        style={{ display: 'inline-block', width: '100%', height: 202 }}
      >
        <img
          src={BASE_URL + item.imgSrc}
          alt=""
          style={{ width: '100%', verticalAlign: 'top' }}
        />
      </a>
    ))
  }

  //////////// 菜单导航 ////////////

  const navs = [
    {
      id: 1,
      title: '整租',
      imgSrc: nav1,
      path: '/home/findhouse',
    },
    {
      id: 2,
      title: '合租',
      imgSrc: nav2,
      path: '/home/findhouse',
    },
    {
      id: 3,
      title: '地图找房',
      imgSrc: nav3,
      path: '/home/findhouse',
    },
    {
      id: 4,
      title: '去出租',
      imgSrc: nav4,
      path: '/home/findhouse',
    }
  ]

  const handleNav = path => {
    navigate(path)
  }

  const renderNavs = () => {
    return navs.map(item => (
      <Flex.Item key={item.id} onClick={() => handleNav(item.path)}>
          <img src={item.imgSrc} />
          <h2>{item.title}</h2>
        </Flex.Item>
    ))
  }

  /////////////// 租房小组 /////////////////

  const [grouds, setGrouds] = useState([])
  const getGrouds = async () => {
    const res = await api.getHomeGroups({ area: 'AREA%7C88cff55c-aaa4-e2e0'})
    setGrouds(res.data.body)
  }
  useEffect(() => {
    getGrouds()
  }, [])

  /////////// 最新资讯 /////////////////

  const [news, setNews] = useState([])
  const getNews = async () => {
    const res = await api.getHomeNews({ area: 'AREA%7C88cff55c-aaa4-e2e0'})
    setNews(res.data.body)
  }

  useEffect(() => {
    getNews()
  }, [])

  const renderNews = () => {
    return news.map(item => (
      <Flex className='news-item' direction='row' justify='around' align='start' >
        <img src={BASE_URL +item.imgSrc} />
        <Flex direction='column' justify='between' className='new-item-right'>
          <h3 className='font-size-14'>{item.title}</h3>
          <Flex direction="row" justify='between' className='new-item-bottom'>
            <div className='font-size-12 color-info'>{item.label}</div>
            <div className='font-size-12 color-info'>{item.time}</div>
          </Flex>
        </Flex>
      </Flex>
    ))
  }

  return (
    <div>
      
      {/* 轮播图 */}
      <div className="swiper">
        <Carousel
          autoplay={true}
          infinite
        >
          {renderSwipers()}
        </Carousel>
        {/* 搜索栏 */}
        <Search></Search>
      </div>
      
      {/* 导航菜单 */}
      <Flex className="nav">
        {renderNavs()}
      </Flex>  

      {/* 租房小组 */}
      <div className="group">
        <h3 className="group-title">租房小组 <span className="more">更多</span></h3>
        <Grid 
          data={grouds} 
          columnNum={2} 
          square={false}
          hasLine={false}
          renderItem={(item) => (
            <Flex key={item.id} className='group-item' justify='around'>
              <div className='desc'>
                  <p className="title">{item.title}</p>
                  <span className='info'>{item.desc}</span>
              </div>
              <img src={BASE_URL + item.imgSrc} alt=""/>
            </Flex>
          )}></Grid>
      </div>

      {/* 最新资讯 */}
      <div className='news'>
        <h3 className='news-title'>最新资讯</h3>
        {renderNews()}
      </div>
    </div>
  );
}