

#### .d.ts
- https://juejin.cn/post/6991061608386527239

#### jpg/png/scss/less ts

#### ts axios封装
- axios.d.ts: https://gaojiajun.cn/2019/12/typescript-axios-interceptor-commondata/
- 拦截封装: https://blog.csdn.net/sonicwater/article/details/116154449

#### useEffect async/await ts
- useEffect中的第一个回调参数返回的是一个clean-up函数，所以不能返回promise对象，更不能直接使用async/await，否则会报错；
- 解决办法: 可以在回调参数中使用async/await
- https://blog.csdn.net/Charly1993/article/details/120005475

```js
useEffect(async () => {
  await getCityList()
}, [])

// success
useEffect(() => {
    getCityList()
  }, [])
```

#### useRef Object is possibly 'null'.

```js
const cityListRef = useRef(null)

// success
const cityListRef = useRef<List>(null)
```


#### useState Argument of type 'string[]' is not assignable to parameter of type 'SetStateAction<never[]>'

```js
let [cityIndex, setCityIndex] = useState([])

// success
let [cityIndex, setCityIndex] = useState<string[]>([])
```

#### ts 定义全局变量
```js
// index.d.ts
interface Window {
  BMapGL: object;
}
```

#### 引入文件
```js
import React from 'react'
// success
import * as React from 'react'
```