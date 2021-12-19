import React, { useState } from 'react'
import { Route, Routes, useNavigate, useLocation, Outlet } from "react-router-dom"
import { TabBar } from 'antd-mobile'
import {
  AaOutline,
  MessageOutline,
  MessageFill,
  UserOutline,
} from 'antd-mobile-icons'

const activeColor = '#1677ff'

const tabs = [
  {
    path: '/home',
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
  const [activeKey, setActiveKey] = useState(location.pathname || '/home')  

  const handleTab = (item) => {
    navigate(item.path)
    setActiveKey(item.path)
  }

  const renderTarbarItem = () => {
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

  return <div className="home">
    {/* 渲染子路由 */}
    <Outlet />
    <Routes>
     
    </Routes>
    {/* tabbar */}
    <TabBar barTintColor="#fff" tintColor={activeColor} noRenderContent={true} onChange={setActiveKey}>
      {renderTarbarItem()}
    </TabBar>
  </div>
}