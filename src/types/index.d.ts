declare module '*.scss';
declare module '*.css';
declare module '*.jpg';
declare module '*.png';


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


