<template>
  <div id="home" class="py-5">
    <div class="container-app">
      <div>
        <div class="row">
          <div
            v-for="(item, index) in cards"
            :key="index"
            class="col-6 col-md-3 mb-4"
          >
            <home-card :info="item" />
          </div>
        </div>
      </div>
      <div class="content">
        <h3 class="text-center">KÜTÜPHANEM NEDİR ?</h3>

        <ul>
          <li>
          Kütüphanem ile elinizdeki kitapları sanal ortama taşıyarak kolay ve hızlı bir şekilde
          istediğiniz kitabın bilgisine ulaşabilirsiniz.
          </li>
          <li>
            Kitapları kategorilere göre ayırarak 
          gruplandırma yapabilirsiniz.
          </li>
          <li>
            Kitaplarınızın yayınevi ve yazar bilgilerine kolayca ulaşabilirsiniz.
          </li>
          <li>Kütüpyane yönetim süreçleriniz daha da pratikleşir.</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from "vue";
import HomeCard from "../components/cards/HomeCard.vue";

export default {
  name: "HomePage",
  components: {
    HomeCard,
  },
  setup() {
    const cards = ref([
      { color: "#F5365C", number: 15, text: "Kitap Sayısı" },
      { color: "#0079FB", number: 7, text: "Kategori Sayısı" },
      { color: "#2DCE89", number: 20, text: "Yazar Sayısı" },
      { color: "#FB6340", number: 10, text: "Yayınevi Sayısı" },
    ]);

    return {
      cards,
    };
  },
};
</script>

<style lang="scss" scoped >
.content {
  margin-left: auto;
  margin-right: auto;
  margin-top: 100px;
  max-width: 610px;
  align-items: center;
  justify-content: center;
  h3 {
    font-size: 24px;
    font-weight: 700;
    margin-bottom: 35px;
  }
  p {
    font-weight: 500;
    line-height: 30px;

    font-size: 16px;
  }
}
</style>