import { createRouter, createWebHistory } from 'vue-router'
import { getLocaleUser } from '../helpers/auth';
import store from '../store';

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
      component: HomePage,
      meta: {
        requiresAuth: true,
      },
    },
    {
      path: '/categories',
      name: 'categories',
      component: CategoriesPage,
      meta: {
        requiresAuth: true,
      }
    },
    {
      path: '/books',
      name: 'books',
      component: BookPage,
      meta: {
        requiresAuth: true,
      }
    },
    {
      path: '/add',
      name: 'add',
      component: AddPage,
      meta: {
        requiresAuth: true,
      },
    },
    {
      path: '/login',
      name: 'login',
      component: LoginPage,
      meta: {
        requiresAuth: false,
      }
    },
  ]
})


router.beforeEach((to, from, next) => {
  const user = getLocaleUser();
  const requiresAuth = to.matched.some((record) => record.meta.requiresAuth);

  if(user) {
    store.commit('setUser', user);
    if(!requiresAuth){
      router.push("/");
    }
    else{
      next();
    }
  }
  else{
    if (requiresAuth) router.push("/login");
    else next()
  }
})

export default router;
