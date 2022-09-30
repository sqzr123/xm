import Vue from 'vue'
import VueRouter from 'vue-router'

const Layout = () => import('@/views/Layout')// 主界面
const Home = () => import('@/views/Home')// 主界面
const Help = () => import('@/views/Help') // 帮助中心
const Shop = () => import('@/views/Shop') // 积分商城
const Growth = () => import('@/views/Growth') // 成长福利
// const Download = () => import('../views/Download/Download')// 下载页面

Vue.use(VueRouter)

const routes = [
  { path: '/', redirect: '/home' },
  {
    path: '/index',
    component: Layout,
    children: [
      { path: '/home', component: Home, meta: { title: '首页', name: '首页' } },
      { path: '/growth', component: Growth, meta: { title: '成长福利', name: '成长福利' } },
      { path: '/help', component: Help, meta: { title: '帮助中心', name: '帮助中心' } },
      { path: '/shop', component: Shop, meta: { title: '积分商城', name: '积分商城' } }
      // { path: '/download', component: Download, meta: { title: '下载页面', name: '下载页面' } }
    ]
  }

]

const router = new VueRouter({
  routes
})

// 防止跳转报错
const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push (location, onResolve, onReject) {
  if (onResolve || onReject) { return originalPush.call(this, location, onResolve, onReject) }
  return originalPush.call(this, location).catch((err) => err)
}
export default router
