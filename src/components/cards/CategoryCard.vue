<template>
  <div
    class="category-card text-white rounded"
    :style="'background:' + info.color"
  >
    <h3 class="category-card-text">{{ info.text }}</h3>
  </div>
</template>

<script>
export default {
  name: "CategoryCard",
  props: {
    info: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style lang="scss" scoped>
.category-card {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  max-width: 210px;
  min-height: 135px;
  filter: drop-shadow(0px 3px 15px rgba(0, 0, 0, 0.1));

  &-text {
    font-size: 1.5rem;
  }
}
</style>