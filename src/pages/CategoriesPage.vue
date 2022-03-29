<template>
  <div id="category" class="py-5">
    <div class="container-app">
      <div>
        <div class="row">
          <div
            v-for="(item, index) in cards"
            :key="index"
            class="col-6 col-md-3 mb-4"
          >
            <category-card :info="item" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from "vue";
import CategoryCard from "../components/cards/CategoryCard.vue";

export default {
  name: "CategoriesPage",
  components: {
    CategoryCard,
  },
  setup() {
    const cards = ref([
      { color: "#FFFFFF80", svg: 55, text: "Kategori Ekle" },
      { color: "#F8BD2380", svg: 7, text: "Tarih" },
      { color: "#81C5D880", svg: 20, text: "Felsefe" },
      { color: "#2DCE8980", svg: 10, text: "Bilim" },
      { color: "#59459380", svg: 15, text: "Fantastik" },
      { color: "#FF7B1280", svg: 7, text: "Edebiyat" },
      { color: "#94EC1B80", svg: 20, text: "Roman" },
      { color: "#9EC12F80", svg: 10, text: "Biyografi" },
    ]);

    return {
      cards,
    };
  },
};
</script>

<style>
</style>