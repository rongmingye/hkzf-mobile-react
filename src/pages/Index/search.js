import { useNavigate } from 'react-router-dom'
import { Flex } from 'antd-mobile';
import { useState, useEffect } from 'react/cjs/react.development';
import { getCurrentCity } from '../../utils';

export default function Search() {
    const navigate = useNavigate()
    const [cityName, setCityName] = useState('上海')

    // h5 api 获取当前定位
    navigator.geolocation.getCurrentPosition(function(position) {
      getLocationName(position.coords.latitude, position.coords.longitude);
    })

    const getLocationName = (lat, long) => {

    }

    useEffect(async () => {
      const curCity = await getCurrentCity()
      setCityName(curCity.label || '上海')
    }, [])

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
              <span className='name'>{cityName}</span>
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