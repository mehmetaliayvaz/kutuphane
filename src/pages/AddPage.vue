<template>
  <div id="add-book">
    <div class="container-app">
      <div class="add-book flex-column flex-lg-row justify-content-md-between">
        <div class="add-book-image me-lg-2 mb-5 mb-lg-0" style="cursor: pointer;">
          <AddImage @image="books.image = $event" class="mb-2" />
          <div v-if="books.image == ''" style="white-space: nowrap">Resim Yükle</div>
        </div>
        <div class="book-detail mb-5 mb-lg-0">
          <div class="book-detail-item">
            <div class="d-flex">
              <div class="book-detail-item-title">
                <h5>Kitap Adı</h5>
                <span>:</span>
              </div>
              <div class="book-detail-item-input">
                <input type="text" v-model="books.name" />
              </div>
            </div>
            <span v-if="v$.name.$invalid && showError" class="book-detail-item-error">Lütfen kitap adını giriniz.</span>
          </div>
          <div class="book-detail-item">
            <div class="d-flex">
              <div class="book-detail-item-title">
                <h5>Yazar</h5>
                <span>:</span>
              </div>
              <div class="book-detail-item-input">
                <input type="text" v-model="books.author" @focus="showRecommendedAuthor = true" @blur="showRecommendedAuthor = false" />
                <div v-show="showRecommendedAuthor" class="book-detail-item-input-offer">
                  <button v-for="(item, index) in recommendedAuthor" :key="index" class="btn" @mousedown="books.author = item">
                    {{ item }}
                  </button>
                </div>
              </div>
            </div>
            <span v-if="v$.author.$invalid && showError" class="book-detail-item-error">Lütfen yazarı giriniz.</span>
          </div>
          <div class="book-detail-item">
            <div class="d-flex">
              <div class="book-detail-item-title">
                <h5>Yayınevi</h5>
                <span>:</span>
              </div>
              <div class="book-detail-item-input">
                <input type="text" v-model="books.publisher" @focus="showRecommendedPublisher = true" @blur="showRecommendedPublisher = false" />
                <div v-if="showRecommendedPublisher" class="book-detail-item-input-offer">
                  <button v-for="(item, index) in recommendedPublisher" :key="index" class="btn" @mousedown="books.publisher = item">
                    {{ item }}
                  </button>
                </div>
              </div>
            </div>
            <span v-if="v$.publisher.$invalid && showError" class="book-detail-item-error">Lütfen yayınevini giriniz.</span>
          </div>
          <div class="book-detail-item">
            <div class="d-flex">
              <div class="book-detail-item-title">
                <h5>Not</h5>
                <span>:</span>
              </div>
              <div class="book-detail-item-input">
                <input type="text" v-model="books.note" />
              </div>
            </div>
            <span v-if="v$.note.$invalid" class="book-detail-item-error">Maximum 30 karakter giriniz.</span>
          </div>
          <div class="book-detail-item">
            <div class="d-flex">
              <div class="book-detail-item-title">
                <h5>Kategori</h5>
                <span>:</span>
              </div>
              <div class="book-detail-item-input">
                <select name="category" v-model="books.category" id="category">
                  <option
                    v-for="item in categories"
                    :key="item.value"
                    :value="item.value"
                  >
                    {{ item.text }}
                  </option>
                </select>
              </div>
            </div>
            <span v-if="v$.category.$invalid && showError" class="book-detail-item-error">Lütfen kategori seçiniz.</span>
          </div>
        </div>
        <div class="add-button">
          <button @click="addBook" class="btn" :disabled="isLoading">Ekle</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ref, computed } from "vue";
import { useStore } from "vuex";
import { colRef } from "../fb";
import { categories } from "../helpers/categories";
import AddImage from "../components/icons/AddImage.vue";
import { addDoc } from "firebase/firestore";
import toastr from "../plugins/toastr";
import useVuelidate from "@vuelidate/core";
import { required, maxLength  } from "@vuelidate/validators";

export default {
  name: "AddPage",
  components: {
    AddImage,
  },
  setup() {
    const store = useStore();
    const showError = ref(false);
    const showRecommendedAuthor = ref(false);
    const showRecommendedPublisher = ref(false);
    const isLoading = ref(false);

    const books = ref({
      image: "",
      name: "",
      author: "",
      publisher: "",
      note: "",
      category: null,
      user_email: store.getters.getEmail,
    });

    const rules = ref({
      name: { required, $autoDirty: true },
      author: { required, $autoDirty: true },
      publisher: { required, $autoDirty: true },
      note: { maxLength : maxLength(30), $autoDirty: true },
      category: { required, $autoDirty: true },
    });

    const v$ = useVuelidate(rules.value, books);


    const recommendedAuthor = computed(() => {
      var tempAuthors = store.getters.getBooks.filter(item => {
        return item.author.match(books.value.author);
      })

      return [...new Set(tempAuthors.map(item => item.author))]
    });
    
    const recommendedPublisher = computed(() => {
      var tempPublishers = store.getters.getBooks.filter(item => {
        return item.publisher.match(books.value.publisher);
      })

      return [...new Set(tempPublishers.map(item => item.publisher))]
    });


    const addBook = () => {
      showError.value = true;
      isLoading.value = true;

      if (!v$.value.$invalid) {
        addDoc(colRef("books"), {...books.value, author: books.value.author.toLowerCase(), publisher: books.value.publisher.toLowerCase() })
          .then((res) => {
            toastr.success("Başarıyla Eklendi.");
            isLoading.value = false;
            showError.value = false;
            setTimeout(() => {
              window.location.reload();
            }, 500);
            
          });
      }
    };

    return {
      books,
      addBook,
      store,
      categories,
      v$,
      showError,
      recommendedAuthor,
      recommendedPublisher,
      showRecommendedAuthor,
      showRecommendedPublisher,
      isLoading,
    };
  },
};
</script>

<style lang="scss" scoped>
#add-book {
  padding: 10rem 0;
}

.add-book {
  display: flex;
  align-items: center;
  max-width: 770px;
  padding: 35px 50px 35px 60px;
  background-color: #fff;

  &-image {
    text-align: center;
    display: flex;
    flex-direction: column;
    align-items: center;
    color: #9f9f9f;
    font-weight: 400;
    font-size: 14px;
    line-height: 18px;
    svg {
      margin-bottom: 0.5rem;
    }
  }

  .book-detail {
    &-item {
      margin-bottom: 0.5rem;

      &-title {
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 80px;
        margin-right: 1rem;
        h5{
          font-size: 14px;
          margin-bottom: 0;
        }
      }
      &-input{
        position: relative;
        input, select{
          border: none;
          border-bottom: 1px solid #d5d5d5;
          font-size: 14px;
          color: #6d6d6d; 
        }

        &-offer{
          position: absolute;
          z-index: 1;
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          width: 100%;
          padding: 0.5rem;
          color: #6d6d6d;
          background: white;
          border-radius: 0.5rem;
          box-shadow: 0 4px 20px rgb(6 78 177 / 10%);
          button{
            font-size: 14px;
            padding: 0.3rem 0.5rem;
          }
        }
      }
      &-error{
        color: #ff0000;
        font-size: 12px;
        margin-top: 0.5rem;
      }
    }
  }

  .add-button {
    button {
      background-color: #ff5722;
      font-size: 14px;
      color: white;
      padding: 0.5rem 2rem;
      border-radius: 50px;

      &:hover{
        background-color: #ce441a;
      }

    }
  }
}

input[type="text"] {
  &:focus-visible {
    outline: none !important;
  }
}
</style>
