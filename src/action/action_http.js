import axios from '@/utils/ajax'

/* get 请求*/
export const Get = (url, data) => {
  return axios.get(url, { params: data })
}

/* post 请求*/
export const Post = (url, data) => {
  return axios.post(url, data)
}

