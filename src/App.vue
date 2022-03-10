<template>
  <Sidebar />
  <RouterView />
</template>

<script>
import Sidebar from "../src/components/shared/Sidebar.vue";

export default {
  name: 'App',
  components: {
    Sidebar,
  }

}
</script>

<style lang="scss">

  @import "./scss/app.scss";

</style>