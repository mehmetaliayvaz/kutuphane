<template>
  <div id="header" class="header px-3">
    <div class="d-flex align-items-center">
      <button class="btn d-md-none" @click="showMenu = !showMenu">
        <menu-icon />
      </button>
      <h1 class="m-0">Anasayfa</h1>
    </div>
    <div class="exit">
      <div class="me-1">Çıkış Yap</div>
      <span class="exit-icon">
        <ExitIcon />
      </span>
    </div>
  </div>

  <transition name="fade">
    <section v-if="showMenu" id="mobile-menu" class="d-flex flex-column align-items-center d-md-none">
      <div>
        <router-link 
          v-for="(item, index) in menu"
          :key="index"
          :to="item.path"
          class="d-flex align-items-center py-3 text-white text-decoration-none"
          @click="showMenu = false"
        >
          <component :is="item.icon" class="me-2 home-icon" />
          <h2 class="m-0">{{ item.title }}</h2>
        </router-link>
      </div>
    </section>
  </transition>
</template>

<script>
import ExitIcon from "../icons/ExitIcon.vue";
import MenuIcon from '../icons/MenuIcon.vue';
import HomeIcon from "../icons/HomeIcon.vue";
import CategoriesIcon from "../icons/CategoriesIcon.vue";
import BookIcon from "../icons/BookIcon.vue";
import AddIcon from "../icons/AddIcon.vue";
import { ref } from '@vue/reactivity';
export default {
  name: "Header",
  components: { ExitIcon, MenuIcon, HomeIcon, CategoriesIcon, BookIcon, AddIcon },
  setup(){
    const showMenu = ref(false);
    const menu = ref([
      { icon: 'home-icon', title: 'Anasayfa', path: '/' },
      { icon: 'categories-icon', title: 'Kategoriler', path: '/categories' },
      { icon: 'book-icon', title: 'Kitaplarım', path: '/books' },
      { icon: 'add-icon', title: 'Kitap Ekle', path: '/add' },
    ])

    return {
      menu,
      showMenu
    }
  }
};
</script>

<style lang="scss" scoped>

@import "../../scss/variables.scss";


.header {
  display: flex;
  box-sizing: border-box;
  width: 100%;
  height: 50px;
  background: #fff;
  text-align: center;
  align-items: center;
  justify-content: space-between;

  .exit {
    cursor: pointer;
    display: flex;
    align-items: center;
    text-align: center;
    justify-content: center;
    user-select: none;
    opacity: 0.9;

    .me-1 {
      display: block;
      font-size: 16px;
      color: #787878;
    }
    &:hover {
      opacity: 1.5;
    }
  }
  h1 {
    font-size: 24px;
    font-weight: bold;
    color: #000;
  }
}

#mobile-menu{
  position: fixed;
  top: 50px;
  left: 0;
  z-index: 10;
  width: 100%;
  height: 100%;
  background: $primary;
  padding: 5rem 0;

  h2{
    font-size: 1.25rem;
  }
}

</style>
