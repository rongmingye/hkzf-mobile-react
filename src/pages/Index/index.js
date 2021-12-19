import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { Carousel, Flex } from 'antd-mobile';
import axios from 'axios'
import './index.css'

import nav1 from '../../assets/images/nav-1.png'
import nav2 from '../../assets/images/nav-2.png'
import nav3 from '../../assets/images/nav-3.png'
import nav4 from '../../assets/images/nav-4.png'

export default function Index() {
  const navigate = useNavigate();

  const [swipers, setSwipers] = useState([
    {id: 1, imageSrc: 'https://zos.alipayobjects.com/rmsportal/AiyWuByWklrrUDlFignR.png'}, 
    {id: 2, imageSrc: 'https://zos.alipayobjects.com/rmsportal/TekJlZRVCjLFexlOCuWn.png'}, 
    {id: 3, imageSrc: 'https://zos.alipayobjects.com/rmsportal/IJOtIlfsYdTyaDTRVrLI.png'}, 
  ])

  // 获取轮播图数据
  const getSwipers = async () => {
    const res = await axios.get('http://localhost:8080/home/swiper')
    setSwipers(res.data)
  }

  useEffect(() => {
    // getSwipers()
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
          src={item.imageSrc}
          alt=""
          style={{ width: '100%', verticalAlign: 'top' }}
        />
      </a>
    ))
  }

  const navs = [
    {
      id: 1,
      title: '整租',
      imageSrc: nav1,
      path: '',
    },
    {
      id: 2,
      title: '合租',
      imageSrc: nav2,
      path: '',
    },
    {
      id: 3,
      title: '地图找房',
      imageSrc: nav3,
      path: '',
    },
    {
      id: 4,
      title: '去出租',
      imageSrc: nav4,
      path: '',
    }
  ]

  const handleNav = path => {
    navigate(path)
  }

  const renderNavs = () => {
    return navs.map(item => (
      <Flex.Item key={item.id} onClick={handleNav}>
          <img src={item.imageSrc} />
          <h2>{item.title}</h2>
        </Flex.Item>
    ))
  }

  return (
    <div>
      {/* 轮播图 */}
      <Carousel
        autoplay={false}
        infinite
        beforeChange={(from, to) => console.log(`slide from ${from} to ${to}`)}
        afterChange={index => console.log('slide to', index)}
      >
        {renderSwipers()}
      </Carousel>

      {/* 导航菜单 */}
      <Flex className="nav">
        {renderNavs()}
      </Flex>  
    </div>
      
    );
}