import Vue from 'vue'
import VueRouter from 'vue-router'

//路由懒加载
const Home = () => import('../views/Home.vue')
const Enterprise = () => import('../views/Enterprise.vue')
const CrossBorder = () => import('../views/CrossBorder.vue')

Vue.use(VueRouter)

const routes = [
  {
    path: '/icbc/en/',
    name: 'Home',
    component: Home,
    meta:{
      title:"Guangdong-Hong Kong-Marco Greater Bay Area Hall"
    }
  },
  {
    path: '/icbc/en/enterprise',
    name: 'Enterprise',
    component: Enterprise
  },
  {
    path: '/icbc/en/crossBorder',
    name: 'CrossBorder',
    component: CrossBorder
  },
  {
      path:"*",  //除了配置页面以外的所以路径
      // redirect:"/home"  //  任何没有写过的路径 都会重定向到这个页面
      redirect(to){
         if(to.path == '/icbc'){
             return 'home'
         }else {
             return {name:'Home'}
         }
      }
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  linkActiveClass:"active",      //重置  router-link-active   class名称
  linkExactActiveClass:"exact", //重置  router-link-exact-active   class名称
  routes
})

export default router
