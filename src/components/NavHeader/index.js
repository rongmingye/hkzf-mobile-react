
import { NavBar } from "antd-mobile";
import { useNavigate } from 'react-router-dom'
import PropTypes from 'prop-types'
import styles from './index.module.css'

function NavHeader(props) {
  const navigate = useNavigate()

  // 默认操作
  const defaultHandler = () => {
    navigate(-1)
  }

  return (<NavBar  
    className={styles.navbar}
    mode="light"
    icon={<i className='iconfont icon-back'/>}
    onLeftClick={ props.onLeftClick || defaultHandler }
  >{props.children}</NavBar>)
}

// 封装组件规范，添加props检验
NavHeader.ropTypes = {
  children: PropTypes.string.isRequired,
  onLeftClick: PropTypes.func
}

export default NavHeader