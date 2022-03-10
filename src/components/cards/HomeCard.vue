<template>
  <div class="home-card text-white p-3 rounded" :style="'background:' + info.color">
    <h2> {{ info.number }} </h2>
    <h3 class="home-card-text"> {{ info.text }} </h3>
  </div>
</template>

<script>
export default {
  name: 'HomeCard',
  props: {
    info: {
      type: Object,
      required: true,
    },
  },

}
</script>

<style lang="scss" scoped>

  .home-card{
    filter: drop-shadow(0px 3px 15px rgba(0, 0, 0, 0.1));

    &-text{
      font-size: 1rem;
    }

  }

</style>