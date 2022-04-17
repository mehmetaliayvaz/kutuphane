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
      { color: "#ffcc80", text: "Tarih" },
      { color: "#81C5D880", text: "Felsefe" },
      { color: "#b0bec5", text: "Bilim" },
      { color: "#59459380", text: "Sağlık" },
      { color: "#FF7B1280",text: "Edebiyat" },
      { color: "#94EC1B80", text: "Roman" },
      { color: "#9EC12F80", text: "Biyografi" },
      { color: "#ef9a9a", text: "Çocuk" },
      { color: "#f48fb1", text: "Kişisel Gelişim" },
      { color: "#ce93d8", text: "Çizgi Roman" },
      { color: "#bcaaa4", text: "Ders" },
      { color: "#9fa8da", text: "Mühendislik" },
      { color: "#90caf9", text: "Dergi" },
      { color: "#80deea", text: "Bilişim" },
      { color: "#80cbc4", text: "Hukuk" },
      { color: "#a5d6a7", text: "Ekonomi" },
    ]);

    return {
      cards,
    };
  },
};
</script>

<style>
</style>