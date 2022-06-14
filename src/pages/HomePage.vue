<template>
  <div id="home" class="py-5">
    <div class="container-app">
      <div>
        <h2 class="mb-4 fw-bold" style="font-size: 1.5rem">İstatistikler</h2>
        <div class="row" style="margin-bottom: 80px;">
          <div
            v-for="(item, index) in cards"
            :key="index"
            class="col-6 col-md-3 mb-4"
          >
            <home-card :info="item" />
          </div>
        </div>
      </div>

      <h2 class="mb-4 fw-bold" style="font-size: 1.5rem">Sıkça Sorulan Sorular</h2>
    
      <div class="accordion" id="accordionExample">
        <div v-for="(item, index) in sss" :key="index" class="accordion-item">
          <h2 class="accordion-header" :id="'heading' + index">
            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" :data-bs-target="'#collapse' + index" aria-expanded="true" :aria-controls="'#collapse' + index">
              {{ item.title }}
            </button>
          </h2>
          <div :id="'collapse' + index" class="accordion-collapse collapse" :aria-labelledby="'heading' + index" data-bs-parent="#accordionExample">
            <div class="accordion-body">
              {{ item.content }}
            </div>
          </div>
        </div>
      </div>

    </div>
  </div>
</template>

<script>
import { ref, computed } from "vue";
import HomeCard from "../components/cards/HomeCard.vue";
import { useStore } from "vuex";

export default {
  name: "HomePage",
  components: {
    HomeCard,
  },
  setup() {
    const store = useStore();

    const bookNumber = computed(() => {
      return store.getters.getBooks.length;
    });

    const calcCategory = computed(() => {
      const tempCategories = [];
      store.getters.getBooks.forEach((item) => {
        if(!tempCategories.includes(item.category)) {
          tempCategories.push(item.category);
        }
      });
      return tempCategories.length;
    });

    const calcAuthor = computed(() => {
      const tempAuthors = [];
      store.getters.getBooks.forEach((item) => {
        const tempAuthor = item.author.replace(/ /g,'');
        
        if(!tempAuthors.includes(tempAuthor)) {
          tempAuthors.push(tempAuthor);
        }
      });
      console.log(tempAuthors);
      return tempAuthors.length;
    });

    const calcPublisher = computed(() => {
      const tempPublishers = [];
      store.getters.getBooks.forEach((item) => {
        const tempPublisher = item.publisher.replace(/ /g,'');
        if(!tempPublishers.includes(tempPublisher)) {
          tempPublishers.push(tempPublisher);
        }
      });
      return tempPublishers.length;
    });

    const cards = ref([
      { color: "#F5365C", number: bookNumber , text: "Kitap Sayısı" },
      { color: "#0079FB", number: calcCategory, text: "Kategori Sayısı" },
      { color: "#2DCE89", number: calcAuthor, text: "Yazar Sayısı" },
      { color: "#FB6340", number: calcPublisher, text: "Yayınevi Sayısı" },
    ]);

    const sss = ref([
      { title: 'Kütüphanem Nedir?', content: 'Kütüphanem, kütüphanenizdeki kitapların bilgilerini sanal ortamda saklamaya yarar. Ayrıca kütüphane yönetiminizi kolaylaştırır.' },
      { title: 'Gruplandırma Özelliği Nedir?', content: 'Kitapları kategorilere göre ayırarak gruplandırma yapabilirsiniz. Böylece belirli bir alandaki kitapları hızlıca görebilirsiniz.' },
      { title: 'Kütüphanem Üzerinde Hangi Bilgiler Saklanır?', content: "Kütüphanem'de kitaplarınızın resmi, ismi, yazarı, yayınevi ve kendinizin ekleyeceği not bilgisi saklanır." },
      { title: 'Kitap Eklemede Bir Sınır Bulunuyor mu?', content: "Kütüphanem'e sınırsız kitap ekleyebilirsiniz. Sadece, kitabınızın resmini yüklerken 300KB sınırı bulunmaktadır." },
    ])

    return {
      cards,
      sss,
    };
  },
};
</script>

<style lang="scss" scoped >

.about{
  font-size: 1.1rem;
}
</style>