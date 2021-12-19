import React, { useState } from 'react'
import { Route, Routes, useNavigate, useLocation } from "react-router-dom"
import { TabBar } from 'antd-mobile'
import {
  AaOutline,
  MessageOutline,
  MessageFill,
  UserOutline,
} from 'antd-mobile-icons'

import News from '../News'
import Mine from '../Mine'
import FindHouse from '../FindHouse'
import First from '../First'

let tabs = [
  {
    path: '/',
    title: '首页',
    icon: <AaOutline />,
    selectedIcon: <AaOutline style={{color: activeColor}} />,
  },
  {
    path: '/home/findhouse',
    title: '找房',
    icon: <MessageOutline />,
    selectedIcon: <MessageOutline style={{color: activeColor}} />,
  },
  {
    path: '/home/news',
    title: '咨询',
    icon: <MessageFill />,
    selectedIcon: <MessageFill style={{color: activeColor}} />,
  },
  {
    path: '/home/mine',
    title: '我的',
    icon: <UserOutline />,
    selectedIcon: <MessageFill style={{color: activeColor}} />,
  },
]

export default function Home(props) {
  const navigate = useNavigate();
  const location = useLocation();
  const [activeKey, setActiveKey] = useState(location.pathname || 'first')  
  const activeColor = '#1677ff'

  let handleTab = (item) => {
    navigate(item.path)
    setActiveKey(item.path)
  }

  let renderTarbarItem = () => {
    return tabs.map(item => 
      <TabBar.Item 
        key={item.path} 
        icon={item.icon} 
        selectedIcon={item.selectedIcon} 
        title={item.title} 
        selected={activeKey === item.path} 
        onPress={() => handleTab(item)}/>
    )
  }

  return <div className="home-page">
    <div className="home-page-main">
      {/* 渲染子路由 */}
      <Routes>
        <Route path="/" element={<First />}></Route>
        <Route path="/home/findhouse" element={<FindHouse />}></Route>
        <Route path="/home/news" element={<News />}></Route>
        <Route path="/home/mine" element={<Mine />}></Route>
      </Routes>
    </div>
    <div className="tab-bar">
      {/* tabbar */}
      <TabBar barTintColor="#fff" tintColor="1677ff" noRenderContent={true} onChange={setActiveKey}>
          {renderTarbarItem()}
        </TabBar>
      </div>
  </div>
}