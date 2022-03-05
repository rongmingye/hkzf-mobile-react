// 声明文件模块, 避免ts报错
declare module '*.scss';
declare module '*.css';
declare module '*.jpg';
declare module '*.png';

// 全局变量
interface Window {
  BMapGL: BMapGL,
  api: object,
}

interface BMapGL {
  [key:string]: any
}



