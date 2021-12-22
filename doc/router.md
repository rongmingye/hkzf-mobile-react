
https://reactrouter.com/docs/en/v6/getting-started/installation
https://blog.csdn.net/weixin_44051815/article/details/121413076

## react-router-dom

``` js
// 安装
npm i -D react-router-dom

// 导入 
import { 
  BrowserRouter, 
  HashBouter,
  Routes, 
  Route, 
  Link, 
  Navigate,
  Outlet,
  useNavigate,
  useLocation,
  useParams,
  useSearchParams,
  useRoutes,
   } from 'react-router-dom'
```

``` js
import { BrowserRouter as Router, Route, Routes, Navigate  } from 'react-router-dom';
import CityList from './pages/CityList';
import Home from './pages/Home';
import News from './pages/News'
import Mine from './pages/Mine'
import FindHouse from './pages/FindHouse'
import Index from './pages/Index'

function App() {
  return (
    <Router>
      <div className="App">
        {/* 配置路由 */}
        <Routes>
          {/* 默认路由，重定向 */}
          <Route exact path="/" element={<Navigate to="/home" />} ></Route>
          <Route path="/home" element={<Home />} >
            <Route exact path="/home" element={<Index />}></Route>
            <Route path="/home/findhouse" element={<FindHouse />}></Route>
            <Route path="/home/news" element={<News />}></Route>
            <Route path="/home/mine" element={<Mine />}></Route>
          </Route>
          <Route excat path="/citylist" element={<CityList />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
```

``` js
import React, { useState } from 'react'
import { TabBar } from 'antd-mobile'
import { useNavigate, useLocation, Outlet, useParams } from "react-router-dom"

export default function Home(props) {
  const navigate = useNavigate() // useNavigate方法跳转
  const location = useLocation() // location参数
  const params = useParams() // 地址栏参数获取
  const [activeKey, setActiveKey] = useState(location.pathname || '/home')  

  const handleTab = (item) => {
    navigate(item.path)
    setActiveKey(item.path)
    console.log(params.get('id'))
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
    {/* tabbar */}
    <TabBar barTintColor="#fff" tintColor={activeColor} noRenderContent={true} onChange={setActiveKey}>
      {renderTarbarItem()}
    </TabBar>
  </div>
}
```