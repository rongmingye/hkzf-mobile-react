
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

### 1 项目准备

#### 1.1 项目介绍
技术栈
- react 核心库： react react-dom react-router-dom
- 脚手架：create-react-app
- 数据请求：axios
- UI组件库：antd-mobile
- 其他组件库：react-vitualized, formik+yup, react-spring等
- 百度地图api

#### 1.2 项目搭建
本地接口部署
- 创建并导入数据：数据库名称hkzf
- 启动接口：在api目录中执行npm start
- 测试接口：在接口地址 http://localhost:8080

初始化项目
- 初始化项目 npx create-react-app hkzf-mobile
- 启动项目 npm start
- 跳转项目中的src目录结构

```
assets: 资源（图片，字体图标等）
components: 公共组件
pages: 页面
utils: 工具
App.js: 根组件（配置路由信息）
index.css: 全局样式
index.html: 项目入口文件（渲染跟组件，导入组件）
```

#### 1.3 组件库准备
- 安装antd-mobile
- 导入并使用组件
- 在index.js中导入组件库样式

``` js
npm i -D antd-mobile

import { Button } from 'antd-mobile'

<Button>登录</Button>

import 'antd-mobile/dist/antd-mobile.css'
```

#### 1.4 路由配置
- 安装路由：npm i -D react-router-dom
- 导入路由组件: Router / Route / Link
- 在pages创建页面组件: Home/index.js CityList/index.js
- 使用 Route 组件配置页面

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

导航菜单
- 使用antd-mobile的flex组件布局