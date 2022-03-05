
https://www.tslang.cn/docs/home.html

#### react配置ts
```js
npm i -g typescript

// 创建tsconfig.json
tsc --init

// 安装开发环境依赖
npm install --save-dev typescript @types/react @types/react-dom ts-loader
```

#### tsconfig.json
```js
{
  "compilerOptions": {
     "target": "es5", /**指定ECMAScript目标版本**/                   
     "module": "commonjs", /**指定生成哪个模块系统代码**/ 
     "allowJs": true,  /**允许编译js文件**/                     
     "jsx": "preserve",  /**支持JSX**/                  
     "outDir": "build",  /**编译输出目录**/    
     "strict": true, /**启用所有严格类型检查选项**/ 
     "noImplicitAny": false, /**在表达式和声明上有隐含的any类型时报错**/          
     "skipLibCheck": true,  /**忽略所有的声明文件的类型检查**/                   
     "forceConsistentCasingInFileNames": true,   /**禁止对同一个文件的不一致的引用**/   
     "experimentalDecorators": true 
  },
  /**指定编译目录**/ 
  "include": [ 
    "src/**/*.js",
    "src/**/*.ts",
    "src/**/*.tsx",
  ],
   /**指定不编译目录**/ 
  "exclude": [
    "node_modules"
  ]
}
```

#### .d.ts
- https://juejin.cn/post/6991061608386527239

#### 引入文件
```js
import React from 'react'
// success
import * as React from 'react'
```
#### ts 定义全局变量
```js
// index.d.ts
interface Window {
  BMapGL: object;
}
```
#### jpg/png//css/scss/less ts

```js
// index.d.ts
declare module '*.jpg';
declare module '*.png';
declare module '*.css';
declare module '*.scss';
declare module '*.less';
```

#### // 声明通用接口
```js
// home.d.ts
interface ITabItem {
  path: string,
  title: string,
  icon: any,
  selectedIcon: any,
}
```

#### ts axios封装
- axios.d.ts: https://gaojiajun.cn/2019/12/typescript-axios-interceptor-commondata/
- 拦截封装: https://blog.csdn.net/sonicwater/article/details/116154449

```js
// src/config/http.ts
// src/config/status.ts
// types/axios.d.ts
```

#### useEffect async/await ts
- useEffect中的第一个回调参数返回的是一个clean-up函数，所以不能返回promise对象，更不能直接使用async/await，否则会报错；
- 解决办法: 可以在回调参数中使用async/await
- https://blog.csdn.net/Charly1993/article/details/120005475

```js
// 报错
useEffect(async () => {
  await getCityList()
}, [])

// success
useEffect(() => {
    getCityList()
  }, [])
```

#### useRef Object is possibly 'null'.
- useRef要传入元素类型的泛型

```js
// 报错
const cityListRef = useRef(null)

// success
const cityListRef = useRef<List>(null)
```


#### useState Argument of type 'string[]' is not assignable to parameter of type 'SetStateAction<never[]>'
- useState设置返回值类型

```js
let [cityIndex, setCityIndex] = useState([])

// success
let [cityIndex, setCityIndex] = useState<string[]>([])
```

