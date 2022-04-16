<template>
  <div id="sidebar" class="sidebar d-none d-md-flex flex-column align-items-center p-4">
    <img src="/img/kutuphanem-logo.png" alt="" class="img-fluid">
    <div>

      <router-link 
        v-for="(item, index) in menu"
        :key="index"
        :to="item.path"
        class="d-flex align-items-center py-3 text-white text-decoration-none"
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
export default {
  name: "Sidebar",
  components: { HomeIcon, CategoriesIcon, BookIcon, AddIcon },
  setup(){
    const menu = ref([
      { icon: 'home-icon', title: 'Anasayfa', path: '/' },
      { icon: 'categories-icon', title: 'Kategoriler', path: '/categories' },
      { icon: 'book-icon', title: 'Kitaplarım', path: '/books' },
      { icon: 'add-icon', title: 'Kitap Ekle', path: '/add' },
    ])

    return {
      menu,
    }
  }


};
</script>

<style lang="scss" scoped>
@import "../../scss/variables.scss";

.sidebar {
  background: $primary;
  width: 255px;
  height: 100vh;
  color: #fff;
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