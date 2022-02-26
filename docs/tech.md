## 组件prop-types检验

```js
npm install -D prop-types
import PropTypes from 'prop-types'
Comp.propTypes = {
  name: PropTypes.string.isRequired
}
```

## 组件样式覆盖问题
- 问题：相同类名，一个组件的样式，会影响另一个组件的样式
- 默认，只要导入组件，组件的样式就生效

解决：
- 手动处理，起不同的类名
- css in js

#### css in js
> 使用js编写css的统称，用来解决css样式冲突问题
- css in js的具体实现有50多种。比如 css Modules，tyled components
- css Modules (推荐，react脚手架已集成，可直接使用，可用在react或vue中)

#### CSS Modules
- CSS Modules通过对css类名重命名，保证每个类名的唯一性，从而避免样式冲突的问题
- 所有类名都具有局部作用域，只在当前组件内部生效
- 实现方式：webpack的css-loader插件
- 命名采用：BEM(block块，element元素，modifier标识符)命名规范，比如.list_item_active
- 在react脚手架中演化成：文件名，类名，hash(随机)三部分，只需要指定类名即可。
- 建议驼峰语法，不建议嵌套
- 全局的样式使用:global()来指定

``` js
/* 自动生成的类名格式 */
[filename]_[classname]__[hash]
```

```css
.error {}
/* 生成的类名为 */
.Button_error__ax7yx{}
```

```css
.navbBar{}
/* 不推荐嵌套 */
.navBar .test{}

/* 全局样式: 对于组件库已经存在的样式 */
:global(.am-navbar-title) { color: #333; }

.root :global(.am-navbar-title) {}
```

<div lassName={styles.test} > </div>
```

#### CSS Modules在项目中的使用

1. 创建名为[name].module.css的样式文件
```js
index.module.css
```

2. 在组件中导入该样式文件（注意语法）
``` js
import styles from 'index.module.css'
```

3. 通过styles对象访问对象中的样式名来设置样式
```js
<div className={styles.test} > </div>
```

## 百度地图

#### 初始化地图
https://lbsyun.baidu.com/index.php?title=jspopularGL/guide/helloworld

#### 获取当前城市名称
https://lbsyun.baidu.com/index.php?title=jspopularGL/guide/geoloaction

#### 根据城市名称获取定位
https://lbsyun.baidu.com/index.php?title=jspopularGL/guide/geocoding

#### 添加控件
https://lbsyun.baidu.com/index.php?title=jspopularGL/guide/widget

#### 文本覆盖物
https://lbsyun.baidu.com/index.php?title=jspopularGL/guide/label