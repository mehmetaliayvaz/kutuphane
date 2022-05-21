<template>
  <div id="header" class="header px-3">
    <div class="d-flex align-items-center">
      <button class="btn d-md-none" @click="showMenu = !showMenu">
        <menu-icon />
      </button>
      <h1 class="page-title m-0">{{ activePage }}</h1>
    </div>
    <button class="exit btn" @click="exitUser()">
      <span class="me-1">Çıkış Yap</span>
      <span class="exit-icon">
        <ExitIcon />
      </span>
    </button>
  </div>

  <transition name="fade">
    <section v-if="showMenu" id="mobile-menu" class="d-md-none">
      <close-icon @click="showMenu = false" fill="white" class="mx-4 my-3" />
      <div class="mobile-menu-nav">
        <router-link 
          v-for="(item, index) in menu"
          :key="index"
          :to="{ name: item.pathName }"
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
import { ref, computed } from '@vue/reactivity';
import CloseIcon from '../icons/CloseIcon.vue';
import { useRoute, useRouter } from "vue-router";

export default {
  name: "Header",
  components: { ExitIcon, MenuIcon, HomeIcon, CategoriesIcon, BookIcon, AddIcon, CloseIcon },
  setup(){
    const route = useRoute();
    const router = useRouter();
    const activePage = computed(() => {
      const active = menu.value.find(item => item.pathName == route.name);
      return active?.title;
    });


    const exitUser = () => {
      localStorage.removeItem('user');
      router.push('/login');
    };


    const showMenu = ref(false);
    const menu = ref([
      { icon: 'home-icon', title: 'Anasayfa', pathName: 'home' },
      { icon: 'categories-icon', title: 'Kategoriler', pathName: 'categories' },
      { icon: 'book-icon', title: 'Kitaplarım', pathName: 'books' },
      { icon: 'add-icon', title: 'Kitap Ekle', pathName: 'add' },
    ])

    return {
      menu,
      showMenu,
      route,
      activePage,
      exitUser,
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

  .page-title{
    color: #747474
  }

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
      color: #747474;
      font-weight: 500;
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
  top: 0;
  left: 0;
  z-index: 10;
  width: 100%;
  height: 100%;
  background: $primary;

  .mobile-menu-nav{
    padding: 5rem 0;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  h2{
    font-size: 1.25rem;
  }
}

</style>
