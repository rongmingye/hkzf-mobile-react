import { useNavigate } from 'react-router-dom'
import { Flex } from 'antd-mobile';

export default function Search() {
    const navigate = useNavigate()

    const handleLocation = () => {
        navigate('/citylist')
    }

    const handleForm = () => {
        navigate('/home/findhouse')
    }

    const handleMap = () => {
        navigate('/map')
    }

    return (
        <Flex className='search-box'>
          <Flex className="search">
            <div className='location' onClick={() => handleLocation()}>
              <span className='name'>上海</span>
              <i className='iconfont icon-arrow'></i>
            </div>
            <div className='form' onClick={()=> handleForm()}>
              <i className="iconfont icon-seach"></i>
              <span>请输入小区或者地址</span>
            </div>
          </Flex> 
          <i className='iconfont icon-map' onClick={()=> handleMap()}></i> 
      </Flex>
    )
}