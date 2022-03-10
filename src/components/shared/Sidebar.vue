<template>
  
  <div id="sidebar" class="sidebar">
    <h1 class="text-white">Sidebar</h1>
  </div>

</template>

<script>
export default {
  name: 'Sidebar',

}
</script>

<style lang="scss" scoped>

  @import "../../scss/variables.scss";

  .sidebar{
    background: $primary;
    width: 255px;
    height: 100vh;
  }



</style>