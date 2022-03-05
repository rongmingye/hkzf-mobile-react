
#### 目标：
1. 能够初始化项目
2. 能够使用antd-mobile组件库
3. 能够完整项目整体布局
4. 能够完整首页轮播图
5. 能够使用百度地图Api完成定位功能
6. 能够使用react-virtualized完成城市城市选择功能

## 目录
1. 项目准备
- 好客租房-移动web端
- 项目介绍：本项目是一个在线租房项目，实现了类似链家等项目功能，解决用户租房的需求
- 核心业务：在线找房（地图，条件搜索），用户登录，房源发布等。
2. 项目整体布局
3. 首页模块
4. 城市选择模块

### 1 项目创建

#### 1.1 项目介绍
技术栈
- react 核心库： react react-dom react-router-dom
- 脚手架：create-react-app
- 数据请求：axios
- UI组件库：antd-mobile
- 其他组件库：react-vitualized, formik+yup, react-spring等
- 百度地图api

相关文档
- https://create-react-app.bootcss.com/docs/getting-started
- https://react.docschina.org/docs/getting-started.html
- https://github.com/remix-run/react-router/blob/main/docs/getting-started/tutorial.md
- https://antd-mobile-doc-v2.gitee.io/docs/react/introduce-cn
- https://lbsyun.baidu.com/index.php?title=jspopularGL

#### 1.2 项目搭建
本地接口部署
- 创建并导入数据：数据库名称hkzf，source hkzf.sql
- 打开hkzf_v1: npm install, 
- 配置数据库密码
- 启动接口：在api目录中执行npm start
- 测试接口：在接口地址 http://localhost:8080


#### 初始化项目
- 初始化项目 npx create-react-app hkzf-mobile-react
- 启动项目 npm start
- 创建项目中的src目录结构

```js
// 使用create-react-app创建项目
npx create-react-app hkzf-mobile-react
```

项目目录
- assets: 资源（图片，字体图标等）
- components: 公共组件
- pages: 页面
- utils: 工具
- App.js: 根组件（配置路由信息）
- index.css: 全局样式
- index.html: 项目入口文件（渲染跟组件，导入组件）

#### 1.3 组件库准备
- 安装antd-mobile
- 导入并使用组件
- 在index.js中导入组件库样式

``` js
// 安装依赖
npm i -D antd-mobile

// src/index.js, 导入样式
import 'antd-mobile/dist/antd-mobile.css'

// 在组件中使用
import { Button } from 'antd-mobile'

<Button>登录</Button>
```

#### 1.4 路由配置

```js
// 安装路由
npm i -D react-router-dom

// 在pages创建页面组件: Home/index.js CityList/index.js

// 导入 
import { 
  BrowserRouter as Router, 
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

function App() {
  return (
    <Router>
      <div className="App">
        {/* 配置路由 */}
        <Routes>
          {/* 默认路由，重定向 */}
          <Route path="/" element={<Navigate to="/home" />} ></Route>
          <Route path="/home" element={<Home />} >
            <Route path="/home" element={<Index />}></Route>
            <Route path="/home/findhouse" element={<FindHouse />}></Route>
            <Route path="/home/news" element={<News />}></Route>
            <Route path="/home/mine" element={<Mine />}></Route>
          </Route>
          <Route path="/citylist" element={<CityList />} />
          <Route path="/map" element={<Map />} />
        </Routes>
      </div>
    </Router>
  );
}

const navigate = useNavigate() // useNavigate方法跳转
const location = useLocation() // location参数
const params = useParams() // 地址栏参数获取

{/* 渲染子路由 */}
<Outlet />
```

#### 1.5 外观和样式调整

## 2 项目整体布局

#### 2.1 两种布局页面
1. 有tabBar的页面：首页 找房 资讯 我的
2. 没有带tabBar的页面
3. tabBar的菜单可以实现路由切换，在路由内部切换路由（嵌套路由）

#### 2.2 嵌套路由
- 嵌套路由：路由内部包含路由
- 用Home组件表示父路由的内容
- 用News组件表示子路由的内容
- Route组件实现展示
- Routes组件包裹Route组件
- BrowserRouter路由模式，只需一个

#### 2.3 实现tabbar
- 使用antd-mobile库，npm install -D antd-mobile
- 在index.js导入antd-mobile的样式
- 导入tabbar组件
- 修改tabbar的文字标题，颜色(选中/未选中)，字体图标
- 修改字体图标大小
- 调整tabbar的菜单位置，固定在最底部
- 点击tabbar.item切换路由，设置默认tabbar默认高亮

##  3. 首页模块

#### 3.1 首页路由处理
- 修改首页路由规则为：/home
- 配合默认路由，实现默认跳转到/home
- Navigate组件实现重定项，to属性指定跳转到路由地址
- Outlet组件实现子路由显示视图

``` js
<Route exact path="/" element={<Navigate to="/home" />} ></Route>
<Route exact path="/home" element={<First />}></Route>
```


#### 3.2 轮播图
基本使用
- 导入antd-mobile的 Carousel 组件

获取轮播图数据
- 安装axios：npm i -D axios
- 在组件中导入axios
- 在state中添加轮播图数据：swipers
- 新建getSwipers方法获取轮播图数据，更新swipers状态
- 在UseEffect中调用getSwipers   
- 使用获取到的数据渲染轮播图

#### 导航菜单
- 使用antd-mobile的flex组件布局
- 跳转路由

#### 资讯
- 结构和样式 Flex
- 跳转路由
#### 搜索栏
- 结构和样式
- 添加位置/找房子/地图的路由

#### h5 中的地理位置api
https://developer.mozilla.org/zh-CN/docs/Web/API/Geolocation_API

- longitude 经度
- latitude 纬度
- altitude 海拔高度
- heading 行经中的方向

``` js
navigator.geolocation.getCurrentPosition(function(position) {
  do_something(position.coords.latitude, position.coords.longitude);
});
```

获取到的地理位置跟GPS ip地址 wifi 蓝牙的MAC地址 GSM/CDMS的ID有关
手机优先使用GPS定位， 笔记本最准确的定位是wifi

#### 百度地图 api
https://lbsyun.baidu.com/index.php?title=jspopularGL

申请百度账号和密钥

1. 引入百度地图api, 设置ak
2. 设置样式
3. 配置组件路由，新增地图组件
4. 初始化地图实例，指定中心，初始化地图

获取顶部导航城市信息  
1. 打开百度地图JS API定位文档
2. 通过ip定位获取当前城市名称
3. 调用服务，获取项目中城市的信息，如没有返回默认城市名称和id
4. 将信息展示在顶部导航栏中

``` js
const localCity = new window.BMap.localCity()
localCity.get(res = > {
  
})
```

## 第二部分功能点
- 能够在百度地图中展示当前定位城市
- 能够使用地图完成房源信息绘制
- 能够展示城市所有区的房源数据
- 能够过封装找房页面的条件筛选栏组件
- 能够使用react-spring组件实现动画效果
- 能够完成房屋详情页面的数据展示

- 地图找房模块
- 列表找房模块
- 房屋详情模块

### 地图找房
业务：使用百度地图API实现地图找房
功能：
- 展示当前定位城市
- 展示该城市所有区的房源
- 展示某区下所有镇的房源
- 展示某镇下所有小区的房源
- 展示某小区下的房源数据列表

难点：百度地图找房标注，缩放级别，缩放事件等的使用  

#### 根据展示当前定位城市
- 获取当前定位城市
- 使用地址解析器解析当前城市坐标
- 调用centerAndZoom() 方法在地图中展示当前城市
- 在地图中展示该城市，并添加比例尺和平移缩放组件

#### 地图找房
功能分析
- 获取房源数据，渲染覆盖物
- 点击覆盖物：1放大地图 2获取下一级数据，渲染下一级覆盖物
- 区/镇：点击事件中，清楚现有覆盖物，创建新的覆盖物
- 小区：不清楚覆盖物，移动地图，展示该小区下的房源列表

### 列表找房模块

### 房屋详情模块
#### 总结
1. 项目准备：部署本地接口，脚手架初始化项目，antd-mobile, 路由。
2. 项目整体布局：分析两种布局，使用嵌套路由实现带Tab布局。
3. 首页模块：租房小组结构布局，数据获取，h5地理定位和百度地图地理定位。
4. 城市选择模块：数据结构处理，长列表性能优化，react-virtualized，索引列表。



