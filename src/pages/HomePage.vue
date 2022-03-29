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
        <h3>KÜTÜPHANEM NEDİR ?</h3>

        <p>
          Kütüphanem ile istediğiniz kitabı kitaplığınıza ekleyebilirsiniz. Yeni
          kategoriler oluşturarak sisteme eklediğiniz kitapları bu
          kategorilere<br />
          ekleyebilirsiniz. <br />
          Eklediğiniz kitaplara kendi yorumunuzu kaydedebilirsiniz.
        </p>
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
  text-align: center;
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