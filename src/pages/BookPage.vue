<template>
  <div id="category" class="py-5">
    <div class="container-app">
      <div>
        <div class="row">
          <div v-for="i in 4" :key="i" class="col-12 col-md-6 mb-4">
            <book-card />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from "vue";
import BookCard from "../components/cards/BookCard.vue";

export default {
  name: "BookPage",
  components: {
    BookCard,
  },
};
</script>

<style>

</style>