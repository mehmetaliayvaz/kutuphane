<template>
  <div id="category" class="py-5">
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

<style>
</style>