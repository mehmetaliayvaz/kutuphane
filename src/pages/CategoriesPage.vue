<template>
  <div id="category" class="py-5">
    <div class="container-app">
      <div>
        <div class="row">
          <div
            v-for="(item, index) in categories"
            :key="index"
            class="col-6 col-md-3 mb-4"
          >
            <router-link :to="{ name: 'home' }" style="text-decoration: none">
              <category-card :info="item" />
            </router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from "vue";
import { categories } from "../helpers/categories";
import CategoryCard from "../components/cards/CategoryCard.vue";

export default {
  name: "CategoriesPage",
  components: {
    CategoryCard,
  },
  setup() {
    

    return {
      categories,
    };
  },
};
</script>

<style>
</style>