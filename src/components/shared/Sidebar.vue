<template>
  <div id="sidebar" class="sidebar d-flex flex-column align-items-center p-4">
    <h1 class="text-white">KÜTÜPHANEM</h1>
    <div>
      <router-link
        to="/"
        class="d-flex align-items-center py-3 text-white text-decoration-none"
      >
        <HomeIcon class="me-2 home-icon" />
        <h2>Anasayfa</h2>
      </router-link>
      <router-link
        to="/categories"
        class="d-flex align-items-center py-3 text-white text-decoration-none"
      >
        <CategoriesIcon class="me-2" />
        <h2>Kategoriler</h2>
      </router-link>
      <router-link
        to="/books"
        class="d-flex align-items-center py-3 text-white text-decoration-none"
      >
        <BookIcon class="me-2" />
        <h2>Kitaplarım</h2>
      </router-link>
      <router-link
        to="/add"
        class="d-flex align-items-center py-3 text-white text-decoration-none"
      >
        <AddIcon class="me-2" />
        <h2>Kitap Ekle</h2>
      </router-link>
    </div>
  </div>
</template>

<script>
import HomeIcon from "../icons/HomeIcon.vue";
import CategoriesIcon from "../icons/CategoriesIcon.vue";
import BookIcon from "../icons/BookIcon.vue";
import AddIcon from "../icons/AddIcon.vue";
export default {
  name: "Sidebar",

  components: { HomeIcon, CategoriesIcon, BookIcon, AddIcon },
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