import { createRouter, createWebHistory } from 'vue-router'
import HomePage from "../pages/HomePage.vue"
import CategoriesPage from "../pages/CategoriesPage.vue"
import BookPage from "../pages/BookPage.vue"
import AddPage from "../pages/AddPage.vue"
import LoginPage from "../pages/LoginPage.vue"




const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomePage
    },
    {
      path: '/categories',
      name: 'categories',
      component: CategoriesPage
    },
    {
      path: '/books',
      name: 'books',
      component: BookPage
    },
    {
      path: '/add',
      name: 'add',
      component: AddPage
    },
    {
      path: '/login',
      name: 'login',
      component: LoginPage
    },
  ]
})

export default router
