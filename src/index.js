import React from 'react';
import ReactDOM from 'react-dom';
<<<<<<< HEAD
import Api from './utils/api'
=======
import axios from './api'
>>>>>>> feat-ts
import 'react-virtualized/styles.css';
import './assets/fonts/iconfont.css'
import 'antd-mobile/dist/antd-mobile.css';
import './assets/css/index.scss'
import './index.scss';
// app样式在组件库样式后面
import App from './App';
<<<<<<< HEAD

window.Api = Api
=======
  
window.api = axios
>>>>>>> feat-ts

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
)
