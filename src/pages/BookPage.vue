<template>
  <div id="category" class="py-5">
    <div class="container-app">
      <div>
        <div class="row">
          <div v-for="item in books" :key="item.id" class="col-12 col-lg-6 mb-4 position-relative">
            <book-card :book="item" />
            <button class="btn btn-delete p-0 px-2" @click="deleteBook(item.id)">
              <close-icon :size="10" />
            </button>
          </div>
          <div v-if="!books.length" class="text-center py-5">
            <p class="badge bg-warning" style="font-size: 14px;">Kitaplığınız boş görünüyor...</p>
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
import CloseIcon from '../components/icons/CloseIcon.vue';
import { deleteDoc, doc } from 'firebase/firestore';
import toastr from "../plugins/toastr";
import { db } from "../fb";

export default {
  name: "BookPage",
  components: {
    BookCard,
    CloseIcon,
  },
  setup(){
    const store = useStore();
    
    const books = computed(() => {
      return store.getters.getBooks;
    })


    const deleteBook = (id) => {
      deleteDoc(doc(db, 'books', id))
        .then(() => {
          store.commit('deleteBook', id);
          toastr.success('Kitap başarıyla silindi.');
        })
    }

    return{
      books,
      deleteBook,
    }
  }
};
</script>

<style lang="scss">

.btn-delete{
  position: absolute;
  right: 0;
  top: -10px;
  background: #ffc5b3;
  border-radius: 50%;
}

</style>