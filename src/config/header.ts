import { BASE_URL } from './config'

interface IBaseHeader {
  baseURL: string | undefined
}

export let baseHeader: IBaseHeader = {
  baseURL: BASE_URL
}