import { createRouter, createWebHistory } from 'vue-router'
import HomePage from "../pages/HomePage.vue"
import CategoriesPage from "../pages/CategoriesPage.vue"
import BookPage from "../pages/BookPage.vue"
import AddPage from "../pages/AddPage.vue"




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
      name: 'categories-page',
      component: CategoriesPage
    },
    {
      path: '/books',
      name: 'book-page',
      component: BookPage
    },
    {
      path: '/add',
      name: 'add-page',
      component: AddPage
    },
  ]
})

export default router
