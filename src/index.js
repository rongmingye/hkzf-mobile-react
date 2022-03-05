import * as React from 'react';
import * as ReactDOM from 'react-dom';
import api from './api'
import 'react-virtualized/styles.css';
import './assets/fonts/iconfont.css'
import 'antd-mobile/dist/antd-mobile.css';
import './assets/css/index.scss'
import './index.scss';
// app样式在组件库样式后面
import App from './App';
  
window.api = api

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
