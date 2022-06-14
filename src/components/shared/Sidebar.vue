<template>
  <div id="sidebar" class="sidebar d-none d-md-flex flex-column align-items-center">
    <router-link to="/" class="p-4">
      <img src="/img/kutuphanem-logo.png" alt="" class="img-fluid mb-4">
    </router-link>
    <div class="w-100 d-flex flex-column align-items-center">

      <router-link 
        v-for="(item, index) in menu"
        :key="index"
        :to="item.path"
        class="sidebar-menu-item py-3"
        :class="{ 'active': item.path == route.path }"
      >
        <component :is="item.icon" class="me-2 home-icon" />
        <h2>{{ item.title }}</h2>
      </router-link>

    </div>
  </div>
</template>

<script>
import HomeIcon from "../icons/HomeIcon.vue";
import CategoriesIcon from "../icons/CategoriesIcon.vue";
import BookIcon from "../icons/BookIcon.vue";
import AddIcon from "../icons/AddIcon.vue";
import { ref } from '@vue/reactivity';
import { useRoute } from 'vue-router';

export default {
  name: "Sidebar",
  components: { HomeIcon, CategoriesIcon, BookIcon, AddIcon },
  setup(){
    const route = useRoute();

    const menu = ref([
      { icon: 'home-icon', title: 'Anasayfa', path: '/' },
      { icon: 'categories-icon', title: 'Kategoriler', path: '/categories' },
      { icon: 'book-icon', title: 'Kitaplarım', path: '/books' },
      { icon: 'add-icon', title: 'Kitap Ekle', path: '/add' },
    ])

    return {
      menu,
      route,
    }
  }


};
</script>

<style lang="scss" scoped>
@import "../../scss/variables.scss";

.sidebar {
  background-image: linear-gradient(to bottom, #da5934 0%, #f08907 100%);
  width: 255px;
  min-height: 100vh;
  color: #fff;

  &-menu-item{
    display: flex;
    justify-content: center;
    align-items: center;
    text-decoration: none;
    width: 100%;
    color: white;

    &:hover, &.active{
      background: #da5934;
    }

  }

  h1 {
    font-size: 24px;
    font-weight: 500;
  }
  .d-flex {
    cursor: pointer;
  }
  .home-icon {
    font-size: 16px;
  }
  h2 {
    font-size: 16px;
    margin: 0;
  }
}
</style>