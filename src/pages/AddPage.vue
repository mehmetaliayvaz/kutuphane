<template>
  <div id="add-book">
    <div class="container-app">
      <add-card />
    </div>
  </div>
</template>

<script>
import { ref } from "vue";
import AddCard from "../components/cards/AddCard.vue";

export default {
  name: "AddPage",
  components: {
    AddCard,
  },
};
</script>

<style lang="scss" scoped>

#add-book{
  padding: 10rem 0;
}

</style>