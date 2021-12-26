import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import axios from './api/axios'

import 'react-virtualized/styles.css';
import './assets/fonts/iconfont.css'
import 'antd-mobile/dist/antd-mobile.css';
import './assets/css/index.scss'
import './index.scss';

window.axios = axios

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
