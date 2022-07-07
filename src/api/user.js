/*
 * @Description: 用户请求模块 demo
 * @Author: ligy
 * @Date: 2022-07-07 17:41:20
 * @LastEditTime: 2022-07-07 17:43:28
 */
import request from '@/api/user'
// get 请求
export function getUserInfo(params) {
  return request({
    url: '/users',
    method: 'get',
    params
  })
}
// post 请求
export function addUsers(data) {
  return request({
    url: '/users',
    method: 'post',
    data
  })
}
