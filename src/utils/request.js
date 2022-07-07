/*
 * @Description: 统一封装请求方法
 * @Author: ligy
 * @Date: 2022-07-07 17:25:58
 * @LastEditTime: 2022-07-07 17:41:09
 */
import axios from 'axios'
// 创建请求实例对象
const service = axios.create({
  baseURL: process.env.VUE_APP_BASE_URL,
  timeout: 9000 // 请求超时时间
})
// 请求拦截器
service.interceptors.request.use(
  (config) => {
    // 统一添加请求头, 例:token
    // const token = store.state.token
    // if(token){
    //   config.headers.Authorization = `Bear ${token}`
    // }
    return config
  },
  (error) => {
    return Promise.reject(error)
  }
)
// 响应拦截
service.interceptors.response.use(
  (response) => {
    // do something 例: 状态码判断
    // 把返回的数据去掉一层data属性
    return response.data
  },
  (error) => {
    return Promise.reject(error)
  }
)
export default service
