/*
 * @Description: 程序主入口文件
 * @Author: ligy
 * @Date: 2022-07-07 16:29:17
 * @LastEditTime: 2022-07-07 17:28:54
 */
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

createApp(App).use(store).use(router).mount('#app')
console.log(process.env)
