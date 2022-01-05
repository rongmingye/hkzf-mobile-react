import React from 'react';
import ReactDOM from 'react-dom';
import axios from './api/axios'
import 'react-virtualized/styles.css';
import './assets/fonts/iconfont.css'
import 'antd-mobile/dist/antd-mobile.css';
import './assets/css/index.scss'
import './index.scss';
// app样式在组件库样式后面
import App from './App';
  
window.axios = axios

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
