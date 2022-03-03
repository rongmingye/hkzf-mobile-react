declare module 'axios' {
  export interface AxiosInstance {
     <T = any>(config: AxiosRequestConfig): IResponsePromise<T>;
    request<T = any> (config: AxiosRequestConfig): IResponsePromise<T>;
    get<T = any>(url: string, config?: AxiosRequestConfig): IResponsePromise<T>;
    delete<T = any>(url: string, config?: AxiosRequestConfig): IResponsePromise<T>;
    head<T = any>(url: string, config?: AxiosRequestConfig): IResponsePromise<T>;
    post<T = any>(url: string, data?: any, config?: AxiosRequestConfig): IResponsePromise<T>;
    put<T = any>(url: string, data?: any, config?: AxiosRequestConfig): IResponsePromise<T>;
    patch<T = any>(url: string, data?: any, config?: AxiosRequestConfig): IResponsePromise<T>;
  }
}

interface IResponsePromise<T = any> extends Promise<IResponse<T>> {}

interface IResponse<T> {
  body: T,
  status: number,
  msg: string | number | null | undefined
}

interface AxiosResponse {
  data: any; // 服务端返回的数据
  status: number; // HTTP 状态码
  statusText: string; // 状态消息
  headers: any; // 响应头
  config: AxiosRequestConfig; // 请求配置对象
  request: any; // 请求的 XMLHttpRequest 对象实例
}
