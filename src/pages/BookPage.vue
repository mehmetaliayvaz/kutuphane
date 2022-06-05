<template>
  <div id="category" class="py-5">
    <div class="container-app">
      <div>
        <div class="row justify-content-center">
          <div v-for="(item, index) in books" :key="index" class="col-12 col-lg-6 mb-4">
            <book-card :book="item" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ref, computed } from "vue";
import { getBooks } from "../fb";
import { useStore } from "vuex";
import BookCard from "../components/cards/BookCard.vue";

export default {
  name: "BookPage",
  components: {
    BookCard,
  },
  setup(){
    const store = useStore();

    getBooks(store.getters.getEmail);
    const books = computed(() => {
      return store.getters.getBooks;
    })

    return{
      books,
    }
  }
};
</script>

<style>

</style>