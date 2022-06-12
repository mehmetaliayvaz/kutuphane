<template>
  <div class="app d-flex">
    <Sidebar v-if="route.name != 'login'" />
    <div class="w-100" style="min-height: 100vh">
      <Header v-if="route.name != 'login'" />
      <RouterView />
    </div>
  </div>
</template>

<script>
import Sidebar from "../src/components/shared/Sidebar.vue";
import Header from "./components/shared/Header.vue";
import { useRoute } from "vue-router";
import { useStore } from "vuex";
import { getBooks } from "./fb";
import { onMounted, watch } from "vue";

export default {
  name: "App",
  components: {
    Sidebar,
    Header,
  },
  setup() {
    const route = useRoute();
    const store = useStore();

    // if (store.getters.getEmail !== undefined) {
    //   getBooks(store.getters.getEmail);
    // } 
    // else {
    //   alert('hey')
    // }
    getBooks('mehmet@gmail.com');

    return {
      route,
    };
  },
};
</script>

<style lang="scss">
@import "./scss/app.scss";

.app {
  background: $body-color;
}

/* vue transition */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
