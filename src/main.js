/*
 * @Description: 程序主入口文件
 * @Author: ligy
 * @Date: 2022-07-07 16:29:17
 * @LastEditTime: 2022-07-07 18:25:44
 */
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
// 样式重置
import 'normalize.css/normalize.css'
createApp(App).use(store).use(router).mount('#app')
console.log(process.env)
