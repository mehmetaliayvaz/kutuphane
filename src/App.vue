<template>
  <div class="app d-flex">
    <Sidebar />
    <div class="w-100">
      <Header />
      <RouterView />  
    </div>
    
  </div>
</template>

<script>
import Sidebar from "../src/components/shared/Sidebar.vue";
import Header from './components/shared/Header.vue';

export default {
  name: 'App',
  components: {
    Sidebar,
    Header,
  }

}
</script>

<style lang="scss">

  @import "./scss/app.scss";

  .app{
    background: $body-color;
  }

</style>