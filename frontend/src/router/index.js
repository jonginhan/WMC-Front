import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import SignUpView from '@/views/account/SignUpView.vue'
import SignInView from '@/views/account/SignInView.vue'
import CartView from '@/views/order/CartView.vue'
import ProductRegisterPage from '@/views/product/ProductRegisterPage.vue'
import ProductListPage from '@/views/product/ProductListPage.vue'
import NoticeListPage from '@/views/csCenter/notice/NoticeListPage.vue'
import NoticeRegisterPage from "@/views/csCenter/notice/NoticeRegisterPage.vue"
import NoticeReadPage from "@/views/csCenter/notice/NoticeListPage.vue"

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/sign-up',
    name: 'SignUpView',
    component: SignUpView
  },
  {
    path: '/sign-in',
    name: 'SignInView',
    component: SignInView
  },
  // {
  //   path: '/my-page',
  //   name: 'MyPageView',
  //   component: MyPageView
  // },
  {
    path: "/cart",
    name: "CartView",
    component: CartView,
  },
  {
    path: '/product-register-page',
    name: 'ProductRegisterPage',
    component: ProductRegisterPage
  },
  {
    path: '/product-list-page',
    name: 'ProductListPage',
    component: ProductListPage
  },
  {
    path: '/notice-list',
    name: 'NoticeListPage',
    component: NoticeListPage
  },
  {
    path: '/notice-register',
    name: 'NoticeRegisterPage',
    component: NoticeRegisterPage
  },
  {
    path: '/notice-read',
    name: 'NoticeReadPage',
    component: NoticeReadPage
  },

]

const router = new VueRouter({
  routes
})

export default router
