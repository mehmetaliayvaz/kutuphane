<template>
  <div id="home" class="py-5">
    <div class="container-app">
      <div>

        <div class="row">
          <div v-for="(item, index) in cards" :key="index" class="col-6 col-md-3 mb-4">
            <home-card :info="item" />
          </div>
        </div>

      </div>
    </div>
  </div>
</template>

<script>
import { ref } from "vue";
import HomeCard from '../components/cards/HomeCard.vue'

export default {
  name: 'HomePage',
  components: {
    HomeCard
  },
  setup(){
    const cards = ref([
      { color: 'bg-primary', number: 15, text: 'Kitap Sayısı' },
      { color: 'bg-secondary', number: 7, text: 'Kategori Sayısı' },
      { color: 'bg-info', number: 20, text: 'Yazar Sayısı' },
      { color: 'bg-warning', number: 10, text: 'Yayınevi Sayısı' },
    ])

    return{
      cards,
    }
  },

}
</script>

<style>

</style>