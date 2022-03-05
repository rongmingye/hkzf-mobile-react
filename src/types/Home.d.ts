
// 声明通用接口
interface ITabItem {
  path: string,
  title: string,
  icon: any,
  selectedIcon: any,
}

interface IHouseItem {
  src: string, 
  title: string, 
  desc: string, 
  tags: string[], 
  price: number, 
  onClick: () => void, 
  style?: object,
  [key:string]: any,   
}

type HomeGroupsParams = {
  area: string
}

type HomeNewsParams = {
  area: string
}

interface ISwiperItem {
  id: string | number,
  imgSrc: string,
}
interface INavItem {
  id: string | number,
  imgSrc: string,
  title: string,
  path: string,
}

interface INewItem {
  id: string | number,
  imgSrc: string,
  title: string,
  label: string,
  time: string,
}

interface IGroudItem {
  id: string | number,
  title: string,
  desc: string,
  imgSrc: string,
}

interface ICityItem {
  short: string,
  value: string,
  label: string,
  [key:string]: any,   
}

