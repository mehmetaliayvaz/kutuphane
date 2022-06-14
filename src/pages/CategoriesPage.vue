<template>
  <div id="category" class="py-5">
    <div class="container-app">
      <div>
        <transition name="fade" mode="out-in">
          <div v-if="activeCategory != ''" class="d-flex justify-content-between mb-4">
            <h2>{{ (categories.find(item => item.value == activeCategory )).text }}</h2>
            <button class="btn fw-bold" @click="activeCategory = ''" style="text-decoration: underline">˂ Geri Dön</button>
          </div>
        </transition>
        <transition name="fade" mode="out-in">
          <div v-if="activeCategory == ''" class="row">
            <div
              v-for="item in categories"
              :key="item.value"
              class="col-6 col-md-3 mb-4"
            >
              <button class="btn w-100 p-0" @click="activeCategory = item.value">
                <category-card :info="item" />
              </button>
            </div>
          </div>
          <div v-else-if="getCategoryBooks.length" class="row">
            <div v-for="bookItem in getCategoryBooks" :key="bookItem.id" class="col-12 col-lg-6 mb-4 position-relative">
              <book-card :book="bookItem" />
              <button class="btn btn-delete p-0 px-2" @click="deleteBook(bookItem.id)">
                <close-icon :size="10" />
              </button>
            </div>
          </div>
          <div v-else class="py-5 text-center">
            <p class="badge bg-warning">Bu kategoriye ait kitap bulunamadı...</p>
          </div>
        </transition>
      </div>
    </div>
  </div>
</template>

<script>
import { computed, ref } from "vue";
import { useStore } from "vuex";
import { categories } from "../helpers/categories";
import CategoryCard from "../components/cards/CategoryCard.vue";
import BookCard from "../components/cards/BookCard.vue";
import { deleteDoc, doc } from 'firebase/firestore';
import toastr from "../plugins/toastr";
import { db } from "../fb";
import CloseIcon from '../components/icons/CloseIcon.vue';

export default {
  name: "CategoriesPage",
  components: {
    CategoryCard,
    BookCard,
    CloseIcon,
  },
  setup() {
    const store = useStore();
    const activeCategory = ref("");

    const books = computed(() => {
      return store.getters.getBooks;
    })

    const getCategoryBooks = computed(() => {
      return books.value.filter(item => {
        return item.category === activeCategory.value;
      });
    });

    const deleteBook = (id) => {
      deleteDoc(doc(db, 'books', id))
        .then(() => {
          store.commit('deleteBook', id);
          toastr.success('Kitap başarıyla silindi.');
        })
    }

    return {
      categories,
      activeCategory,
      getCategoryBooks,
      deleteBook
    };
  },
};
</script>

<style>
</style>